const about = document.getElementById("about")
const aboutPopup = document.getElementById("aboutPopup")

about.addEventListener("click", () => {
  aboutPopup.classList.toggle("open-popup")
})

document.addEventListener("click", (e) => {
  const constNotE = e.target.innerText
  const aboutText = "about"
  if (constNotE != aboutText) {
    aboutPopup.classList.remove("open-popup")
  }
})

document.querySelector("#year").textContent = new Date().getFullYear();
