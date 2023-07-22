import React from "react";

export default function Container({ children }) {
  return (
    <main
      style={{
        margin: "auto",
        width: "80%",
        maxWidth: "1200px",
        minWidth: "600px",
      }}
    >
      {children}
    </main>
  );
}
