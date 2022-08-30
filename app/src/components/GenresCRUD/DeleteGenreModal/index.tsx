import Button from "../../../components/Button";
import { useGenres } from "contexts/genres";
import { toast } from "react-hot-toast";
import api from "services/api";
import { ModalOverlay } from "../../../assets/styles/globalStyles";
import { Genre } from "utils/types/index";
import * as S from "./style";

interface DeleteGenreModalProps {
  genreId?: string;
  handleOpenDeleteModal: () => void;
  setGenre: React.Dispatch<React.SetStateAction<Genre | undefined>>;
}

const DeleteGenreModal = ({
  genreId,
  handleOpenDeleteModal,
  setGenre,
}: DeleteGenreModalProps) => {
  const { handleGetGenres } = useGenres();

  const handleDeleteGenre = () => {
    const token = localStorage.getItem("token");
 
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/genre/${genreId}`, headers).then(() => {
      handleGetGenres();
      setGenre(undefined);
      handleOpenDeleteModal();
      toast.success("Genre deleted succesfully!")
    })
  };

  return (
    <ModalOverlay>
      <S.DeleteModalContainer>
        <h2>Delete Genre</h2>
        <div>
          <Button value={"Delete"} onClick={handleDeleteGenre}/>
          <Button
            onClick={() => {
              setGenre(undefined);
              handleOpenDeleteModal();
            }}
            value="Cancel"
            variant="cancel"
            />
        </div>
      </S.DeleteModalContainer>
    </ModalOverlay>
  );
};

export default DeleteGenreModal;