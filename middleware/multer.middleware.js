import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname from the current module URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up storage with multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public', 'temp'));
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Create the multer upload instance
export const upload = multer({ storage: storage });
