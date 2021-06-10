function isolatePhrase(inputText, idx, phrase) {
  let parsedPhrase = `${inputText[idx]}${inputText[idx + 1]}`;
  let complete = false;
  let i = idx + 2;

  while(i < inputText.length) {
    const char = inputText[i];
    const nextChar = inputText[i + 1];
    parsedPhrase += char;
    if (char === phrase && nextChar === phrase) {
      parsedPhrase += nextChar;
      break;
    }
    i++;
  }
  return parsedPhrase;
}

export default isolatePhrase;
