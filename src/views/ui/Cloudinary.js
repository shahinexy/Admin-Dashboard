import axios from 'axios';

const cloudinary = {
    cloud_name:process.env.REACT_APP_CLOUD_NAME,
    api_key:process.env.REACT_APP_API_KEY,
    api_secret:process.env.REACT_APP_API_SECRET,
  };

  // console.log(process.env.CLOUD_NAME);
  // console.log('cloud', cloudinary);


const imageUpload = async (file) => {
  if (!file.type.match('image.*')) {
    console.error('File type is not supported. Please upload an image file.');
    return null;
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'ml_default');

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudinary.cloud_name}/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    console.log(response.data.secure_url);
    return response.data.secure_url;
  } catch (error) {
    console.error('Error uploading image:', error.response ? error.response.data : error.message);
    return null;
  }
};

export { cloudinary, imageUpload };
