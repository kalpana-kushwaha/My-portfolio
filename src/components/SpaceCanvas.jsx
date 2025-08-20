
import React, { useRef, useEffect } from 'react';

// Node and connection definitions
const NODES = [
  { label: 'Frontend', x: 0.18, y: 0.35, color: '#2196f3' }, // Blue
  { label: 'API Gateway', x: 0.5, y: 0.18, color: '#ffe066' }, // Yellow
  { label: 'Backend', x: 0.5, y: 0.5, color: '#43ea7f' }, // Green
  { label: 'Database', x: 0.82, y: 0.65, color: '#00eaff' }, // Cyan
  { label: 'AI/ML Service', x: 0.82, y: 0.35, color: '#b388ff' }, // Purple
];
// Easter egg/status log lines
const STATUS_LOGS = [
  '[INFO] Request processed in 132ms',
  '[SUCCESS] Build completed at 16:32',
  '[DB] Connected to cluster-01',
  '[INFO] Request processed',
  '[SUCCESS] Build Complete',
  '[INFO] Server running on port 3000',
  '[INFO] Connected to database',
  '[SUCCESS] All tests passed',
  '[INFO] Cache rebuilt',
  '[INFO] Migration complete',
  '[INFO] Listening for requests...',
  '[SUCCESS] Hot reload enabled',
  '[INFO] Pulling latest changes...',
  '[INFO] Shutting down server...',
  '[INFO] Restarting...',
  '[SUCCESS] Deployment complete',
  '[INFO] Cleaning up...',
  '[INFO] No vulnerabilities found',
  '[INFO] Running pre-commit hooks',
  '[SUCCESS] All systems operational',
];

const LOG_COLOR = 'rgba(180,255,255,0.22)';
const LOG_COLOR_BOLD = 'rgba(120,255,120,0.28)';


  const SpaceCanvas = () => {
    const canvasRef = useRef();
    const dpr = window.devicePixelRatio || 1;
    const packets = useRef([]); // {from, to, t, speed}
    const nodePulse = useRef(Array(NODES.length).fill(0));
    const mouse = useRef({ x: 0, y: 0, over: -1 });
    // For status logs
    const logs = useRef([]); // {text, y, opacity}
    const lastLogTime = useRef(Date.now());
    // For dynamic connections
    const connHighlight = useRef({ idx: -1, until: 0 });
    // For rare node/packet events
    const nodeEvent = useRef({ idx: -1, until: 0, color: '' });
    const packetEvents = useRef([]); // {from, to, t, fail, retry, color, timer}
const CONNECTIONS = [
  [0, 1], // Frontend -> API Gateway
  [1, 2], // API Gateway -> Backend
  [2, 3], // Backend -> Database
  [2, 4], // Backend -> AI/ML Service
  [1, 4], // API Gateway -> AI/ML Service
];

const PACKET_COLOR = '#fffbe6';
const PACKET_GLOW = '#00ffb3';

const GRID_COLOR = 'rgba(0,255,255,0.07)';
const BG_GRADIENT = ['#0a0d13', '#181c24'];

// ...existing code...

  // Helper: get node screen position
  function nodePos(idx, width, height) {
    const n = NODES[idx];
    return { x: n.x * width, y: n.y * height };
  }

  // Helper: check if mouse is over node
  function getHoveredNode(mx, my, width, height) {
    for (let i = 0; i < NODES.length; i++) {
      const { x, y } = nodePos(i, width, height);
      const r = 34;
      if ((mx - x) ** 2 + (my - y) ** 2 < r * r) return i;
    }
    return -1;
  }

  // Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);


    // Mouse events
    function onMove(e) {
      const mx = e.touches ? e.touches[0].clientX : e.clientX;
      const my = e.touches ? e.touches[0].clientY : e.clientY;
      mouse.current.x = mx;
      mouse.current.y = my;
      mouse.current.over = getHoveredNode(mx, my, width, height);
    }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);


    // Blueprint grid with subtle flicker
    let gridFlicker = 0;
    function drawGrid(now) {
      ctx.save();
      ctx.strokeStyle = GRID_COLOR;
      ctx.lineWidth = 1;
      const flicker = 1 + 0.03 * Math.sin(now * 0.0007 + gridFlicker);
      for (let x = 0; x < width; x += 64 * flicker) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 64 * flicker) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();
    }

    // Animate
    let last = Date.now();
    let animationId;
    function animate() {
      const now = Date.now();
      const dt = Math.min((now - last) / 1000, 0.07);
      last = now;


  // BG gradient with parallax
  const mx = (mouse.current.x || width/2) / width - 0.5;
  const my = (mouse.current.y || height/2) / height - 0.5;
  const grad = ctx.createLinearGradient(0, 0, 0, height);
  grad.addColorStop(0, BG_GRADIENT[0]);
  grad.addColorStop(1, BG_GRADIENT[1]);
  ctx.save();
  ctx.translate(mx * 24, my * 18); // grid parallax
  ctx.fillStyle = grad;
  ctx.fillRect(-32, -32, width + 64, height + 64);
  // Blueprint grid with flicker and parallax
  drawGrid(now);
  ctx.restore();


      // Connections (with dynamic highlight/fade, hover glow, parallax)
      ctx.save();
      ctx.globalAlpha = 0.32;
      for (let i = 0; i < CONNECTIONS.length; i++) {
        const [a, b] = CONNECTIONS[i];
        let p1 = nodePos(a, width, height);
        let p2 = nodePos(b, width, height);
        // Parallax: lines shift less than nodes
        p1 = { x: p1.x + mx * 12, y: p1.y + my * 9 };
        p2 = { x: p2.x + mx * 12, y: p2.y + my * 9 };
        // Highlighted line
        let highlight = connHighlight.current.idx === i && now < connHighlight.current.until;
        // Hovered node: brighten connected lines
        let hoverLine = (mouse.current.over === a || mouse.current.over === b);
        ctx.save();
        ctx.strokeStyle = highlight ? '#fffbe6' : (hoverLine ? '#fff' : '#00ffe7');
        ctx.shadowColor = highlight ? '#fffbe6' : (hoverLine ? '#fff' : '#00ffe7');
        ctx.shadowBlur = highlight || hoverLine ? 32 : 16;
        ctx.lineWidth = highlight || hoverLine ? 6 : 3.5;
        ctx.globalAlpha = highlight || hoverLine ? 0.7 : 0.32;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.restore();
        // Subtle animated flow (wireframe)
        ctx.save();
        ctx.strokeStyle = 'rgba(0,255,255,0.13)';
        ctx.setLineDash([12, 16]);
        ctx.lineDashOffset = -now * 0.04;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      }
      ctx.restore();


      // Data packets (with rare fail/retry, magnetism, parallax, reroute on hover)
      // Add new packets occasionally
      if (Math.random() < 0.025 && packets.current.length < 12) {
        const connIdx = Math.floor(Math.random() * CONNECTIONS.length);
        const [from, to] = CONNECTIONS[connIdx];
        // 2% chance to be a fail/retry event
        if (Math.random() < 0.02) {
          packetEvents.current.push({ from, to, t: 0, fail: true, retry: false, color: '#ff5252', timer: now + 1200 });
        } else {
          packets.current.push({ from, to, t: 0, speed: 0.25 + Math.random() * 0.25 });
        }
      }
      // Animate and draw packets
      for (let i = packets.current.length - 1; i >= 0; i--) {
        const pkt = packets.current[i];
        pkt.t += dt * pkt.speed;
        if (pkt.t > 1) {
          packets.current.splice(i, 1);
          continue;
        }
        let p1 = nodePos(pkt.from, width, height);
        let p2 = nodePos(pkt.to, width, height);
        // Parallax: nodes shift more than packets
        p1 = { x: p1.x + mx * 24, y: p1.y + my * 18 };
        p2 = { x: p2.x + mx * 24, y: p2.y + my * 18 };
        // Magnet pull if hovered node is near
        if (mouse.current.over === pkt.to) {
          const dx = p2.x - p1.x, dy = p2.y - p1.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          const pull = 1 + 0.08 * Math.sin(now * 0.002 + i);
          p2 = {
            x: p2.x + (dx/dist) * 18 * pull,
            y: p2.y + (dy/dist) * 18 * pull,
          };
        }
        // Reroute: if hovering a node, packets curve toward it
        if (mouse.current.over !== -1 && mouse.current.over !== pkt.from && mouse.current.over !== pkt.to) {
          const hub = nodePos(mouse.current.over, width, height);
          const t = pkt.t;
          // Quadratic bezier: from -> hub -> to
          const bx = (1-t)*(1-t)*p1.x + 2*(1-t)*t*hub.x + t*t*p2.x;
          const by = (1-t)*(1-t)*p1.y + 2*(1-t)*t*hub.y + t*t*p2.y;
          p1 = { x: bx, y: by };
        }
        const x = p1.x + (p2.x - p1.x) * pkt.t;
        const y = p1.y + (p2.y - p1.y) * pkt.t;
        ctx.save();
        ctx.globalAlpha = 0.7;
        ctx.shadowColor = PACKET_GLOW;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = PACKET_COLOR;
        ctx.fill();
        ctx.restore();
      }
      // Animate and draw fail/retry packets
      for (let i = packetEvents.current.length - 1; i >= 0; i--) {
        const pkt = packetEvents.current[i];
        pkt.t += dt * 0.22;
        if (pkt.fail && now > pkt.timer) {
          pkt.fail = false; pkt.retry = true; pkt.t = 0; pkt.color = '#43ea7f'; pkt.timer = now + 1200;
        }
        if (pkt.retry && pkt.t > 1) {
          packetEvents.current.splice(i, 1);
          continue;
        }
        if (!pkt.fail && !pkt.retry) continue;
        let p1 = nodePos(pkt.from, width, height);
        let p2 = nodePos(pkt.to, width, height);
        // Parallax
        p1 = { x: p1.x + mx * 24, y: p1.y + my * 18 };
        p2 = { x: p2.x + mx * 24, y: p2.y + my * 18 };
        const x = p1.x + (p2.x - p1.x) * pkt.t;
        const y = p1.y + (p2.y - p1.y) * pkt.t;
        ctx.save();
        ctx.globalAlpha = 0.7;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 16;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = pkt.color;
        ctx.fill();
        ctx.restore();
      }
      // Animate and draw fail/retry packets
      for (let i = packetEvents.current.length - 1; i >= 0; i--) {
        const pkt = packetEvents.current[i];
        pkt.t += dt * 0.22;
        if (pkt.fail && now > pkt.timer) {
          pkt.fail = false; pkt.retry = true; pkt.t = 0; pkt.color = '#43ea7f'; pkt.timer = now + 1200;
        }
        if (pkt.retry && pkt.t > 1) {
          packetEvents.current.splice(i, 1);
          continue;
        }
        if (!pkt.fail && !pkt.retry) continue;
        const p1 = nodePos(pkt.from, width, height);
        const p2 = nodePos(pkt.to, width, height);
        const x = p1.x + (p2.x - p1.x) * pkt.t;
        const y = p1.y + (p2.y - p1.y) * pkt.t;
        ctx.save();
        ctx.globalAlpha = 0.7;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 16;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = pkt.color;
        ctx.fill();
        ctx.restore();
      }


      // Node pulse
      for (let i = 0; i < NODES.length; i++) {
        nodePulse.current[i] += dt * 1.1 + Math.random() * 0.1;
      }

      // Draw nodes (with hover ripple, rare maintenance, parallax)
      for (let i = 0; i < NODES.length; i++) {
        const n = NODES[i];
        let { x, y } = nodePos(i, width, height);
        // Parallax: nodes shift more than grid/lines
        x += mx * 36;
        y += my * 27;
        // Pulse
        const pulse = 1 + 0.09 * Math.sin(nodePulse.current[i]);
        // Hover glow
        const hovered = mouse.current.over === i;
        // Maintenance event
        let color = n.color;
        if (nodeEvent.current.idx === i && now < nodeEvent.current.until) color = nodeEvent.current.color;
        ctx.save();
        ctx.globalAlpha = hovered ? 0.85 : 0.55;
        ctx.shadowColor = hovered ? '#fff' : color;
        ctx.shadowBlur = hovered ? 32 : 18;
        ctx.beginPath();
        ctx.arc(x, y, 34 * pulse, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
        // Ripple effect on hover
        if (hovered) {
          ctx.save();
          ctx.globalAlpha = 0.18;
          ctx.beginPath();
          ctx.arc(x, y, 54 + 8 * Math.sin(now * 0.005), 0, Math.PI * 2);
          ctx.closePath();
          ctx.fillStyle = color;
          ctx.fill();
          ctx.restore();
        }
        // Node label
        ctx.save();
        ctx.globalAlpha = 0.7;
        ctx.font = 'bold 18px Fira Mono, Menlo, monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = '#00ffe7';
        ctx.shadowBlur = 8;
        ctx.fillStyle = '#eaffff';
        ctx.fillText(n.label, x, y);
        ctx.restore();
      }


      // API call waves (faint ripples, random concentric events)
      ctx.save();
      ctx.globalAlpha = 0.09;
      for (let i = 0; i < NODES.length; i++) {
        const { x, y } = nodePos(i, width, height);
        for (let r = 60; r < 180; r += 40) {
          ctx.beginPath();
          ctx.arc(x, y, r + 8 * Math.sin(last * 0.0007 + i + r), 0, Math.PI * 2);
          ctx.strokeStyle = '#00ffe7';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        // Occasional ripple event
        if (Math.random() < 0.001) {
          ctx.beginPath();
          ctx.arc(x, y, 200 + 40 * Math.sin(now * 0.001), 0, Math.PI * 2);
          ctx.strokeStyle = '#fffbe6';
          ctx.lineWidth = 2.5;
          ctx.globalAlpha = 0.13;
          ctx.stroke();
        }
      }
      ctx.restore();
      // Status logs (Easter egg lines, faint system logs)
      // Add new log every 2-3s for better visibility
      if (now - lastLogTime.current > 2000 + Math.random() * 1000) {
        logs.current.push({
          text: STATUS_LOGS[Math.floor(Math.random() * STATUS_LOGS.length)],
          // Central vertical band for visibility
          y: height * 0.35 + Math.random() * height * 0.3,
          opacity: 0.3,
          t: 0,
        });
        lastLogTime.current = now;
      }
      // Animate and draw logs
      for (let i = logs.current.length - 1; i >= 0; i--) {
        const log = logs.current[i];
        log.t += dt * 1.5; // Move faster
        log.opacity += 0.018;
        if (log.opacity > 0.32) log.opacity = 0.32;
        // Move left
        ctx.save();
        ctx.globalAlpha = log.opacity;
        ctx.font = '18px Fira Mono, Menlo, monospace';
        ctx.fillStyle = log.text.includes('ERROR') ? 'rgba(255,80,80,0.28)' : (log.text.includes('SUCCESS') ? LOG_COLOR_BOLD : LOG_COLOR);
        ctx.fillText(log.text, 40 + log.t * 38, log.y);
        ctx.restore();
        if (40 + log.t * 38 > width + 200) logs.current.splice(i, 1);
      }

      // Dynamic connection highlight (every 3-7s)
      if (now > connHighlight.current.until) {
        if (Math.random() < 0.02) {
          connHighlight.current.idx = Math.floor(Math.random() * CONNECTIONS.length);
          connHighlight.current.until = now + 1200 + Math.random() * 1200;
        }
      }

      // Rare node maintenance event (every ~30s)
      if (now > nodeEvent.current.until && Math.random() < 0.001) {
        nodeEvent.current.idx = Math.floor(Math.random() * NODES.length);
        nodeEvent.current.color = '#ffeb3b';
        nodeEvent.current.until = now + 1800 + Math.random() * 1200;
      }

      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      cancelAnimationFrame(animationId);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        display: 'block',
        pointerEvents: 'auto',
        background: 'transparent',
        
      }}
      tabIndex={-1}
      aria-hidden="true"
    />
  );
};

export default SpaceCanvas;
