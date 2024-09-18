const lenis = new Lenis({
  duration: 1.2, // Decrease this value to increase scroll speed (default is 1.8)
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
