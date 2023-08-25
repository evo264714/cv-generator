import html2pdf from 'html2pdf.js';
import { FaFilePdf } from "react-icons/fa";

const DownloadPDFButton = () => {
  const handleDownload = async () => {
    const content = document.querySelector('.pdf-content'); 
    const pdfOptions = {
      margin: 10,
      filename: 'mycv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    const pdf = await html2pdf().from(content).set(pdfOptions).outputPdf();

    // Trigger download
    const blob = new Blob([pdf], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'cv_page.pdf';
    link.click();
  };

  return (
    <button
      className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
      onClick={handleDownload}
    >
      <FaFilePdf/>Download PDF
    </button>
  );
};

export default DownloadPDFButton;
