import React, { useState } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfView = ({ demo }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className="pdf-container">
            <Viewer fileUrl={demo} plugins={[defaultLayoutPluginInstance]} />
        </div>
    );
};

export default PdfView;
