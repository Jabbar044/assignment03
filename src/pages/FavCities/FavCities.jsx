import React from 'react'
import { Container } from 'react-bootstrap'

const FavCities = () => {
  return (
   <>
   <Container>
   <br />
      <h1>My Favourite Cities</h1>
      <br />
    <div class="container">
  <div class="row">
    <div class="col">
      <img src="https://trek.pk/wp-content/uploads/2020/08/Statue_of_horses_D.G._Khan.jpg" alt="" class="img-fluid"
      style={{  maxWidth: '100%', 
      height: 'auto',  
      width: '800px',   
      maxHeight: '400px'  }} />
      <h2>DG Khan</h2>
      <p>Located in Punjab, Pakistan, D.G. Khan is known for its agriculture, particularly cotton and wheat production, and is a strategic hub for trade and transportation in the region.</p>
    </div>
    <div class="col">
      <img src="https://cdn.britannica.com/48/143848-050-C4971221/Lahore-Museum-Pakistan.jpg" alt="" class="img-fluid" 
      style={{  maxWidth: '100%', 
    height: 'auto',  
    width: '800px',   
    maxHeight: '400px'  }}/>
      
      <h2>Lahore</h2>
      <p>Lahore, the cultural capital of Pakistan, is a bustling city renowned for its rich history, vibrant arts, and Mughal architecture, notably the iconic Badshahi Mosque and Lahore Fort. It's a hub of commerce, education, and gastronomic delights.</p>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <img src="https://content-cdn.zameen.com/medium_gggggg_c6169bb752.jpg" alt="" class="img-fluid"
      style={{  maxWidth: '100%', 
      height: 'auto',  
      width: '800px',   
      maxHeight: '400px'  }}
      />
      <h2>Gujranwala</h2>
      <p>Situated in the province of Punjab, Gujranwala is an industrial city recognized for its manufacturing sector, including metalwork, ceramics, and textiles. It's also famed for its contributions to sports, particularly cricket.</p>
    </div>
    <div class="col">
      <img src="https://islamabad.comsats.edu.pk/assets/img/islamabad.jpeg" alt="" class="img-fluid"
       style={{  maxWidth: '100%', 
       height: 'auto',  
       width: '800px',   
       maxHeight: '300px'  }}
      />
      <h2>Islamabad</h2>
      <p>Serving as the capital of Pakistan, Islamabad is a modern, well-planned city known for its scenic beauty, greenery, and diplomatic significance. It houses the government offices, foreign embassies, and is a hub for national politics and administration.</p>
    </div>
  </div>
</div>
</Container>
   </>
  )
}

export default FavCities