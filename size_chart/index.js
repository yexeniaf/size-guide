let IN = document.querySelectorAll(".inches");
let CM = document.querySelectorAll(".centimeters");
let btn = document.getElementById("marked");

btn.addEventListener('change', function () {
  if (this.checked) {
    for (let i = 0; i < IN.length; i++) {
      IN?.[i]?.classList?.add("active");
  }
  } else {
    CM.classList.add("active");
  }
});