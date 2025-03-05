import { useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { Modal, Box, Button, useTheme, CircularProgress } from '@mui/material';
import { UploadImageSchema } from '../../../lib/schemas/UserSchema';
import axios from 'axios';
import { API_URL } from '@/lib/api/api_url';
import { useTypeContext } from '@/context/UserType.context';
import toast from 'react-hot-toast';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';

const ImageUploader = () => {
  const theme = useTheme();
  const { fetchUserData, token } = useTypeContext();
  const [image, setImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const editorRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setOpenModal(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (editorRef.current) {
      setIsLoading(true);
      const canvas = editorRef.current.getImageScaledToCanvas();

      canvas.toBlob(async (blob) => {
        const formdata = new FormData();
        formdata.append('startRow', blob, 'cropped-image.png');

        try {
          await UploadImageSchema.validate({ imageProfile: blob });

          const options = {
            url: `${API_URL}profileimage`,
            method: 'PATCH',
            data: formdata,
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          };

          const { data } = await axios.request(options);

          if (data.message === 'success') {
            fetchUserData(token);
          }
          console.log('Upload response:', data);
          toast.success('Image uploaded successfully!');
        } catch (error) {
          console.error(
            'Error details:',
            error.response || error.message || error
          );
          toast.error('An error occurred while uploading your image.');
        } finally {
          setIsLoading(false);
          setOpenModal(false);
        }
      }, 'image/png');
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="upload-input"
      />
      <label htmlFor="upload-input">
        <ModeEditOutlineRoundedIcon
          sx={{
            color: theme.palette.text.button,
            cursor: 'pointer',
            ':hover': { color: theme.palette.action.active },
          }}
        />
      </label>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <AvatarEditor
            ref={editorRef}
            image={image}
            width={250}
            height={250}
            border={50}
            borderRadius={125}
            color={[255, 255, 255, 0.6]}
            scale={1.2}
            rotate={0}
          />
          <Button
            onClick={handleSave}
            variant="contained"
            sx={{ mt: 2 }}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : 'Save'}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ImageUploader;
