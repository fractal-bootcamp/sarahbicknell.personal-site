import type { MetaFunction } from "@remix-run/node";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "disco" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [showProjects, setShowProjects] = useState(false)

    return (
      <div>
        <div className="relative h-screen bg-[radial-gradient(circle_at_50%_65%,rgba(218,29,107,0.83)_0%,rgba(20,10,10,0.9)_100%)]">
          <div className="absolute inset-0 bg-screen-lines flex pl-10 pt-10 lg:flex-row sm:flex-col">
            <div>
            <img src="/disco.jpg" alt="Disco" className="rounded-full w-[100px] sm:w-[100px] shadow-white lg:w-[300px] border-shadow-2xl border "/> 
            </div> 
            <div className="ml-3 pl-10 pt-10">  
              <h1 className="font-mono font-bold text-5xl pb-5 text-shadow shadow-red-200  text-pink-700"> disco </h1>
              <div className="list-disc flex sm:flex-col lg:flex-row font-mono text-shadow shadow-red-200 text-white text-xl pb-5"> 
                  <div className="pr-10 hover:text-[#f5c4df]"> <a href="./about">about.</a> </div>
                  <div className="pr-10 hover:text-[#f5c4df]"> <a href="./contact"> contact. </a> </div> 
                  <div onClick={()=> setShowProjects(!showProjects)} className="pr-10 hover:text-[#f5c4df] cursor-pointer"> projects.</div>
              </div>
              <AnimatePresence> 
                { showProjects && (
                <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="list-disc flex sm:flex-col lg:flex-row font-mono text-shadow shadow-red-200 text-white text-lg"> 
                  <div className="pr-10 hover:text-[#f5c4df]"> <a href="https://pink-tank-toe.netlify.app"> tictactoe</a></div>
                  <div className="pr-10 hover:text-[#f5c4df]"> <a href="https://disco-algo-viz.netlify.app"> algorithm vizualizations</a></div>
                  <div className="pr-10 hover:text-[#f5c4df]"> <a href="https://psychoanalyze-dev.vercel.app/"> psychoanalyze dev</a></div>
                </motion.div> )}
              </AnimatePresence>
              <div className=" text-white font-mono pt-5 text-lg"> 
                  <p className="hover:text-[#f5c4df]"><a href="https://x.com/hyperdiscogirl" > X </a></p>
                  <p className="hover:text-[#f5c4df]"><a href="https://github.com/sarahbicknell"> GitHub</a></p>
              </div> 
            </div>
          </div>
        </div>
      </div>
      
    )
}
