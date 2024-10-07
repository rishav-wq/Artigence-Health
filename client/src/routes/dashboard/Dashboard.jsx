import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.scss";

function Dashboard() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom * 1.2, 3)); // Max zoom level of 3
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom / 1.2, 1)); // Min zoom level of 1
  };

  const handleImageMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100; // Percentage position
    const y = ((e.clientY - rect.top) / rect.height) * 100; // Percentage position
    setPointerPosition({ x, y });
  };
  const handleDownloadReport = () => {
    // Logic for downloading the report
    alert("Downloading detailed blood test report...");
  };


  return (
    <div className="dashboard">
      <div className="wsi-viewer">
        {/* Left Panel for Details */}
        <div className="details-panel">
          <h2>Patient Details</h2>
          <div className="finding-info">
            <div className="info-row">
              <div className="info-column">
                <strong>RBC Count:</strong>
                <p>5.1 million/µL</p>
              </div>
              <div className="info-column">
                <strong>Hemoglobin:</strong>
                <p>13.5 g/dL</p>
              </div>
              <div className="info-column">
                <strong>Hematocrit:</strong>
                <p>40.5%</p>
              </div>
            </div>
            <div className="info-row">
              <div className="info-column">
                <strong>WBC Count:</strong>
                <p>7.0 thousand/µL</p>
              </div>
              <div className="info-column">
                <strong>Platelet Count:</strong>
                <p>250 thousand/µL</p>
              </div>
              <div className="info-column">
                <strong>MCV:</strong>
                <p>85 fL</p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Panel for Whole Slide Image */}
        <div className="image-panel">
          <div className="zoom-controls">
            <button onClick={handleZoomOut} className="zoom-button">-</button>
            <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
            <button onClick={handleZoomIn} className="zoom-button">+</button>
          </div>
          <div className="image-container" onMouseMove={handleImageMouseMove}>
            <img
              src="hero.jpeg" // Replace with the actual path to your image
              alt="Whole Slide Image"
              className="whole-slide-image"
              style={{ transform: `scale(${zoomLevel})` }}
            />
            {/* Pointer Indicator */}
            <div
              className="pointer-indicator"
              style={{
                left: `${pointerPosition.x}%`,
                top: `${pointerPosition.y}%`,
                transform: 'translate(-50%, -50%)',
                display: zoomLevel > 1 ? 'block' : 'none', // Show only when zoomed in
              }}
            />
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <section className="report-section">
        <h2>Download Detailed Blood Test Report</h2>
        <button onClick={handleDownloadReport} className="download-report-btn">
          Download Report
        </button>
      </section>
    </div>
  );
}

export default Dashboard;
