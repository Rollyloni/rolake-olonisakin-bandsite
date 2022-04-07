const commentBox = [
  {
    image: "./assets/images/photo-gallery-1.jpg",
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },

  {
    image: "./assets/images/photo-gallery-2.jpg",
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },

  {
    image: "./assets/images/photo-gallery-3.jpg",
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];
//Get all elements needed

const sectionEl = document.querySelector(".comment-section");
const formEl = document.querySelector(".form__name");
const avatarEl = document.querySelector(".comment-section__avatar");
const inputNameEl = document.querySelector(".form__name");
const inputEl = document.querySelector("fullName");
const inputCommentEl = document.querySelector(".form__comment");
const typeCommentEl = document.querySelector("comment");
const buttonEl = document.querySelector(".form__button");

//Would be a function

//Function to create a new comment
const containerEl = document.createElement("article");
containerEl.classList.add("comment-section__container");
sectionEl.appendChild(containerEl);

function displayComment(person) {
  const divEl = document.createElement("div");
  divEl.classList.add("comment-section__div");
  containerEl.appendChild(divEl);

  const avatarEl = document.createElement("img");
  avatarEl.classList.add("comment-section__avatar");
  avatarEl.setAttribute("name", "avatar");
  avatarEl.setAttribute("src", person.image);
  divEl.appendChild(avatarEl);

  const nameDivEl = document.createElement("div");
  nameDivEl.classList.add("comment-section__name--div");
  containerEl.appendChild(nameDivEl);

  const nameEl = document.createElement("p");
  nameEl.classList.add("comment-section__name");
  nameEl.innerText = person.name;
  divEl.appendChild(nameEl);

  const dateEl = document.createElement("p");
  dateEl.classList.add("comment-section__date");
  dateEl.innerText = person.date;
  divEl.appendChild(dateEl);

  const textEl = document.createElement("p");
  textEl.classList.add("comment-section__text");
  textEl.innerText = person.comment;
  containerEl.appendChild(textEl);
}

//Loop for generationg comments

for (let i = 0; i < commentBox.length; i++) {
  displayComment(commentBox[i]);
}

// Event listener for form submission
formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const formEl = event.target;

  const nameInput = event.target.fullName.value;

  const imgInput = "./assets/images/mohan-muruge.jpg";

  const typeCommentInput = event.target.comment.value;

  //Error state

  if (nameInput === "" || typeCommentEl === "") {
    inputEl.style.borderColor = "red";
    typeCommentEl.style.borderColor = "red";
    alert("Please complete all required fields");
    return;
  }

  //New comment creator that pushes comment unto the screen
  const freshDate = new Date();
  commentBox.push({
    image: imgInput,
    name: nameInput,
    date:
      freshDate.getMonth() +
      1 +
      "/" +
      freshDate.getDate() +
      "/" +
      freshDate.getFullYear(),
    comment: typeCommentInput,
  });

  //Created a loop that clears the default comments after submission
  //The second loop re-renders the comments without the most recent one
  for (let i = 0; i < commentBox.length; i++) {
    containerEl.innerHTML = "";
    displayComment(commentBox[i]);

    for (let i = 0; i < commentBox.length - 1; i++) {
      displayComment(commentBox[i]);
    }
  }
  event.target.reset();
});

// Axios section
