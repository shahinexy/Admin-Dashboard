import { useState } from 'react';
import axios from 'axios';
import { imageUpload } from './Cloudinary';

const UploadImage = () => {
  const [image, setImage] = useState(null);

  const handleUploadImage = async () => {
    if (image) {
      const url = await imageUpload(image);
      if (url) {
        console.log('Uploaded image URL:', url);
      } else {
        console.error('Image upload failed.');
      }
    } else {
      console.error('No image selected for upload.');
    }
  };


  return (
    <div>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="button" onClick={handleUploadImage}>
        Upload Image
      </button>
    </div>
  );
};

export default UploadImage;
