import express from "express";
import {
    payment
} from "../../controller/stripePayemt.js";


const PaymentRouter = express.Router();

PaymentRouter.post("/payment", payment);


export default PaymentRouter;