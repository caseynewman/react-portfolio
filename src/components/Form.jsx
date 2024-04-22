import { useState } from 'react'
import { Card, CardBody } from "@chakra-ui/react"
import { Input as ChakraInput, Stack, Textarea } from '@chakra-ui/react'

const Form = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [nameClicked, setNameClicked] = useState(false);
    const [emailClicked, setEmailClicked] = useState(false);
    const [messageClicked, setMessageClicked] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!emailRegex.test(formValues.email)) {
            setIsError(true);
            return;
        }
        setIsError(false);
        setIsSuccess(true);
    };

    const handleNameBlur = () => {
        if (formValues.name.trim() === '') {
            setNameClicked(true);
        }
    };

    const handleEmailBlur = () => {
        if (formValues.email.trim() === '') {
            setEmailClicked(true);
        }
    };

    const handleMessageBlur = () => {
        if (formValues.message.trim() === '') {
            setMessageClicked(true);
        }
    };

    return (
        <Card>
            <CardBody>
                <form onSubmit={handleSubmit}
                    onChange={(event) => {
                        console.log(formValues)
                        const form = event.currentTarget;
                        setFormValues({
                            name: form.elements.name.value,
                            email: form.elements.email.value,
                            message: form.elements.message.value
                        })
                        console.log(formValues)
                    }}
                >
                    <Stack spacing={2}>
                        <label htmlFor='name'>Name</label>
                        <ChakraInput
                            id='name'
                            placeholder='Enter your name'
                            defaultValue={formValues.name}
                            onChange={(event) => setEmail(event.target.value)}
                            onBlur={handleNameBlur}
                        />
                        {nameClicked && formValues.name.trim() === '' && <p>Name is required!</p>}
                        <label htmlFor='email'>Email</label>
                        <ChakraInput
                            id='email'
                            placeholder='Enter your email address'
                            defaultValue={formValues.email}
                            onChange={(event) => setEmail(event.target.value)}
                            onBlur={handleEmailBlur}
                        />
                        {emailClicked && formValues.email.trim() === '' && <p>Email is required!</p>}
                        <label htmlFor='message'>Message</label>
                        <Textarea
                            id='message'
                            placeholder='Enter your message here'
                            defaultValue={formValues.message}
                            onChange={(event) => setEmail(event.target.value)}
                            onBlur={handleMessageBlur}
                        />
                        {messageClicked && formValues.message.trim() === '' && <p>Message is required!</p>}
                    </Stack>
                    {isError && <p>Please enter a valid email address!</p>}
                    {isSuccess && <p>Form submitted successfully!</p>}
                    <button className="submit-form" type='submit'>Submit Form</button>
                </form>
            </CardBody>
        </Card>

    )
}

export default Form
