import express from "express";
import {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin, } from "../../middlewares/verifyToken.js";
import {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder,
    getAllOrder,
    mothlyOrder
} from "../../controller/order.js";


const OrderRouter = express.Router();

OrderRouter.post("/", verifyToken, createOrder);
OrderRouter.put("/:id", verifyTokenAndAdmin,updateOrder);
OrderRouter.delete("/:id", verifyTokenAndAdmin,deleteOrder);
OrderRouter.get("/find/:userId", verifyTokenAndAuthorization, getOrder);
OrderRouter.get("/", verifyTokenAndAdmin, getAllOrder);
OrderRouter.get("/income", verifyTokenAndAdmin, mothlyOrder);


export default OrderRouter;