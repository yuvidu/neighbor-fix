import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "neighbor-fix",  //upload files to this folder in cloudinary
        allowedFormats: ["jpg", "png", "jpeg", "gif"],
    },
});

const upload = multer({storage});

export default upload;
