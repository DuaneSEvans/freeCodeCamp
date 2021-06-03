import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [showAlert, setShowAlert] = useState(false);
  hex = `#${hex}`;
  function copyColor() {
    setShowAlert(true);
    navigator.clipboard.writeText(hex);
  }

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setShowAlert(false)
    }, 2000)
    return function cleanup() {
      clearTimeout(timer1)
    };}
    , [showAlert]);

  return (
    <div id={hex} className={`'color' ${index > 10 && 'color-light'}`} style={{backgroundColor: hex}} onClick={() => copyColor()}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {showAlert && <p className='alert'><strong>copied to clipboard</strong></p> }
    </div>
  );
}

export default SingleColor
