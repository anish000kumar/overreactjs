import { createComponent, render } from "./lib/v6";
// import { h } from "snabbdom";

// const Card = () =>
//   createComponent({
//     state: {
//       points: 0,
//     },
//     methods: {
//       increase(e) {
//         e.stopPropagation();
//         this.state.points++;
//       },
//       decrease(e) {
//         e.stopPropagation();
//         this.state.points--;
//       },
//     },
//     render() {
//       const { props, state } = this;
//       const image =
//         props.image ??
//         "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";

//       return `
//   <div class="card">
//       ${props.title} - ${state.points}
//       <img src="${image}" alt="falcon" class="avatar">
//       <div class="buttons">
//         <button onClick="$$.increase(event)"> + </button>
//         <button onClick="$$.decrease(event)"> - </button>
//       </div>
//       <h4>${props.name}</h4>
//       <div class="details">
//           <p> ${props.details} </p>
//       </div>
//   </div>
//           `;
//     },
//   });

// const App = () =>
//   createComponent({
//     state: {
//       participants: getFakeUsers(),
//       winners: [],
//     },

//     methods: {
//       moveToWinners(name) {
//         const card = getFakeUsers().find((user) => user.name === name);

//         if (this.state.winners.length === 3) {
//           alert("Cant have more than 3 winners. Remove someone and try again");
//           return;
//         }

//         //  remove from  participants.
//         this.state.participants = this.state.participants.filter(
//           (p) => p.name !== name
//         );

//         // add to winner.
//         this.state.winners = this.state.winners
//           .map((p) => p.name)
//           .includes(name)
//           ? this.state.winners
//           : [...this.state.winners, card];
//       },

//       moveFromWinners(name) {
//         const card = getFakeUsers().find((user) => user.name === name);
//         //  remove from  winners.
//         this.state.winners = this.state.winners.filter((p) => p.name !== name);

//         // add to participant.
//         this.state.participants = this.state.participants
//           .map((p) => p.name)
//           .includes(name)
//           ? this.state.participants
//           : [...this.state.participants, card];
//       },
//     },

//     render() {
//       const { state, h } = this;
//       return `
//               <h1> Hello Blooop v6! </h1>
//               <div class="columns">
//                   <div class="box">
//                       <h3>Participants</h3>
//                       <div class="cards">
//                           ${state.participants
//                             .map(
//                               (card) => `
//                               <div onClick="$$.moveToWinners('${card.name}')">
//                               ${h(Card, {
//                                 title: card.title,
//                                 name: card.name,
//                                 image: card.image,
//                               })}
//                               </div>
//                             `
//                             )
//                             .join("")}
//                       </div>
//                   </div>
//                   <div class="box">
//                       <h3>Winners</h3>
//                       <div class="cards">
//                       ${state.winners
//                         .map(
//                           (card) => `
//                           <div onClick="$$.moveFromWinners('${card.name}')">
//                               ${h(Card, {
//                                 title: card.title,
//                                 name: card.name,
//                                 image: card.image,
//                               })}
//                           </div>
//                         `
//                         )
//                         .join("")}
//                       </div>
//                   </div>
//               </div>
//           `;
//     },
//   });

const Main = () =>
  createComponent({
    state: {
      points: 0,
    },

    methods: {
      increase(e) {
        console.log(this);
        e.stopPropagation();
        this.state.points++;
      },
      decrease(e) {
        e.stopPropagation();
        this.state.points--;
      },
    },

    render() {
      const { state, props, increase, decrease } = this;

      return h(
        "div",
        { className: "card", id: "#card" },
        state.points,
        h("button", { onClick: (e) => increase(e) }, " + "),
        h("button", { onClick: (e) => decrease(e) }, " - ")
      );
    },
  });

render(h(Main, getFakeUsers()[0]), document.getElementById("app"));
