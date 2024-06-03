import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Header = () => {
  return (
    <header> 
      <h1> Disco's Site v2</h1>
      <ul>
        <li> <a href="about">About</a> </li>
      </ul>
      

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
