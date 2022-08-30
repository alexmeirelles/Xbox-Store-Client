import Button from "components/Button";
import { useProfiles } from "contexts/profiles";
import { toast } from "react-hot-toast";
import api from "services/api";
import { ModalOverlay } from "../../../assets/styles/globalStyles";
import { Profile } from "utils/types/index";
import * as S from "./style";

interface DeleteProfileModalProps {
  profileId?: string;
  handleOpenDeleteModal: () => void;
  setProfile: React.Dispatch<React.SetStateAction<Profile | undefined>>;
}

const DeleteProfileModal = ({
  profileId,
  handleOpenDeleteModal,
  setProfile,
}: DeleteProfileModalProps) => {
  const { handleGetProfiles } = useProfiles();

  const handleDeleteProfile = () => {
    const token = localStorage.getItem("token");
 
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/profile/${profileId}`, headers).then(() => {
      handleGetProfiles();
      setProfile(undefined);
      handleOpenDeleteModal();
      toast.success("Profile deleted succesfully!")
    })
  };

  return (
    <ModalOverlay>
      <S.DeleteModalContainer>
        <h2>Delete Profile</h2>
        <div>
          <Button value={"Delete"} onClick={handleDeleteProfile}/>
          <Button
            onClick={() => {
              setProfile(undefined);
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

export default DeleteProfileModal;