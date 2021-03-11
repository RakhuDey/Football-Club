import stadiun from "../../stadium.png";
import React, { useState, useEffect } from "react";
import Team from "../Team/Team";
import "./Home.css";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);

  return (
    <div>
      <div className="home-img">
        <img src={stadiun} alt=""></img>
      </div>
      <div className="display-home">
        {teams.map((team) => (
          <Team team={team} key={team.idTeam}></Team>
        ))}
      </div>
    </div>
  );
};

export default Home;
