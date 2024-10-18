import type { MetaFunction } from "@remix-run/node";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "🪩" },
  ];
};

export default function Index() {
  const [currentDropdown, setCurrentDropdown] = useState<null | string>(null);

  return (
    <div>
      <div className="relative min-h-screen max-w-full overflow-x-hidden bg-[radial-gradient(circle_at_50%_65%,rgba(218,29,107,0.83)_0%,rgba(20,10,10,0.9)_100%)]">
        <div className="absolute inset-0 bg-screen-lines lg:pl-20 pt-10 lg:pt-20 flex flex-col lg:flex-row">
          <div className="flex-shrink-0 flex justify-center p-4">
            <img src="/disco.jpg" alt="Disco" className="rounded-full w-[150px] lg:h-[300px] lg:w-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px] shadow-[0_0_10px_rgba(255,255,255,3)] lg:border "/> 
          </div>
          <div className="pl-10 pr-10 lg:pt-10 2xl:pl-20">  
            <h1 className="font-mono font-bolder text-5xl xl:text-7xl 2xl:text-8xl pb-7 2xl:pb-10 pt-3 text-shadow shadow-red-200  text-pink-700"> disco </h1>
            <div className="ml-1"> 
              <div className="list-disc flex flex-col lg:flex-row font-mono text-shadow pb-3 shadow-red-200 text-white text-xl xl:text-2xl 2xl:text-3xl"> 
                <div className="pr-10 pb-1 hover:text-[#f5c4df] cursor-pointer" onClick={() => setCurrentDropdown(currentDropdown === "about" ? null : "about")}> about. </div>
                <div className="pr-10 pb-1 hover:text-[#f5c4df] cursor-pointer" onClick={() => setCurrentDropdown(currentDropdown === "projects" ? null : "projects")}> projects.</div>
                <div className="pr-10 pb-1 hover:text-[#f5c4df]" onClick={() => setCurrentDropdown(currentDropdown === "email" ? null : "email")}> email.</div> 
                <div className=" hover:text-[#f5c4df] cursor-pointer" onClick={() => setCurrentDropdown(currentDropdown === "coolstuff" ? null : "coolstuff")}> cool stuff. </div> 
              </div>
              <AnimatePresence>
                {currentDropdown === "about" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="list-disc flex flex-col font-mono text-shadow shadow-red-200 text-white text-lg xl:text-xl 2xl:text-2xl"
                  > 
                    <div>hi I'm disco, a junior software dev accelerating my skills at  <a 
                      href="https://fractalbootcamp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#f5c4df]"
                    >fractal tech</a>. i've built fullstack projects using react and typescript. pitch me on cool projects that help humans solve coordination problems. or ask me to make your website pink. or better yet, hire me!  </div>
                  </motion.div>
                )}
                {currentDropdown === "projects" && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="list-disc flex flex-col font-mono text-shadow shadow-red-200 text-white text-lg xl:text-xl 2xl:text-2xl"
                  > 
                    <div className="text-xl ">  personal  </div>
                    <div className="pb-2 underline hover:text-[#f5c4df]"> <a href="https://wikiinfinitia.vercel.app/"> infinite wikipedia</a></div>
                    <div className="pb-2 underline hover:text-[#f5c4df]"> <a href="https://psychoanalyze-dev.vercel.app/"> psychoanalyze dev</a></div>
                    <div className="pb-2 underline hover:text-[#f5c4df]"> <a href="https://letsgohome-delta.vercel.app/"> let's go home!</a></div>
                    <div className="pb-2 underline hover:text-[#f5c4df]"> <a href="https://pink-tank-toe.netlify.app"> tic tac toe</a></div>
                    <div className="text-xl mt-2"> group projects </div>
                    <div className="pb-2 underline hover:text-[#f5c4df]"> <a href="https://wemadeabudget.vercel.app"> we made a budget</a></div>
                    <div className="pb-2 underline hover:text-[#f5c4df]"> <a href="https://fractalmarketplace.netlify.app"> fractal marketplace</a></div>
                  </motion.div>
                )}
                {currentDropdown === "email" && (
                  <motion.div
                    key="email"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="list-disc flex flex-col font-mono text-shadow shadow-red-200 text-white text-lg xl:text-xl 2xl:text-2xl"
                  > 
                    <div className="pr-10 underline hover:text-[#f5c4df]"> <a href="mailto:hyperdiscogirl@protonmail.com"> hyperdiscogirl@protonmail.com </a></div>
                  </motion.div>
                )}
                {currentDropdown === "coolstuff" && (
                  <motion.div
                    key="coolstuff"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="list-disc flex flex-col font-mono text-shadow shadow-red-200 text-white text-lg xl:text-xl 2xl:text-2xl"
                  > 
                    <div className="pr-10 underline hover:text-[#f5c4df]"> <a href="http://listen.hatnote.com/"> listen to wikipedia </a></div>
                    <div className="pr-10 underline hover:text-[#f5c4df]"> <a href="https://iyanaai.netlify.app/"> free iyana </a></div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className=" text-white font-mono pt-5 text-shadow shadow-red-200 text-lg xl:text-xl 2xl:text-2xl"> 
                <div className="relative inline-block group ">
                  <p className="hover:text-[#f5c4df] inline-block">
                    <a href="https://x.com/hyperdiscogirl">X</a>
                  </p>
                  <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity delay-300 duration-1000 text-[#f5c4df]"> (Twitter) </span>
                </div>
                <p className="hover:text-[#f5c4df]"><a href="https://github.com/hyperdiscogirl"> GitHub</a></p>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
