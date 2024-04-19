import { Input as ChakraInput, Stack, Textarea } from '@chakra-ui/react'

const Input = (props) => {
    const { value, setVal } = props
    return (
        <Stack spacing={2}>
            <h2>Name:</h2>
            <ChakraInput
                placeholder='Enter your name'
                value={value}
                onChange={(e) => setVal(e.target.value)}
            />
            <h2>Email:</h2>
            <ChakraInput
                placeholder='Enter your email address'
                value={value}
                onChange={(e) => setVal(e.target.value)}
            />
            <h2>Message:</h2>
            <Textarea
                placeholder='Enter your message here'
                value={value}
                onChange={(e) => setVal(e.target.value)}
            />
        </Stack>
    )
}

export default Input