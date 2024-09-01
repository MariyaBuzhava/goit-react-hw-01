import css from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.user}>
        <img className={css.userAvatar} src={avatar} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userText}>@{tag}</p>
        <p className={css.userText}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers: </span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views: </span>
          <span>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes: </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
