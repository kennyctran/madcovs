import { useState } from "react";

// TO DO, this function will most likely run on button click and will set the madLibs??
function useParser() {
  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");

  const setParsedText = (inputText, phrase) => {
    const replacedText = text.replace(phrase, inputText);
    setNewText(replacedText);
  };

  const save = () => {
    setText(newText);
  };

  return [text, setText, newText, setParsedText, save];
}

export default useParser;
