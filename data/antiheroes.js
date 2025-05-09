const comicCharacters = [
    {
      id: 1,
      nombre: "Ghost Rider",
      nombreClave: "Johnny Blaze",
      casa: "Marvel",
      primeraAparicion: "Marvel Spotlight #5 (1972)",
      descripcionBreve: "Motociclista maldito que se transforma en el Espíritu de la Venganza.",
      descripcionCompleta:
        "Ghost Rider es el alter ego de Johnny Blaze, un motociclista que hizo un pacto con un demonio para salvar la vida de su padre. A cambio, fue poseído por el Espíritu de la Venganza, lo que le permite transformarse en un esqueleto en llamas montado en una motocicleta infernal. Castiga a los malvados con su cadena ardiente y el 'Mirada de Penitencia', que obliga a sus víctimas a sentir el dolor que han causado. Es un icónico antihéroe de Marvel, oscuro, letal y movido por la venganza.",
      imagen: "/sources/imgs/ghostrider.jpeg",
    },
    {
      id: 2,
      nombre: "Doctor Strange",
      nombreClave: "Stephen Strange",
      casa: "Marvel",
      primeraAparicion: "Strange Tales #110 (1963)",
      descripcionBreve: "Hechicero Supremo y maestro de las artes místicas.",
      descripcionCompleta:
        "Doctor Strange, creado por Steve Ditko y Stan Lee, es un ex cirujano brillante convertido en el Hechicero Supremo. Después de un accidente que arruina sus manos, busca una cura y termina siendo entrenado en las artes místicas por el Anciano en Kamar-Taj. Protege la Tierra de amenazas mágicas y dimensionales con la ayuda del Ojo de Agamotto y la Capa de Levitación.",
      imagen: "sources/imgs/dr.strange.jpeg",
    },
    {
      id: 3,
      nombre: "The Punisher",
      nombreClave: "Frank Castle",
      casa: "Marvel",
      primeraAparicion: "The Amazing Spider-Man #129 (1974)",
      descripcionBreve: "Vigilante letal motivado por la venganza tras el asesinato de su familia.",
      descripcionCompleta:
        "The Punisher, creado por Gerry Conway, Ross Andru y John Romita Sr., es un ex marine cuya familia fue asesinada por la mafia. Frank Castle adopta el alias 'Punisher' y libra una guerra sin cuartel contra el crimen, utilizando tácticas militares, armas de fuego y una brutalidad extrema que lo distingue de otros héroes.",
      imagen: "sources/imgs/punisher.jpeg",
    },
    {
      id: 4,
      nombre: "Emma Frost",
      nombreClave: "Emma Frost",
      casa: "Marvel",
      primeraAparicion: "Uncanny X-Men #129 (1980)",
      descripcionBreve: "Telépata poderosa, ex villana convertida en líder de los X-Men.",
      descripcionCompleta:
        "Emma Frost es una mutante telépata con la capacidad de transformarse en diamante orgánico, otorgándole invulnerabilidad. Inicialmente apareció como la Reina Blanca del Club Fuego Infernal, pero más tarde se convirtió en una figura central en los X-Men. Es conocida por su intelecto, habilidades psíquicas y estilo sofisticado.",
      imagen: "sources/imgs/emmafrost.jpeg",
    },
    {
      id: 5,
      nombre: "Moon Knight",
      nombreClave: "Marc Spector",
      casa: "Marvel",
      primeraAparicion: "Werewolf by Night #32 (1975)",
      descripcionBreve: "Justiciero con trastorno de identidad, elegido por el dios egipcio Khonshu.",
      descripcionCompleta:
        "Moon Knight es un vigilante nocturno y complejo creado por Doug Moench y Don Perlin. Marc Spector, un ex marine y mercenario, es resucitado por el dios Khonshu y se convierte en su avatar en la Tierra. Sufre trastorno de identidad disociativo, adoptando múltiples personalidades como Steven Grant y Jake Lockley. Su estilo brutal y místico lo hace único entre los héroes de Marvel.",
      imagen: "sources/imgs/moonknight.jpeg",
    },
    {
      id: 6,
      nombre: "Spawn",
      nombreClave: "Al Simmons",
      casa: "Marvel",
      primeraAparicion: "Spawn #1 (1992)",
      descripcionBreve: "Antiguo agente del gobierno traicionado, renacido como un guerrero infernal.",
      descripcionCompleta:
        "Spawn es un antihéroe creado por Todd McFarlane y publicado por Image Comics. Al Simmons era un asesino de élite del gobierno que fue traicionado y asesinado. Al morir, hace un trato con un demonio para regresar a la Tierra, pero vuelve deformado y con poderes infernales. Como Spawn, lucha contra el crimen, el infierno y sus propios demonios internos, con una icónica capa viviente y cadenas como armas.",
      imagen: "sources/imgs/spawn.jpeg",
    },
    {
      id: 7,
      nombre: "Daredevil",
      nombreClave: "Matt Murdock",
      casa: "Marvel",
      primeraAparicion: "Daredevil #1 (1964)",
      descripcionBreve: "Abogado ciego con sentidos sobrehumanos que lucha contra el crimen en Hell's Kitchen.",
      descripcionCompleta:
        "Daredevil es un superhéroe de Marvel Comics creado por el escritor Stan Lee y el artista Bill Everett, con aportes no acreditados de Jack Kirby. Matt Murdock quedó ciego cuando era niño debido a un accidente con sustancias químicas, que también agudizaron sus otros sentidos a niveles sobrehumanos. Adoptó la identidad de Daredevil para luchar contra el crimen en Hell's Kitchen, Nueva York, mientras trabaja como abogado defensor durante el día.",
      imagen: "/sources/imgs/daredevil.jpeg",

    },
    {
      id: 8,
      nombre: "Deadpool",
      nombreClave: "Wade Wilson",
      casa: "Marvel",
      primeraAparicion: "The New Mutants #98 (1991)",
      descripcionBreve: "Mercenario inmortal con humor negro y rompimiento de la cuarta pared.",
      descripcionCompleta:
        "Deadpool es un antihéroe de Marvel conocido por su personalidad irreverente y su capacidad de regeneración. Fue creado por Rob Liefeld y Fabian Nicieza. Wade Wilson fue sometido a un experimento que le otorgó poderes de curación, pero lo desfiguró mental y físicamente. Es un mercenario impredecible, experto en armas y combate, famoso por romper la cuarta pared y su humor negro.",
      imagen: "/sources/imgs/deadpool.jpeg",
    },
    {
      id: 9,
      nombre: "Domino",
      nombreClave: "Neena Thurman",
      casa: "Marvel",
      primeraAparicion: "X-Force #8 (1992)",
      descripcionBreve: "Mutante mercenaria con la habilidad de alterar la probabilidad a su favor.",
      descripcionCompleta:
        "Domino es una mutante del universo Marvel, experta en combate y operaciones encubiertas. Su verdadero nombre es Neena Thurman. Posee un poder mutante único: la capacidad de manipular la probabilidad, lo que le otorga una suerte increíble en combate. Es conocida por su estilo letal, habilidades tácticas y participación en equipos como X-Force junto a Cable y Deadpool. Aunque actúa como heroína, sus métodos suelen ser los de una mercenaria pragmática.",
      imagen: "/sources/imgs/domino.jpeg",
    }
  ];
  
  window.comicCharacters = comicCharacters;
  