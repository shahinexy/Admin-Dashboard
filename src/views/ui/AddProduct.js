import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import { Button, Input, Label } from 'reactstrap';
import 'react-quill/dist/quill.snow.css';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useSecureApi';
import usePostMutate from '../../hooks/shared/usePostMutate';
import UploadImage from './UploadImage';
import DemoStoreInput from './Demostores';

const AddProduct = () => {
  const [user, setUser] = useState({});
  const cookieValue = Cookies.get('AccessToken');
  const [desktopImageUrl, setDesktopImageUrl] = useState('');
  const [phoneImageUrl, setPhoneImageUrl] = useState('');
  const [stores, setStores] = useState([]);
  const onSuccess = (response) => {
    console.log('Success:', response);
  };
  const onError = (error) => {
    console.error('Error:', error);
  };

  useEffect(() => {
    if (cookieValue) {
      console.log(cookieValue);
      const decoded = jwtDecode(cookieValue);
      console.log(decoded);
      setUser(decoded);
    }
  }, [cookieValue]);

  const { mutate, isPending } = usePostMutate('/themes', onSuccess, onError);
  
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  // upload photo om cloudinary
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
  // on form submit
  const onSubmit = async (data) => {
    const { includeSupport, categories, ...rest } = data;

    // console.log(desktopImageUrl);

    const supports = includeSupport.split(',');
    const allCategory = categories.split(',');

    const desktopImage = desktopImageUrl;
    const phoneImage = phoneImageUrl;

    const featuredDesktopImageUrl = await uploadImage(desktopImage);
    const featuredPhoneImageUrl = await uploadImage(phoneImage);

    const allData = {
      ...rest,
      featuredDesktopImage: featuredDesktopImageUrl,
      featuredPhoneImage: featuredPhoneImageUrl,
      includeSupport: supports,
      categories: allCategory,
      createdBy: user.id,
      demoStores: stores
    };
    mutate(allData);
    console.log(allData);
  };

  return (
    <div>
      <div className="row justify-content-center">
        <h2 className="text-3xl font-bold mb-5 col-7">Upload your Theme</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="col-7">
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <div className="mb-3">
                <div>Theme Name</div>
                <Input {...field} placeholder="Write your theme Name" type="text" />
              </div>
            )}
          />
          <p>Desktop Image</p>
          <UploadImage setImageUrl={setDesktopImageUrl} />

          <p>Phone Image</p>
          <UploadImage setImageUrl={setPhoneImageUrl} />

          <Controller
            name="categories"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <div className="mb-3">
                <Label for="themeName">Categories</Label>
                <Input {...field} placeholder="Write your theme Name" type="text" />
              </div>
            )}
          />

          <Controller
            name="version"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <div className="mb-3">
                <Label for="themeVersion">Version</Label>
                <Input {...field} placeholder="Give Theme Version Here" type="text" />
              </div>
            )}
          />

          <Controller
            name="price"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <div className="mb-3">
                <Label for="themePrice"> Price</Label>
                <Input {...field} placeholder="Give theme price here" type="number" />
              </div>
            )}
          />

          {/* // ===== Demo Store ===== */}
          <DemoStoreInput stores={stores} setStores={setStores} />

          <Controller
            name="includeSupport"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <div className="mb-3">
                <Label for="themePrice">Includes Support</Label>
                <Input {...field} placeholder="Give theme support" type="text" />
              </div>
            )}
          />

          <Controller
            name="author"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <div className="mb-3">
                <Label for="themePrice">Author</Label>
                <Input {...field} placeholder="Give theme support" type="text" />
              </div>
            )}
          />

          <div>Short Description</div>
          <Controller
            name="description"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <textarea {...field} rows={4} className="w-100"></textarea>}
          />

          <div className="mt-3">
            <Button color="primary">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
