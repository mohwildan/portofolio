import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>
<div className="flex flex-col gap-3">
      <p className='text-base text-gray-400'>Hey there! 👋 I'm a passionate developer with a flair for frontend and backend wizardry! With more than 2 years of hands-on experience in JavaScript/TypeScript and Golang, I thrive on creating captivating page designs and architecting robust server-side solutions. 🚀</p>
      <p className='text-base text-gray-400'>When it comes to frontend, I believe that pixel-perfect designs combined with smooth interactions can truly mesmerize users. 🎨 Whether it's crafting responsive layouts or adding that perfect animation to breathe life into a website, I'm up for the challenge!</p>
      <p className='text-base text-gray-400'>On the backend side, I'm your go-to person for crafting efficient and scalable systems. From building RESTful APIs to working with databases, I love diving deep into the logic that powers the magic of modern applications. 💡</p>
      <p className='text-base text-gray-400'>My coding journey started at the tender age of 16, and it has been nothing short of exhilarating. Every day, I seize opportunities to learn new technologies and stay at the cutting edge of development trends.</p>
      <p className='text-base text-gray-400'>If you're looking for a dynamic and dedicated collaborator to join forces on your next project, I'm just a click away! 😄 Feel free to <a href="#contact" className='font-semibold hover:text-white ease delay-100'><u>reach out to me</u></a> for an exciting journey of crafting remarkable digital experiences together! Let's make technology dance in harmony from frontend to backend and create digital magic! 🌟</p>
</div>
    </AnimationContainer>
  )
}

export default AboutMe;