const { getSignedURL } = require("../helpers/multerAWSHelper");

const handleUpload = (req, res) => {
    const signedURL = getSignedURL(req.file.originalname);
    return res.status(200).json({ status: 'File upload successful', signedURL: signedURL});
}

module.exports = { handleUpload };