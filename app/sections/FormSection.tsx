"use client";

import { Button, Form, Input, Select } from "@/components/UI";
import useFormHook from "../libs/useFormHook";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MoviesContext";
import Loading from "@/components/UI/Loading";

export default function FormSection() {

    const { value, handleClick, formValidationSchema, isCompleted } = useFormHook();
    const { stars, isFetching } = useContext(MovieContext);

    return (<>
        <div className="bg-white shadow-md md:rounded px-8 py-6 h-[100vh] md:h-auto">

            {
                isFetching && <div className="flex justify-center items-center py-20"><Loading /></div>
            }
            {
                !isFetching && <>

                    <h1 className="font-bold text-2xl lg:text-4xl">My Form</h1>
                    <Form
                        onSubmit={handleClick}
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            favoriteMovie: "",
                        }}
                        validationSchema={formValidationSchema}
                    >
                        {
                            !isCompleted && <div className="w-full flex flex-col justify-between  h-[85vh] md:h-auto">
                                <div className="w-full mb-4">
                                    <div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
                                            <Input.Container>
                                                <Input.Text
                                                    label="First name"
                                                    name="firstName"
                                                    placeholder="Please enter your name"
                                                />
                                            </Input.Container>
                                            <Input.Container>
                                                <Input.Text
                                                    label="Last name"
                                                    name="lastName"
                                                    placeholder="Please enter your last name"
                                                />
                                            </Input.Container>
                                            <Select.Container>
                                                <Select.Input
                                                    disabled={isFetching}
                                                    label="Favorite Star Wars movie"
                                                    placeholder="Please choose your favorite Star Wars movie"
                                                    name="favoriteMovie"
                                                    options={stars}
                                                />
                                            </Select.Container>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end p-6 md:mt-20">
                                    <Button.Base
                                        submit={true}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Submit
                                    </Button.Base>
                                </div>
                            </div>
                        }
                        {
                            isCompleted && <div className="w-full flex flex-col justify-center items-center  h-[85vh] md:h-[45vh]"><div>Thanks for submitting the form</div></div>
                        }

                    </Form>
                </>
            }
        </div>
    </>
    );
}
