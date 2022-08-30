export type Game = {
    id: string;
    title: string;
    coverImageUrl: string;
    description: string;
    year: number;
    imdbScore: number;
    trailerYoutubeUrl: string;
    gameplayYouTubeUrl: string;
    genreId: string;
    };

  export interface Category {
    id?: string;
    name: string;
  }

  export interface User {
    nickname: string;
    email: string;
    password: string;
    confirmPassword: string;
    cpf?: string;
  };
  
  export interface Favorite {
    id?: string;
    profileId: string;
    gameName: string;
    favoritedAt?: Date;
  }

  export interface Profile {
    id: string;
    name: string;
    imageURL: string;
    userId: string;
    games?: string;
    favoritos?: string;
}

export interface Genre {
  id?: string;
  genre: string;
  createdAt?: Date;
  updatedAt?: Date;
}