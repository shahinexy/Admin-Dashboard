import React, { useEffect, useState } from 'react';
import UploadImage from './UploadImage';
import axios from 'axios';

function DemoStoreInput({stores, setStores}) {
  const [storeName, setStoreName] = useState('');
  const [storeLink, setStoreLink] = useState('');
  const [storeImage, setStoreImage] = useState('');
  const [demoImg, setDemoImg] = useState('');
 console.log(storeImage)
  const [editIndex, setEditIndex] = useState(-1); // Index of the store being edited, -1 means no editing

  const handleAddStore = async () => {
    if (storeName.trim() !== '' && storeLink.trim() !== '' && storeImage !== '') {
      if (editIndex === -1) {
        const newStore = { name: storeName, url: storeLink, image: storeImage };
        const newStores = [...stores, newStore];
        const result = await setStores(newStores);
      } else {
        const updatedStores = [...stores];
        updatedStores[editIndex] = { name: storeName, url: storeLink, image: storeImage };
        setStores(updatedStores);
        setEditIndex(-1);
      }
      setStoreName('');
      setStoreLink('');
      setStoreImage('');
      console.log(stores);
    }
  };

  const handleEditStore = (index) => {
    const storeToEdit = stores[index];
    setStoreName(storeToEdit.name);
    setStoreLink(storeToEdit.url);
    setStoreImage(storeToEdit.image);
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setStoreName('');
    setStoreLink('');
    setStoreImage('');
    setEditIndex(-1);
  };

  const uploadImage = async (file) => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'images_preset');

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/dwhvo770r/upload`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );

        console.log(response.data.secure_url, 'uploaded in cloudinary');

        return response.data.secure_url;
      } catch (error) {
        console.error(error);
      }
    }
    return null;
  };

  useEffect(() => {
    const fetchImage = async () => {
      const imageUrl = await uploadImage(demoImg);
      if (imageUrl) {
        setStoreImage(imageUrl);
      }
    };
  
    if (demoImg) {
      fetchImage();
    }
  }, [demoImg]);

  return (
    <div className="container my-5">
      <h3 className="mb-4">Add Store Demo</h3>
      <div className="mb-3">
        <UploadImage setImageUrl={setDemoImg} />
        <input
          type="text"
          className="form-control mb-2"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          placeholder="name"
        />
        <input
          type="text"
          className="form-control mb-2"
          value={storeLink}
          onChange={(e) => setStoreLink(e.target.value)}
          placeholder="link"
        />
        {/* <input
          type="text"
          className="form-control mb-2"
          value={storeImage}
          onChange={(e) => setStoreImage(e.target.value)}
          placeholder="image URL"
        /> */}
        {editIndex === -1 ? (
          <button className="btn btn-primary" onClick={handleAddStore}>Add Store</button>
        ) : (
          <>
            <button className="btn btn-success me-2" onClick={handleAddStore}>Update Store</button>
            <button className="btn btn-secondary" onClick={handleCancelEdit}>Cancel Edit</button>
          </>
        )}
      </div>
      <ul className="list-unstyled">
        {stores.map((store, index) => (
          <li key={index} className="border p-3 mb-3">
            <img src={store.image} alt={store.name} className="img-fluid mb-2" style={{ maxWidth: '100px', maxHeight: '100px' }} />
            <h4>{store.name}</h4>
            <p><a href={store.url} target="_blank" rel="noopener noreferrer">{store.url}</a></p>
            <button className="btn btn-sm btn-info me-2" onClick={() => handleEditStore(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DemoStoreInput;
