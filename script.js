const database = "actors.json";

fetch(database)
  .then((res) => res.json())
  .then((data) => handleActors(data));

function handleActors(data) {
  data.forEach(displayActors);
}

function displayActors(actors) {
  const template = document.querySelector("#list-template").content;
  const parent = document.querySelector(".section-wrapper");
  const clone = template.cloneNode(true);

  clone.querySelector(".actors").textContent = actors.fullname;
  clone.querySelector(".movies").textContent = actors.movie;
  parent.appendChild(clone);
}

document.querySelector(".list-wrapper h2").addEventListener("click", () => {
  document.querySelector(".movies").classList.add("movies-visible");
  console.log("works?");
});
