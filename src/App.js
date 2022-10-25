import "./App.css";
import React from "react";
import PDFFile from './components/PDFFile';
import { PDFDownloadLink } from "@react-pdf/renderer";
import ImagePicker from "./components/ImagePicker";

const App = () => {
  return (
    <div className="App">
      <PDFDownloadLink document={<PDFFile />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink>
      {/* <PDFFile /> */}
    </div>
  );
};

export default App;
