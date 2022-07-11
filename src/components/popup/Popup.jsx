import React from 'react';
import StyledPopup from './Popup.styled';

function Popup(props) {
  const MyBtn = props.customButton;
  return props.showPopup ? (
    <StyledPopup className={props.overlay === true ? 'overlay' : null}>
      <div className="popup__inner">
        {props.customButton ? (
          <MyBtn />
        ) : (
          <button className="popup__btn" onClick={props.setShowPopup}>
            X
          </button>
        )}

        <span>{props.children}</span>
      </div>
    </StyledPopup>
  ) : (
    ''
  );
}

export default Popup;
