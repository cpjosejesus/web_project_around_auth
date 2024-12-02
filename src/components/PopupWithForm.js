function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${
        props.isOpen ? "popup__opened" : ""
      }`}
    >
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <button
          type="button"
          className="popup__button-close"
          onClick={props.onClose}
        ></button>
        <form
          className="popup__form"
          name={props.name}
          noValidate
          onSubmit={props.onSubmit}
        >
          <h2 className={`popup__heading popup__heading-${props.name}`}>
            {props.title}
          </h2>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
