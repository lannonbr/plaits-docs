import React from "react";

const HarmonicOscillator = () => (
  <div>
    <h1 className="text-4xl font-bold">Harmonic Oscillator</h1>
    <p>An additive mixture of harmonically-related sine waves.</p>

    <p>
      <b>HARMONICS</b>: number of bumps in the spectrum. Starts with one big
      bump, and progressively adds ripples around it.
    </p>

    <p>
      <b>TIMBRE</b>: index of the most prominent harmonic. This control is
      somewhat similar to the cutoff frequency of a band-pass filter.
    </p>

    <p>
      <b>MORPH</b>: bump shape – from flat and wide to peaked and narrow. This
      control is somewhat similar to the resonance of a band-pass filter.
    </p>

    <p>
      <b>AUX</b>: variant including only the subset of harmonics present in the
      drawbars of a Hammond organ (frequency ratios of 1, 2, 3, 4, 6, 8, 10 and
      12).
    </p>
    <img
      src="https://mutable-instruments.net/modules/plaits/images/model_05_knobs.png"
      alt=""
    />
  </div>
);

export default HarmonicOscillator;
