const cat = document.getElementById("cat");
const title = document.getElementById("title");

let catX = 200;
let catY = 200;
let lastMoveTime = Date.now();
let activeFace = null; // only ONE cat face allowed

// 🐈 Cat follows mouse
document.addEventListener("mousemove", (e) => {
  lastMoveTime = Date.now();

  const mouseX = e.clientX;
  const mouseY = e.clientY + window.scrollY;

  catX += (mouseX - catX) * 0.08;
  catY += (mouseY - catY) * 0.08;

  cat.style.left = catX + "px";
  cat.style.top = catY + "px";

  cat.style.transform = mouseX < catX ? "scaleX(-1)" : "scaleX(1)";
});
document.addEventListener("mousemove", () => {
  const title = document.getElementById("title");
  title.style.transform = "translate(-50%, -50%) scale(1.05)";
  clearTimeout(window.titleTimeout);

  window.titleTimeout = setTimeout(() => {
    title.style.transform = "translate(-50%, -50%) scale(1)";
  }, 120);
});

// 🐈 Idle vs walking
setInterval(() => {
  if (Date.now() - lastMoveTime > 800) {
    cat.style.animation = "none";
  } else {
    cat.style.animation = "walk 0.4s infinite alternate";
  }
}, 100);

document.addEventListener("click", (e) => {
  /* 💗 HEART stays */
  const heart = document.createElement("div");
  heart.innerText = "💗";
  heart.className = "heart";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 900);

  /* 🐾 PAW WATERFALL */
  const pawCount = 5;

  for (let i = 0; i < pawCount; i++) {
    const paw = document.createElement("div");
    paw.className = "paw";
    paw.innerText = "🐾";

    paw.style.left = e.clientX + (Math.random() * 50 - 25) + "px";
    paw.style.top = "-60px";

    document.body.appendChild(paw);

    setTimeout(() => {
      paw.style.top = window.innerHeight + 80 + "px";
      paw.style.opacity = "0";
    }, i * 140);

    setTimeout(() => paw.remove(), 2600);
  }
});


  // fade out nicely
  setTimeout(() => {
    face.style.opacity = "0";
    face.style.transform = "scale(0.4)";
  }, 600);

  setTimeout(() => {
    if (face === activeFace) {
      face.remove();
      activeFace = null;
    }
  }, 1200);
});

// ✨ Title hover effect (unchanged but smooth)
title.addEventListener("mouseenter", () => {
  title.style.transform = "translate(-50%, -50%) scale(1.05)";
});

title.addEventListener("mouseleave", () => {
  title.style.transform = "translate(-50%, -50%) scale(1)";
});

// 🧠 Gentle scroll sync
window.addEventListener("scroll", () => {
  catY += (window.scrollY + window.innerHeight / 2 - catY) * 0.02;
});
document.addEventListener("click", (e) => {
  /* 💗 HEART (kept) */
  const heart = document.createElement("div");
  heart.innerText = "💗";
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.fontSize = "22px";
  heart.style.pointerEvents = "none";
  heart.style.animation = "floatUp 0.8s ease forwards";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 800);

  /* 😺 CAT FACE WATERFALL */
  const faceCount = 6; // how many faces per click

  for (let i = 0; i < faceCount; i++) {
    const face = document.createElement("div");
    face.innerText = "😺";
    face.style.position = "fixed";
    face.style.left = e.clientX + (Math.random() * 40 - 20) + "px";
    face.style.top = "-50px";
    face.style.fontSize = "34px";
    face.style.pointerEvents = "none";
    face.style.opacity = "0.9";
    face.style.filter = "hue-rotate(310deg) saturate(170%)";
    face.style.transition = "top 2.2s ease-in, opacity 2.2s ease";

    document.body.appendChild(face);

    // staggered drop = waterfall effect
    setTimeout(() => {
      face.style.top = window.innerHeight + 60 + "px";
      face.style.opacity = "0";
    }, i * 120);

    setTimeout(() => face.remove(), 2600);
  }
});
