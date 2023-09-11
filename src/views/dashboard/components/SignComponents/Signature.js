import React, { useState } from "react";
import PdfView from "./PdfView";
import { Worker } from "@react-pdf-viewer/core";
import Sign from "./Sign";
import demo from "./demo.pdf";
import Modal from "react-modal";

import "./styles.css";
Modal.setAppElement("#root");

export default function Signature() {
    const [result, setResult] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    function toggleModal(e) {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    const packageURL = "https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.js";

    return (
        <div className="app">
            <Worker workerUrl={packageURL}>
                <PdfView demo={demo} result={result} />
            </Worker>
            <br />
            <br />
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                style={{
                    overlay: {
                        zIndex: 1000, // Adjust the value as needed
                    },
                    content: {
                        zIndex: 1000, // Adjust the value as needed
                    },
                }}
                closeTimeoutMS={500}
            >
                <Sign setResult={setResult} />
            </Modal>

            <br />
            <br />
            <button
                className="submit"
                onClick={(e) => {
                    toggleModal(e);
                }}
            >
                Sign
            </button>
        </div>
    );
}
