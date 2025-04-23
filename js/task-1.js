const categoryEl = document.querySelectorAll("#categories > li");
console.log("Number of categories: " + categoryEl.length);

categoryEl.forEach((category) => {
  const titelEl = category.querySelector("h2").textContent;
  console.log(`Category: ${titelEl}`);
  const numbEl = category.querySelectorAll("ul li").length;
  console.log("Elements: " + numbEl);
});

document.querySelectorAll(".item > ul").forEach((ul) => {
  if (!ul.hasAttribute("id") && !ul.hasAttribute("class")) {
    ul.classList.add("js-ul-class");
  }
});
document.querySelectorAll(".js-ul-class > li").forEach((li) => {
  if (!li.hasAttribute("class")) {
    li.classList.add("js-li-class");
  }
});

const categoriesEl = document.querySelector("#categories");
categoriesEl.setAttribute("class", "categories-list");
