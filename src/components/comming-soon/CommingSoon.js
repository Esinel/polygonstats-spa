import React from 'react';

const style = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  fontSize: '3em',
  top: '0',
  left: '0',
  opacity: 0.6,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'gray'
}

export default function CommingSoon() {

  return (
    <div style={style}>
      <div style={{transform: 'rotate(-15deg)', color: 'red'}}>Comming Soon</div>
    </div>
  )
}
