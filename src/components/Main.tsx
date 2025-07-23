import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={process.env.PUBLIC_URL + '/Yuqi_pic1.png'} alt="Yuqi's pic" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/YuqisMatrix" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yuqi-zhang-matrix/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Yuqi Zhang</h1>
          <p>Data Scientist and Analyst</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/YuqisMatrix" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yuqi-zhang-matrix/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;