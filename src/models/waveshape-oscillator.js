import React from "react";

const WaveShape = () => {
  return (
    <div>
      <h1 h1 className="text-4xl font-bold">
        Waveshaping oscillator
      </h1>
      <p>
        An asymmetric triangle processed by a waveshaper and a wavefolder.
        Sounds familiar? That’s the same signal processing chain as in{" "}
        <a href="https://mutable-instruments.net/modules/tides">Tides</a>, when
        it runs at audio rate!
      </p>

      <p>
        <b>HARMONICS</b>: waveshaper waveform.
      </p>

      <p>
        <b>TIMBRE</b>: wavefolder amount.
      </p>

      <p>
        <b>MORPH</b>: waveform asymmetry.
      </p>

      <p>
        <b>AUX</b>: variant employing another wavefolder curve, as available in{" "}
        <a href="https://mutable-instruments.net/modules/warps">Warps</a>.
      </p>
    </div>
  );
};

export default WaveShape;
