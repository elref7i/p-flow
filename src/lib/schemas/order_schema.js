import * as Yup from "yup";

export const AddPromotionSchema = Yup.object({
  originalDrugId: Yup.string().required("Drug ID is required"),

  name: Yup.string().required("Name is required"),

  price: Yup.number()
    .required("Price is required")
    .min(0, "Price must be at least 0"),

  stock: Yup.number()
    .required("Stock is required")
    .min(0, "Stock must be at least 0"),

  promotion: Yup.object({
    quantity: Yup.number()
      .required("Buy quantity is required")
      .min(1, "Buy quantity must be at least 1"),

    freeItems: Yup.number()
      .required("Free quantity is required")
      .min(1, "Free quantity must be at least"),
  }),
});

export const UpdatePromotionSchema = Yup.object({
  isActive: Yup.string().oneOf(["true", "false"], "Must be true or false"),
  buyQuantity: Yup.number().min(1, "Buy quantity must be at least 1"),
  freeQuantity: Yup.number().min(0, "Free quantity must be at least 0"),
});
