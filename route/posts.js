import express from "express";
import verify from "../db/verifyToken";
const router = express.Router();

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "my first posts",
      descrimination: "random data should not be accessed easily"
    }
  });
});
