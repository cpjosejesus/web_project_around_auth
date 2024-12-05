import iconSuccess from "../images/success.svg";
import iconFail from "../images/fail.svg";

function InfoTooltip(props) {
  return (
    <div className={`tooltip tooltip__closed ${props.isOpen ? "tooltip__opened" : ""}`}>
      <div className="tooltip__overlay"></div>
      <div className="tooltip_container">
        <div className="tooltip__card">
          <button type="button" className="tooltip__button-close" onClick={props.onClose}></button>
          <img
            src={`${props.success ? iconSuccess : iconFail}`}
            alt="Tooltip"
            className="tooltip__image"
          />
          <p className="tooltip__info">{`${
            props.success
              ? "Correcto! Ya estás registrado."
              : "Uy, algo salió mal. Por favor, inténtalo de nuevo."
          }`}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
