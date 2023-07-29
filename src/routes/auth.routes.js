import {Router} from "express"
import {logout,
        profile,
        register,
        login,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";



const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);

export default router;