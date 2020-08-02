/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import ModelDoc from "../components/model-doc.js";

const modelImages = preval`
  const fs = require('fs')
  const path = require('path')

  imgDir = path.resolve(__dirname, 'src/images/')

  let files = fs.readdirSync(imgDir).map(file => {
    return {
      name: file.split(".")[0],
      image: fs.readFileSync(path.join(imgDir, file), 'base64')
    };
  })
  module.exports = files
`;

function LED({ idx, currIdx, modelType }) {
  return (
    <div
      className="inline-block border w-4 h-4 rounded-full"
      style={{
        placeSelf: "center center",
        backgroundColor:
          idx === currIdx ? (modelType === 0 ? "green" : "red") : "#cbd5e0",
      }}
    />
  );
}

export default () => {
  const [modelType, setModelType] = useState(0);
  const [idx, setIdx] = useState(0);

  const leds = [0, 0, 0, 0, 0, 0, 0, 0].map((_, i) => (
    <LED currIdx={idx} idx={i} modelType={modelType} />
  ));

  return (
    <main>
      <p>
        This is an interactable version of the{" "}
        <a href="https://mutable-instruments.net/modules/plaits/">
          Mutable Instruments Plaits
        </a>{" "}
        model listing.
      </p>
      <p className="my-4">
        Select a model by using the two buttons to cycle through either the
        synthesis models on the left or percussive models on the right.
      </p>
      <section className="flex">
        <div className="mr-8">
          <div className="flex space-x-1 mb-1">
            <button
              modelType={0}
              className="bg-black w-6 h-6 rounded-full inline-block"
              onClick={() => {
                if (modelType === 0) {
                  setIdx((idx + 1) % 8);
                } else {
                  setModelType(0);
                }
              }}
            />
            <div className="w-6 h-6 inline-block" />
            <button
              modelType={1}
              className="bg-black w-6 h-6 rounded-full inline-block"
              onClick={() => {
                if (modelType === 1) {
                  setIdx((idx + 1) % 8);
                } else {
                  setModelType(1);
                }
              }}
            />
          </div>
          <div
            className="grid grid-flow-col col-gap-1"
            style={{
              gridTemplateRows: "repeat(8, 1.5rem)",
              gridTemplateColumns: "repeat(3, 1.5rem)",
            }}
          >
            {modelImages.slice(0, 8).map((img) => {
              return (
                <img
                  src={`data:image/png;base64,${img.image}`}
                  alt=""
                  className="w-6 h-6"
                />
              );
            })}
            {leds}
            {modelImages.slice(8).map((img) => {
              return (
                <img
                  src={`data:image/png;base64,${img.image}`}
                  alt=""
                  className="w-6 h-6"
                />
              );
            })}
          </div>
        </div>
        <ModelDoc modelType={modelType} idx={idx} />
      </section>
    </main>
  );
};
