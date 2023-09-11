import { PDFDocument } from "pdf-lib";

export default async function modifyPDf(pdfUrl, imageUrl) {
    const pdfBytes = await fetch(pdfUrl).then((res) => res.arrayBuffer());
    const imageBytes = await fetch(imageUrl).then((res) => res.arrayBuffer());

    const pdf = await PDFDocument.load(pdfBytes);
    const signature = await pdf.embedPng(imageBytes);
    const form = pdf.getForm();
    const staff = form.getButton("signature");
    staff.setImage(signature);
    const finalPdfBytes = await pdf.save();

    // Trigger the browser to download the PDF document
    return finalPdfBytes;
}

export const download = (binaryData) => {
    const file = new Blob([binaryData], { type: "application/pdf" });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
};
