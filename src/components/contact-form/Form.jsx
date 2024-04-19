import { useState } from 'react'
import { Card, CardBody } from "@chakra-ui/react"
import Input from './Input'
import Button from './Button'

const Form = () => {
    const [input, setInput] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false)

    const handleSubmit = () => {
        fetch('/api/color', {
            method: 'POST',
            body: {
                name: input
            }
        })
    }

    return (
        <Card>
            <CardBody>
                <Input value={input} setVal={setInput}/>
                <Button onClick={handleSubmit}>Submit Form</Button>
            </CardBody>
        </Card>

    )
}

export default Form
