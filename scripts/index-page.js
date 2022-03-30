let commentBox = [
  {
    image: "assets/images/photo-gallery-3.jpg",
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },

  {
    image: "assets/images/photo-gallery-2.jpg",
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },

  {
    image: "assets/images/photo-gallery-1.jpg",
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];

//Create a div to contain each comment

const sectionEl = document.querySelector(".comment-section");

//Created the main header
const headerEl = document.createElement("h1");
headerEl.classList.add("class", "comment-section__header");
headerEl.innerText = "Join the Conversation";
sectionEl.appendChild(headerEl);

//Create a form
const formEl = document.createElement("form");
formEl.classList.add("form__name");
sectionEl.appendChild(formEl);

const inputNameEl = document.createElement("p");
inputNameEl.classList.add("form__name");
inputNameEl.innerText = "NAME";
formEl.appendChild(inputNameEl);

const inputEl = document.createElement("input");
inputEl.setAttribute("type", "text");
inputEl.setAttribute("name", "fullname");
inputEl.innerText = "Enter Your Name";
formEl.appendChild(inputEl);

const inputCommentEl = document.createElement("p");
inputCommentEl.classList.add("form__comment");
inputCommentEl.innerText = "COMMENT";
formEl.appendChild(inputCommentEl);

const typeCommentEl = document.createElement("input");
typeCommentEl.setAttribute("type", "text");
typeCommentEl.setAttribute("name", "comment");
formEl.appendChild(typeCommentEl);

//Would be a function
const containerEl = document.createElement("article");

for (let i = commentBox.length - 1; i < commentBox.length; i--) {
  function displayComment(person) {
    containerEl.classList.add("comment-section__container");
    sectionEl.appendChild(containerEl);

    const divEl = document.createElement("div");
    divEl.classList.add("comment-section__div");
    containerEl.appendChild(divEl);

    const avatarEl = document.createElement("img");
    avatarEl.classList.add("comment-section__avatar");
    avatarEl.setAttribute("src", person.image);
    divEl.appendChild(avatarEl);

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

  const newComment = displayComment(commentBox[i]);
}