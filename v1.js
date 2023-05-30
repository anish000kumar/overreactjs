const Card = createComponent({
  render(props) {
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
  render() {
    const cards = getFakeUsers();

    return `
        <h1> Hello Blooop v1! </h1>
        <div class="columns">
            <div class="box">
                <h3>Participants</h3>
                <div class="cards"> 
                    ${cards
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
            <div class="box">
                <h3>Winners</h3>
                <div class="cards"> 
                </div>
            </div>
        </div>
    `;
  },
});

// render the app in DOM.
const html = App.render();
document.body.innerHTML = html;
