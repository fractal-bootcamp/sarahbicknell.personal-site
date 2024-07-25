import type { MetaFunction } from "@remix-run/node";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "🪩" },
  ];
};

export default function Index() {
  const [currentDropdown, setCurrentDropdown] = useState<null | string> (null)

    return (
      <div>
        <div className="relative min-h-screen max-w-full overflow-x-hidden bg-[radial-gradient(circle_at_50%_65%,rgba(218,29,107,0.83)_0%,rgba(20,10,10,0.9)_100%)]">
          <div className="absolute inset-0 bg-screen-lines lg:pl-20 pt-10 lg:pt-20 flex flex-col lg:flex-row">
            <div className="flex-shrink-0 flex justify-center p-4">
              <img src="/disco.jpg" alt="Disco" className="rounded-full w-[150px] md:h-[300px] md:w-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px] shadow-[0_0_10px_rgba(255,255,255,3)] lg:border "/> 
            </div>
            <div className="pl-10 pr-10 lg:pt-10 2xl:pl-20">  
              <h1 className="font-mono font-bolder text-5xl xl:text-7xl 2xl:text-8xl pb-5 pt-3 text-shadow shadow-red-200  text-pink-700"> disco </h1>
              <div className="list-disc flex flex-col lg:flex-row font-mono text-shadow shadow-red-200 text-white text-xl xl:text-2xl 2xl:text-3xl pb-5"> 
                  <div className="pr-10 pb-1 hover:text-[#f5c4df] cursor-pointer" onClick={()=> setCurrentDropdown(currentDropdown === "about" ? null : "about")} > about. </div>
                  <div className="pr-10 pb-1 hover:text-[#f5c4df] cursor-pointer" onClick={()=> setCurrentDropdown(currentDropdown === "projects" ? null : "projects")} > projects.</div>
                  <div className="pr-10 pb-1 hover:text-[#f5c4df]" onClick={()=> setCurrentDropdown(currentDropdown === "email" ? null : "email")}> email.</div> 
                  <div className=" hover:text-[#f5c4df] cursor-pointer" onClick={()=> setCurrentDropdown(currentDropdown === "coolstuff" ? null : "coolstuff")}> cool stuff. </div> 
              </div>
              <AnimatePresence> 
                { currentDropdown === "about" && (
                <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="list-disc flex flex-col font-mono text-shadow shadow-red-200 text-white  text-lg xl:text-xl 2xl:text-2xl"> 
                  <div>hi I'm disco currently studying software dev at <a 
                    href="fractalbootcamp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#f5c4df]"
                    >fractal tech</a> </div>
                </motion.div> )}
              </AnimatePresence>
              <AnimatePresence> 
                { currentDropdown === "projects" && (
                <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="list-disc flex flex-col font-mono text-shadow shadow-red-200 text-white  text-lg xl:text-xl 2xl:text-2xl"> 
                  <div className="pb-2 underline hover:text-[#f5c4df]"> <a href="https://pink-tank-toe.netlify.app"> tic tac toe</a></div>
                  <div className="pb-2 underline hover:text-[#f5c4df]"> <a href="https://disco-algo-viz.netlify.app"> algorithm vizualizations</a></div>
                  <div className="pb-2 underline hover:text-[#f5c4df]"> <a href="https://psychoanalyze-dev.vercel.app/"> psychoanalyze dev</a></div>
                </motion.div> )}
              </AnimatePresence>
              <AnimatePresence> 
                { currentDropdown === "email" && (
                <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="list-disc flex flex-col font-mono text-shadow shadow-red-200 text-white text-lg xl:text-xl 2xl:text-2xl"> 
                  <div className="pr-10 underline hover:text-[#f5c4df]"> <a href="mailto:hyperdiscogirl@protonmail.com"> hyperdiscogirl@protonmail.com </a></div>
                </motion.div> )}
              </AnimatePresence>
              <AnimatePresence> 
                { currentDropdown === "coolstuff" && (
                <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="list-disc flex flex-col font-mono text-shadow shadow-red-200 text-white  text-lg xl:text-xl 2xl:text-2xl"> 
                  <div className="pr-10 underline hover:text-[#f5c4df]"> <a href="http://listen.hatnote.com/"> listen to wikipedia </a></div>
                </motion.div> )}
              </AnimatePresence>
              <div className=" text-white font-mono pt-5 lg:pt-10 text-shadow shadow-red-200 text-lg xl:text-xl 2xl:text-2xl"> 
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
      
    )
}
