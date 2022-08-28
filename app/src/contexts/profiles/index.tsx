import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
  } from "react";
  import api from "services/api";
  import { Profile } from "utils/types/index";
  
  interface ProfileProviderProps {
    children: ReactNode;
  }
  
  interface ProfileProviderData {
    profiles: Profile[];
    handleGetProfiles: () => void;
  }
  
  const ProfileContext = createContext<ProfileProviderData>({} as ProfileProviderData);
  
  export const ProfileProvider = ({ children }: ProfileProviderProps) => {
    /* const { logged } = useAuth(); -- terminar o auth */
  
    const [profiles, setProfile] = useState<Profile[]>([]);
  
    const handleGetProfiles = () => {
      const token = localStorage.getItem("token");
  
      const headers = { 
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      api.get("/profile", headers).then((res) => {
        setProfile(res.data);
        console.log(res);
      }
     );
    };
  
    useEffect(() => {
      handleGetProfiles();
    }, []);
  
    return (
      <ProfileContext.Provider value={{ profiles, handleGetProfiles }}>{children}</ProfileContext.Provider>
    );
  };
  
  export const useProfiles = () => useContext(ProfileContext);
  