import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
  } from "react";
  import api from "services/api";
  import { Game } from "utils/types/index";
  
  interface GameProviderProps {
    children: ReactNode;
  }
  
  interface GameProviderData {
    games: Game[];
    handleGetGames: () => void;
  }
  
  const GameContext = createContext<GameProviderData>({} as GameProviderData);
  
  export const GameProvider = ({ children }: GameProviderProps) => {
    /* const { logged } = useAuth(); -- terminar o auth */
  
    const [games, setGame] = useState<Game[]>([]);
  
    const handleGetGames = () => {
      const token = localStorage.getItem("token");
    
      const headers = { 
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      api.get("/jogos", headers).then((res) => {
        setGame(res.data);
        console.log(res);
      })
    };
  
    useEffect(() => {
      handleGetGames();
    }, []);
  
    return (
      <GameContext.Provider value={{ games, handleGetGames }}>{children}</GameContext.Provider>
    );
  };
  
  export const useGames = () => useContext(GameContext);