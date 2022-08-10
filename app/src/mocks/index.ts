import * as T from "../utils/types/index";
import burguerCarneEFrango from "../assets/images/burguer-carne-e-frango.png";
import burguerDuploRanch from "../assets/images/burguer-duplo-ranch.png";
import alien from "../assets/images/burguer-salada-queijo.png";
import halo from "../assets/images/halo.webp";

export const mockedGames: T.Game[] = [
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    title: "Halo",
    description:
      "Porra do jogo do Halo",
    coverImageUrl: halo,
    year: 2001,
    score: 100,
    trailerYoutubeUrl: "https://www.youtube.com/watch?v=2g811Eo7K8U",
    gameplayYouTubeUrl: "https://www.youtube.com/watch?v=2g811Eo7K8U",
    genreId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",

  },
  {
    id: "10c6c5d1-24eb-436d-a21a-0c9b8516f9fa",
    title: "Alien",
    description:
      "Jogo de medo do Alien",
    coverImageUrl: alien,
    year: 2001,
    score: 100,
    trailerYoutubeUrl: "https://www.youtube.com/watch?v=2g811Eo7K8U",
    gameplayYouTubeUrl: "https://www.youtube.com/watch?v=2g811Eo7K8U",
    genreId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",

  },
  {
    id: "b201ee19-c00d-4e2a-bdf0-f4101348f1b5",
    title: "Burguer Carne e Frango",
    description:
      "Hamburguer com duas carnes, um bife bovino de 180g e duas peças de peito de frango.",
    coverImageUrl: burguerCarneEFrango,
    year: 2001,
    score: 100,
    trailerYoutubeUrl: "https://www.youtube.com/watch?v=2g811Eo7K8U",
    gameplayYouTubeUrl: "https://www.youtube.com/watch?v=2g811Eo7K8U",
    genreId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",

  },
  {
    id: "ef550853-9fb4-4b97-8e88-843c2f827ee4",
    title: "Burguer Duplo Ranch",
    description:
      "Hamburguer com duas carnes bovinas de 180g e molho especial tipo Ranch.",
    coverImageUrl: burguerDuploRanch,
    year: 2001,
    score: 100,
    trailerYoutubeUrl: "https://www.youtube.com/watch?v=2g811Eo7K8U",
    gameplayYouTubeUrl: "https://www.youtube.com/watch?v=2g811Eo7K8U",
    genreId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",

  },
];

export const mockedCategories: T.Category[] = [
  {
    id: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    name: "AVENTURA",

  },
  {
    id: "a6e86fe9-ca7f-40a3-9b95-331e749038f1",
    name: "TIRO",

  },
  {
    id: "1c86eac1-f2b9-4bdf-8dc9-21bcd789da4f",
    name: "RPG",

  },
];

export const mockedFavorites: T.Favorite[] = [
  {
    id: "35abf7f1-c999-4bcf-abfb-a95cb483a2b9",
    productName: "Burguer Salada e Queijo Especial",
    userId: "6d6cf9d2-cf94-4b90-a53b-973d92501e02",
    favoritedAt: new Date(),
  },
  {
    id: "9a5a8f0e-43aa-4d77-8afd-e3a95deddc81",
    productName: "Burguer Duplo Bacon e Cheddar",
    userId: "6d6cf9d2-cf94-4b90-a53b-973d92501e02",
    favoritedAt: new Date(),
  },
];