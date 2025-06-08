function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    func.apply(this, args);
  };
}

window.addEventListener(
  "scroll",
  throttle(function () {
    console.log("scrolling");
  }, 100)
);
