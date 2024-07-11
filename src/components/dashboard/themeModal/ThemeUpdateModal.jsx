import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form } from 'reactstrap';
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { Controller, useForm } from 'react-hook-form';
import UploadImage from '../../../views/ui/UploadImage';
import useUpdateMutateWithID from '../../../hooks/shared/useUpdateMutateWithID';

const ThemeUpdateModal = ({themeData, refetch}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [user, setUser] = useState({});
  const cookieValue = Cookies.get('AccessToken');
  const [desktopImageUrl, setDesktopImageUrl] = useState('');
  const [phoneImageUrl, setPhoneImageUrl] = useState('');

  const onError = (error) => {
    console.error('Error:', error);
  };

  useEffect(() => {
    if (cookieValue) {
      //   console.log(cookieValue);
      const decoded = jwtDecode(cookieValue);
      //   console.log(decoded);
      setUser(decoded);
    }
  }, [cookieValue]);

  useEffect(() => {
    if (themeData) {
      setDesktopImageUrl(themeData.featuredDesktopImage);
      setPhoneImageUrl(themeData.featuredPhoneImage);
    }
  }, [themeData]);

  // ===== update theme data ========
  const onSuccess = (response) => {
    Swal.fire({
        title: "Updated!",
        text: "Your file has been updated.",
        icon: "success"
      });
      refetch()
    console.log('Success:', response);
  };
  const { mutate, isPending } = useUpdateMutateWithID(`/themes/${themeData.id}`, onSuccess, onError);

  const {
    register,
    handleSubmit,
    watch,
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
    console.log('hello');
    // console.log(desktopImageUrl);
    console.log(includeSupport)
    console.log(categories, rest)
    const supports = includeSupport.toString().split(',');

    const allCategory = categories.toString().split(',');

    const desktopImage = desktopImageUrl;
    const phoneImage = phoneImageUrl;
    let featuredDesktopImageUrl;
    let featuredPhoneImageUrl;

   if(
    featuredDesktopImageUrl
   ){
    featuredDesktopImageUrl = await uploadImage(desktopImage);
    
  
   }
   if(featuredPhoneImageUrl){
    featuredPhoneImageUrl = await uploadImage(phoneImage);
   }

    const allData = {
      ...rest,
      featuredDesktopImage: featuredDesktopImageUrl,
      featuredPhoneImage: featuredPhoneImageUrl,
      includeSupport: supports,
      categories: allCategory,
      createdBy: user.id,
    };
    console.log(allData);
    mutate( allData);
    console.log(allData);
  };

//   console.log(themeData)
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Update
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update theme details</ModalHeader>

            
        {/* // modal body  */}
        <ModalBody>
          <Form onSubmit={handleSubmit(onSubmit)} className='p-2'>
            <Controller
              name="name"
              defaultValue={themeData.name}
              control={control}
            
              render={({ field }) => (
                <div className="mb-3">
                
                  <div>Theme Name</div>
                  <Input {...field} placeholder="Write your theme Name" type="text" defaultValue={themeData?.name}/>
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
              defaultValue={themeData.categories?.toString()}
      
              render={({ field }) => (
                <div className="mb-3">
                  <Label for="themeName">Categories</Label>
                  <Input {...field} placeholder="Write your theme Name" type="text" defaultValue={themeData?.categories?.toString()}/>
                </div>
              )}
            />

            <Controller
              name="version"
              control={control}
    
              render={({ field }) => (
                <div className="mb-3">
                  <Label for="themeVersion">Version</Label>
                  <Input {...field} placeholder="Give Theme Version Here" type="text" defaultValue={themeData?.version}/>
                </div>
              )}
            />

            <Controller
              name="price"
              control={control}
      
              defaultValue={themeData.price}
              render={({ field }) => (
                <div className="mb-3">
                  <Label for="themePrice"> Price</Label>
                  <Input {...field} placeholder="Give theme price here" type="number" defaultValue={themeData?.price}/>
                </div>
              )}
            />

            <Controller
              name="includeSupport"
              control={control}
         
              defaultValue={themeData.includeSupport}
              render={({ field }) => (
                <div className="mb-3">
                  <Label for="themePrice">Includes Support</Label>
                  <Input {...field} placeholder="Give theme support" type="text" defaultValue={themeData.includeSupport?.toString()}/>
                </div>
              )}
            />

            <Controller
              name="author"
              control={control}
          
              defaultValue={themeData.author}
              render={({ field }) => (
                <div className="mb-3">
                  <Label for="themePrice">Author</Label>
                  <Input {...field} placeholder="Give theme support" type="text" defaultValue={themeData.author}/>
                </div>
              )}
            />

            <div>Short Description</div>
            <Controller
              name="description"
              defaultValue={themeData.description}
              control={control}
        
              render={({ field }) => <textarea {...field} rows={4} className="w-100" defaultValue={themeData.description}></textarea>}
            />

            <div className="mt-3">
              <Button color="primary" type="submit" >Update</Button>
            </div>
          </Form>
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ThemeUpdateModal;
