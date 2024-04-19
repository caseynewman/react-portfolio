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
            {projectList.map((project) => (
                <Card
                    key={project.id}
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '350px' }}
                        src={project.imagePath}
                        alt={project.altText}
                    />
                    <Stack>
                        <CardBody>
                            <Heading className='project-title' size='md'>{project.title}</Heading>
                            <Text py='2'>
                                {project.blurb}
                            </Text>
                        </CardBody>
                        <CardFooter className='project-footer'>
                            <Button className='project-button' variant='solid' href={project.projectLink}>
                                Visit {project.title}
                            </Button>
                            <Button className='project-button' variant='outline' href={project.repoLink}>
                                View GitHub Repo
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            ))}
        </>
    );
}