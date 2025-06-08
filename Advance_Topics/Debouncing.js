function debounce(func, delay) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func.apply(this, args);
      timerId = null;
    }, delay);
  };
}

window.addEventListener(
  "resize",
  debounce(function () {
    console.log("resizing");
  }, 500)
);
