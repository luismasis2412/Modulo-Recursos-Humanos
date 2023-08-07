import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import { createAccessToken } from "../libs/jwt.js"
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../config.js"

export const register = async (req, res) => {
    try {
        const {name, lastname, title, email, password, role}= req.body
        const userFound = await User.findOne({email})
        if(userFound) return res.status(400).json(["El email se encuentra en uso"]);
        const passwordHash = await bcrypt.hash(password, 10) //sjjfgsnga
        const newUser = new User({
            name, 
            lastname,
            title,
            email,  
            password : passwordHash,
            role,
        })
        console.log(newUser)
    
        const userSaved = await newUser.save()
        const token = await createAccessToken({id: userSaved._id});
        res.cookie('token', token)
        res.json({
            id: userSaved._id,
            email : userSaved.email,
            title: userSaved.title,
            name: userSaved.name,
            lastname: userSaved.lastname,
            role: userSaved.role,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const login = async (req, res) => {
    const {email, password }= req.body
    
    try {

        const userFound = await User.findOne({email});

        if (!userFound) return res.status(400).json([ "Usuario no registrado"]);

        const isMatch = await bcrypt.compare(password, userFound.password); //True or False

        if (!isMatch) return res.status(400).json(["Contraseña incorrecta"]);
    
        const token = await createAccessToken({id: userFound._id});
        res.cookie('token', token)
        res.json({
            id: userFound._id,
            name : userFound.name,
            lastname: userFound.lastname,
            title: userFound.title,
            email: userFound.email,
            role: userFound.role,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const logout = (req, res) => {
    res.cookie('token', "",  {
        expires: new Date(0),
    })
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);

    if (!userFound) return res.status(400).json({ message: "No se encuentra usuario"});

    return res.json({
        id: userFound._id,
        name: userFound.name,
        lastname: userFound.lastname,
        title: userFound.title,
        email: userFound.email,
        role: userFound.role,
        createdAt : userFound.createdAt,
        updatedAt : userFound.updatedAt,
    })
}

export const verifyToken = async (req, res) => {
    const {token} = req.cookies

    if (!token) return res.status(401).json({ message: "Unauthorized"});

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json({ message: "Unauthorized"});

        const userFound = await User.findById(user.id)

        if(!userFound) return res.status(401).json({ message: "Unauthorized"});

        return res.json({
            id: userFound._id,
            name: userFound.name,
            lastname: userFound.lastname,
            title: userFound.title,
            email: userFound.email,
            role: userFound.role,
        })
    })

}

