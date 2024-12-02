import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      title="Nuevo lugar"
      name="add"
    >
      <fieldset className="popup__field">
        <input
          type="text"
          className="popup__item popup__item_title"
          id="title"
          name="title"
          placeholder="Titulo"
          required
          minLength="2"
          maxLength="30"
          onChange={handleNameChange}
        />
        <span className="title-error popup__error"></span>

        <input
          type="url"
          name="url"
          className="popup__item popup__item_url"
          id="url"
          placeholder="Enlace a la imagen"
          required
          onChange={handleLinkChange}
        />
        <span className="url-error popup__error"></span>

        <button
          type="submit"
          className="popup__button-save popup__button-create"
        >
          Crear
        </button>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
