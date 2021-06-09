import { useState } from 'react';

// TO DO, this function will most likely run on button click and will set the madLibs??
function useParser() {
  const [text, setText] = useState('');

  const setParsedText = (inputText) => {
    setText(inputText);
  }

  return [text, setParsedText];
}

export default useParser;
