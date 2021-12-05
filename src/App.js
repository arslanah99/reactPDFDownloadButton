import "./App.css";
import React from "react";
import PDFFile from "./components/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

const App = () => {
  return (
    <div className="App">
      <PDFDownloadLink document={<PDFFile />} fileName="FORM">
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default App;
