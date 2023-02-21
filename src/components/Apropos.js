import React from "react";
import Write from "./Write";
import "../styles/Apropos.css";
import npm from "../assets/2560px-Npm-logo.svg.png";
import mongo from "../assets/mongodb+original-1324760553088442944.png";
import next from "../assets/next-js-removebg-preview.png";
import node from "../assets/nodejs-dark-removebg-preview.png";
import express from "../assets/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-removebg-preview.png";
import tailwind from "../assets/tailwind-css-logo-5AD4175897-seeklogo.com.png";

function Apropos() {
  return (
    <div id="Apropos">
      <div style={{ marginTop: 65 }}>
        <Write text={"A propos"} color="white" size={60} />
      </div>
      <p className="Ma-description">
        Je suis passionné par tout ce qui à trait au frontend et je suis très
        familier au MERN stack. Vous demandez ce que fait un developpeur MERN
        stack ? En tant que MERN stack je construis des applications/sites web
        complets à base de ReactJs coté client et node/expressJs coté serveur,
        en utilisant MongoDb comme base de données. Je suis quelqu’un d’organisé
        et de persévérant. Je suis aussi intéressé par l’anglais, les réseaux
        sociaux, la mode, la culture japonaise et les series télés.
      </p>
      <div className="react-wrapper">
        <div className="react-div">
          <p className="react-part"></p>
          <p className="react-part"></p>
          <p className="react-part"></p>
          <p className="react-circle"></p>
          <img src={npm} alt="npm" className="npm" />
          <img src={express} alt="express" className="express" />
          <img src={mongo} alt="mongo" className="mongo" />
          <img src={tailwind} alt="tailwind" className="tailwind" />
          <img src={node} alt="node" className="node" />
          <img src={next} alt="next" className="next" />
        </div>
      </div>
    </div>
  );
}

export default Apropos;
