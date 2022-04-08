const showsData = axios
  .get(
    "https://project-1-api.herokuapp.com/showdates?api_key=b24f35ee-ae2e-4b80-bfb0-6b4836edbf96"
  )
  .then((response) => {
    const showsArray = response.data;
    console.log(response.data);

    const ticketEl = document.querySelector(".ticket-section");
    const ticketDivEl = document.createElement("article");

    const ticketHeaderEl = document.createElement("h1");
    ticketHeaderEl.classList.add("ticket-section__heading");
    ticketHeaderEl.innerText = "Shows";
    ticketEl.appendChild(ticketHeaderEl);

    //Created a hidden section for media Query
    const newDateTitleEl = document.createElement("p");
    newDateTitleEl.classList.add("ticket-section__title", "show", "date");
    newDateTitleEl.innerText = "DATE";
    ticketEl.appendChild(newDateTitleEl);

    const venueTitleEl = document.createElement("p");
    venueTitleEl.classList.add("ticket-section__title", "show", "venue");
    venueTitleEl.innerText = "VENUE";
    ticketEl.appendChild(venueTitleEl);

    const locationTitleEl = document.createElement("p");
    locationTitleEl.classList.add("ticket-section__title", "show");
    locationTitleEl.innerText = "LOCATION";
    ticketEl.appendChild(locationTitleEl);

    //Funtion to create each ticket card
    function createTicket(ticket) {
      const ticketDivEl = document.createElement("article");
      ticketDivEl.classList.add("ticket-section__container");
      ticketEl.appendChild(ticketDivEl);

      const dateTitleEl = document.createElement("p");
      dateTitleEl.classList.add("ticket-section__title");
      dateTitleEl.innerText = "DATE";
      ticketDivEl.appendChild(dateTitleEl);

      const dateEl = document.createElement("p");
      dateEl.classList.add("ticket-section__date");
      dateEl.innerText = ticket.date;
      ticketDivEl.appendChild(dateEl);

      const venueTitleEl = document.createElement("p");
      venueTitleEl.classList.add("ticket-section__title");
      venueTitleEl.innerText = "VENUE";
      ticketDivEl.appendChild(venueTitleEl);

      const venueEl = document.createElement("p");
      venueEl.classList.add("ticket-section__venue");
      venueEl.innerText = ticket.place;
      ticketDivEl.appendChild(venueEl);

      const locationTitleEl = document.createElement("p");
      locationTitleEl.classList.add("ticket-section__title");
      locationTitleEl.innerText = "LOCATION";
      ticketDivEl.appendChild(locationTitleEl);

      const locationEl = document.createElement("p");
      locationEl.classList.add("ticket-section__location");
      locationEl.innerText = ticket.location;
      ticketDivEl.appendChild(locationEl);

      const buttonEl = document.createElement("button");
      buttonEl.classList.add("ticket-section__button");
      buttonEl.innerText = "BUY TICKETS";
      ticketDivEl.appendChild(buttonEl);
    }

    for (let i = 0; i < showsArray.length; i++) {
      createTicket(showsArray[i]);
    }
  });
