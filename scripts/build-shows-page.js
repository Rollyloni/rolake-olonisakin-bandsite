const showsArray = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
  },
  {
    date: "Mon Sept 21 2021",
    venue: "Pier 3 East",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
  },
];

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
  venueEl.innerText = ticket.venue;
  ticketDivEl.appendChild(venueEl);

  const locationTitleEl = document.createElement("p");
  locationTitleEl.classList.add("ticket-section__title");
  locationTitleEl.innerText = "LOCATION";
  ticketDivEl.appendChild(locationTitleEl);

  const locationEl = document.createElement("p");
  locationEl.classList.add("ticket-section__location");
  locationEl.innerText = "San Francisco, CA";
  ticketDivEl.appendChild(locationEl);

  const buttonEl = document.createElement("button");
  buttonEl.classList.add("ticket-section__button");
  buttonEl.innerText = "BUY TICKETS";
  ticketDivEl.appendChild(buttonEl);
}

for (let i = 0; i < showsArray.length; i++) {
  const newTicket = createTicket(showsArray[i]);
}
