import React from "react";

const AnalogSnareDrum = () => (
  <div>
    <h1 className="text-4xl font-bold">Analog Snare Drum Model</h1>

    <p>
      The drum machine emulated on <b>OUT</b> employs a bunch of bridged
      T-networks, one for each mode of the shell, excited by a nicely shaped
      pulse; plus some band-pass filtered noise. As for the signal synthesized
      on <b>AUX</b>, it is based on a pair of frequency-modulated sine VCO,
      mixed with high-pass filtered noise.
    </p>

    <p>
      <b>HARMONICS</b>: balance of the harmonic and noisy components.
    </p>

    <p>
      <b>TIMBRE</b>: balance between the different modes of the drum.
    </p>

    <p>
      <b>MORPH</b>: decay time.
    </p>
  </div>
);

export default AnalogSnareDrum;
