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
          <h1>Plaits Cheat Sheet</h1>
        </div>
      </header>
      <div className="max-w-6xl mx-auto px-2">{children}</div>
      <footer>
        The content on this website was provided by Mutable Instruments under a
        cc-by-sa 3.0 license and is distributed under the same license.
      </footer>
    </div>
  );
};
