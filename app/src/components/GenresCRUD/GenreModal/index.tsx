import { ErrorMessage, StyledInput } from "assets/styles/globalStyles";
import { ModalOverlay } from "assets/styles/globalStyles";
import Button from "components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as S from "./style";
import * as yup from "yup";
import api from "services/api";
import toast from "react-hot-toast";
import { useGenres } from "contexts/genres";
import { Genre } from "utils/types/index";

/* HOOKFORM */
interface GenreModalProps { 
  handleOpenModal: () => void;
  genre?: Genre;
  setGenre: React.Dispatch<React.SetStateAction<Genre | undefined>>;
}

interface GenreData {
  genre: string;
}

const GenreSchema = yup.object().shape({
  genre: yup.string().required("Genre is required"),
});



const GenreModal = ({handleOpenModal, genre, setGenre}: GenreModalProps  ) => { 
  const { handleGetGenres } = useGenres();

  /* useForm */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm< GenreData>({ resolver: yupResolver(GenreSchema) });

  const token = localStorage.getItem("token");
    const headers = { 
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

  const handleNewGenre = (data: GenreData) => {
    api
    .post(`/generos`, data, headers)
    .then(() => {
      toast.success("Genre added succesfully!");
      handleGetGenres();
      handleOpenModal();
      /* setGenre(undefined); */
    })
  }; 

  const handleUpdateGenre = (data: GenreData) => {
    api
    .patch(`/generos/${genre?.id}`, data, headers)
    .then(() => {
      toast.success("Genre updated succesfully!");
      handleGetGenres();
      handleOpenModal();
      /* setGenre(undefined); */
    });
  };

  return (
    <ModalOverlay>
      <S.ModalContainer 
      onSubmit={handleSubmit( genre ? handleUpdateGenre : handleNewGenre)} 
      >
        <h2>{
          genre
        ? "Update Genre"
        : "Register a new genre"
      }
      </h2>
        
        <StyledInput 
        defaultValue={genre ? genre.genre : ""}
        placeholder="Insert a game genre" 
        {...register("genre")}/>
        <ErrorMessage>
            {errors.genre?.message}
        </ErrorMessage>
        <div>
          <Button value={"Send"} type="submit"/>
          <Button value={"Cancel"} variant="cancel" onClick={()=> {
            handleOpenModal();
            setGenre(undefined);
          }
          } />
        </div>
      </S.ModalContainer>
    </ModalOverlay>
  );
};

export default GenreModal;
