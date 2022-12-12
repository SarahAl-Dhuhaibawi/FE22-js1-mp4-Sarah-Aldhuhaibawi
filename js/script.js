const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");
const stopBtn = document.querySelector("#stop");

const namnAnimation = {
  targets: "#namn",
  translateX: {
    value: "60px",
    delay: anime.stagger(100),
  },

  color: {
    value: "rgb(255, 98, 0)",
    delay: anime.stagger(500),
  },

  scale: {
    value: 3,
    delay: anime.stagger(200),
  },

  duration: 5000,
  easing: "easeInBounce",
  direction: "alternate",
  loop: true,
  autoplay: false,
};

// div programering språk(text)
const språkAnimation = {
  targets: "div",
  scale: 5,
  opacity: "0",
  easing: "linear",
  loop: true,
  duration: 6000,
  delay: anime.stagger(1000),
  autoplay: false,
};

const citatAnimation = {
  targets: "#h3-citat",
  backgroundColor: "hsl(0, 0%, 0%)",
  borderRadius: ["0%", "50%"],
  easing: "easeInOutQuad",
  translateY: {
    value: "-3rem",
    delay: anime.stagger(80),
  },
  color: {
    value: "rgb(0, 219, 222)",
    delay: anime.stagger(500),
  },

  scale: {
    value: 0.6,
    delay: anime.stagger(200),
  },

  duration: 15000,
  direction: "alternate",
  loop: true,
  autoplay: false,
};

const namn = anime(namnAnimation);
const citat = anime(citatAnimation);
const språk = anime(språkAnimation);

playBtn.addEventListener("click", function () {
  namn.play();
  citat.play();
  språk.play();
});

pauseBtn.addEventListener("click", function () {
  namn.pause();
  citat.pause();
  språk.pause();
});

stopBtn.addEventListener("click", function () {
  namn.restart();
  namn.pause();
  citat.restart();
  citat.pause();
  språk.restart();
  språk.pause();
});
