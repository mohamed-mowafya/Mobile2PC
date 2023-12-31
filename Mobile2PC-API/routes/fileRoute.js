const express = require("express");
const router = express.Router();

const fileController = require("../controllers/fileController");
const {upload} = require('../helpers/multerAWSHelper');


router.post("/upload", upload.single("file"), fileController.handleUpload);
module.exports = router;