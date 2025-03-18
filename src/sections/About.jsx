import React, { useState, useRef } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {images} from "../constants/index.js"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("akhil01verma@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

 const myAbout = useRef(null);
 const techStack = useRef(null);
 const globeSec = useRef(null);
 const passionSec = useRef(null);
 const mailSec = useRef(null);
 const imageGridRef = useRef(null);


 useGSAP(() => {
    if (myAbout.current) {
      gsap.from(myAbout.current, {
        opacity: 0,
        x: -200,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: myAbout.current,
          start: "top 70%", 
        },
      });
    }

    if (techStack.current) {
      gsap.from(techStack.current, { 
        opacity: 0,
        y: -200,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: techStack.current,
          start: "top 70%",
        },
      });
    }

    if (globeSec.current) {
        gsap.from(globeSec.current, {
          opacity: 0,
          x: 200,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: globeSec.current,
            start: "top 70%", 
          },
        });
      }

      if (passionSec.current) {
        gsap.from(passionSec.current, {
          opacity: 0,
          x: -400,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: passionSec.current,
            start: "top 70%", 
          },
        });
      }

      if (mailSec.current) {
        gsap.from(mailSec.current, {
          opacity: 0,
          x: 400,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mailSec.current,
            start: "top 70%", 
          },
        });
      }

      if (imageGridRef.current) {
        gsap.from(imageGridRef.current.children, {
          opacity: 0,
          y: 50,
          stagger: 0.2, // Each image appears one after another
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageGridRef.current,
            start: "top 70%",
          },
        });
      }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill()); // Cleanup to prevent memory leaks
  }, []);

  return (
    <section className="c-space my-20 overflow-hidden" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        {/* About Section */}
        <div className="col-span-1 xl:row-span-3">
          <div ref={myAbout} className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[260px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Akhil</p>
              <p className="grid-subtext">
                With 1.5 years of experience, I have honed my skills in frontend
                and backend development, with animated 3D websites.
              </p>
            </div>
          </div>
        </div>

        {/* Passion Section */}
        <div className="col-span-1 xl:row-span-3">
                <div ref={techStack} className="grid-container flex justify-center items-center">
                    <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[260px] h-fit object-contain"/> 

                    <div>
                        <p className="grid-headtext">My Passion for Coding</p>
                        <p className="grid-subtext">I like solving problems and buildings things through code. Coding is't just my profession - it is my passion.</p>
                    </div>

                </div>
            </div>

         {/* globe Section */}
            <div className="col-span-1 xl:row-span-4">
                <div ref={globeSec} className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[300px] h-fit flex justify-center items-center">
                    <Globe
                        height={326}
                        width={326}
                        backgroundColor="rgba(0, 0, 0, 0)"
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        // labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                    />
                    </div>

                    <div>
                        <p className="grid-headtext">I work remotely across most timezones</p>
                        <p className="grid-subtext">I am based in India, with remote work available.</p>
                        <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                    </div>
                </div>
            </div>

             {/* tech Section */}
            <div className="xl:col-span-2 xl:row-span-3">
                <div ref={passionSec} className="grid-container space-y-10">
                <div ref={imageGridRef} className="grid grid-rows-2 grid-cols-8 sm:grid-rows-2 gap-2 sm:gap-6 xl:gap-10">
                  {images.map((src, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                      <img src={src.src} alt={src.alt} className="w-full h-auto" />
                    </div>
                  ))}
                </div>
                    
                   

                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subText">I specalize in JavaScript with a focus on React and Next.js ecosystems.</p>
                    </div>
                </div>
            </div>

             {/* mail Section */}

            <div className="xl:col-span-1 xl:row-span-2">
                <div ref={mailSec} className="grid-container">
                    <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[130px] sm:h-[26-px] h-fit object-cover sm:object-top"/>

                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy"/>
                            <p className="lg:text-xl font-medium text-gray_gradient text-white">akhil01verma@gamil.com</p>
                        </div>
                    </div>
                </div>
            </div>



      </div>
    </section>
  );
};

export default About;
