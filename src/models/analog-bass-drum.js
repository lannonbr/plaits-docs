import React from "react";

const AnalogBassDrum = () => (
  <div>
    <h1 className="text-4xl font-bold">Analog Bass Drum Model</h1>

    <p>
      No fancy acronyms or patented technology here… Just behavioral simulation
      of circuits from classic drum machines! The drum machine emulated on{" "}
      <b>OUT</b> employs a bridged T-network excited by a nicely shaped pulse.
      As for the signal synthesized on <b>AUX</b>, it uses a frequency-modulated
      triangle VCO, turned into a sine with a pair of diodes, and shaped by a
      dirty VCA.
    </p>

    <p>
      <b>HARMONICS</b>: attack sharpness and amount of overdrive.
    </p>

    <p>
      <b>TIMBRE</b>: brightness.
    </p>

    <p>
      <b>MORPH</b>: decay time.
    </p>

    <p>
      Without any signal patched to the <b>TRIG</b> input, a continuous tone is
      produced. Not particularly useful, but its amplitude can still be
      modulated by the <b>MORPH</b> knob and CV input!
    </p>
  </div>
);

export default AnalogBassDrum;
