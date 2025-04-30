import * as Yup from "yup";

export const DrugSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  manufacturer: Yup.string().required("Manufacturer is required"),
  description: Yup.string().required("Description is required"),
  originType: Yup.string().required("OriginType is required"),
  productionDate: Yup.date().required("ProductionDate is required"),
  expirationDate: Yup.date().required("ExpirationDate is required"),
  price: Yup.number().positive().min(0).required("Price is required"),
  discount: Yup.number().min(0).required("Discount is required"),
  stock: Yup.number().integer().min(0).required("Stock is Required"),
  sold: Yup.number().integer().min(0).required("Required"),
  isVisible: Yup.boolean().required("Required"),
});

export const updateDrugSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  manufacturer: Yup.string().required("Manufacturer is required"),
  price: Yup.number().positive().min(0).required("Price is required"),
  discount: Yup.number().min(0).required("Discount is required"),
  stock: Yup.number().integer().min(0).required("Stock is Required"),
  sold: Yup.number().integer().min(0).required("Required"),
});

// Validation schema using Yup
export const validationSchemaSheetExcel = Yup.object({
  startRow: Yup.number()
    .required("First row is required")
    .positive("First row must be positive")
    .integer("First row must be an integer"),
  endRow: Yup.number()
    .required("Last row is required")
    .positive("Last row must be positive")
    .integer("Last row must be an integer")
    .test(
      "is-greater-than-first-row",
      "Last row must be greater than or equal to first row",
      function (value) {
        const { firstRow } = this.parent;
        return !firstRow || !value || value >= firstRow;
      }
    ),
  file: Yup.mixed()
    .required("Excel file is required")
    .test(
      "fileFormat",
      "Unsupported file format. Please upload an Excel file (.xlsx, .xls)",
      (value) => {
        if (!value) return false;
        return [
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "application/vnd.ms-excel",
        ].includes(value.type);
      }
    ),
});
