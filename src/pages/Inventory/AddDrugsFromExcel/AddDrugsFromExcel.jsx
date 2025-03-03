import { useRef, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AddDrugsFromExcel() {
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const validationSchema = Yup.object({
    startRow: Yup.number().required().min(0, "Must be 0 or greater"),
    endRow: Yup.number().required().min(1, "Must be 1 or greater"),
    fileId: Yup.string().required(),
    file: Yup.mixed().required(),
  });

  const formik = useFormik({
    initialValues: {
      startRow: "",
      endRow: "",
      fileId: "",
      file: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", values.file);
      formData.append("startRow", values.startRow);
      formData.append("endRow", values.endRow);
      formData.append("fileId", values.fileId);

      const loadingId = toast.loading("Uploading...");

      try {
        const { data } = await axios.post(
          "https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/drugs/excel?startRow=1&endRow=35",
          formData
        );

        console.log(data);
        if (data.response === "ok") {
          toast.success(data.message);
        }
      } catch (error) {
        toast.error("Error uploading file!");
        console.log(error);
      } finally {
        setLoading(false);
        toast.dismiss(loadingId);
      }
    },
  });

  return (
    <Box
      sx={{
        width: 450,
        margin: "auto",
        mt: 5,
        textAlign: "center",
        p: 3,
        boxShadow: 3,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Upload Drugs Excel Sheet
      </Typography>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(event) =>
          formik.setFieldValue("file", event.currentTarget.files[0])
        }
      />
      <Button
        variant="contained"
        color="secondary"
        startIcon={<UploadFileIcon />}
        onClick={() => fileInputRef.current.click()}
        sx={{ mb: 2 }}
      >
        Select Excel File
      </Button>

      {formik.values.file && (
        <Typography variant="body2" sx={{ mb: 2, color: "gray" }}>
          Selected File: {formik.values.file.name}
        </Typography>
      )}

      {formik.touched.file && formik.errors.file && (
        <Typography color="error" variant="body2">
          {formik.errors.file}
        </Typography>
      )}

      <TextField
        fullWidth
        label="Start Row"
        type="number"
        variant="outlined"
        margin="normal"
        {...formik.getFieldProps("startRow")}
        error={formik.touched.startRow && Boolean(formik.errors.startRow)}
        helperText={formik.touched.startRow && formik.errors.startRow}
      />

      <TextField
        fullWidth
        label="End Row"
        type="number"
        variant="outlined"
        margin="normal"
        {...formik.getFieldProps("endRow")}
        error={formik.touched.endRow && Boolean(formik.errors.endRow)}
        helperText={formik.touched.endRow && formik.errors.endRow}
      />

      {/* <TextField
        fullWidth
        label="File ID"
        variant="outlined"
        margin="normal"
        {...formik.getFieldProps("fileId")}
        error={formik.touched.fileId && Boolean(formik.errors.fileId)}
        helperText={formik.touched.fileId && formik.errors.fileId}
      /> */}

      <Button
        variant="contained"
        color="primary"
        onClick={formik.handleSubmit}
        disabled={loading || !formik.isValid || !formik.dirty}
        sx={{ mt: 2 }}
      >
        {loading ? <CircularProgress size={24} /> : "Upload"}
      </Button>
    </Box>
  );
}

// const options = {
//   url: "https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/drugs/excel?startRow=1&endRow=35",
//   method: "POST",
//   formData,
// };
// const { data } = await axios.request(options);
