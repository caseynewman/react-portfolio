import { Button as ChakraButton, chakra } from '@chakra-ui/react'

const Button = chakra(ChakraButton, {
    baseStyle: {
        color: 'black',
        backgroundColor: '#ffbf34',
        borderRadius: '3',
        border: '1px solid #888'
    }
})

export default Button
