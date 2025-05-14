import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
  res.json({
    message: "Title",
    description: "This message is for the about page",
  });
});

export default router;
