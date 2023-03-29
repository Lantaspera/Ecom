import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { createCategoryController } from "../controllers/categoryController.js";

const router = express.Router()

//routes
// router.post('/create-category', requireSignIn, isAdmin, createCategoryController)
router.post('/create-category', requireSignIn, isAdmin, createCategoryController, (req, res)=>{
    res.status(200).send({ ok :true});
})

export default router
