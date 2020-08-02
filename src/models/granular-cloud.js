import React from "react";

const GranularCloud = () => (
  <div>
    <h1 className="text-4xl font-bold">Granular Cloud</h1>
    <p>A swarm of 8 enveloped sawtooth waves.</p>

    <p>
      <b>HARMONICS</b>: amount of pitch randomization.
    </p>

    <p>
      <b>TIMBRE</b>: grain density.
    </p>

    <p>
      <b>MORPH</b>: grain duration and overlap. When this setting is fully CW,
      the grains merge into each other: the result is a stack of eight randomly
      frequency-modulated waveforms.
    </p>

    <p>
      <b>AUX</b>: variant with sine wave oscillators.
    </p>

    <p>
      To get a nice “supersaw” waveform, try a moderate amount of pitch
      randomization and grain density, with full grain overlap.
    </p>
  </div>
);

export default GranularCloud;
