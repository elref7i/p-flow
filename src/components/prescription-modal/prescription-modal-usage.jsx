"use client";

import { useState } from "react";
import { Button, Box } from "@mui/material";
import { Receipt } from "@mui/icons-material";
import PrescriptionModal from "./components/prescription-modal";

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
      formData.append("prescription", file);

      // Mock API call - replace with your actual endpoint
      // const response = await fetch('/api/prescription/analyze', {
      //   method: 'POST',
      //   body: formData,
      // })
      // const result = await response.json()

      // Mock response after 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock successful response
      const mockResponse = {
        status: "success",
        message: "Prescription analyzed successfully",
        data: {
          imageUrl: URL.createObjectURL(file),
          prescription: {
            patient: {
              name: "Tet",
              age: 30,
              gender: "Male",
            },
            doctor: {
              name: "Dr. K. Chanakya Chandra Kumar",
              license: "68237",
            },
            prescriptionDate: "2022-10-17",
            medications: [
              {
                name: "Diab Hamlo",
                dosage: "1mg",
                frequency: "Once a day",
                duration: "20 days",
                available: false,
                matchedDrugs: [],
              },
              {
                name: "Tab. Thyrox",
                dosage: "1mg",
                frequency: "Once a day",
                duration: "30 days",
                available: true,
                matchedDrugs: [
                  {
                    inventory: {
                      _id: "682cb72c4aca7dbf3dc3464c",
                      name: "Aya Elhenawy",
                      profileImage: "/placeholder.svg?height=40&width=40",
                    },
                    _id: "6856e5a42be44a1c8d688e29",
                    name: "tab. thyrox",
                    manufacturer: "Manufacturer",
                    description: "Description",
                    price: 100,
                    discount: 10,
                    discountedPrice: 90,
                    stock: 100,
                  },
                ],
              },
            ],
            medicationsCount: 2,
            additionalNotes:
              "k/c/o - Hypertension & Hypothyroid\nc/o - Fever since 3 days",
          },
        },
      };

      setPrescriptionData(mockResponse.data);
    } catch (error) {
      setUploadError("Failed to analyze prescription. Please try again.");
      console.error("Upload error:", error);
    } finally {
      setUploadLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    // Optionally reset data when closing
    // setPrescriptionData(null)
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
