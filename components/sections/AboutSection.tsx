import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import AboutMe from '@/components/content/AboutMe';

const skills = [
  {
    title: 'Languages',
    techs: ['HTML', 'CSS', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Frameworks and libraries',
    techs: ['jQuery', 'Angular', 'React', 'Next.js', 'Ionic', 'Electron.js']
  },
  {
    title: 'JavaScript libraries',
    techs: ['Redux', 'TanStack Query', 'react-router-dom', 'Wouter', 'react-helmet', 'Formik', 'Jest']
  },
  {
    title: 'Preprocessors, css style, component and motion libraries',
    techs: ['Pug', 'Scss', 'Sass', 'Less', 'Bootstrap', 'Tailwind', 'ChakraUI', 'MaterialUI', 'Framer Motion']
  },
  {
    title: 'Backend stack',
    techs: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Firebase', 'Sanity CMS', 'Strapi', 'Docker']
  },
  {
    title: 'Softwares and tools',
    techs: ['VS Code', 'Jira', 'Trello', 'Git', 'GitHub', 'ESLint', 'Husky', 'WordPress', 'Elementor', 'Figma', 'Photoshop']
  },
  {
    title: 'Agile methodologies and coding principles',
    techs: ['GitFlow', 'SCRUM', 'Kanban', 'Clean Code', 'SOLID principles', 'Clean Architecture', 'Pixel perfect']
  }
];

const AboutSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='About me' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>
          <div className="flex flex-col gap-3">
            <p className='text-base text-gray-400'>Hey there! 👋 I'm a passionate developer with a flair for frontend and backend wizardry! With more than 2 years of hands-on experience in JavaScript/TypeScript and Golang, I thrive on creating captivating page designs and architecting robust server-side solutions. 🚀</p>
            <p className='text-base text-gray-400'>When it comes to frontend, I believe that pixel-perfect designs combined with smooth interactions can truly mesmerize users. 🎨 Whether it's crafting responsive layouts or adding that perfect animation to breathe life into a website, I'm up for the challenge!</p>
            <p className='text-base text-gray-400'>On the backend side, I'm your go-to person for crafting efficient and scalable systems. From building RESTful APIs to working with databases, I love diving deep into the logic that powers the magic of modern applications. 💡</p>
            <p className='text-base text-gray-400'>My coding journey started at the tender age of 16, and it has been nothing short of exhilarating. Every day, I seize opportunities to learn new technologies and stay at the cutting edge of development trends.</p>
            <p className='text-base text-gray-400'>If you're looking for a dynamic and dedicated collaborator to join forces on your next project, I'm just a click away! 😄 Feel free to <a href="#contact" className='font-semibold hover:text-white ease delay-100'><u>reach out to me</u></a> for an exciting journey of crafting remarkable digital experiences together! Let's make technology dance in harmony from frontend to backend and create digital magic! 🌟</p>
          </div>
        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Skills & Tools</h2>

          <p className='text-base text-gray-400'>
            A look at all the programming languages, libraries, and tools I've worked with, I started programming about 4 years ago. I have tried a few programming languages and technology stack, both Backend and Frontend.
          </p>

          <p className='text-base text-gray-400'>
            Event though the scope of web development is wide, I was very interested and focused on Frontend development and UI/UX design.
          </p>

          <div className='flex flex-col items-start gap-3 mt-3'>

            {
              skills.map(({ title, techs }) => (
                <div key={title}>

                  <h3 className='font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start'>{title}</h3>

                  <AnimationContainer customClassName='flex items-center flex-wrap gap-3 mb-5'>
                    <ShowSkills skills={techs} />
                  </AnimationContainer>

                </div>
              ))
            }

          </div>

        </AnimationContainer>

        <AnimationContainer customClassName='w-full flex flex-col gap-5'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Interests & Goals</h2>

          <p className='text-base text-gray-400'>
            I am interested in learning Backend with other language like Java, Go or with Python. I also want to know how to make a video game with Unity or other and I am very interested in being a content creator whether programming or something else.
          </p>

          <p className='text-base text-gray-400'>
            For now I'm learning how to make applications with real time communication such as a chat using Socket.IO, I'm also starting to learn the way to be Devops using Docker, Kubernetes, AWS or others.
          </p>

          <p className='text-base text-gray-400'>
            I am also interested in learning other things besides programming such as 3D design with Blender and video editing with Davinci Resolve (these last two I would take as a hobby).
          </p>

        </AnimationContainer>

      </div>

    </SectionContainer>
  )
}

export default AboutSection;