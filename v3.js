const Card = createComponent({
  render(state, props) {
    const image =
      props.image ??
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";

    return `
            <div class="card">
                ${props.title}
                <img src="${image}" alt="falcon" class="avatar">
                <h4>${props.name}</h4>
                <div class="details">
                    <p> ${props.details} </p>
                </div>
            </div>
        `;
  },
});

const App = createComponent({
  state: {
    participants: getFakeUsers(),
    winners: [],
  },

  methods: {
    moveToWinners(name) {
      const card = getFakeUsers().find((user) => user.name === name);

      //  remove from  participants.
      this.state.participants = this.state.winners.filter(
        (p) => p.name !== name
      );

      // add to winner.
      this.state.winners = this.state.participants
        .map((p) => p.name)
        .includes(name)
        ? this.state.participants
        : [...this.state.participants, card];

      debugger;
    },

    moveFromWinners(card) {},
  },

  render(state, props) {
    return `
            <h1> Hello Blooop v3! </h1>
            <div class="columns">
                <div class="box">
                    <h3>Participants</h3>
                    <div class="cards"> 
                        ${state.participants
                          .map(
                            (card) => `
                            <div onClick="App.moveToWinners('${card.name}')">
                                ${Card.withProps({
                                  title: card.title,
                                  name: card.name,
                                  image: card.image,
                                }).render()}
                            </div>
                          `
                          )
                          .join("")}
                    </div>
                </div>
                <div class="box">
                    <h3>Winners</h3>
                    <div class="cards"> 
                      ${state.winners
                        .map((card) =>
                          Card.withProps({
                            title: card.title,
                            name: card.name,
                            image: card.image,
                          }).render()
                        )
                        .join("")}
                    </div>
                </div>
            </div>
        `;
  },
});

// render the app in DOM.
const html = App.render();
document.body.innerHTML = html;
