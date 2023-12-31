const multer = require("multer");
const path  = require('path');
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['.jpg', '.jpeg', '.png', '.gif', '.pdf', '.xlsx', '.doc', '.docx'];

  if (allowedTypes.includes(path.extname(file.originalname).toLowerCase())) {
    cb(null, true); // Accept file
  } else {
    cb(null, false); // Reject file
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 50 // 50 MB
  },
  fileFilter: fileFilter
});

module.exports = { upload };
