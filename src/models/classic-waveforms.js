import React from "react";

const ClassicWaveforms = () => (
  <div>
    <h1 className="text-4xl font-bold">Pair of classic waveforms</h1>
    <p>Virtual-analog synthesis of classic waveforms.</p>
    <p>
      <b>HARMONICS</b>: detuning between the two waves.
    </p>
    <p>
      <b>TIMBRE</b>: variable square, from narrow pulse to full square to
      hardsync formants.
    </p>
    <p>
      <b>MORPH</b>: variable saw, from triangle to saw with an increasingly wide
      notch (Braids’ CSAW).
    </p>
    <p>
      <b>AUX</b>: sum of two hardsync’ed waveforms, the shape of which is
      controlled by MORPH and detuning by HARMONICS.
    </p>
    <p>
      A <b>narrow pulse</b> or <b>wide notch</b> results in <b>silence</b>! Use
      this trick if you want to silence one of the two oscillators, to get a
      variable square or variable saw.
    </p>
    <img
      src="https://mutable-instruments.net/modules/plaits/images/model_01_knobs.png"
      alt=""
    />
  </div>
);

export default ClassicWaveforms;
