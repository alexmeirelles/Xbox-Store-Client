import React, { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { GameProvider } from "./games";
import { GenreProvider } from "./genres";
import { ProfileProvider } from "./profiles";
import { UserProvider } from "./user";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
        <UserProvider>
        <ProfileProvider>
        <GameProvider>
          <GenreProvider>
            {children}
          </GenreProvider>
        </GameProvider>
        </ProfileProvider>
        </UserProvider>
    </BrowserRouter>
  );
};

export default Providers;