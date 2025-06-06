import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Button, Text } from '@chakra-ui/react'
import MyButton from '../Button'
import './style.css'
import SecondaryButton from '../ButtonSecondary';

const projectList = [
    {
        title: 'Bubble App',
        blurb: 'This is a full-stack social media application emphasizing minimalistic functionality and expression. It uses React, GraphQL, and MongoDB.',
        imagePath: '/assets/bubble-app.png',
        altText: 'Bubble App',
        projectLink: 'https://bubblesocial.netlify.app/',
        repoLink: 'https://github.com/cspecialblackberry/Bubble_App',
        id: 1,
    },
    {
        title: 'Weather Dashboard',
        blurb: 'This application uses the OpenWeather API to retrieve and display weather information from any city in the world. Recently searched cities are stored locally.',
        imagePath: '/assets/weather-dashboard-screenshot.png',
        altText: 'Weather Dashboard',
        projectLink: 'https://caseynewman.github.io/weather-dashboard/',
        repoLink: 'https://github.com/caseynewman/weather-dashboard',
        id: 2,
    },
    {
        title: 'Quick Chef App',
        blurb: `This full-stack application uses the Spoonacular API to retrieve and display recipe information matching a user's specific criteria. They can save favorite recipes, make notes about each, and create a weekly meal plan using those favorites.`,
        imagePath: '/assets/quick-chef-website.png',
        altText: 'Quick Chef App',
        projectLink: 'https://quick-chef-app.onrender.com/',
        repoLink: 'https://github.com/caseynewman/quick-chef-app',
        id: 3,
    },
    {
        title: 'Quiet Soul',
        blurb: `This full-stack application offers a library of meditations for users to choose from. They can update and save their profile information, including a weekly meditation goal. The app logs users' listen time, tracking the progress they've made toward their goal.`,
        imagePath: '/assets/quiet-soul-homepage.png',
        altText: 'Quiet Soul',
        projectLink: 'https://fathomless-garden-22238-8788b79a83a2.herokuapp.com/login',
        repoLink: 'https://github.com/rbenjamin4/meditation-app',
        id: 4,
    },
    {
        title: 'Code Quiz',
        blurb: `This application uses JavaScript to test the user's knowledge of web development by dynamically adding content to the page for each question and indicating whether or not it's answered correctly. The quiz is timed and scores are stored locally.`,
        imagePath: '/assets/code-quiz-screenshot.png',
        altText: 'Code Quiz',
        projectLink: 'https://caseynewman.github.io/code-quiz/',
        repoLink: 'https://github.com/caseynewman/code-quiz',
        id: 5,
    },
    {
        title: 'Work Day Scheduler',
        blurb: `This application allows users to add and save daily to-do's. It's responsive with the current date and time, and has color-coded time blocks that clearly display past, current, and future events.`,
        imagePath: '/assets/day-calendar-screenshot.png',
        altText: 'Work Day Scheduler',
        projectLink: 'https://caseynewman.github.io/day-calendar/',
        repoLink: 'https://github.com/caseynewman/day-calendar',
        id: 6,
    },
    {
        title: 'Note Taker App',
        blurb: 'This application uses Express, allowing users to write, edit, save and delete notes.',
        imagePath: '/assets/note-taker.png',
        altText: 'Note Taker App',
        projectLink: 'https://young-wildwood-60197-c36532e321be.herokuapp.com/',
        repoLink: 'https://github.com/caseynewman/note-taker-app',
        id: 7,
    },
]

export default function Project() {

    return (
        <section className='project-section'>
            {projectList.map((project) => (
                <Card className='project-container'
                    key={project.id}
                    // direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    marginTop={5}
                    marginBottom={5}
                    borderRadius={35}
                    border={'1px solid #1e1c1d'}
                    backgroundColor={''}
                    // align={'center'}
                >
                    <Image
                        className='project-image'
                        objectFit='cover'
                        boxSize={400}
                        maxW={{ base: '100%', sm: '100%' }}
                        src={project.imagePath}
                        alt={project.altText}
                    />
                    <Stack className='project-body'>
                        <CardBody
                            padding={30}
                            paddingBottom={0}
                            align={'left'}
                        >
                            <h2 className='project-title' size='md'>{project.title}</h2>
                            <Text py='2'>
                                {project.blurb}
                            </Text>
                        </CardBody>
                        <CardFooter className='project-footer'>
                            <SecondaryButton href={project.projectLink} target="_blank"
                            >
                                {project.title}
                            </SecondaryButton>
                            <SecondaryButton href={project.repoLink} target="_blank">
                                GitHub Repo
                            </SecondaryButton>
                        </CardFooter>
                    </Stack>
                </Card>
            ))}
        </section>
    );
}