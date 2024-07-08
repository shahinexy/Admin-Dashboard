/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Button, Input, Label } from 'reactstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Controller, useForm, } from 'react-hook-form';

const AddProduct = () => {
    // const [value, setValue] = useState('');
    // const [description, setDescription] = useState("");
    // const [numberOfFields, setNumberOfFields] = useState([{}]);
    // const [support, setSupport] = useState({});

    const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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

                    <Controller
                        name="featuredDesktopImage"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <div className="mb-3">
                            <Label for="themeName">
                                Theme Desktop Image
                            </Label>
                            <Input
                                {...field}
                                type="file"
                            />
                        </div>}
                    />



                    <Controller
                        name="featuredPhoneImage"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <div className="mb-3">
                            <Label for="themeName">
                                Theme Phone Image
                            </Label>
                            <Input
                                {...field}
                                placeholder="Write your theme Name"
                                type="file"
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


                    <div className='mb-3'>


                        {/* {numberOfFields.map((_, index) => (
                                <div className="mb-3">
                        <Label for=`support${index}`>
                            Support {index}
                        </Label>
                        <Input
                            id=`support${index}`
                             key = { index }
                                    type = "text"
                                    placeholder = "Type support detail"
                                    className = "input input-bordered w-full max-w-xs my-1"
                                    onChange = {(e) => handleSupportChange(e, index)}
                        />
                    </div>
                            ))} */}

                        {/* <button
                            className="btn btn-sm btn-outline"
                        // onClick={handleSupportIncrement}
                        >
                            Add new input field
                        </button> */}
                    </div>


                    {/* 
                    <div className='mb-3'>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-medium">Support</span>
                            </div>
                            {numberOfFields.map((_, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    placeholder="Type support detail"
                                    className="input input-bordered w-full max-w-xs my-1"
                                // onChange={(e) => handleSupportChange(e, index)}
                                />
                            ))}
                        </label>
                        <button
                            className="btn btn-sm btn-outline"
                        // onClick={handleSupportIncrement}
                        >
                            Add new input field
                        </button>
                    </div> */}

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
