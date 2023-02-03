const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const path = require ('path');
const multer = require ('multer');

// constants
const app = express ();
const PORT = process.env.PORT || 5000;

// middleware
app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({extended: true}));
app.use (cors ());

// storage engine
const storageEngine = multer.diskStorage ({
  destination: './public/uploads/',
  filename: function (req, file, callback) {
    callback (
      null,
      file.fieldname + '-' + Date.now () + path.extname (file.originalname)
    );
  },
});

  // file filter
  const fileFilter = (req, file, callback) => {
    let pattern = /jpg|png|svg|pdf/; // reqex

    if (pattern.test (path.extname (file.originalname))) {
      callback (null, true);
    } else {
      callback ('Error: not a valid file');
    }
  };

// initialize multer
const upload = multer ({
  storage: storageEngine,
  fileFilter: fileFilter,
});

// routing
app.post ('/upload', upload.single ('uploadedFile'), (req, res) => {
  res.json (req.file).status (200);
});

app.listen (PORT, () => console.log (`Server running on port: ${PORT}`));
