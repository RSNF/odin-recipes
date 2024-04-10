const menuSection = document.querySelector(".menu");
const recipeSection = document.querySelector(".recipe");

async function getContentFromPage(page) {

    let url = `odin-recipes/pages/${page}.html`;

    let file = await fetch(url)
    .then((res) => res.text())
    .then((text) => text);

    recipeSection.innerHTML = file;

    recipeSection.scrollIntoView(true)
}

menuSection.addEventListener("click", (e) => {

    if (e.target.id != "")
        getContentFromPage(e.target.id);
    }
);
