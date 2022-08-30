import { ErrorMessage, StyledInput } from "assets/styles/globalStyles";
import { ModalOverlay } from "assets/styles/globalStyles";
import Button from "components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as S from "./style";
import * as yup from "yup";
import api from "services/api";
import toast from "react-hot-toast";
import { useProfiles } from "contexts/profiles";
import { Profile } from "utils/types/index";

/* HOOKFORM */
interface ProfileModalProps { 
  handleOpenModal: () => void;
  profile?: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile | undefined>>;
}

interface ProfileData {
  name?: string;
  imageURL?: string;
  userId?: string;
}

const ProfileSchema = yup.object().shape({
  name: yup.string().required("Nickname is required"),
  image: yup.string().url("Invalid URL format").required("ImageURL is required"),
});

const updateProfileSchema = yup.object().shape({
  name: yup.string(),
  image: yup.string(),
});

const ProfileModal = ({handleOpenModal, profile, setProfile}: ProfileModalProps  ) => { 
  const { handleGetProfiles } = useProfiles();

  /* useForm */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm< ProfileData>({ resolver: yupResolver(ProfileSchema) });

  const token = localStorage.getItem("token");
    const headers = { 
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

  const handleNewProfile = (data: ProfileData) => {
    api
    .post(`/profile`, data, headers)
    .then(() => {
      toast.success("Profile added succesfully!");
      handleGetProfiles();
      handleOpenModal();
      setProfile(undefined); 
    })
  }; 

  const handleUpdateProfile = (data: ProfileData) => {
    api
    .patch(`/profile/${profile?.id}`, data, headers)
    .then(() => {
      toast.success("Profile updated succesfully!");
      handleGetProfiles();
      handleOpenModal();
      setProfile(undefined); 
    });
  };

  return (
    <ModalOverlay>
      <S.ModalContainer 
      onSubmit={handleSubmit( profile ? handleUpdateProfile : handleNewProfile)} 
      >
        <h2>{
          profile
        ? "Update Profile"
        : "Register a new profile"
      }
      </h2>
        
        <StyledInput 
        defaultValue={profile ? profile.name : ""} 
        placeholder="Insert a Nickname" 
        {...register("name")}/>

        <StyledInput 
         defaultValue={profile ? profile.imageURL : ""} 
        placeholder="Insert the image URL" 
        {...register("imageURL")}/>
        <ErrorMessage>
            {errors.name?.message ||
            errors.imageURL?.message}
        </ErrorMessage>
        <div>
          <Button value={"Send"} type="submit"/>
          <Button value={"Cancel"} variant="cancel" onClick={()=> {
            handleOpenModal();
            setProfile(undefined);
          }
          } />
        </div>
      </S.ModalContainer>
    </ModalOverlay>
  );
};

export default ProfileModal;
