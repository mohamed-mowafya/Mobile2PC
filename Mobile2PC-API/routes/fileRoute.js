const express = require("express");
const router = express.Router();

const fileController = require("../controllers/fileController");
const {upload} = require('../helpers/multerHelper');

const fileRoute = (io) => {
    router.post('/upload', upload.single("file"), fileController.handleUpload(io));
    return router;
};

module.exports = fileRoute;