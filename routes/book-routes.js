const express=require("express");

const router=express.Router();

const Book=require("../models/Book");

const booksControllers=require("../controllers/book-controllers");

router.get("/",booksControllers.getAllBooks);
router.post("/",booksControllers.addBook);
router.get("/:id",booksControllers.getById);//id will be a part of the URL
router.put("/:id",booksControllers.updateBook);
router.delete("/:id",booksControllers.deleteBook);
module.exports=router;