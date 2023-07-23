import { useCallback, useState } from "react";
import banner from "../../assets/banner.jpg";
import Font, { Text } from "react-font";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaLinkedinIn } from "react-icons/fa";
import resume from "../../assets/WD-Resume-Fatema Afrin Ritu.pdf";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Banner = () => {
  const [textColor, setTextColor] = useState("#00e275");
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.3,
              },
            },
          },
          particles: {
            color: {
              value: "#7e7e7e",
            },
            links: {
              color: "#7e7e7e",
              distance: 100,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 600,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="card lg:card-side bg-base-100 bg-opacity-80 shadow-xl z-0 relative mt-6">
        <figure className="absolute left-0 right-0 lg:static lg:w-1/2 z-0">
          <img className="opacity-30 lg:opacity-100" src={banner} alt="Album" />
        </figure>
        <div className="card-body lg:w-1/2 h-full my-16 lg:m-auto bg-slate-700/10 lg:bg-transparent z-10">
          <Font family="Anonymous Pro">
            <p className="text-white">Hello!</p>
            <h2 className="card-title text-white">This is Fatema Afrin Ritu</h2>
          </Font>

          <Font family="Iceland">
            <div
              className="font-extrabold md:text-5xl text-2xl"
              style={{
                color: textColor,
              }}
            >
              <TypeAnimation
                sequence={[
                  "I am a Junior Front-End Developer",
                  800,
                  () => setTextColor("#d9ccff"),
                  "I am a MERN Stack Developer",
                  800,
                  () => setTextColor("#637ad4"),
                  "I am a Wev Developer",
                  1000,
                  () => setTextColor("#e19614"),
                ]}
                repeat={Infinity}
              />
            </div>
          </Font>
          <Font family="Anonymous Pro">
            <p className="text-white">
              I invite you to browse through my projects and see firsthand how
              my technical skills and creativity come together to deliver
              engaging web solutions. I am excited about the opportunities that
              lie ahead and look forward to contributing to innovative and
              impactful projects as a Junior Front-End Developer.
            </p>
          </Font>

          <div className="card-actions justify-end my-5">
            <button className="btn btn-outline hover:bg-[#edc800] hover:border-0">
              <a
                href={resume}
                download="Resume of Fatema Afrin Ritu"
                className="flex gap-1"
              >
                <FaDownload />
                Download Resume
              </a>
            </button>
            <button className="btn btn-outline hover:bg-[#edc800] hover:border-0">
              <a
                href="https://www.linkedin.com/in/fatema-afrin-ritu-503465190/?fbclid=IwAR1wUDWMbyiMSMcCAo_BMPt-0eNU8fVPIQKRFKm_74BfacbX2LBDO_6cOb4"
                className="flex gap-1"
              >
                LinkedIn <FaLinkedinIn />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
