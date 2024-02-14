"use client";

import { Button, Form, Input } from "@/components/UI";
import useFormHook from "../libs/useFormHook";

export default function FormSection() {
    const { value, handleClick } = useFormHook();

    return (
        <div className="w-full">
            <h1 className="font-bold text-2xl lg:text-4xl">My Form</h1>
            <hr className="my-4" />
            <div>
                <Form onSubmit={() => handleClick}>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
                    <Input.Container>
                        <Input.Text placeholder="Please enter your name" />
                    </Input.Container>

                    <Input.Container>
                        <Input.Text placeholder="Please enter your last name" />
                    </Input.Container>
                    <Input.Container>
                        <Input.Text placeholder="Please enter your name" />
                    </Input.Container>
                    </div>


                    <Button />
                </Form>
            </div>
        </div>
    );
}
