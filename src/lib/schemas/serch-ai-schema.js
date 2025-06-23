import * as Yup from "yup";

export const SearchAiSchema = Yup.object({
  medicine: Yup.string()
    .required("Drug name is required")
    .min(2, "Drug name must be at least 2 characters"),
});
export const PrescriptionAiSchema = Yup.object({
  medicine: Yup.string()
    .required("Drug name is required")
    .min(2, "Drug name must be at least 2 characters"),
});
