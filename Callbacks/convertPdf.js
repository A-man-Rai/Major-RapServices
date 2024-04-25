import { jsPDF } from "jspdf";

const converPdf = async (req, res) => {
    const { content} = req.body;


    const doc = new jsPDF();

    doc.text(content, 10, 10);

    const filename = `${Date.now()}.pdf`;

    // Set response headers
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-Type', 'application/pdf');

    // Send the PDF data in the response body
    res.send({ data: doc.output(), name: filename });
}

export default converPdf;
