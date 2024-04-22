import { Center, Image } from '@chakra-ui/react'

export default function About() {
    return (
        <div>
            <h1>About Casey</h1>
            <div className="about-content">
                <Center>
                    <Image
                        borderRadius='full'
                        boxSize='250px'
                        padding={5}
                        src='/assets/casey-newman.jpg'
                        alt='Casey Newman'
                    />
                </Center>
                <p className='about-info'>
                    I'm Casey—a web developer, writer, and yoga teacher based in Wilmington, NC. I have a BA in Communication Studies + a Master of Letters in Creative Writing from the University of Stirling in Scotland. I'm currently working toward a technical certification in Full Stack Web Development from UNC Chapel Hill. <br/><br/>
                    With a background in both wellness and professional writing, I strive for a holistic approach to brand growth and sustainability through development, content, and design.
                </p>
            </div>

        </div>
    );
}
