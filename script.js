const containerChildren = document.querySelector("body").children[0].children;

for (let i = 0; i < containerChildren.length - 1; i++) {
  let br = document.createElement("br");
  let div = document.createElement("div");
  div.className = "line";

  containerChildren.item(i).appendChild(div);
  containerChildren.item(i).appendChild(br);
}
