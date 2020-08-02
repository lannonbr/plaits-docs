import React from "react";
import {
  ClassicWaveforms,
  WaveShape,
  TwoOperatorFM,
  GranularFormantOscillator,
  HarmonicOscillator,
  WavetableOscillator,
  Chords,
  VowelAndSpeechSynthesis,
  GranularCloud,
  FilteredNoise,
  ParticleNoise,
  InharmonicStringModeling,
  ModalResonator,
  AnalogBassDrum,
  AnalogSnareDrum,
  AnalogHiHat,
} from "../models/models.js";

const data = [
  [
    { content: <ClassicWaveforms /> },
    { content: <WaveShape /> },
    { content: <TwoOperatorFM /> },
    { content: <GranularFormantOscillator /> },
    { content: <HarmonicOscillator /> },
    { content: <WavetableOscillator /> },
    { content: <Chords /> },
    { content: <VowelAndSpeechSynthesis /> },
  ],
  [
    { content: <GranularCloud /> },
    { content: <FilteredNoise /> },
    { content: <ParticleNoise /> },
    { content: <InharmonicStringModeling /> },
    { content: <ModalResonator /> },
    { content: <AnalogBassDrum /> },
    { content: <AnalogSnareDrum /> },
    { content: <AnalogHiHat /> },
  ],
];

const ModelDoc = (props) => {
  let selectedModel = data[props.modelType][props.idx];
  return selectedModel.content;
};

export default ModelDoc;
