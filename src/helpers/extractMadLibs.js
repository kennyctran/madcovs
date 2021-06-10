import isolatePhrase from './isolatePhrase';

function extractMadLibs(inputText, phrase) {
  let idx = 0;
  const libs = [];

  const next = (steps = 1) => {
    idx += steps;
  }

  while(idx < inputText.length) {
    const char = inputText[idx];
    const nextChar = inputText[idx + 1];
    let madLib = '';
    if (char === phrase && nextChar === phrase) {
      madLib = isolatePhrase(inputText, idx, phrase);
      libs.push(madLib);
    }
    next(madLib.length || 1);
  }
  return libs;
}

export default extractMadLibs;
