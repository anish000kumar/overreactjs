function getFakeUsers() {
  return [
    {
      name: "Diana",
      title: "First",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://i.etsystatic.com/28369479/r/il/81b2dd/4122475670/il_fullxfull.4122475670_a5kr.jpg",
    },
    {
      name: "John",
      title: "Second",
      details: "Praesent vel fermentum mauris, sit amet dapibus lectus.",
      image:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/957bf27cebf7622048d0c5cd9c91c026-1663881834/f220915%201%20x/draw-you-one-realistic-style-cartoon-portrait.jpg",
    },
    {
      name: "Sarah",
      title: "Third",
      details: "Nulla dictum erat ligula, id efficitur dolor convallis in.",
      image:
        "https://thumbs.dreamstime.com/b/woman-avatar-isolated-icon-design-illustration-graphic-74193203.jpg",
    },
    {
      name: "David",
      title: "Fourth",
      details: "Vivamus at justo vitae orci bibendum ullamcorper.",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Emily",
      title: "Fifth",
      details:
        "Sed auctor, est ut tristique tincidunt, ex ante rhoncus lectus.",
      image:
        "https://thumbs.dreamstime.com/b/woman-avatar-isolated-icon-design-illustration-graphic-74193219.jpg",
    },
    {
      name: "Michael",
      title: "Sixth",
      details:
        "Phasellus non ullamcorper ex. Sed non lectus eget mauris elementum luctus.",
      image:
        "https://nextdayanimations.com/wp-content/uploads/photo-gallery/imported_from_media_libray/beny-realistic-marker-NDA-branded%20(1).png?bwg=1550011023",
    },
    {
      name: "Habiscus",
      title: "Seventh",
      details:
        "Phasellus non ullamcorper ex. Sed non lectus eget mauris elementum luctus.",
      image:
        "https://us.123rf.com/450wm/wannawit/wannawit2208/wannawit220800088/190233120-big-shark-with-diving-equipment-vector-cartoon.jpg?ver=6",
    },
    {
      name: "Dedraconta",
      title: "Eigth",
      details:
        "Phasellus non ullamcorper ex. Sed non lectus eget mauris elementum luctus.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-avatar-aesthetic-illustration_569774-113.jpg",
    },
  ];
}

function serial(obj) {
  return "'" + JSON.stringify(obj) + "'";
}

function deserial(str) {
  return JSON.parse(str.slice(1, -1));
}

window.getFakeUsers = getFakeUsers;
