// for...of: útil cuando necesitas interrumpir o saltar iteraciones
for (const clip of pista.clips) {
  if (clip.duration < 10) {
    continue; // salta los clips de menos de 10 fotogramas
  }
  console.log(clip.name);
}

// forEach: más declarativo, no admite break ni continue
pista.clips.forEach(clip => {
  console.log(clip.name);
});
