(async function () {
  "use strict";

  const canvas = document.getElementById("hero-3d-canvas");
  const heroBand = document.querySelector(".hero-band");
  if (!canvas || !heroBand) return;

  function draw2dFallback() {
    window.__HERO_3D_MODE__ = "fallback-2d";
    const ctx = canvas.getContext && canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize2d() {
      const rect = heroBand.getBoundingClientRect();
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function render2d(nowMs) {
      if (!document.hidden) {
        ctx.clearRect(0, 0, w, h);
        const t = nowMs * 0.0014;
        for (let y = 16; y < h; y += 28) {
          for (let x = 16; x < w; x += 28) {
            const wave = Math.sin(x * 0.015 + t) * Math.cos(y * 0.018 - t * 0.7);
            const alpha = 0.06 + Math.max(0, wave) * 0.08;
            ctx.fillStyle = "rgba(34, 197, 94, " + alpha.toFixed(3) + ")";
            ctx.beginPath();
            ctx.arc(x, y, 1.15, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      window.requestAnimationFrame(render2d);
    }

    resize2d();
    window.addEventListener("resize", resize2d);
    window.requestAnimationFrame(render2d);
  }

  let THREE;
  try {
    THREE = await import("https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js");
  } catch (_) {
    draw2dFallback();
    return;
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
  } catch (_) {
    draw2dFallback();
    return;
  }

  window.__HERO_3D_MODE__ = "webgl";
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 60);
  camera.position.set(0, 0, 7.4);

  // Lighting rig matching dark obsidian + emerald / cyan / violet pillars
  const ambientLight = new THREE.AmbientLight(0xdbeafe, 0.65);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
  keyLight.position.set(4, 5, 6);
  scene.add(keyLight);

  const emeraldLight = new THREE.PointLight(0x22c55e, 18, 16);
  emeraldLight.position.set(2.8, 1.8, 3.6);
  scene.add(emeraldLight);

  const cyanLight = new THREE.PointLight(0x38bdf8, 14, 16);
  cyanLight.position.set(-3.5, 2.5, 4);
  scene.add(cyanLight);

  const violetLight = new THREE.PointLight(0xa78bfa, 12, 16);
  violetLight.position.set(3.8, -2.8, 3.5);
  scene.add(violetLight);

  // Sculpture centerpiece
  const sculpture = new THREE.Group();
  scene.add(sculpture);

  const coreGeo = new THREE.IcosahedronGeometry(1.48, 1);
  const coreMat = new THREE.MeshPhysicalMaterial({
    color: 0x0d1420,
    metalness: 0.2,
    roughness: 0.14,
    clearcoat: 1.0,
    clearcoatRoughness: 0.08,
    flatShading: true
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  sculpture.add(coreMesh);

  const wireGeo = new THREE.EdgesGeometry(coreGeo);
  const wireMat = new THREE.LineBasicMaterial({
    color: 0x22c55e,
    transparent: true,
    opacity: 0.45
  });
  const coreWire = new THREE.LineSegments(wireGeo, wireMat);
  coreWire.scale.setScalar(1.008);
  sculpture.add(coreWire);

  const outerCageGeo = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.12, 0));
  const outerCageMat = new THREE.LineBasicMaterial({
    color: 0xf1f3f5,
    transparent: true,
    opacity: 0.16
  });
  const outerCage = new THREE.LineSegments(outerCageGeo, outerCageMat);
  sculpture.add(outerCage);

  // Orbital rings + beacon spheres
  const ring1Pivot = new THREE.Group();
  ring1Pivot.rotation.set(Math.PI * 0.34, 0.28, 0);
  sculpture.add(ring1Pivot);

  const ring1Mesh = new THREE.Mesh(
    new THREE.TorusGeometry(2.58, 0.024, 16, 128),
    new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.85,
      metalness: 0.8,
      roughness: 0.2
    })
  );
  ring1Pivot.add(ring1Mesh);

  const beacon1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.075, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
  );
  beacon1.position.set(2.58, 0, 0);
  ring1Pivot.add(beacon1);

  const ring2Pivot = new THREE.Group();
  ring2Pivot.rotation.set(-Math.PI * 0.28, -0.45, 0.22);
  sculpture.add(ring2Pivot);

  const ring2Mesh = new THREE.Mesh(
    new THREE.TorusGeometry(3.0, 0.018, 16, 128),
    new THREE.MeshStandardMaterial({
      color: 0xa78bfa,
      emissive: 0xa78bfa,
      emissiveIntensity: 0.72,
      metalness: 0.85,
      roughness: 0.24
    })
  );
  ring2Pivot.add(ring2Mesh);

  const beacon2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.055, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0x22c55e })
  );
  beacon2.position.set(-3.0, 0, 0);
  ring2Pivot.add(beacon2);

  // Procedural soft circular glow texture for 3D particle cloud
  function createGlowTexture() {
    const texCanvas = document.createElement("canvas");
    texCanvas.width = 64;
    texCanvas.height = 64;
    const ctx = texCanvas.getContext("2d");
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.35, "rgba(255,255,255,0.65)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(texCanvas);
    return tex;
  }

  const particleCount = 160;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const palette = [
    new THREE.Color(0x22c55e),
    new THREE.Color(0x38bdf8),
    new THREE.Color(0xa78bfa),
    new THREE.Color(0xf1f3f5)
  ];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 14.0;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8.0;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6.0 - 1.5;

    const c = palette[i % palette.length];
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.14,
    map: createGlowTexture(),
    vertexColors: true,
    transparent: true,
    opacity: 0.78,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const particleCloud = new THREE.Points(particleGeo, particleMat);
  scene.add(particleCloud);

  // Responsive layout placement
  function updateLayout() {
    const rect = heroBand.getBoundingClientRect();
    const w = Math.max(1, Math.floor(rect.width));
    const h = Math.max(1, Math.floor(rect.height));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    if (window.innerWidth > 920) {
      sculpture.position.set(1.95, 0.05, 0);
      sculpture.scale.setScalar(1.0);
    } else {
      sculpture.position.set(0, -0.35, 0);
      sculpture.scale.setScalar(0.82);
    }
  }

  updateLayout();
  window.addEventListener("resize", updateLayout);
  if (typeof window.ResizeObserver === "function") {
    const ro = new window.ResizeObserver(updateLayout);
    ro.observe(heroBand);
  }

  // Smooth pointer & scroll physics
  let targetPointerX = 0;
  let targetPointerY = 0;
  let currentPointerX = 0;
  let currentPointerY = 0;

  heroBand.addEventListener("pointermove", function (e) {
    const rect = heroBand.getBoundingClientRect();
    targetPointerX = ((e.clientX - rect.left) / Math.max(1, rect.width) - 0.5) * 2;
    targetPointerY = ((e.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 2;
  });

  heroBand.addEventListener("pointerleave", function () {
    targetPointerX = 0;
    targetPointerY = 0;
  });

  // Visibility & Intersection pausing for zero idle GPU waste
  let heroVisible = true;
  let rafId = null;

  if (typeof window.IntersectionObserver === "function") {
    const io = new window.IntersectionObserver(
      function (entries) {
        if (!entries || !entries.length) return;
        heroVisible = entries[0].isIntersecting;
      },
      { threshold: 0.02 }
    );
    io.observe(heroBand);
  }

  const clock = new THREE.Clock();
  let elapsed = 0;

  function animate() {
    rafId = window.requestAnimationFrame(animate);
    if (document.hidden || !heroVisible) {
      clock.getDelta();
      return;
    }

    const dt = Math.min(clock.getDelta(), 0.05);
    elapsed += dt;

    currentPointerX += (targetPointerX - currentPointerX) * 0.06;
    currentPointerY += (targetPointerY - currentPointerY) * 0.06;

    const scrollRatio = Math.min(1.5, window.scrollY / 600);

    // Core & outer cage continuous sculptural motion
    coreMesh.rotation.y = elapsed * 0.24 + currentPointerX * 0.35;
    coreMesh.rotation.x = Math.sin(elapsed * 0.35) * 0.14 - currentPointerY * 0.25;
    coreWire.rotation.copy(coreMesh.rotation);

    outerCage.rotation.y = -elapsed * 0.14 - currentPointerX * 0.18;
    outerCage.rotation.x = elapsed * 0.11 + currentPointerY * 0.15;

    // Orbit beacons & lights
    const a1 = elapsed * 0.85;
    beacon1.position.set(Math.cos(a1) * 2.58, Math.sin(a1) * 2.58, 0);
    ring1Pivot.rotation.z = elapsed * 0.08;

    const a2 = -elapsed * 0.65 + 1.4;
    beacon2.position.set(Math.cos(a2) * 3.0, Math.sin(a2) * 3.0, 0);
    ring2Pivot.rotation.z = 0.22 - elapsed * 0.06;

    emeraldLight.position.x = 2.6 + Math.cos(elapsed * 0.7) * 1.1;
    emeraldLight.position.y = 1.4 + Math.sin(elapsed * 0.7) * 1.0;

    sculpture.rotation.y = currentPointerX * 0.28 + scrollRatio * 0.55;
    sculpture.rotation.x = currentPointerY * 0.2 + scrollRatio * 0.18;

    camera.position.x = currentPointerX * 0.22;
    camera.position.y = -currentPointerY * 0.16 - scrollRatio * 0.35;
    camera.lookAt(0, 0, 0);

    particleCloud.rotation.y = elapsed * 0.025 + currentPointerX * 0.05;
    particleCloud.rotation.x = -currentPointerY * 0.04;

    renderer.render(scene, camera);
  }

  animate();
})();
