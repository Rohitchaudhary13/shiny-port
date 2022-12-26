import React from "react";
import { Link } from "react-router-dom";
import "../Projects/Projects.css";
import { data } from "./data";
import {motion} from 'framer-motion'

// const Projects = () => {
//   return (
//     <section className="container-projects">
//       <h3 className="head">some of my recent works</h3>
//       <h1 className="heading">Projects</h1>
//       <div className="portfolio__container">
//         {data.map((val) => {
//           console.log(val);
//           return (
//             <div key={val.id} className="project-cards">
//               <img
//                 className="project-card-img"
//                 src={val.image}
//                 alt={val.title}
//               />
//               <h3 className="project-title">{val.title}</h3>
//               <div className="project-my-buttons">
                
//                   <a href={val.github} className="git"><button className="btn btn-dark">Github</button></a>
                
                
//                   <a href={val.demo} className="demo"><button className="btn btn-light">Demo</button></a>
                
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };



// export default Projects;





const Projects = () => {
  return (
    <div>
       <motion.div animate={{ y: 0, opacity: 1, type: "spring"}} initial={{ opacity: 0.6, y: 310 }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}>
      <div className="container" style={{ marginBottom: "15%", marginTop: "5%" }}>
        <section id="company">
        <h3 className="head">some of my recent works</h3>
       <h1 className="heading">Projects</h1>
          <div className="company__container">
            {data.map((post) => {
              return (

                <a target="_blank" href={post.link} key={post.id}>
                <div class="company_box" style={{
                  backgroundImage: `url('${post.image}')`,
                  backgroundSize: '50%'
                }}>
                <div style={{display: 'flex'}}>
                  <h2 style={{ marginTop: "75%", marginLeft: "auto", marginRight: "auto" }}>
                  {post.title}
                  </h2></div>
                </div>
                </a>

              );
            })}
          </div>
        </section>
      </div>
      </motion.div>
    </div>
  )
}

export default Projects