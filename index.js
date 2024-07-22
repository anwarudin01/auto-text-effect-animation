const containerEl = document.querySelector(".container");

const careers = ["Web Developer", "Data Analisys", "Entrepreneur"];

let careerIndex = 0;
let characterIndex = 0;

upddateText();

function upddateText() {
  characterIndex++;
  containerEl.innerHTML = `<h1>I am ${
    careers[careerIndex].slice(0, 1) == "E" ? "an" : "a"
  } ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

  if (characterIndex == careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  setTimeout(upddateText, 300);
}
