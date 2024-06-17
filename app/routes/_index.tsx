import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Header = () => {
  return (
      <div>
        <header>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </header>
        <div className="h-screen flex pl-10 pt-10 flex-row bg-[radial-gradient(circle_at_50%_65%,rgba(218,29,107,0.83)_0%,rgba(20,10,10,0.9)_100%)]">
          <div>
          <img src="/disco.jpg" alt="Disco" className="rounded-full w-[100px] sm:w-[100px] lg:w-[300px] border-shadow-2xl border "/> 
          </div> 
          <header className="ml-3 pl-10 pt-10">  
            <h1 className="font-mono font-bold text-4xl pb-5 text-shadow shadow-red-200  text-pink-700"> disco </h1>
            <div className="list-disc flex sm:flex-col lg:flex-row font-mono text-shadow shadow-red-200 text-white text-lg"> 
                <ul className="pr-10"> <a href="./about">about.</a> </ul>
                <ul className="pr-10"> <a href="./contact"> contact. </a> </ul> 
                <ul className="pr-10"> <a href="./projects"> projects.</a></ul>
                <ul className="pr-10"> <a href="https://pink-tank-toe.netlify.app"> tictactoe.</a></ul>
                <ul className="pr-10"> <a href="./portfolio"> portfolio.</a> </ul>
            </div>
          </header>
        </div>  
      </div>
      
    )
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />
    </div>
  );
}
