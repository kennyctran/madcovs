import React from 'react';

function MadLib({ text }) {
  return (
    <div>
      <h4>{text}</h4>
      <form>
        <label aria-label={`${text} input`}></label>
        <input type="text" />
      </form>
    </div>
  )
}

export default MadLib
