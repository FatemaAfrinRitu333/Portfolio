import React from "react";
import "./Project.css";
import { BiLink, BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const ProjectCard = ({ onClick, image1, projectName, projectType, clientLink, serverLink, SiteLink, details, toolList }) => {
  return (
    <div className="inner-flip-card-box">
      {/* Card Front */}
      <div className="card w-96 bg-base-100 shadow-xl card-front">
        <figure
          style={{
            backgroundImage:`url(${image1})`
          }}
          className="project_image1"
        ></figure>
        <div className="card-body bg-gray-950 px-2">
          <h2 className="text-2xl font-bold ps-2">
            {projectName}
            <div className="badge badge-accent badge-xs ms-1">{projectType}</div>
          </h2>
          <div className="card-actions justify-between gap-0 pt-3 items-center">
            <div>
              <a
                href={clientLink}
                rel="noreferrer"
                target="_blank"
              >
                <div
                  className="border py-2 px-5 rounded-s-full bg-neutral border-base-100 tooltip tooltip-bottom tooltip-accent"
                  data-tip="GitHub Client"
                >
                  <FaGithub className="text-2xl" />
                </div>
              </a>
              <a
                href={serverLink}
                rel="noreferrer"
                target="_blank"
              >
                <div
                  className="border py-2 px-5 bg-neutral border-base-100 tooltip tooltip-top tooltip-accent"
                  data-tip="GitHub Server"
                >
                  <BiLink className="text-2xl" />
                </div>
              </a>
              <a
                href={SiteLink}
                rel="noreferrer"
                target="_blank"
              >
                <div
                  className="border py-2 px-5 rounded-e-full bg-neutral border-base-100 tooltip tooltip-right tooltip-accent"
                  data-tip="Live Site"
                >
                  <BiLinkExternal className="text-2xl" />
                </div>
              </a>
            </div>
            <div>
              <button
                className="btn btn-link btn-secondary text-xs flex gap-0 font-light"
                id="flip-card-button"
                onClick={onClick}
              >
                more details
                <IoMdArrowDropright className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Card Back */}
      <div className="card w-96 bg-base-100 text-neutral-content card-back">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{projectName}</h2>
          <p className="text-justify text-sm">{details}</p>
          <p className="divider p-0 m-0"></p>
          <p className="text-justify"><b>Technologies Used: </b>{toolList}</p>
          <div className="card-actions ms-auto">
            <button className="btn btn-ghost hover:btn-link" onClick={onClick}>
              <IoMdArrowDropleft />
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
