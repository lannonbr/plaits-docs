import React from "react";

const VowelAndSpeechSynthesis = () => (
  <div>
    <h1 className="text-4xl font-bold">Vowel and Speech Synthesis</h1>
    <p>A collection of speech synthesis algorithms.</p>

    <p>
      <b>HARMONICS</b>: crossfades between formant filtering, SAM, and LPC
      vowels, then goes through several banks of LPC words.
    </p>

    <p>
      <b>TIMBRE</b>: species selection, from Daleks to chipmunks. How does it
      work? This parameter either shifts the formants up or down independently
      of the pitch; or underclocks/overclocks the emulated LPC chip (with
      appropriate compensation to keep the pitch unchanged).
    </p>

    <p>
      <b>MORPH</b>: phoneme or word segment selection. When <b>HARMONICS</b> is
      past 11 o’clock, a list of words can be scanned through by turning the{" "}
      <b>MORPH</b> knob or by sending a CV to the corresponding input. One can
      also patch the trigger input <b>[3]</b> to trigger the utterance of a
      word, use the <b>FM</b> attenuverter to control the intonation and the{" "}
      <b>MORPH</b> attenuverter to control speed.
    </p>

    <p>
      <b>AUX</b>: unfiltered vocal cords’ signal.
    </p>
  </div>
);

export default VowelAndSpeechSynthesis;
