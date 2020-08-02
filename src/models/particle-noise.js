import React from "react";

const ParticleNoise = () => (
  <div>
    <h1 className="text-4xl font-bold">Particle Noise</h1>
    <p>Dust noise processed by networks of all-pass or band-pass filters.</p>

    <p>
      <b>HARMONICS</b>: amount of frequency randomization.
    </p>

    <p>
      <b>TIMBRE</b>: particle density.
    </p>

    <p>
      <b>MORPH</b>: filter type – reverberating all-pass network before 12
      o’clock, then increasingly resonant band-pass filters.
    </p>

    <p>
      <b>AUX</b>: raw dust noise.
    </p>
  </div>
);

export default ParticleNoise;
