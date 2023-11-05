const { Router } = require("express");
const multer = require("multer");
const PDFDocument = require("pdf-lib").PDFDocument;
const fs = require("fs").promises;
const path = require("path");

const pdfModel = require("../schema/pdfSchema");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

const pdfRouter = Router();

pdfRouter.post("/upload-file", upload.single("pdfFile"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }
  const newPDF = new pdfModel({
    pdfName: req.body.pdfName,
    originalPdfName: req.file.filename,
  });
  const result = await newPDF.save();
  return res.json({ message: result });
});

pdfRouter.get("/fetch-files", async (req, res) => {
  const result = await pdfModel.find({});
  return res.json({ message: result });
});

pdfRouter.post("/generate-pdf", async (req, res) => {
  try {
    const { pdfName, selectedPages } = req.body;

    // Construct the path to the original PDF file
    const originalPdfPath = path.join(__dirnamxxxxxxe, "uploads", pdfName);
    console.log({ originalPdfPath });
    // Load the original PDF
    const originalPdfBytes = await fs.readFile("../uploads/1699172301203PPT.pdf");
    console.log({ originalPdfBytes });
    // Generate the new PDF
    // const newPdfFilePath = await generatePDF(
    //   pdfName,
    //   selectedPages,
    //   originalPdfBytes
    // );

    // // Store the new PDF name in MongoDB
    // const newPDF = new pdfModel({
    //   pdfName: `new_${Date.now()}.pdf`, // Create a unique name for the new PDF
    //   originalPdfName: newPdfFilePath, // Store the path to the new PDF
    // });

    // await newPDF.save();

    // Send the new PDF as a response
    res.send("newPdfFilePath"); // Send the new PDF as a response
  } catch (error) {
    res.status(500).json({ error: "Error generating and storing PDF" });
  }
});

/** This is for personal use to delete all the  pdf details manually from db */
const deleteAll = async (req, res) => {
  await pdfModel.deleteMany({});
};
// deleteAll()

module.exports = pdfRouter;
