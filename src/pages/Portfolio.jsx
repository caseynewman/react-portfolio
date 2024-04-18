import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Button, Text } from '@chakra-ui/react'

export default function Portfolio() {
    return (
        <div>
            <h1>Previous Work</h1>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '350px' }}
                    src='src/assets/weather-dashboard-screenshot.png'
                    alt='Weather Dashboard'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>Weather Dashboard</Heading>

                        <Text py='2'>
                            This application uses the OpenWeather API to retrieve and display weather information from any city in the world. Recently searched cities are stored locally.
                        </Text>
                    </CardBody>

                    <CardFooter className='project-footer'>
                        <Button className='project-button' variant='solid' colorScheme='blue'>
                            Visit Weather Dashboard
                        </Button>
                        <Button className='project-button' variant='solid' colorScheme='blue'>
                            View GitHub Repo
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </div>
    );
}
