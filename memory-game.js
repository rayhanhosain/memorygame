const whereImgs = document.querySelector("#where-imgs");
let matchNum = document.querySelector("#match-num");
let clicksLeft = document.querySelector("#clicks-left-count");
let matchNumCount;
let clicksLeftCount;
let restart = document.querySelector("#restart-button");


// this if condition is not working as i wanted. i wanted this to check wheter all the images are matched. If so, I wanted all the images to be removed and a text of compeletion to be shown. But it is not working as I wanted.
if (matchNumCount === 10) {
  whereImgs.innerText = "Congrats! You have matched them all";
  whereImgs.classList.add("text-after-all-match");
  start();

  //i wanted clickLeftCount to not becoming less than 0. If i became 0, i wanted an alert to be displaed. But it is not working.
} else if (clicksLeftCount == 0) {
  alert("You do not have any clicks left! Please Restart!");
} else {

  //i put this function so that i can restart the game later clicking on the restart button
  function start() {
    whereImgs.innerText = "";
    matchNumCount = 0;
    matchNum.innerText = matchNumCount;
    clicksLeftCount = 6;
    clicksLeft.innerText = clicksLeftCount;

    //this is an array where names and links of images are present.
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

    //this sorts the images array in random order
    images.sort(() => {
      return 0.5 - Math.random();
    });
    console.log(images);

    let arrOfImgNum = [];
// it's not understandable, what you meant to achieve in this game. so comment purpose of functions here, so that it can be understood, and a readme file.
//images object will be looped through one by one and for each object, one img tag will be made where the images will be put serially after the random sort done previously
    images.forEach((obj, imgNum) => {
      const singleImage = document.createElement("img");
      singleImage.src = "./image/question-mark.jpg";
      singleImage.dataset.imgNum = imgNum;
      let singleImageField = whereImgs.appendChild(singleImage);

      //checks if the clicksLeftCount is greater than 0. If it is greater than 0, click event listener is added in each photo. After each click, clickLeftCount is decreased by one.
      if (clicksLeftCount > 0) {
        singleImageField.addEventListener("click", () => {
          clicksLeftCount--;
          clicksLeft.innerText = clicksLeftCount;

          //after click on a particular image, this condition checks if arrOfImg's length is 0. 
          //If so, the that picture gets changed by according to the index number and pushes the index number to the arrOfImg number.
          if (arrOfImgNum.length === 0) {
            singleImage.src = images[imgNum].imgLink;
            arrOfImgNum.push(imgNum);

            /*this checks whether the length of arrOfImgNumber is 1 and the index of the clicked image 
            is the same as that of the previous click. That means, this whether one previous click was 
            made and whther it is not the same image that was clicked before. If one previous click 
            was made and it is the not the same indexed field as before, this condition applies*/
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
            //this checks the  1st clicked images name matches with the 2nd clicked image form the images array
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
      }
    });
  }
}
start();

restart.addEventListener("click", start);
