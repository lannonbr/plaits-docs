import React from "react";

const WavetableOscillator = () => (
  <div>
    <h1 className="text-4xl font-bold">Wavetable Oscillator</h1>
    <p>
      Four banks of 8x8 waveforms, accessed by row and column, with or without
      interpolation.
    </p>

    <p>
      <b>HARMONICS</b>: bank selection. 4 interpolated banks followed by the
      same 4 banks, in reverse order, without interpolation.
    </p>

    <ul>
      <li>
        Bank A: harmonically poor waveforms obtained by additive synthesis (sine
        harmonics, drawbar organ waveforms).
      </li>
      <li>
        Bank B: harmonically rich waveforms obtained by formant synthesis or
        waveshaping.
      </li>
      <li>
        Bank C: wavetables from the Shruthi-1 / Ambika, sampled from classic
        wavetable or ROM playback synths.
      </li>
      <li>
        Bank D: a joyous semi-random permutation of waveforms from the other 3
        banks.
      </li>
    </ul>

    <p>
      <b>TIMBRE</b>: row index. Within a row, the waves are sorted by spectral
      brightness (except for bank D which is a mess!).
    </p>

    <p>
      <b>MORPH</b>: column index.
    </p>

    <p>
      <b>AUX</b>: low-fi (5-bit) output.
    </p>
    <img
      src="https://mutable-instruments.net/modules/plaits/images/model_06_knobs.png"
      alt=""
    />
  </div>
);

export default WavetableOscillator;
