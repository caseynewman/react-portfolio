import { Button as ChakraButton, chakra } from '@chakra-ui/react'

const Button = chakra(ChakraButton, {
    baseStyle: {
        color: 'black',
        backgroundColor: '#ffddd1',
        borderRadius: '3',
        border: '1px solid #888',
        maxWidth: '50%',
    }
})

export default Button
