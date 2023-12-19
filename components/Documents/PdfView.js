import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfView = ({ valueDoc }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="pdf-container">
      {valueDoc.src && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl={valueDoc.src}
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      )}
    </div>
  );
};

export default PdfView;
