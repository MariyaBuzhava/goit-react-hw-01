import css from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.card}>
      <img src={avatar} alt={`${name} avatar`} width="48" />
      <p className={css.name}>{name}</p>
      <p
        className={`${css.status} ${
          isOnline ? css.statusOnline : css.statusOffline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
