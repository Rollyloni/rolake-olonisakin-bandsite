const commentData = axios
  .get(
    "https://project-1-api.herokuapp.com/comments?api_key=b24f35ee-ae2e-4b80-bfb0-6b4836edbf96"
  )
  .then((response) => {
    console.log(response.data);

    const commentBox = [
      {
        image: "./assets/images/photo-gallery-1.jpg",
        name: response.data[0].name,
        date: response.data[0].timestamp,
        comment: response.data[0].comment,
      },
      {
        image: "./assets/images/photo-gallery-1.jpg",
        name: response.data[1].name,
        date: response.data[1].timestamp,
        comment: response.data[1].comment,
      },
      {
        image: "./assets/images/photo-gallery-1.jpg",
        name: response.data[2].name,
        date: response.data[2].timestamp,
        comment: response.data[2].comment,
      },
    ];
    console.log(commentBox);

    //Getting Elements
    const sectionEl = document.querySelector(".comment-section");
    const formEl = document.querySelector(".form__name");
    const avatarEl = document.querySelector(".comment-section__avatar");
    const inputNameEl = document.querySelector(".form__name");
    const inputEl = document.querySelector("fullName");
    const inputCommentEl = document.querySelector(".form__comment");
    const typeCommentEl = document.querySelector("comment");
    const buttonEl = document.querySelector(".form__button");

    //function to create comment
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
      avatarEl.setAttribute("src", "./assets/images/photo-gallery-1.jpg");
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
      dateEl.innerText = person.timestamp;
      divEl.appendChild(dateEl);

      const textEl = document.createElement("p");
      textEl.classList.add("comment-section__text");
      textEl.innerText = person.comment;
      containerEl.appendChild(textEl);
    }

    for (let i = 0; i < commentBox.length; i++) {
      displayComment(commentBox[i]);
    }

    // Event listener for form submission
    formEl.addEventListener("submit", (event) => {
      event.preventDefault();

      const test = axios.post(
        "https://project-1-api.herokuapp.com/comments?api_key=b24f35ee-ae2e-4b80-bfb0-6b4836edbf96",
        {
          name: event.target.fullName.value,
          comment: event.target.comment.value,
        }
      );

      //new comment

      event.target.reset();
      const postArray = response.data;
      for (let i = 3; i < postArray.length + 1; i++) {
        displayComment(postArray[i]);
      }
    });
  });

//Error state

// if (nameInput === "" || typeCommentEl === "") {
//   inputEl.style.borderColor = "red";
//   typeCommentEl.style.borderColor = "red";
//   alert("Please complete all required fields");
//   return;
// }
