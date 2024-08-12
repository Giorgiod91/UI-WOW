"use client";
import React, { Children, useEffect } from "react";
import { useState } from "react";

function FetchUi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [api_data, set_api_data] = useState("");

  const profile1 = "";

  const handleFetch = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/server2", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data) {
        set_api_data(data);
      }
    } catch (err) {
      setError("Failed to fetch data from api");
    } finally {
      setLoading(false);
    }
  };
  const handleCopy = () => {
    let dataToCopy = JSON.stringify(api_data, null, 2);

    dataToCopy = dataToCopy.replace(/\"/g, "");

    // Clipboard API
    navigator.clipboard.writeText(dataToCopy).then(
      () => {
        console.log("Copying to clipboard was successful!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      },
    );
  };

  return (
    <div>
      <button onClick={handleFetch}>Give me the profile</button>

      <div>
        {api_data ? (
          <div className="max-w-2xl overflow-x-auto">
            <h1>here copy the code and import</h1>

            <pre className="">{JSON.stringify(api_data, null, 2)}</pre>
            <button onClick={handleCopy}>Copy to Clipboard</button>
          </div>
        ) : (
          <div>
            <h1>not data found!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default FetchUi;
