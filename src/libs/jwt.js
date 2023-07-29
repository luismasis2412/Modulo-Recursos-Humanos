import jwt from "jsonwebtoken";
import { token } from "morgan";
import { TOKEN_SECRET } from "../config.js";


export function createAccessToken(payload){

    return new Promise ((resolve, reject) => {
        jwt.sign(
        payload,
        TOKEN_SECRET,
        {
            expiresIn: "1d",
        },
        (err, token) => {
            if(err) reject(err)
            resolve(token)
        }
    );
});
}