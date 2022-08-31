import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
  } from "react";
  import api from "services/api";
  import { Genre } from "utils/types/index";
  
  interface GenreProviderProps {
    children: ReactNode;
  }
  
  interface GenreProviderData {
    genres: Genre[];
    handleGetGenres: () => void;
  }
  
  const GenreContext = createContext<GenreProviderData>({} as GenreProviderData);
  
  export const GenreProvider = ({ children }: GenreProviderProps) => {
    /* const { logged } = useAuth(); -- terminar o auth */
  
    const [genres, setGenre] = useState<Genre[]>([]);
  
    const handleGetGenres = () => {
      const token = localStorage.getItem("token");
  
      const headers = { 
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      api.get("/generos", headers).then((res) => {
        setGenre(res.data);
        console.log(res);
      }
     );
    };
  
    useEffect(() => {
      handleGetGenres();
    }, []);
  
    return (
      <GenreContext.Provider value={{ genres, handleGetGenres }}>{children}</GenreContext.Provider>
    );
  };
  
  export const useGenres = () => useContext(GenreContext);
  