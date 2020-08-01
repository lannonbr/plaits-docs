import React from "react";
import {
  ClassicWaveforms,
  WaveShape,
  TwoOperatorFM,
} from "../models/models.js";

const data = [
  [
    { content: <ClassicWaveforms /> },
    { content: <WaveShape /> },
    { content: <TwoOperatorFM /> },
    { content: "TODO" },
    { content: "TODO" },
    { content: "TODO" },
    { content: "TODO" },
    { content: "TODO" },
  ],
  [
    { content: "TODO" },
    { content: "TODO" },
    { content: "TODO" },
    { content: "TODO" },
    { content: "TODO" },
    { content: "TODO" },
    { content: "TODO" },
    { content: "TODO" },
  ],
];

const ModelDoc = (props) => {
  let selectedModel = data[props.modelType][props.idx];
  return selectedModel.content;
};

export default ModelDoc;
