import React from 'react'
import Banner from '../../components/Banner/Banner'
import { Container } from 'react-bootstrap'


const Home = () => {
  return (
    <>
    <Banner/>
    <Container>
      <br />
      <h1>My Hobbies</h1>
      <br />
    <div class="container">
  <div class="row">
    <div class="col">
      <img src="https://images.pexels.com/photos/3718433/pexels-photo-3718433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="img-fluid"/>
      <h2>Cricket</h2>
      <p>Cricket, a popular bat-and-ball sport, is played between two teams of eleven players each. The objective is to score runs by hitting the ball and running between wickets. The team that scores the most runs while defending their wickets wins the game. Cricket is known for its strategy, skill, and moments of intense excitement.</p>
    </div>
    <div class="col">
      <img src="https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="img-fluid"/>
      <h2>Web Development</h2>
      <p>Web development involves creating and maintaining websites or web applications. It encompasses tasks like coding, designing, and structuring the online interface to ensure functionality and user experience. Developers use various programming languages and frameworks to build responsive, interactive, and visually appealing websites that meet specific business or personal needs. This dynamic field is constantly evolving to adapt to new technologies and user expectations.</p>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <img src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="img-fluid"/>
      <h2>Travelling</h2>
      <p>Traveling is the journey of the soul, a dance with the unknown. It's embracing new landscapes, cultures, and flavors, breaking free from the ordinary. With every step, we unravel stories and create memories, painting the canvas of our lives with vibrant hues of adventure and discovery.</p>
    </div>
    <div class="col">
      <img src="https://images.pexels.com/photos/1478477/pexels-photo-1478477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="img-fluid"/>
      <h2>Sketching</h2>
      <p>Sketching is the art of capturing the essence of an idea or scene through quick, freehand drawings. It allows artists to explore their creativity, convey emotions, and refine their concepts with minimal detail. Sketching is a versatile and spontaneous form of visual expression, often serving as a foundation for more detailed artwork or as a standalone artistic statement.</p>
    </div>
  </div>
</div>
</Container>

    </>
    
  )
}

export default Home