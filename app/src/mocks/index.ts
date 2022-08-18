import * as T from "../utils/types/index";
import alien from "../assets/images/alien.jpeg";
import halo from "../assets/images/halo.webp";
import fifa from "../assets/images/fifa.jpg";

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
    id: "10c6c5d1-24eb-436d-a21a-0c9b8516f9fa",
    title: "Fifa",
    description:
      "Chutar a bola no gol",
    coverImageUrl: fifa,
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
    productName: "Halo",
    userId: "6d6cf9d2-cf94-4b90-a53b-973d92501e02",
    favoritedAt: new Date(),
  },
  {
    id: "9a5a8f0e-43aa-4d77-8afd-e3a95deddc81",
    productName: "Alien",
    userId: "6d6cf9d2-cf94-4b90-a53b-973d92501e02",
    favoritedAt: new Date(),
  },
];