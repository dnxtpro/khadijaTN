import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
const ParticlesComponent = (props) => {

  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {},
      },
      particles: {
        number: {
          value: 40,
          density: {
            enable: true,
            value_area: 1000
          }
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1
          }
        },
        size: {
          value: { min: 1, max: 4 },
          random: true,
          anim: {
            enable: true,
            speed: 6,
            size_min: 0.5
          }
        },
        shadow: {
          enable: true,
          color: "#c59b6b",
          blur: 25,
          opacity: 1,
        },
        blur: {
          value: { min: 1, max: 25 }
        },
        line_linked: {
          enable: false
        },
        color:{
          value:"#c59b6b"
        },
        move: {
          enable: true,
          speed: 0.7,
          direction: "random",
          random: true,
          straight: false,
          out_mode: "out"
        }
      },
      detectRetina: true,
    }),
    [],
);



  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
      <Particles id={props.id} options={options} />
    </div>
  ); 
};

export default ParticlesComponent;