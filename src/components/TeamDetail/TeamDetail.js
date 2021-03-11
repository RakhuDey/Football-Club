import malePhoto from "../../male.png";
import femalePhoto from "../../male.png";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./TeamDetail.css";

const TeamDetail = () => {
  const { idTeam } = useParams();
  const [team, setTeams] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams[0]));
  }, [idTeam]);

  let genderPhoto;
  let gender = `${team.strGender}`;
  if (gender === "male") {
    genderPhoto = `${malePhoto}`;
  } else {
    genderPhoto = `${femalePhoto}`;
  }
  let description1 =
    `${team.strStadiumDescription}` || `${team.strDescriptionFR}`;
  let description2 = `${team.strDescriptionES}` || `${team.strDescriptionEN}`;

  return (
    <div className="full-cart">
      <div className="cart-banner">
        <img src={team.strTeamBanner} alt="" />
      </div>
      <div className="detail-cart">
        <div className="cart-text">
          <div>
            <div>
              <h1>{team.strTeam}</h1>
            </div>
            <div>
              <p>
                <strong>
                  <i class="fas fa-bullhorn"></i> Founded: {team.intFormedYear}
                </strong>
              </p>
            </div>
            <div>
              <p>
                <strong>
                  <i class="fas fa-flag"></i> Country: {team.strCountry}
                </strong>
              </p>
            </div>
            <div>
              <p>
                <strong>
                  <i class="fas fa-futbol"></i> Type: {team.strSport}
                </strong>
              </p>
            </div>
            <div>
              <p>
                <strong>
                  <i class="fas fa-venus-mars"></i> Gender:{team.strGender}
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className="cart-img">
          <img src={genderPhoto} alt="" />
        </div>
      </div>
      <div className="description">
        <p>
          <strong>{description1}</strong>
        </p>
        <br />
        <p>
          <strong>{description2}</strong>
        </p>
      </div>
      <div className="social-icons">
        <a href="https://www.youtube.com">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://www.facebook.com" className="facebook social">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com" className="twitter social">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com" className="instagram social">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default TeamDetail;
