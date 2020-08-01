/** @jsx h */
import { h } from "preact";
import { Helmet } from "react-helmet";

export default ({ children, ...props }) => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="style.css" />
      </Helmet>
      <header className="bg-green-400 p-2">
        <div className="max-w-6xl w-full mx-auto">
          <h1>
            <a className="text-black" href="/">
              Plaits Cheat Sheet
            </a>
          </h1>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-2">{children}</div>
    </div>
  );
};
