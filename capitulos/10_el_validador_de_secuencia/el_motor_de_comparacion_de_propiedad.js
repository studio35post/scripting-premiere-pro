function validateSequence(props, profile) {
  const findings = [];

  // fps
  const actualFps = props.fps.numerator / props.fps.denominator;
  if (!fpsMatch(props.fps, profile.video.frameRate, profile.video.frameRateTolerance)) {
    findings.push({
      severity: "error",
      field:    "frameRate",
      expected: profile.video.frameRate,
      actual:   parseFloat(actualFps.toFixed(5)),
      location: `Secuencia: ${props.name}`,
      message:  `La secuencia tiene ${actualFps.toFixed(3)} fps; la especificación exige ${profile.video.frameRate} fps.`,
      fix:      "Ajusta los parámetros de la secuencia o crea una nueva con el fps correcto."
    });
  }

  // resolución
  if (props.width !== profile.video.frameWidth || props.height !== profile.video.frameHeight) {
    findings.push({
      severity: "error",
      field:    "resolution",
      expected: `${profile.video.frameWidth}×${profile.video.frameHeight}`,
      actual:   `${props.width}×${props.height}`,
      location: `Secuencia: ${props.name}`,
      message:  `Resolución ${props.width}×${props.height}; se esperan ${profile.video.frameWidth}×${profile.video.frameHeight}.`,
      fix:      "Ve a Ajustes de secuencia > Ajustes de vídeo y corrige las dimensiones."
    });
  }

  // pistas de audio
  if (props.audioTrackCount < profile.audio.channelCount) {
    findings.push({
      severity: "warning",
      field:    "audioTrackCount",
      expected: profile.audio.channelCount,
      actual:   props.audioTrackCount,
      location: `Secuencia: ${props.name}`,
      message:  `La secuencia tiene ${props.audioTrackCount} pistas de audio; la especificación requiere ${profile.audio.channelCount}.`,
      fix:      "Añade las pistas necesarias desde Secuencia > Añadir pistas de audio."
    });
  }

  return findings;
}
