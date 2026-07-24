const broadcastHDProfile = {
  name: 'Broadcast HD',
  rules: [
    { id: 'resolution',    expected: '1920x1080' },
    { id: 'framerate',     expected: 25 },
    { id: 'audioChannels', expected: 2 },
    { id: 'maxDuration',   expected: 3600 } // segundos
  ],
  formats: [
    { preset: 'H264_1080p_broadcast', suffix: '_MASTER' },
    { preset: 'H264_720p_proxy',      suffix: '_PROXY' }
  ]
};
