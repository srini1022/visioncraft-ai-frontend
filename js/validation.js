/* ==========================================
   VisionCraft AI - Form Validation
========================================== */

const ALLOWED_EXTENSIONS = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp"
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

function validateProductName(name) {

    const value = name.trim();

    if (value === "") {
        return "Product name is required.";
    }

    if (value.length < 3) {
        return "Product name must contain at least 3 characters.";
    }

    if (value.length > 100) {
        return "Product name cannot exceed 100 characters.";
    }

    return null;
}

function validateProductDescription(description) {

    const value = description.trim();

    if (value === "") {
        return "Product description is required.";
    }

    return null;
}

function validateProductImage(file) {

    if (!file) {
        return "No image selected.";
    }

    if (!ALLOWED_EXTENSIONS.includes(file.type)) {
        return "Only PNG, JPG, JPEG and WEBP images are allowed.";
    }

    if (file.size > MAX_FILE_SIZE) {
        return "Image size must not exceed 5 MB.";
    }

    return null;
}

function validateForm() {

    const productName = document
        .getElementById("product_name")
        .value;

    const productDescription = document
        .getElementById("product_description")
        .value;

    const imageFile = document
        .getElementById("image")
        .files[0];

    const errors = {};

    const nameError = validateProductName(productName);

    if (nameError) {
        errors.productName = nameError;
    }

    const descriptionError =
        validateProductDescription(productDescription);

    if (descriptionError) {
        errors.productDescription = descriptionError;
    }

    const imageError =
        validateProductImage(imageFile);

    if (imageError) {
        errors.productImage = imageError;
    }

    return errors;

}