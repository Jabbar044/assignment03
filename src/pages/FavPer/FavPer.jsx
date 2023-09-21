import React from 'react'
import { Container } from 'react-bootstrap'

const FavPer = () => {
  return (<>
  <Container>
    <br />
    <h1>My Favourite Personalities</h1>
    <br />
  <div class="container">
<div class="row">
  <div class="col">
    <img src="https://moderndiplomacy.eu/wp-content/uploads/2021/08/jinnah.jpg" alt="" class="img-fluid"/>
    <h2>Quaid i Azam</h2>
    <p>Mohammad Ali Jinnah, a beacon of resilience and statesmanship, steered the nation toward freedom, crafting a sovereign Pakistan with determination and foresight.</p>
  </div>
  <div class="col">
    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtuYEKyuqTBG4rnDQODbAgsgVFtLgrvWbJFAzvKIo3nh8O8cLb" alt="" class="img-fluid"/>
    <h2>Allama Iqbal</h2>
    <p>A poetic sage and philosophical genius, Iqbal's verses ignited the flame of national consciousness, inspiring a collective vision for a unified Muslim world.</p>
  </div>
</div>

<div class="row">
  <div class="col">
    <img src="https://i.dawn.com/primary/2021/09/613e6d002f4b6.jpg" alt="" class="img-fluid"/>
    <h2>Dr Abdul Qadeer Khan</h2>
    <p>A scientific luminary and national hero, Khan's groundbreaking efforts propelled Pakistan into the nuclear age, ensuring its security and standing on the global stage.</p>
  </div>
  <div class="col">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNY27N1963DUOkc0zMGPiOok0-JZQXy39Z5g&usqp=CAU" alt="" class="img-fluid" width="840" height="480"/>
    <h2>Jaun Elia</h2>
    <p> A literary virtuoso with a tortured soul, Elia's melancholic poetry explored love, existentialism, and despair, leaving an indelible mark on Urdu literature.</p>
  </div>
</div>
</div>
</Container>
</>
  )
}

export default FavPer