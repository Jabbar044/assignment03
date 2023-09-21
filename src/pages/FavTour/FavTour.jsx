import React from 'react'
import { Container } from 'react-bootstrap'

const FavTour = () => {
  return (
    <>
    <Container>
   <br />
      <h1>My Favourite Tourist Spots</h1>
      <br />
    <div class="container">
  <div class="row">
    <div class="col">
      <img src="https://zufta.pk/wp-content/uploads/2022/04/Fairy-Meadows-ZUFTA-4.jpg" alt="" class="img-fluid"
      style={{  maxWidth: '100%', 
      height: 'auto',  
      width: '800px',   
      maxHeight: '400px'  }} />
      <h2>Naran Kagan</h2>
      <p> Nestled in the picturesque Kaghan Valley of Pakistan, Naran Kagan is renowned for its breathtaking landscapes, encompassing lush greenery, captivating lakes, and majestic mountains, making it a haven for nature enthusiasts and adventure seekers.</p>
    </div>
    <div class="col">
      <img src="https://www.pakistanhc.lk/wp-content/uploads/2018/11/16487392183_705815274f_k-e1542188621179.jpg" alt="" class="img-fluid" 
      style={{  maxWidth: '100%', 
    height: 'auto',  
    width: '800px',   
    maxHeight: '360px'  }}/>
      <h2>Neelem Valley</h2>
      <p>Situated in Azad Kashmir, Pakistan, Neelum Valley is a pristine gem known for its azure Neelum River, dense pine forests, and charming villages. Visitors are drawn to its serene beauty, offering a tranquil escape from the bustling world.</p>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <img src="https://i.dawn.com/large/2016/02/56b0626371480.png" alt="" class="img-fluid"
      style={{  maxWidth: '100%', 
      height: 'auto',  
      width: '800px',   
      maxHeight: '400px'  }}
      />
      <h2>Derawar Fort</h2>
      <p>Standing tall in the Cholistan Desert of Pakistan, Derawar Fort is a magnificent historical structure. Its imposing walls and architectural grandeur reflect the region's rich history, serving as a symbol of ancient power and endurance.</p>
    </div>
    <div class="col">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Rani_Kort_Wall_%26_Forte_View.jpg/1200px-Rani_Kort_Wall_%26_Forte_View.jpg" alt="" class="img-fluid"
       style={{  maxWidth: '100%', 
       height: 'auto',  
       width: '800px',   
       maxHeight: '320px'  }}
      />
      <h2>Ranikot Fort</h2>
      <p>Often called the "Great Wall of Sindh," Ranikot Fort in Pakistan is a colossal ancient fortification. Its massive walls wind through rugged terrain, revealing glimpses of the region's past and showcasing its architectural might.</p>
    </div>
  </div>
</div>
</Container>

    </>
  )
}

export default FavTour