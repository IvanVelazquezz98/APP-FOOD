import React from "react";
import { Link } from "react-router-dom";
import styles from "../About/About.module.css"
import linkedin from "../../components/About/linkedin.png";
import git from  "../About/git.png"


export default function About () {
  return (
      <div >
    <div className={styles.firstContainer} >
      <main className={styles.recipeContainer} >
        <Link to="/home">
          <button className={styles.home}>HOME</button>
        </Link>
        <h1>About me</h1>
        <p>Hello! I am Ivan, the web developer behind this SPA.</p>
        <p>
          This SPA was made as my personal project for <a rel="noreferrer" target="_blank" href="https://www.soyhenry.com/">Henry's </a>
          fullstack web developer bootcamp.<br></br>
          It's basically an app to look up for cooking recipes.<br></br>
          It is fully CRUD as you can create, read and delete your recipes.
        </p>
        <br></br>
        <p>
          I developed all of its backend, frontend and DB. <br></br>
          During this proccess, I worked with a stack of technologies that included:<br></br>
          React, Redux, Nodejs, vanilla Javascript, Node Express, Sequelize <br></br>
          Postgre, SQL, Postman, cors among others.
        </p>
        <p>
         You can find my Social Media bellow:
        </p>
        <div >
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/ivan-velazquez-a095aa243/"
            target="_blank"
          >
            <img className={styles.image} alt="linkedin" src={linkedin} />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/IvanVelazquezz98"
            target="_blank"
          >
            <img className={styles.image} alt="github" src={git} />
          </a>
        </div>
      </main>
      
    </div>
    </div>
  );
};
