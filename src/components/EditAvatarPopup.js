import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const ref = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      /* El valor de la entrada que obtuvimos utilizando la ref */
      avatar: ref.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      title="Cambiar foto de perfil"
      name="picture"
    >
      <fieldset className="popup__field">
        <input
          type="url"
          name="avatar"
          ref={ref}
          className="popup__item popup__item_url popup__item_avatar popup__item_picture"
          id="avatar"
          placeholder="Enlace a la foto de perfil"
          required
        />
        <span className="avatar-error popup__error"></span>

        <button type="submit" className="popup__button-save popup__button-img">
          Guardar
        </button>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
