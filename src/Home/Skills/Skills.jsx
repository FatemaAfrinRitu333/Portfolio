import Divider from "../Divider/Divider";
import Font from "react-font";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/JS.png";
import react from "../../assets/react.png";
import api from "../../assets/api.png";
import express from "../../assets/express.png";
import bootstrap from "../../assets/bootstrap.png";
import daisyUI from "../../assets/daisyUI.png";
import firebase from "../../assets/firebase.png";
import jwt from "../../assets/jwt.png";
import mongoDB from "../../assets/mongoDB.png";
import tailwind from "../../assets/tailwind.png";

const Skills = () => {
  return (
    <div>
      <Divider SubHeading={`My skills`}></Divider>
      <Font family="Anonymous Pro">
        <div className="mb-12">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-12 gap-12 mx-auto">
            <div className="card shadow-xl w-full">
              <figure>
                <img
                className="w-[150px] h-[150px]"
                  src={html}
                />
              </figure>
              <div className="card-body p-0 pt-3">
                <h2 className="mx-auto tracking-widest">HTML5</h2>
              </div>
            </div>
            <div className="card w-full shadow-xl">
              <figure>
                <img
                className="w-[150px] h-[150px]"
                  src={css}
                />
              </figure>
              <div className="card-body p-0 pt-3">
                <h2 className="mx-auto tracking-widest">CSS3</h2>
              </div>
            </div>
            <div className="card w-full shadow-xl">
              <figure>
                <img
                className="w-[150px] h-[150px]"
                  src={js}
                />
              </figure>
              <div className="card-body p-0 pt-3">
                <h2 className="mx-auto tracking-widest">JavaScript</h2>
              </div>
            </div>
            <div className="card w-full shadow-xl">
              <figure>
                <img
                className="w-[150px] h-[150px]"
                  src={react}
                />
              </figure>
              <div className="card-body p-0 pt-3">
                <h2 className="mx-auto tracking-widest">React.js</h2>
              </div>
            </div>
            <div className="card w-full shadow-xl">
              <figure>
                <img
                className="w-[150px] h-[150px]"
                  src={api}
                />
              </figure>
              <div className="card-body p-0 pt-3">
                <h2 className="mx-auto tracking-widest">API</h2>
              </div>
            </div>
            <div className="card w-full shadow-xl">
              <figure>
                <img
                className="w-[150px] h-[150px]"
                  src={express}
                />
              </figure>
              <div className="card-body p-0 pt-3">
                <h2 className="mx-auto tracking-widest">Express.js</h2>
              </div>
            </div>
            <div className="card w-full shadow-xl">
              <figure>
                <img
                className="w-[150px] h-[150px]"
                  src={jwt}
                />
              </figure>
              <div className="card-body p-0 pt-3">
                <h2 className="mx-auto tracking-widest">JWT</h2>
              </div>
            </div>
            <div className="card w-full shadow-xl">
              <figure>
                <img
                className="w-[150px] h-[150px]"
                  src={mongoDB}
                />
              </figure>
              <div className="card-body p-0 pt-3">
                <h2 className="mx-auto tracking-widest">MongoDB</h2>
              </div>
            </div>
            <div className="card w-full shadow-xl">
              <figure>
                <img
                className="w-[150px] h-[150px]"
                  src={firebase}
                />
              </figure>
              <div className="card-body p-0 pt-3">
                <h2 className="mx-auto tracking-widest">Firebase</h2>
              </div>
            </div>
            <div className="card w-full shadow-xl">
              <figure>
                <img
                className="w-[150px] h-[150px]"
                  src={bootstrap}
                />
              </figure>
              <div className="card-body p-0 pt-3">
                <h2 className="mx-auto tracking-widest">Bootstrap</h2>
              </div>
            </div>
            <div className="card w-full shadow-xl">
              <figure>
                <img
                className="w-[150px] h-[150px]"
                  src={tailwind}
                />
              </figure>
              <div className="card-body p-0 pt-3">
                <h2 className="mx-auto tracking-widest">TailwindCSS</h2>
              </div>
            </div>
            <div className="card w-full shadow-xl">
              <figure>
                <img
                className="w-fit h-fit"
                  src={daisyUI}
                />
              </figure>
              <div className="card-body p-0 pt-3">
                <h2 className="mx-auto tracking-widest">DaisyUI</h2>
              </div>
            </div>
          </div>
        </div>
      </Font>
    </div>
  );
};

export default Skills;
