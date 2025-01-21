import { useEffect, useState } from "react";

export const useDetectAdBlock = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    // Ad-block detection logic
    const checkAdBlock = async () => {
      const testUrl = "https://www3.doubleclick.net"; // Test domain often blocked by ad blockers

      try {
        const response = await fetch(testUrl, {
          method: "HEAD",
          mode: "no-cors", // Prevent errors from CORS
          cache: "no-store", // Ensure request is not cached
        });

        // If the fetch succeeds but the URL is redirected, ad blocker might be active
        if (response.redirected) {
          setAdBlockDetected(true);
        }
      } catch (error) {
        // Catch network errors that could indicate the URL was blocked
        setAdBlockDetected(true);
      }
    };

    checkAdBlock();
  }, []); // Empty dependency array ensures this effect runs once on mount

  return adBlockDetected;
};
