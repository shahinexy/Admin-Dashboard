/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { Button, Input, Label } from 'reactstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Controller, useForm, } from 'react-hook-form';
import axios from 'axios';

const AddProduct = () => {

    const { register, handleSubmit, watch, control, setValue, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.featuredDesktopImage.name)
        // console.log(data.featuredDesktopImage)
        const desktopImg = { image: data.featuredDesktopImage.name };
        // console.log(desktopImg)
        axios.post(`https://api.imgbb.com/1/upload?key=4cfa07d6576a9464f924700ef4bab850}`, desktopImg , {
            headers: {
                "content-type": "multipart/form-data",
              },
        })
        .then(res => console.log(res))
    };
    const featuredDesktopImage = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setValue('featuredDesktopImage', event.target.files[0]);
        console.log('Selected file:', file);
    };

    return (
        <div className=''>
            <h2 className="text-3xl font-bold mb-5">Upload your Theme</h2>
            <div className="border-2 border-gray-400 rounded-xl p-7">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <div className="mb-3">
                            <div >
                                Theme Name
                            </div>
                            <Input
                                {...field}
                                placeholder="Write your theme Name"
                                type="text"
                            />
                        </div>}
                    />
                    
                    <Label for="themeName">
                                Theme Desktop Image
                            </Label>
                            <Input
                               
                                ref={featuredDesktopImage}
                                type="file"    onChange={handleFileChange} 
                            />
                    <Controller
                        name="featuredPhoneImage "
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <div className="mb-3">
                            <Label for="themeName">
                                Theme Phone Image
                            </Label>
                            <Input
                                {...field}
                        
                                placeholder="Write your theme Name"
                                type="text"
                            />
                        </div>}
                    />

        
                    <Controller
                        name="version"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <div className="mb-3">
                            <Label for="themeVersion">
                                Theme Version
                            </Label>
                            <Input
                                {...field}
                                placeholder="Give Theme Version Here"
                                type="text"
                            />
                        </div>}
                    />

                    <Controller
                        name="price"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <div className="mb-3">
                            <Label for="themePrice">
                                Theme Price
                            </Label>
                            <Input
                                {...field}
                                placeholder="Give theme price here"
                                type="number"
                            />
                        </div>}
                    />

                    <Controller
                        name="IncludesSupport"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <div className="mb-3">
                            <Label for="themePrice">
                                Includes Support
                            </Label>
                            <Input
                                {...field}
                                placeholder="Give theme support"
                                type="text"
                            />
                        </div>}
                    />

                    <div>Short Description</div>
                    <Controller
                        name="description"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <textarea {...field} rows={4} className='w-100'>

                        </textarea>}
                    />

                    <div className="mt-3">
                        <Button color="primary">Submit</Button>
                    </div>
                </form>
            </div >
        </div >
    );
}

export default AddProduct;
