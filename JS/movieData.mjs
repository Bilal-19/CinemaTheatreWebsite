const movieData = [
    {
        id: 1,
        movieName: "Kong: Skull Island",
        year: 2017,
        imageAddress: "kongskullisland.jpg",
        timeSlots: ["1pm", "3pm", "5pm", "7pm", "9pm", "11pm"],
        movieDuration: "2hr 32min"
    },
    {
        id: 2,
        movieName: "The Shawshank Redemption",
        year: 1994,
        imageAddress: "shawshank_redemption.jpeg",
        timeSlots: ["1pm", "3pm", "5pm", "7pm", "9pm", "11pm"],
        movieDuration: "2hr 22min"
    },
    {
        id: 3,
        movieName: "Beauty and the Beast",
        year: 2017,
        imageAddress: "beautyandthebeast.jpg",
        timeSlots: ["1pm", "3pm", "5pm", "7pm", "9pm", "11pm"],
        movieDuration: "2hr 9min"
    },
    {
        id: 4,
        movieName: "Ghost in the Shell",
        year: 2017,
        imageAddress: "ghostintheshell.jpg",
        timeSlots: ["1pm", "3pm", "5pm", "7pm", "9pm", "11pm"],
        movieDuration: "1hr 47min"
    },
    {
        id: 5,
        movieName: "The Dark Knight",
        year: 2008,
        imageAddress: "dark_knight.jpeg",
        timeSlots: ["1pm", "3pm", "5pm", "7pm", "9pm", "11pm"],
        movieDuration: "2hr 32min"
    },
    {
        id: 6,
        movieName: "Forrest Gump",
        year: 1994,
        imageAddress: "forrest_gump.jpeg",
        timeSlots: ["1pm", "3pm", "5pm", "7pm", "9pm", "11pm"],
        movieDuration: "2hr 22min"
    },
    {
        id: 7,
        movieName: "Inception",
        year: 2010,
        imageAddress: "Inception.jpeg",
        timeSlots: ["1pm", "3pm", "5pm", "7pm", "9pm", "11pm"],
        movieDuration: "2hr 28min"
    },
    {
        id: 8,
        movieName: "Fight Club",
        year: 1999,
        imageAddress: "FightClub.jpg",
        timeSlots: ["1pm", "3pm", "5pm", "7pm", "9pm", "11pm"],
        movieDuration: "2hr 19min"
    },
    {
        id: 9,
        movieName: "The Matrix",
        year: 1999,
        imageAddress: "theMatrix.jpeg",
        timeSlots: ["1pm", "3pm", "5pm", "7pm", "9pm", "11pm"],
        movieDuration: "2hr 16min"
    },
    {
        id: 10,
        movieName: "The Lion King",
        year: 2009,
        imageAddress: "lionKing.jpg",
        timeSlots: ["1pm", "3pm", "5pm", "7pm", "9pm", "11pm"],
        movieDuration: "1hr 58min"
    },
    {
        id: 11,
        movieName: "The Avengers: Endgame",
        year: 2019,
        imageAddress: "avengers.jpeg",
        timeSlots: ["1pm", "3pm", "5pm", "7pm", "9pm", "11pm"],
        movieDuration: "2hr 16min"
    },
    {
        id: 12,
        movieName: "The Social Network",
        year: 1999,
        imageAddress: "socialNetworkMovie.jpg",
        timeSlots: ["1pm", "3pm", "5pm", "7pm", "9pm", "11pm"],
        movieDuration: "2hrs"
    }
];

const showtimeEl = document.getElementById("showtime-data");

movieData.map((item) => {
    showtimeEl.innerHTML += `
     <div class="col-md-4 mb-4 mt-4">
      <div class="card">
          <img src="./media/${item.imageAddress}" class="set-card-image" alt="...">
          <div class="card-body">
            <h4 class="card-title mb-0"> ${item.movieName} ~ ${item.year}</h4>
            <p class="mb-0"><i class="fa-solid fa-clock"></i>${item.movieDuration}</p>
             <p class="mb-0">${item.timeSlots
            .map(
                (val) =>
                    `
                  <span class="badge bg-info">${val}</span>
                  `
            )
            .join(" ")}</p>
          </div>
        </div>
        </div>
    `;
});
