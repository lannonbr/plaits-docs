/** @jsx h */
import { h } from "preact";
import { Helmet } from "react-helmet";

export default ({ children, ...props }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link rel="stylesheet" href="/style.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter&display=swa"
        />
        <title>Plaits Cheat Sheet</title>
      </Helmet>
      <header className="bg-green-400 p-2 mb-4">
        <div className="max-w-6xl w-full mx-auto px-4">
          <h1>Plaits Cheat Sheet</h1>
        </div>
      </header>
      <div className="flex-1 max-w-6xl w-full mx-auto px-4">{children}</div>
      <footer className="bg-gray-300">
        <p className="max-w-6xl mx-auto p-2 mb-0 text-center">
          The content on this website was provided by Mutable Instruments under
          a cc-by-sa 3.0 license and is distributed under the same license.
        </p>
      </footer>
    </div>
  );
};
