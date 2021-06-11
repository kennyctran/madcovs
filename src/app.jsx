import React, { useRef, useState } from "react";
import useParser from "./custom/useParser";
import MadLib from './components/MadLib';
import extractMadLibs from './helpers/extractMadLibs';
// On button submit
  // Move user to a new page using react router
  // That page will require the coverLetter variable
  // It will need to  parse the coverLetter for madLibs first
  // It will need to display the split screen view

function App() {
  const [coverLetter, setCoverLetter] = useParser("");
  const [madLibs, setMadLibs] = useState([]);

  const handleSubmit = () => {
    const extractedLibs = extractMadLibs(coverLetter, '_');
    console.log(extractedLibs)
    setMadLibs(extractedLibs);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <form>
        <label htmlFor="coverLetter">Paste text here</label>
        <textarea
          name="coverLetter"
          id="coverLetter"
          data-testid="coverInput"
          onChange={(e) => setCoverLetter(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>submit</button>
      </form>
      <div>
        {madLibs.map((lib, i) => {
          return (<MadLib
            key={i}
            text={lib}
          />);
        })}
      </div>
    </div>
  );
}

export default App;
