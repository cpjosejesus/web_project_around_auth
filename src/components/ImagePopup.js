function ImagePopup(props) {
  return (
    <div className="popup popup_img popup__opened">
      <div className="popup__overlay"></div>
      <div className="popup__container popup__container_img">
        <button
          type="button"
          className="popup__button-close popup__button-close_img"
          onClick={props.onClose}
        ></button>
        <img src={props.selectedCard.link} alt="" className="popup__image" />
        <p className="popup__title-img">{props.selectedCard.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
