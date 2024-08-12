"use client";
import React, { Children, useEffect } from "react";
import { useState } from "react";

function FetchUi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [api_data, set_api_data] = useState("");

  const handleFetch = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/server4", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data) {
        set_api_data(data);
        console.log(api_data);
        console.log(data);
      }
    } catch (err) {
      setError("Failed to fetch data from api");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleFetch}>Give me the profile</button>

      <div>
        {api_data ? (
          <div>
            <h1>here copy the code and import</h1>
            <div>{JSON.stringify(api_data)}</div>
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
