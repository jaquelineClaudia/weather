import React from 'react';

const ButtonToogle = ({ IsClicked, ButtonClass, ButtonTextClass, ButtonTextContent }) => {
  return (
    <button className={ButtonClass} onClick={IsClicked}>
      <p className={ButtonTextClass}>{ButtonTextContent}</p>
    </button>
  );
};

export default ButtonToogle;