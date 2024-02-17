"use client";

import { Button, Form, Input, Select } from "@/components/UI";
import useFormHook from "../libs/useFormHook";

export default function FormSection() {
    const { value, handleClick, formValidationSchema } = useFormHook();

    return (
        <Form
            onSubmit={() => handleClick}
            initialValues={{
                firstName: "",
                lastName: "",
                favoriteMovie: "",
            }}
            validationSchema={ formValidationSchema }
        >
            <div className="w-full flex flex-col justify-between h-[100vh] md:h-auto md:min-h-[70vh] bg-white shadow-md md:rounded">
                <div className="w-full px-8 pt-6 pb-8 mb-4">
                    <h1 className="font-bold text-2xl lg:text-4xl">My Form</h1>
                    <hr className="my-4" />
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
                                    label="Favorite Star Wars movie"
                                    placeholder="Please choose your favorite Star Wars movie"
                                    name="favoriteMovie"
                                    options={[
                                        "A New Hope",
                                        "Rebel Moon",
                                        "Solo: A Star Wars Story",
                                        "Star Wars: The Rise of Skywalker",
                                    ]}
                                />
                            </Select.Container>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end p-6">
                    <Button.Base
                        submit={true}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </Button.Base>
                </div>
            </div>
        </Form>
    );
}
