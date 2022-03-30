let commentBox = [
  {
    image: "./assets/images/mohan-muruge.jpg",
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },

  {
    image: "./assets/images/mohan-muruge.jpg",
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },

  {
    image: "./assets/images/mohan-muruge.jpg",
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

//Would be a function
const containerEl = document.createElement("article");
for (let i = 0; i < commentBox.length; i++) {
  containerEl.classList.add("comment-section__container");
  sectionEl.appendChild(containerEl);

  const avatarEl = document.createElement("img");
  avatarEl.classList.add("comment-section__avatar");
  avatarEl.setAttribute("src", commentBox[i].image);
  containerEl.appendChild(avatarEl);

  const nameEl = document.createElement("p");
  nameEl.classList.add("comment-section__name");
  nameEl.innerText = commentBox[i].name;
  containerEl.appendChild(nameEl);

  const dateEl = document.createElement("p");
  dateEl.classList.add("comment-section__date");
  dateEl.innerText = commentBox[i].date;
  containerEl.appendChild(dateEl);

  const textEl = document.createElement("p");
  textEl.classList.add("comment-section__text");
  textEl.innerText = commentBox[i].comment;
  containerEl.appendChild(textEl);
}
console.log();
