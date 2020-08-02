import React from "react";

const AnalogHiHat = () => (
  <div>
    <h1 className="text-4xl font-bold">Analog Hi-hat Model</h1>

    <p>
      The recipe is similar for both <b>OUT</b> and <b>AUX</b>: a bunch of
      square oscillators generate a harsh, metallic tone. The resulting signal
      is mixed with clocked noise, sent to a HPF, then to a VCA. While{" "}
      <b>OUT</b> uses 6 square oscillators and a dirty transistor VCA,{" "}
      <b>AUX</b> uses three pairs of square oscillators ring-modulating each
      other, and a clean, linear VCA.
    </p>

    <p>
      <b>HARMONICS</b>: balance of the metallic and filtered noise.
    </p>

    <p>
      <b>TIMBRE</b>: high-pass filter cutoff.
    </p>

    <p>
      <b>MORPH</b>: decay time.
    </p>
  </div>
);

export default AnalogHiHat;
