import React from "react";
import "./Team.css";
import { useHistory } from "react-router-dom";

const Team = (props) => {
  const { strTeam, strSport, strTeamBadge, idTeam } = props.team;
  const history = useHistory();
  const handleClick = (idTeam) => {
    const detail = `/detail/${idTeam}`;
    history.push(detail);
  };

  return (
    <div className="team-cart">
      <img className="club-logo" src={strTeamBadge} alt="" srcset="" />
      <h3 className="team-name">{strTeam}</h3>
      <p className="type">Sports type:{strSport}</p>
      <button className="button" onClick={() => handleClick(idTeam)}>
        Explore <i class="fas fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

export default Team;
