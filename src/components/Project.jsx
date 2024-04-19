import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Button, Text } from '@chakra-ui/react'

const projectList = [
    {
        title: 'Weather Dashboard',
        blurb: 'This application uses the OpenWeather API to retrieve and display weather information from any city in the world. Recently searched cities are stored locally.',
        imagePath: 'src/assets/weather-dashboard-screenshot.png',
        altText: 'Weather Dashboard',
        projectLink: 'https://caseynewman.github.io/weather-dashboard/',
        repoLink: 'https://github.com/caseynewman/weather-dashboard',
        id: 1,
    },
    {
        title: 'Weather Dashboard',
        blurb: 'This application uses the OpenWeather API to retrieve and display weather information from any city in the world. Recently searched cities are stored locally.',
        imagePath: 'src/assets/weather-dashboard-screenshot.png',
        altText: 'Weather Dashboard',
        projectLink: 'https://caseynewman.github.io/weather-dashboard/',
        repoLink: 'https://github.com/caseynewman/weather-dashboard',
        id: 2,
    },
    {
        title: 'Weather Dashboard',
        blurb: 'This application uses the OpenWeather API to retrieve and display weather information from any city in the world. Recently searched cities are stored locally.',
        imagePath: 'src/assets/weather-dashboard-screenshot.png',
        altText: 'Weather Dashboard',
        projectLink: 'https://caseynewman.github.io/weather-dashboard/',
        repoLink: 'https://github.com/caseynewman/weather-dashboard',
        id: 3,
    },
]

export default function Project() {
    
    return (
        <>
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
                        <Heading className='project-title' size='md'>Weather Dashboard</Heading>

                        <Text py='2'>
                            This application uses the OpenWeather API to retrieve and display weather information from any city in the world. Recently searched cities are stored locally.
                        </Text>
                    </CardBody>

                    <CardFooter className='project-footer'>
                        <Button className='project-button' variant='solid'>
                            Visit Weather Dashboard
                        </Button>
                        <Button className='project-button' variant='outline'>
                            View GitHub Repo
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>


            {/* {projectList.map((project, ) => (

            ))}
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
                        <Heading className='project-title' size='md'>{projectList.title}</Heading>

                        <Text py='2'>
                            {projectList.blurb}
                        </Text>
                    </CardBody>

                    <CardFooter className='project-footer'>
                        <Button className='project-button' variant='solid'>
                            Visit Weather Dashboard
                        </Button>
                        <Button className='project-button' variant='outline'>
                            View GitHub Repo
                        </Button>
                    </CardFooter>
                </Stack>
            </Card> */}
        </>
    );
}