const movies = [
    {
      "id" : "matfilm1",
      "title" : "13: Game of Death",
      "year" : 2006,
      "Genre" : "Comédie, Policier, Drame, Épouvante-Horreur, Thriller",
      "director" : "Chookiat Sakveerakul",
      "shortDiscription" : "Peu de temps après avoir perdu son emploi et sa petite amie, Puchit reçoit un mystérieux coup de téléphone qui l'invite à participer à un jeu, avec à la clé 100 millions de baths (environ 2 millions d'euros) à gagner. Mais pour rafler la mise, Puchit doit d'abord accomplir 13 épreuves...",
      "totalTimeInminutes" : 114,
      "watchedTimeInMinutes" : 114,
      "imageUrl" : "13_game_of_death.jpg",
      "linkyoutube" : "4lC5CdrhXkw"
      
    },
    {
      "id" : "matfilm2",
      "title" : "Alien",
      "year" : 1979,
      "Genre" : "Épouvante-Horreur, Science-fiction",
      "director" : "Ridley Scott",
      "shortDiscription" : "En 2122, le vaisseau commercial Nostromo et son équipage en hibernation, font route vers la Terre avec une importante cargaison de minerai. Un signal, émanant d’une planète inconnue, les tire de leur sommeil artificiel. Intrigué, l’équipage se rend sur place et découvre les restes d'un gigantesque vaisseau extraterrestre. Lors de l’exploration de l’épave, l'officier Kane se fait agresser par une forme de vie inconnue.",
      "totalTimeInminutes" : 117,
      "watchedTimeInMinutes" : 117,
      "imageUrl" : "alien.jpg",
      "linkyoutube" : "cL5aAtL6Tok"
      
    },
    {
      "id" : "matfilm3",
      "title" : "Magnolia",
      "year" : 1999,
      "Genre" : "Drame",
      "director" : "Paul Thomas Anderson",
      "shortDiscription" : "Earl Partridge, âgé et malade, va bientôt mourir. Il demande à Phil, son infirmier, de retrouver Frank, le fils qu'il a jadis abandonné.",
      "totalTimeInminutes" : 188,
      "watchedTimeInMinutes" : 110,
      "imageUrl" : "magnolia.jpg",
      "linkyoutube" : "QYTqhmzROko"
      
    },
    {
      "id" : "matfilm4",
      "title" : "Donnie Darko",
      "year" : 2001,
      "Genre" : "Drame, Science-fiction",
      "director" : "Richard Kelly",
      "shortDiscription" : "En octobre 1988, dans une coquette banlieue pavillonnaire de Virginie vit Donnie Darko, un adolescent pas comme les autres. Intelligent et débordant d'imagination mais aussi schizophrène. Il traite sa mère Elizabeth de tous les noms, laisse régulièrement des messages politiques pour son père Eddie sur le réfrigérateur et interpelle ses profs en plein cours. Somnambule, il parle la nuit avec un certain Frank, déguisé en lapin géant monstrueux. Un jour, ce dernier lui annonce que la fin du monde est imminente.",
      "totalTimeInminutes" : 113,
      "watchedTimeInMinutes" : 84,
      "imageUrl" : "donnie_darko.jpg",
      "linkyoutube" : "ZZyBaFYFySk"
      
    },
    {
      "id" : "matfilm5",
      "title" : "Dobermann",
      "year" : 1997,
      "Genre" : "Action, Policier, Thriller",
      "director" : "Jan Kounen",
      "shortDiscription" : "Le Dobermann et son gang défraient la chronique. Banques, postes, fourgons, tout y passe. Une anthologie du braquage, un best-of du hold-up ! En face d'eux, un flic quelque peu pourri, qui fait de leur arrestation une affaire personnelle.",
      "totalTimeInminutes" : 94,
      "watchedTimeInMinutes" : 94,
      "imageUrl" : "dobermann.jpg",
      "linkyoutube" : "11qa0CBjlZ0"
      
    },
    {
      "id" : "matfilm6",
      "title" : "Starship Troopers",
      "year" : 1997,
      "Genre" : "Action, Science-fiction, Guerre",
      "director" : "Paul Verhoeven",
      "shortDiscription" : "Au XXIVe siècle, la Terre est régentée par la toute-puissante Fédération, qui prône l'ordre et la vertu aux citoyens. Aux confins de la galaxie, une armée extraterrestre d'arachnides géants se dresse contre l'espèce humaine. Face à cette menace, cinq jeunes gens volontaires, s'engagent dans l'armée et partent en mission dans l'espace pour combattre les envahisseurs. Les insectes géants, terriblement organisés, s'avèrent bien plus intelligents et dangereux que prévu...",
      "totalTimeInminutes" : 129,
      "watchedTimeInMinutes" : 100,
      "imageUrl" : "starship_troopers.jpg",
      "linkyoutube" : "zPYuV_jGk7M"
      
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




