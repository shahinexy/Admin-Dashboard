import React, { useRef, useState } from 'react';
// import './style.css';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const fileInput = useRef(null);
  const handleFile = (file) => {
    //you can carry out any file validations here...
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
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
  };
  return (
    <div className="flex flex-column">
      <div
        className="drop_zone"
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
      <div>
        {previewUrl && (
          <div className="image">
            <img src={previewUrl} className="w-25 h-25" alt="img" />
            <span> {image.name} </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default ImageUploader;
