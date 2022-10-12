import React from "react";
import "../Projects/Projects.css";
import { data } from "./data";

const Projects = () => {
  return (
    <section className="container-projects">
      <h3 className="head">some of my recent works</h3>
      <h1 className="heading">Projects</h1>
      <div className="portfolio__container">
        {data.map((val) => {
          return (
            <div key={val.id} className="project-cards">
              <img
                className="project-card-img"
                src={val.image}
                alt={val.title}
              />
              <h3 className="project-title">{val.title}</h3>
              <div className="project-my-buttons">
                
                  <a href={val.github} className="git"><button className="btn btn-dark">Github</button></a>
                
                
                  <a href={val.demo} className="demo"><button className="btn btn-light">Demo</button></a>
                
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
