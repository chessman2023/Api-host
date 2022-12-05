const movies = [
    {
      "id" : "matfilm1",
      "title" : "13: Game of Death",
      "director" : "Chookiat Sakveerakul",
      "shortDiscription" : "After losing his job, his car and his money, Phuchit, Krissada Sukosol, races against time to complete 13 tasks ordered by an anonymous caller who promised 100,000,000 Thai Baht upon completion.",
      "totalTimeInminutes" : 114,
      "imageUrl" : "13_game_of_death.jpg"
      
    },
    {
      "id" : "matfilm2",
      "title" : "Alien",
      "director" : "Ridley Scott",
      "shortDiscription" : "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
      "totalTimeInminutes" : 117,
      "imageUrl" : "alien.jpg"
      
    },
    {
      "id" : "matfilm3",
      "title" : "Magnolia",
      "director" : "Paul Thomas Anderson",
      "shortDiscription" : "An epic mosaic of interrelated characters in search of love, forgiveness and meaning in the San Fernando Valley.",
      "totalTimeInminutes" : 188,
      "imageUrl" : "magnolia.jpg"
      
    },
    {
      "id" : "matfilm4",
      "title" : "Donnie Darko",
      "director" : "Richard Kelly",
      "shortDiscription" : "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.",
      "totalTimeInminutes" : 113,
      "imageUrl" : "donnie_darko.jpg"
      
    },
    {
      "id" : "matfilm5",
      "title" : "Dobermann",
      "director" : "Jan Kounen",
      "shortDiscription" : "Dobermann is the world's most ruthless bank robber and with his gang rob bank after bank, now in Paris. What can the police do but to let the mad, morally bankrupt police commissioner loose on him?",
      "totalTimeInminutes" : 94,
      "imageUrl" : "dobermann.jpg"
      
    },
    {
      "id" : "matfilm6",
      "title" : "Starship Troopers",
      "director" : "Paul Verhoeven",
      "shortDiscription" : "Humans in a fascist, militaristic future wage war with giant alien bugs.",
      "totalTimeInminutes" : 129,
      "imageUrl" : "starship_troopers.jpg"
      
    }
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(movies))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(movies)).find(movie =>
      movie.id == id)
    )
  );
}




