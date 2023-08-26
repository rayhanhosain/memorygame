const whereImgs = document.querySelector("#where-imgs");
let matchNum = document.querySelector("#match-num");
let clicksLeft = document.querySelector("#clicks-left-count");

let restart = document.querySelector("#restart-button");

function start() {
  whereImgs.innerText = "";
  let matchNumCount = 0;
  matchNum.innerText = matchNumCount;
  let clicksLeftCount = 100;
  clicksLeft.innerText = clicksLeftCount;

  const images = [
    { nm: "umbrella", imgLink: "./image/umbrella.jpg" },
    { nm: "flower", imgLink: "./image/flower.jpg" },
    { nm: "fruits", imgLink: "./image/fruits.jpg" },
    { nm: "glass", imgLink: "./image/glass.jpg" },
    { nm: "guava", imgLink: "./image/guava.jpg" },
    { nm: "light", imgLink: "./image/light.jpg" },
    { nm: "sky", imgLink: "./image/sky.jpg" },
    { nm: "tomato", imgLink: "./image/tomato.jpg" },
    { nm: "tree", imgLink: "./image/tree.jpg" },
    { nm: "tree-river", imgLink: "./image/tree-river.jpg" },
    { nm: "umbrella", imgLink: "./image/umbrella.jpg" },
    { nm: "flower", imgLink: "./image/flower.jpg" },
    { nm: "fruits", imgLink: "./image/fruits.jpg" },
    { nm: "glass", imgLink: "./image/glass.jpg" },
    { nm: "guava", imgLink: "./image/guava.jpg" },
    { nm: "light", imgLink: "./image/light.jpg" },
    { nm: "sky", imgLink: "./image/sky.jpg" },
    { nm: "tomato", imgLink: "./image/tomato.jpg" },
    { nm: "tree", imgLink: "./image/tree.jpg" },
    { nm: "tree-river", imgLink: "./image/tree-river.jpg" },
  ];

  images.sort(() => {
    return 0.5 - Math.random();
  });
  console.log(images);

  let arrOfImgNum = [];

  if (matchNumCount === 10) {
    whereImgs.innerText = "Congrats! You have matched them all";
    whereImgs.classList.add("text-after-all-match");
  } else {
    images.forEach((obj, imgNum) => {
      const singleImage = document.createElement("img");
      singleImage.src = "./image/question-mark.jpg";
      singleImage.dataset.imgNum = imgNum;
      let singleImageField = whereImgs.appendChild(singleImage);
      if (clicksLeftCount !== 0) {
        singleImageField.addEventListener("click", () => {
          clicksLeftCount--;
          clicksLeft.innerText = clicksLeftCount;
          if (arrOfImgNum.length === 0) {
            singleImage.src = images[imgNum].imgLink;
            arrOfImgNum.push(imgNum);
          } else if (arrOfImgNum.length === 1 && arrOfImgNum[0] !== imgNum) {
            singleImage.src = images[imgNum].imgLink;
            arrOfImgNum.push(imgNum);
            let imgNumOf1stClk = arrOfImgNum[0];
            let imgNumOf2ndClk = arrOfImgNum[1];
            let firstClkdImgDiv = document.querySelector(
              `img[data-img-num="${imgNumOf1stClk}"]`
            );
            let scndClkdImgDiv = document.querySelector(
              `img[data-img-num="${imgNumOf2ndClk}"]`
            );
            if (images[imgNum].nm === images[imgNumOf1stClk].nm) {
              setTimeout(() => {
                alert("Congrats! It is a match");
              }, 500);
              matchNumCount++;
              matchNum.innerText = matchNumCount;
              setTimeout(() => {
                arrOfImgNum = [];
                firstClkdImgDiv.src = "./image/tik.jpg";
                scndClkdImgDiv.src = "./image/tik.jpg";
              }, 500);
            } else if (images[imgNum].nm !== images[imgNumOf1stClk].nm) {
              setTimeout(() => {
                alert("Try again! It is not a match");
              }, 500);

              setTimeout(() => {
                arrOfImgNum = [];
                firstClkdImgDiv.src = "./image/question-mark.jpg";
                scndClkdImgDiv.src = "./image/question-mark.jpg";
              }, 500);
            }
          }
        });
      } else if (clicksLeftCount === 0) {
        alert("You do not have any clicks left! Please Restart!");
      }
    });
  }
}
start();

restart.addEventListener("click", start);
