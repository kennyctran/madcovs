import React, { useState } from "react";

function MadLib({ phrase, handleChange, handleSave }) {
  const [madLibText, setMadLibText] = useState("");

  const updatePreview = (newText) => {
    setMadLibText(newText);
    handleChange(madLibText, phrase);
  };

  return (
    <div>
      <h4>{phrase}</h4>
      <form>
        <input
          type="text"
          aria-label={`${phrase} input`}
          onChange={(e) => updatePreview(e.target.value)}
        />
        <button type="button" onClick={handleSave}>save</button>
      </form>
    </div>
  );
}

export default MadLib;
