// Imperative drawing is isolated from the React interface and disposed on unmount.
export function createRunner(canvas, onChange) {
  const ctx = canvas.getContext("2d");
  let disposed = false,
    frameId = 0,
    lastEmit = -1;
  const W = 640,
    H = 300,
    floor = 247;
  let state = "idle",
    elapsed = 0,
    scenery = 0,
    nextObstacle = 1.5,
    obstacles = [],
    particles = [],
    lastTime = 0,
    best = 0;
  const player = { x: 85, y: floor - 36, w: 23, h: 36, vy: 0, grounded: true };
  try {
    best = Math.min(30, Number(localStorage.getItem("gp-crimson-best")) || 0);
  } catch {}

  function fitCanvas() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(canvas.clientWidth * dpr);
    canvas.height = Math.round(canvas.clientHeight * dpr);
  }
  const resizeObserver = new ResizeObserver(fitCanvas);
  resizeObserver.observe(canvas);
  fitCanvas();
  function polygon(points, fill) {
    ctx.fillStyle = fill;
    ctx.beginPath();
    points.forEach((p, i) => (i ? ctx.lineTo(...p) : ctx.moveTo(...p)));
    ctx.closePath();
    ctx.fill();
  }
  function render() {
    ctx.setTransform(canvas.width / W, 0, 0, canvas.height / H, 0, 0);
    ctx.fillStyle = "#141414";
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "#242323";
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = 7; y < H; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }
    ctx.fillStyle = "#65212a";
    ctx.beginPath();
    ctx.arc(490, 73, 32, 0, Math.PI * 2);
    ctx.fill();
    for (let i = 0; i < 19; i++) {
      const x =
        ((((i * 71 - scenery * 0.16) % (W + 80)) + W + 80) % (W + 80)) - 40;
      const h = 30 + ((i * 31) % 75);
      ctx.fillStyle = i % 2 ? "#232022" : "#2a2325";
      ctx.fillRect(x, floor - h, 38, h);
      if (i % 3 === 0)
        polygon(
          [
            [x + 5, floor - h],
            [x + 18, floor - h - 25],
            [x + 31, floor - h],
          ],
          "#2a2325",
        );
    }
    ctx.fillStyle = "#a7a095";
    ctx.font = "700 9px monospace";
    ctx.fillText("GP // CRIMSON DISTRICT", 19, 22);
    ctx.fillStyle = "#ff2444";
    ctx.fillRect(0, floor + 2, W, 2);
    ctx.fillStyle = "#222";
    ctx.fillRect(0, floor + 4, W, H - floor);
    ctx.fillStyle = "#645754";
    for (let i = 0; i < 12; i++) {
      let x = (((i * 65 - scenery) % (W + 65)) + W + 65) % (W + 65);
      ctx.fillRect(x, floor + 19, 17, 1);
    }
    const py = player.y,
      px = player.x;
    polygon(
      [
        [px + 5, py + 8],
        [px - 27, py + 3 + Math.sin(scenery / 25) * 4],
        [px - 43, py + 17],
        [px + 7, py + 14],
      ],
      "#ff2444",
    );
    ctx.fillStyle = "#fffdf7";
    ctx.fillRect(px + 4, py, 18, 14);
    ctx.fillRect(px + 2, py + 14, 21, 17);
    ctx.fillStyle = "#101010";
    ctx.fillRect(px + 16, py + 5, 5, 3);
    ctx.fillRect(px + 5, py, 17, 4);
    ctx.fillStyle = "#fffdf7";
    let stride =
      player.grounded && state === "running" ? Math.sin(scenery / 14) * 4 : 0;
    ctx.fillRect(px + 3 + stride, py + 29, 7, 8);
    ctx.fillRect(px + 16 - stride, py + 29, 7, 8);
    ctx.fillStyle = "#9a968d";
    ctx.fillRect(px + 23, py + 15, 3, 20);
    ctx.fillRect(px + 18, py + 22, 13, 3);
    obstacles.forEach((o) => {
      ctx.fillStyle = "#ff2444";
      ctx.fillRect(o.x, o.y, o.w, o.h);
      ctx.fillStyle = "#ff6370";
      ctx.fillRect(o.x, o.y, 3, o.h);
      ctx.fillStyle = "#441820";
      ctx.fillRect(o.x + 7, o.y + 8, o.w - 12, 3);
    });
    particles.forEach((p) => {
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    });
    ctx.globalAlpha = 1;
    if (state === "running") {
      ctx.fillStyle = "#fffdf7";
      ctx.font = "bold 20px monospace";
      ctx.textAlign = "right";
      ctx.fillText(elapsed.toFixed(1) + "s", W - 20, 30);
      ctx.textAlign = "left";
    }
  }
  function burst(x, y, color, count = 14) {
    for (let i = 0; i < count; i++)
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 240,
        vy: -Math.random() * 200,
        size: 2 + Math.random() * 4,
        life: 1,
        color,
      });
  }
  function update(dt) {
    elapsed += dt;
    scenery += dt * (250 + elapsed * 5);
    const speed = 250 + elapsed * 5;
    player.vy += 1550 * dt;
    player.y += player.vy * dt;
    if (player.y >= floor - player.h) {
      if (!player.grounded) burst(player.x + 10, floor, "#a09a90", 5);
      player.y = floor - player.h;
      player.vy = 0;
      player.grounded = true;
    }
    nextObstacle -= dt;
    if (nextObstacle <= 0) {
      const h = 28 + Math.random() * 18;
      obstacles.push({
        x: W + 30,
        y: floor - h,
        w: 22 + Math.random() * 10,
        h,
      });
      nextObstacle = 1.22 + Math.random() * 0.5;
    }
    obstacles.forEach((o) => (o.x -= speed * dt));
    obstacles = obstacles.filter((o) => o.x + o.w > -20);
    particles.forEach((p) => {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += 420 * dt;
      p.life -= dt * 2;
    });
    particles = particles.filter((p) => p.life > 0);
    if (elapsed - lastEmit > 0.09) {
      lastEmit = elapsed;
      publish();
    }
    if (
      obstacles.some(
        (o) =>
          player.x + player.w - 4 > o.x + 3 &&
          player.x + 4 < o.x + o.w - 3 &&
          player.y + player.h - 3 > o.y &&
          player.y + 4 < o.y + o.h,
      )
    ) {
      burst(player.x, player.y, "#ff2444", 22);
      finish(false);
    } else if (elapsed >= 30) finish(true);
  }

  function publish() {
    onChange({ state, elapsed: Math.min(elapsed, 30), best });
  }
  function frame(time) {
    if (disposed) return;
    const dt = Math.min((time - lastTime) / 1000, 0.035) || 0;
    lastTime = time;
    if (state === "running") update(dt);
    render();
    frameId = requestAnimationFrame(frame);
  }
  function jump() {
    if (state === "running" && player.grounded) {
      player.vy = -575;
      player.grounded = false;
      burst(player.x, floor, "#ff2444", 7);
    }
  }
  function start() {
    if (state === "paused") state = "running";
    else {
      elapsed = 0;
      scenery = 0;
      nextObstacle = 1.5;
      obstacles = [];
      particles = [];
      player.y = floor - player.h;
      player.vy = 0;
      player.grounded = true;
      state = "running";
      lastEmit = -1;
    }
    publish();
    canvas.focus({ preventScroll: true });
  }
  function finish(won) {
    state = won ? "won" : "over";
    elapsed = Math.min(elapsed, 30);
    if (elapsed > best) {
      best = elapsed;
      try {
        localStorage.setItem("gp-crimson-best", best.toFixed(1));
      } catch {}
    }
    publish();
  }
  function pause() {
    if (state === "running") {
      state = "paused";
      publish();
    }
  }
  function togglePause() {
    state === "paused" ? start() : pause();
  }
  function onKey(e) {
    if (["Space", "ArrowUp"].includes(e.code)) {
      e.preventDefault();
      jump();
    }
    if (e.code === "KeyP") {
      e.preventDefault();
      togglePause();
    }
  }
  function onPointer(e) {
    e.preventDefault();
    canvas.focus({ preventScroll: true });
    jump();
  }
  function onVisibility() {
    if (document.hidden) pause();
  }
  canvas.addEventListener("keydown", onKey);
  canvas.addEventListener("pointerdown", onPointer);
  document.addEventListener("visibilitychange", onVisibility);
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) pause();
    },
    { threshold: 0.1 },
  );
  intersectionObserver.observe(canvas);
  publish();
  frameId = requestAnimationFrame(frame);
  return {
    start,
    togglePause,
    dispose() {
      disposed = true;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      canvas.removeEventListener("keydown", onKey);
      canvas.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    },
  };
}
