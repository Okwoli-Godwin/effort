import Connect from "./Connect"
import Featured from "./Featured"
import Hero from "./Hero"
import Join from "./Join"
import Question from "./Question"
import Testimonial from "./Testimonial"
import Why from "./Why"


const Homepage = () => {
  return (
    <div>
        <Hero />
        <Connect />
        <Why />
        <Featured />
        <Question />
        <Testimonial />
        <Join />
    </div>
  )
}

export default Homepage