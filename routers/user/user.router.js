import express from "express";
import {
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} from "../../middlewares/verifyToken.js";
import {
    updateUser,
    deleteUser,
    getUser,
    getAllUser,
    getUserStats
} from "../../controller/user.js";


const userRouter = express.Router();

userRouter.put("/:id", verifyTokenAndAuthorization, updateUser);
userRouter.delete("/:id", verifyTokenAndAuthorization, deleteUser);
userRouter.get("/find/:id", verifyTokenAndAdmin, getUser);
userRouter.get("/", verifyTokenAndAdmin, getAllUser);
userRouter.get("/stats", verifyTokenAndAdmin, getUserStats);


export default userRouter;