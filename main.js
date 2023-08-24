src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js">
WebFont.load({
  google: {
    families: ["Borel"]
  }
});
WebFont.load({
  google: {
    families: ["Roboto Condensed"]
  }
});
document.addEventListener("mousemove", function(event) {
  var cursor = document.querySelector(".cursor");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 58);
}