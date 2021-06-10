import isolatePhrase from './isolatePhrase';

function extractMadLibs(inputText, phraseBorder) {
  let idx = 0;
  const libs = [];

  const next = (steps = 1) => {
    idx += steps;
  }

  while(idx < inputText.length) {
    const char = inputText[idx];
    const nextChar = inputText[idx + 1];
    if (char === phraseBorder && nextChar === phraseBorder) {
      libs.push(isolatePhrase(inputText, idx, phraseBorder))
    }
    next();
  }

  return libs;
}

export default extractMadLibs;
