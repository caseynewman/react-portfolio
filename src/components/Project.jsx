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
        title: 'Quick Chef App',
        blurb: `This full-stack application uses the Spoonacular API to retrieve and display recipe information matching a user's specific criteria. They can save favorite recipes, make notes about each, and create a weekly meal plan using those favorites.`,
        imagePath: 'src/assets/quick-chef-website.png',
        altText: 'Quick Chef App',
        projectLink: 'https://quick-chef-app.onrender.com/',
        repoLink: 'https://github.com/caseynewman/quick-chef-app',
        id: 2,
    },
    {
        title: 'Quiet Soul',
        blurb: `This full-stack application offers a library of meditations for users to choose from. They can update and save their profile information, including a weekly meditation goal. The app logs users' listen time, tracking the progress they've made toward their goal.`,
        imagePath: 'src/assets/quiet-soul-homepage.png',
        altText: 'Quiet Soul',
        projectLink: 'https://fathomless-garden-22238-8788b79a83a2.herokuapp.com/login',
        repoLink: 'https://github.com/rbenjamin4/meditation-app',
        id: 3,
    },
    {
        title: 'Code Quiz',
        blurb: 'This application uses JavaScript to ',
        imagePath: 'src/assets/code-quiz-screenshot.png',
        altText: 'Code Quiz',
        projectLink: 'https://caseynewman.github.io/code-quiz/',
        repoLink: 'https://github.com/caseynewman/code-quiz',
        id: 4,
    },
    {
        title: 'Weather Dashboard',
        blurb: 'This application uses the OpenWeather API to retrieve and display weather information from any city in the world. Recently searched cities are stored locally.',
        imagePath: 'src/assets/weather-dashboard-screenshot.png',
        altText: 'Weather Dashboard',
        projectLink: 'https://caseynewman.github.io/weather-dashboard/',
        repoLink: 'https://github.com/caseynewman/weather-dashboard',
        id: 5,
    },
    {
        title: 'Weather Dashboard',
        blurb: 'This application uses the OpenWeather API to retrieve and display weather information from any city in the world. Recently searched cities are stored locally.',
        imagePath: 'src/assets/weather-dashboard-screenshot.png',
        altText: 'Weather Dashboard',
        projectLink: 'https://caseynewman.github.io/weather-dashboard/',
        repoLink: 'https://github.com/caseynewman/weather-dashboard',
        id: 6,
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
                    marginTop={2}
                    marginBottom={2}
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