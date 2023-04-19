import React from "react";

// I create this reusable custom hook to fetch all errors with the package react-error-boundary (install in terminal)

function errorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

export default errorFallback;
