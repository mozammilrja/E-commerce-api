import express from "express";
import {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} from "../../middlewares/verifyToken.js";
import {
    createdProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProduct
} from "../../controller/product.js";


const ProductRouter = express.Router();

ProductRouter.post("/", verifyTokenAndAdmin, createdProduct);
ProductRouter.put("/:id", verifyTokenAndAdmin, updateProduct);
ProductRouter.delete("/:id", verifyTokenAndAdmin, deleteProduct);
ProductRouter.get("/find/:id", getProduct);
ProductRouter.get("/", getAllProduct);


export default ProductRouter;