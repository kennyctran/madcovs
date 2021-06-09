import React from "react";
import useParser from "./custom/useParser";

function App() {
  const [parsed, setParsed] = useParser("");
  return (
    <div>
      <form>
        <label htmlFor="coverLetter">Paste text here</label>
        <textarea
          name="coverLetter"
          id="coverLetter"
          onChange={(e) => setParsed(e.target.value)}
        />
      </form>
      <div className="parsed">{parsed}</div>
    </div>
  );
}

export default App;
