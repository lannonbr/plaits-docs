import React from "react";

const TwoOperatorFM = () => (
  <div>
    <h1 className="text-4xl font-bold">Two operator FM</h1>
    <p>Two sine-wave oscillators modulating each other’s phase.</p>

    <p>
      <b>HARMONICS</b>: frequency ratio.
    </p>

    <p>
      <b>TIMBRE</b>: modulation index.
    </p>

    <p>
      <b>MORPH</b>: feedback, in the form of operator 2 modulating its own phase
      (past 12 o’clock, rough!) or operator 1’s phase (before 12 o’clock,
      chaotic!).
    </p>

    <p>
      <b>AUX</b>: sub-oscillator.
    </p>

    <p>
      <b>Note</b>: turn <b>MORPH</b> fully CCW to get the same range of sounds
      as Braids’ <b>WTFM</b>. Turn <b>MORPH</b> fully CW to recreate the same
      sounds as Braids’
      <b>FBFM</b>. A gentler palette equivalent to Braids’ <b>FM</b> is found
      with <b>MORPH</b> at 12 o’clock.
    </p>
    <img
      src="https://mutable-instruments.net/modules/plaits/images/model_03_knobs.jpg"
      alt=""
    />
  </div>
);

export default TwoOperatorFM;
