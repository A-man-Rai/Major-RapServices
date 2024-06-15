import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Import the jspdf-autotable plugin

const converPdf = async (req, res) => {
    const  content = req.body.application;
   //console.log(content)
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add image in the heading (replace 'imageURL' with your actual image URL)
  //const imageURL = "https://th.bing.com/th/id/OIP.uv6s6VBydyhmhZdkPPJbjwHaHa?rs=1&pid=ImgDetMain"; // Adjust the image URL as needed
  //const imgWidth = 100; // Adjust width of the image as needed
   //const imgHeight = 50; // Adjust height of the image as needed
  //doc.addImage(imageURL, "PNG",10, 10, imgWidth, imgHeight); // Adjust position as needed
  // Set font size and style for the heading
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  
  // Add the heading'
  doc.text("RESTRICTED AREA PERMIT ", 10, 20); // Adjust position and text as ne
    // Set font size and style for content
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');;
    // Add content in a table format
    const tableData = [
        ["ID", content.id],
        ["Name", content.name],
        ["User ID", content.userId],
        ["Date of Birth", content.dob.split("T")[0]],
        ["Nationality", content.nationality],
        ["Occupation", content.occupation],
        ["Passport No", content.passportNo],
        ["Passport Date of Issue", content.passportDateOfIssue.split("T")[0]],
        ["Passport Valid Upto", content.passportValidUpto.split("T")[0]],
        ["ILP No", content.ilpNo],
        ["Visa No", content.visaNo],
        ["Visa Issue", content.visaIssue.split("T")[0]],
        ["Visa Valid Upto", content.visaValidUpto.split("T")[0]],
        ["Residential Address", content.residentialAddress],
        ["Date of Visit", content.dateOfVisit.split("T")[0]],
        ["Duration of Stay", content.durationOfStay.split("T")[0]],
        ["Travel Arrangement By", content.travelArrangementBy],
    ];

    // Add table to the PDF
    doc.autoTable({
        head: [],
        body: tableData,
        startY: 30, // Adjust starting Y position of the table as needed
        showHead: 'firstPage',
        theme: 'striped', // You can adjust the theme as per your requirement
        columnStyles: {
            0: { cellWidth: 50, fontStyle: 'bold', halign: 'center', valign: 'middle' }, // Vertical header style
            1: { halign: 'left', valign: 'middle' } // Value style
        },
        didParseCell: function (data) {
            if (data.row.index === 0) {
                data.cell.styles.fontSize = 10; // Adjust font size for the headers
                data.cell.styles.textColor = [255, 255, 255]; // Set text color to white
                data.cell.styles.fillColor = [0, 0, 0]; // Set background color for the headers
                data.cell.styles.lineWidth = 0.5; // Set border width for the headers
            }
        }
    });
    

    // Save the PDF as a file
    const filename = `${Date.now()}.pdf`;

    // Set response headers
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-Type', 'application/pdf');

    // Send the PDF data in the response body
    res.send({ data: doc.output(), name: filename });
}

export default converPdf;
