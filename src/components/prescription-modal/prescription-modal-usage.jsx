import { useState } from "react";
import { Button, Box } from "@mui/material";
import PrescriptionModal from "./components/prescription-modal";
import { API_URL_DRUG } from "../../lib/api/api_url";
import axios from "axios";

const PrescriptionModalUsage = () => {
  const [open, setOpen] = useState(false);
  const [prescriptionData, setPrescriptionData] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  // Mock upload function - replace with your actual API call
  const handleUpload = async (file) => {
    setUploadLoading(true);
    setUploadError(null);

    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append("image", file);

      // Mock API call - replace with your actual endpoint
      const options = {
        url: `${API_URL_DRUG}/prescription/analyze`,
        method: "POST",
        data: formData,
      };
      const { data } = await axios.request(options);

      // Mock response after 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setPrescriptionData(data.data);
    } catch (error) {
      setUploadError("Failed to analyze prescription. Please try again.");
      console.error("Upload error:", error);
    } finally {
      setUploadLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box p={4}>
      <Button
        onClick={() => setOpen(true)}
        variant="contained"
        size="large"
        sx={{
          bgcolor: "rgba(255,255,255,0.25)",
          color: "white",
          fontWeight: 600,
          py: 1.5,
          px: 4,
          "&:hover": {
            bgcolor: "rgba(255,255,255,0.35)",
            boxShadow: "0 8px 20px rgba(255,255,255,0.2)",
          },
        }}
      >
        Scan Prescription
      </Button>
      <PrescriptionModal
        open={open}
        onClose={handleClose}
        prescriptionData={prescriptionData}
        onUpload={handleUpload}
        uploadLoading={uploadLoading}
        uploadError={uploadError}
      />
    </Box>
  );
};

export default PrescriptionModalUsage;
