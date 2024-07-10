import React, { useRef, useState } from 'react';
import './style.css';

/* eslint react/prop-types: 0 */
const UploadImage = ({setImageUrl}) => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const fileInput = useRef(null);
  const handleFile = (file) => {
    //you can carry out any file validations here...
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    console.log(file, "here")
    setImageUrl(file)
  };

  const handleOndragOver = (event) => {
    event.preventDefault();
  };
  const handleOndrop = (event) => {
    //prevent the browser from opening the image
    event.preventDefault();
    event.stopPropagation();
    //let's grab the image file
    const imageFile = event.dataTransfer.files[0];
    handleFile(imageFile);
    // console.log(imageFile, "here")
  };
  return (
    <div className="d-flex justify-content-between gap-5">
      <div
        className={`${image?'drop_zone col-8':'drop_zone col-12'}`}
        onDragOver={handleOndragOver}
        onDrop={handleOndrop}
        onClick={() => fileInput.current.click()}
      >
        <p>Click to select or Drag and drop image here....</p>
        <input
          type="file"
          accept="image/*"
          ref={fileInput}
          hidden
          onChange={(e) => handleFile(e.target.files[0])}
        />
      </div>
      <div className={`${image?'col-4':''}`}>
        {previewUrl && (
          <div className="">
            <img src={previewUrl} className="img-fluid h-25 w-50" alt="img" />
          </div>
        )}
      </div>
    </div>
  );
};
export default UploadImage;
