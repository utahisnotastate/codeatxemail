import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDetectAdBlock } from "./useDetectAdBlock"; // Assuming your hook is saved as useDetectAdBlock.js

const LurkerModeButton = () => {
  const [lurkerMode, setLurkerMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const adBlockDetected = useDetectAdBlock();

  const handleEnableLurkerMode = () => {
    if (adBlockDetected) {
      setErrorMessage("Adblock detected! Please disable it to use Lurker Mode.");
      return;
    }
    setLurkerMode(true);
    setErrorMessage("");
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <button
        className="btn btn-primary btn-lg mt-3"
        style={{
          backgroundColor: "#1DA1F2", // X/Twitter's signature blue
          borderColor: "#1DA1F2",
          color: "white",
          borderRadius: "50px",
          padding: "10px 20px",
          fontWeight: "bold",
        }}
        onClick={handleEnableLurkerMode}
      >
        Enable Lurker Mode
      </button>
      {errorMessage && (
        <div className="alert alert-danger mt-3" role="alert">
          {errorMessage}
        </div>
      )}
      {lurkerMode && (
        <div className="alert alert-success mt-3" role="alert">
          Welcome to Lurker Mode! Ads are now enabled, and the best content is
          tailored for you.
        </div>
      )}
    </div>
  );
};

export default LurkerModeButton;
