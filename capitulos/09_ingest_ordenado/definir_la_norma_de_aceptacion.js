const PROJECT_SPEC = {
  video: {
    resolutions: [
      { width: 3840, height: 2160 },  // 4K UHD
      { width: 1920, height: 1080 }   // Full HD
    ],
    framerates: [23.976, 24, 25, 29.97, 50, 59.94],
    codecs: ['h264', 'prores', 'dnxhd', 'braw'],
    colorSpaces: ['Rec. 709', 'Rec. 2020', 'DCI-P3']
  },
  audio: {
    sampleRates: [48000, 96000],
    bitDepths: [24, 32]
  },
  strictMode: false
};
