import express from "express";
import router from "./aboutroutes.js";
import multer from "multer";
import { body, validationResult } from "express-validator";

const app = express();
const port = "3000";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

app.use(express.static("public"));

app.use("/upload", upload.single("file"), (req, res) => {
  res.send(req.file.filename + " Upload Completed");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/submit-form", (req, res) => {
  console.log(req);

  const { name, email } = req.body;

  res.send(`Form was submitted by ${name} with ${email} Email `);
});

app.post("/json-data", (req, res) => {
  console.log(req.body);

  const { userId, message } = req.body;

  res.json({
    status: "success",
    userId: userId,
    message: message,
  });
});

app.get("/profile", (req, res) => {
  const userAgent = req.get("User-Agent");

  console.log(userAgent);

  res.set("Custom-Header", "Hello World");

  res.status(200).send("Headers Handled");
});

app.use("/about", router);

app.use((req, res, next) => {
  console.log("Request Method: " + req.method, "Request URL: " + req.url);
  next();
});

const checkAuth = (req, res, next) => {
  if (req.headers["authorization"]) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

app.get("/protected", checkAuth, (req, res, next) => {
  res.send("You are authorized to visit this route");
});

app
  .post(
    "/signup",
    [
      body("email")
        .isEmail()
        .withMessage("Please provide a valid email address"),
      body("password")
        .isLength({ min: 5 })
        .withMessage("Password must be longer than 4 characters"),
    ],
    (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } else {
        const { email, password } = req.body;
        res.send(`Signup Successful with ${email}`);
      }
    }
  )

  //Start the server
  .app.listen(port, () => {
    console.log(`Server running at Port ${port}`);
  });
