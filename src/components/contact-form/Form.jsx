import { useState } from 'react'
import { Card, CardBody } from "@chakra-ui/react"
import Button from './Button'
import { Input as ChakraInput, Stack, Textarea } from '@chakra-ui/react'

const Form = () => {

    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        alert()
        //check validity
    }

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
                        />
                        <label htmlFor='email'>Email</label>
                        <ChakraInput
                            id='email'
                            placeholder='Enter your email address'
                            defaultValue={formValues.email}
                        />
                        <label htmlFor='message'>Message</label>
                        <Textarea
                            id='message'
                            placeholder='Enter your message here'
                            defaultValue={formValues.message}
                        />
                    </Stack>
                    <button className="submit-form" type='submit'>Submit Form</button>
                </form>
            </CardBody>
        </Card>

    )
}

export default Form
