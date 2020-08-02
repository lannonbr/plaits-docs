import React from "react";

const FilteredNoise = () => (
  <div>
    <h1 className="text-4xl font-bold">Filtered Noise</h1>
    <p>
      Variable-clock white noise processed by a resonant filter. The cutoff
      frequency of the filter is controlled by the <b>FREQUENCY</b> knob and the{" "}
      <b>V/OCT</b> CV input. This allows proper tracking!
    </p>

    <p>
      <b>HARMONICS</b>: filter response, from LP to BP to HP.
    </p>

    <p>
      <b>TIMBRE</b>: clock frequency.
    </p>

    <p>
      <b>MORPH</b>: filter resonance.
    </p>

    <p>
      <b>AUX</b>: variant employing two band-pass filters, with their separation
      controlled by <b>HARMONICS</b>.
    </p>
    <img
      src="https://mutable-instruments.net/modules/plaits/images/model_10_knobs.png"
      alt=""
    />
  </div>
);

export default FilteredNoise;
