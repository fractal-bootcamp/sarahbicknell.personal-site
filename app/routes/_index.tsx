import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Header = () => {
  return (
    <header className="ml-3">  
      <h1 className="font-serif font-bold text-2xl  text-pink-950">Sarah Bicknell</h1>
      <div className="list-disc font-sans text-lg">
        <li className="text-black hover:text-gray-500"> <a href="./about">About</a> </li>
        <li className="text-black hover:text-gray-500"> <a href="./contact"> Contact </a> </li> 
        <li className=" text-black hover:text-gray-500"> <a href="./portfolio"> Portfolio</a> </li>
        <li className=" text-black hover:text-gray-500"> <a href="./projects"> Projects</a></li>
      </div>
    </header>
  )
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />
    </div>
  );
}
