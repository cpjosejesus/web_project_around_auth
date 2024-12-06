import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = currentUser._id === props.card.owner._id;

  const cardDeleteButtonClassName = `element__button-delete ${
    isOwn ? "element__button-delete_visible" : "element__button-delete_hidden"
  }`;

  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeBtnClassName = `element__button-like ${
    isLiked ? "element__button-like_black" : ""
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
      <img
        src={props.card.link}
        alt={props.card.name}
        className="element__image"
        onClick={handleClick}
      />
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={() => props.onCardDelete(props.card)}
      ></button>
      <div className="element__info">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__likes">
          <button
            type="button"
            className={cardLikeBtnClassName}
            onClick={() => props.onCardLike(props.card)}
          ></button>
          <span className="element__like-number">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
