import React from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const { state } = useGlobalStates();

  const addFav = () => {
    const favData = {
      name: name,
      username: username,
    };
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    favs.push(favData);
    localStorage.setItem("favs", JSON.stringify(favs));
    alert(`Se ha agregado a ${favData.name} a los favoritos`);
  };

  const style = { color: state.dark ? "#FFF" : undefined };

  return (
    <div className="card">
      {username && (
        <img src="./images/doctor.jpg" alt="doctor" width={200} height={200} />
      )}
      {username && (
        <Link to={`/dentist/${id}`} style={style} className="linkDentist">
          {name}
        </Link>
      )}
      <h5>{username}</h5>
      {username && (
        <button
          onClick={addFav}
          className="favButton"
          style={{
            color: state.dark ? "transparent" : undefined,
            textShadow: state.dark ? "0 0 0 MediumPurple" : undefined,
          }}
        >
          ⭐
        </button>
      )}
    </div>
  );
};

export default Card;

