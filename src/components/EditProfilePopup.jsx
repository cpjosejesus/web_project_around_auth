import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext, useEffect, useState } from "react";

function EditProfilePopup(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      title="Editar perfil"
      name="profile"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__field">
        <input
          type="text"
          className="popup__item popup__item_name"
          id="name"
          name="name"
          placeholder="Nombre"
          required
          minLength="2"
          maxLength="40"
          value={name || ""}
          onChange={handleNameChange}
        />
        {!name && (
          <span className="name-error popup__error_visible">
            El nombre no puede estar vacio
          </span>
        )}

        <input
          type="text"
          className="popup__item popup__item_type"
          id="type"
          name="type"
          placeholder="Acerca de mi"
          required
          minLength="2"
          maxLength="200"
          value={description || ""}
          onChange={handleDescriptionChange}
        />
        {!description && (
          <span className="type-error popup__error_visible">
            La descripcion no puede estar vacia
          </span>
        )}

        <button type="submit" className="popup__button popup__button-save">
          Guardar
        </button>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
