import express from 'express';
const router=express.Router();
import mongoose from 'mongoose';
import { getProducts,createProducts,deleteProducts,updateProducts } from '../controllers/product_controller.js';

router.get("/",getProducts);

router.post("/",createProducts)

router.delete("/:id",deleteProducts)

router.put("/:id",updateProducts)


export default router;