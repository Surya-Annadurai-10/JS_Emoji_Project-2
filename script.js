let emojiContainer = document.querySelector(".emoji-container");
let input = document.querySelector(".input");

function showEmoji(searchValue) {
  let filtered = arr.filter((element) => {
    let tags = element.tags.join(" ").toLowerCase();
    let description = element.description.toLowerCase();
    let aliases = element.aliases.join(" ").toLowerCase();
    let category = element.category.toLowerCase();
    if (searchValue == undefined) {
      return true;
    }

    if (searchValue == "all") {
      return true;
    }

    if (tags.indexOf(searchValue) != -1) {
      return true;
    }

    if (description.indexOf(searchValue) != -1) {
      return true;
    }

    if (aliases.indexOf(searchValue) != -1) {
      return true;
    }

    if (category.indexOf(searchValue) != -1) {
      return true;
    }
  });

  filtered.forEach((value) => {
    let box = document.createElement("p");
    box.classList.add("emoji-box");
    box.innerText = value.emoji;

    //Copy Feature------------
    box.addEventListener("click" , (event) =>{
      let textCopy = event.target.innerText;
      let textArea = document.createElement("textarea");
      textArea.value = textCopy;
     document.body.appendChild(textArea)
      textArea.select();
      document.execCommand('copy');

      document.body.removeChild(textArea);

      let copied = document.createElement('div');
      copied.classList.add("copied");
      alert("Copied to Clipboard")
    })
    //--------------
    emojiContainer.appendChild(box);
 
   });
}

let all = document.querySelectorAll(".all").forEach((value) => {
  value.addEventListener("click", (event) => {
    emojiContainer.innerHTML = "";
    showEmoji(event.target.innerText.toLowerCase());
  });
});

input.addEventListener("input", () => {
  emojiContainer.innerHTML = "";
  showEmoji(input.value);
});

window.onload = () => {
  showEmoji();
};

