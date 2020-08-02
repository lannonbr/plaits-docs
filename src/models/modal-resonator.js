import React from "react";

const ModalResonator = () => (
  <div>
    <h1 className="text-4xl font-bold">Modal Resonator</h1>
    <p>
      For your own pleasure, a mini-Rings! Please refer to the{" "}
      <a href="https://mutable-instruments.net/modules/rings/manual/">
        Rings manual
      </a>{" "}
      for more information about modulated/inharmonic string synthesis, and
      modal resonators.
    </p>

    <p>
      When the <b>TRIG</b> input is not patched, the string/resonator is excited
      by dust (particle) noise. Otherwise, the string is excited by a short
      burst of filtered white noise, or by a low-pass filtered click.
    </p>

    <p>
      <b>HARMONICS</b>: amount of inharmonicity, or material selection.
    </p>

    <p>
      <b>TIMBRE</b>: excitation brightness and dust density.
    </p>

    <p>
      <b>MORPH</b>: decay time (energy absorption).
    </p>

    <p>
      <b>AUX</b>: raw exciter signal.
    </p>

    <p>
      Note that Plaits uses a less powerful processor than Rings, and is thus
      limited to 3 voices of polyphony in inharmonic string modeling mode, and 1
      voice of polyphony with 24 partials in modal resonator mode. Plaits does
      not allow you to control the position of the excitation, which is set to
      25% of the length of the string/bar/tube.
    </p>
  </div>
);

export default ModalResonator;
