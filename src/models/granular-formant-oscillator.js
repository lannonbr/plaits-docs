import React from "react";

const GranularFormantOscillator = () => (
  <div>
    <h1 className="text-4xl font-bold">Granular Formant Oscillator</h1>
    <p>
      Simulation of formants and filtered waveforms through the multiplication,
      addition and synchronization of segments of sine waves.
    </p>

    <p>
      <b>HARMONICS</b>: frequency ratio between formant 1 and 2.
    </p>

    <p>
      <b>TIMBRE</b>: formant frequency.
    </p>

    <p>
      <b>MORPH</b>: formant width and shape. This controls the shape of the
      window by which a sum of two synchronized sine oscillators is multiplied.
    </p>

    <p>
      <b>AUX</b>: simulation of filtered waveforms by windowed sine waves – a
      recreation of Braids’ Z*** models. <b>HARMONICS</b> controls the filter
      type (peaking, LP, BP, HP), with smooth variation from one response to
      another.
    </p>
    <img
      src="https://mutable-instruments.net/modules/plaits/images/model_04_knobs.png"
      alt=""
    />
  </div>
);

export default GranularFormantOscillator;
