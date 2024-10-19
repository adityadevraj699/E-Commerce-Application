import express from 'express';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url'; // Required to handle __dirname in ES modules

const app = express();
app.use(cors());

// Set up storage for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images'); // Save files to the "public/images" directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Give files a unique name
  },
});

const upload = multer({ storage });

// Handle the POST request for image upload
app.post('/upload', upload.single('profilePic'), (req, res) => {
  if (req.file) {
    res.json({ filePath: `/public/images/${req.file.filename}` });
  } else {
    res.status(400).send('No file uploaded.');
  }
});

// Serve images from the public/images folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/public/images', express.static(path.join(__dirname, 'public/images')));

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
