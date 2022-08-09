import * as T from "../utils/types";
import burguerCarneEFrango from "../assets/images/burguer-carne-e-frango.png";
import burguerDuploRanch from "../assets/images/burguer-duplo-ranch.png";
import burguerSaladaQueijo from "../assets/images/burguer-salada-queijo.png";
import burguerSalada from "../assets/images/burguer-salada.png";

export const mockedProducts: T.Product[] = [
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    name: "Burguer Salada",
    description:
      "Hamburguer com uma carne bovina de 180g, queijo, salada e molho especial.",
    price: 17.99,
    image: burguerSalada,
    categoryId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "10c6c5d1-24eb-436d-a21a-0c9b8516f9fa",
    name: "Burguer Salada e Queijo Especial",
    description:
      "Hamburguer com uma carne bovina de 180g, queijo especial artesanal, salada e molho.",
    price: 22.99,
    image: burguerSaladaQueijo,
    categoryId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "b201ee19-c00d-4e2a-bdf0-f4101348f1b5",
    name: "Burguer Carne e Frango",
    description:
      "Hamburguer com duas carnes, um bife bovino de 180g e duas peças de peito de frango.",
    price: 28.99,
    image: burguerCarneEFrango,
    categoryId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "ef550853-9fb4-4b97-8e88-843c2f827ee4",
    name: "Burguer Duplo Ranch",
    description:
      "Hamburguer com duas carnes bovinas de 180g e molho especial tipo Ranch.",
    price: 28.99,
    image: burguerDuploRanch,
    categoryId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedCategories: T.Category[] = [
  {
    id: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    name: "AVENTURA",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "a6e86fe9-ca7f-40a3-9b95-331e749038f1",
    name: "TIRO",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "1c86eac1-f2b9-4bdf-8dc9-21bcd789da4f",
    name: "RPG",
    createdAt: new Date(),
    updatedAt: new Date(),
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