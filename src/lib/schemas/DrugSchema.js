import * as Yup from 'yup';

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

