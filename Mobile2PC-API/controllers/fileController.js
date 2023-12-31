const handleUpload = (io) => async (req, res) => {
    const sid = req.body.sid;
    io.to(sid).emit("fileUploaded", req.file);
    return res.status(200).json({ status: 'File transmission successful' });
};

module.exports = { handleUpload };