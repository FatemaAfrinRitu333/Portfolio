import Divider from "../Divider/Divider";
import "./Project.css";
import Font from "react-font";
import { CSSTransition } from "react-transition-group";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import project1 from "../../assets/WebsiteSS/chorus-camp.web.app_.png";
import project2 from "../../assets/WebsiteSS/levantine-cuisine.web.app_.png";
import project3 from "../../assets/WebsiteSS/Toy-Utopia.png";
import project4 from "../../assets/WebsiteSS/boss-bistro.web.app_.png";

const Projects = () => {
  const [showFront1, setShowFront1] = useState(true);
  const [showFront2, setShowFront2] = useState(true);
  const [showFront3, setShowFront3] = useState(true);
  const [showFront4, setShowFront4] = useState(true);

  return (
    <div className="mb-12">
      <Divider SubHeading={`my Projects`}></Divider>
      <Font family="Anonymous Pro">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
          {/* Outer Card Box 1*/}
          <div className="outer-flip-card-box mx-auto">
            <CSSTransition in={showFront1} timeout={300} classNames="flip">
              <ProjectCard
                onClick={() => {
                  setShowFront1((v) => !v);
                }}
                image1={project1}
                projectName={"Chorus Camp"}
                projectType={"E-commerce"}
                clientLink={
                  "https://github.com/FatemaAfrinRitu333/Summer-Camp-School__Client"
                }
                serverLink={
                  "https://github.com/FatemaAfrinRitu333/Summer-Camp-School__Server"
                }
                SiteLink={"https://chorus-camp.web.app/"}
                details={
                  "This website is designed on the theme of a summer music school, where students will learn how to play different musical instruments. The website has three different dashboards for students, instructors, and admin. The data rendering is secured by JSON web token, so potential hackers cannot steal user information."
                }
                toolList={
                  "React.js, Express.js, TanStack Query, Axios, MaterialUI, DaisyUI, Tailwind, Swiper, React Hook Form, React Parallex, React Helmet, SweetAler, TanStack Query, Axios, MaterialUI, DaisyUI, Tailwind, Swiper, React Hook Form, React Parallex, React Helmet, SweetAlert2, Firebase, Dot Env."
                }
              />
            </CSSTransition>
          </div>
          {/* Outer Card Box 2*/}
          <div className="outer-flip-card-box">
            <CSSTransition in={showFront2} timeout={300} classNames="flip">
              <ProjectCard
                onClick={() => {
                  setShowFront2((v) => !v);
                }}
                image1={project2}
                projectName={"Levantine Chef Wizard"}
                projectType={"front-end focused restaurant project"}
                clientLink={
                  "https://github.com/FatemaAfrinRitu333/Levantine-Chef-Wizard__Client"
                }
                serverLink={
                  "https://github.com/FatemaAfrinRitu333/Levantine-Chef-Wizard__Server"
                }
                SiteLink={"https://levantine-cuisine.web.app/"}
                details={
                  "The site includes a section displaying the information of the chefs. Each chef has their own section that includes their work life information, bio, and recipes that they invented. You can also know a little bit about the cuisine from the cuisine history section. A newletter section to get updates of new recipes and tips and tricks of cooking. Lastly, a blog section to enlighten the users on some topics related to web development."
                }
                toolList={
                  "React.js, Express.js, DaisyUI, Tailwind, SweetAlert2, Firebase, Dot Env"
                }
              />
            </CSSTransition>
          </div>
          {/* Outer Card Box 3*/}
          <div className="outer-flip-card-box">
            <CSSTransition in={showFront3} timeout={300} classNames="flip">
              <ProjectCard
                onClick={() => {
                  setShowFront3((v) => !v);
                }}
                image1={project3}
                projectName={"Toy Utopia"}
                projectType={"product management project"}
                clientLink={
                  "https://github.com/FatemaAfrinRitu333/Toy-Utopia__Client"
                }
                serverLink={
                  "https://github.com/FatemaAfrinRitu333/Toy-Utopia__Server"
                }
                SiteLink={"https://toy-utopia.web.app/"}
                details={
                  "User can add, modify and delete products they added only after logging in or signing up. Firebase Authentication system and product browsing implemented. Made fully responsive."
                }
                toolList={
                  "React.js, Express.js, DaisyUI, Tailwind, React Marquee, AOS, SweetAlert2, Firebase, Dot Env"
                }
              />
            </CSSTransition>
          </div>
        </div>
      </Font>
    </div>
  );
};

export default Projects;
