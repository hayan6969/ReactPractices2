import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hay from './Hay'
import { Session, Chatbox } from "@talkjs/react";
import CustomNodeFlow from './component/CustomNodeFlow'


function App() {
 const[checkout, setCheckout] = useState(true)

  return (
  <>
   <div className='h-[300px] w-[300px] border-2 border-black ' >
 <Session appId="tBKvvdLS" userId="sample_user_alice">
      <Chatbox className='h-full'  conversationId="sample_conversation" />
    </Session>
      </div>

<div className='w-[300px]'>

{
        checkout? (
          <div  class="modal">
<form class="form">

  <div class="credit-card-info--form">
    <div class="input_container">
      <label for="password_field" class="input_label">Card holder full name</label>
      <input id="password_field" class="input_field" type="text" defaultValue="Activus" name="input-name" title="Inpit title" placeholder="Enter your full name"/>
    </div>
    <div class="input_container">
      <label for="password_field" class="input_label">Card Number</label>
      <input id="password_field" class="input_field" type="number" defaultValue="371449635398431" name="input-name" title="Inpit title" placeholder="0000 0000 0000 0000"/>
    </div>
    <div class="input_container">
      <label for="password_field" class="input_label">Expiry Date / CVV</label>
      <div class="split">
      <input id="password_field" class="input_field" type="text" defaultValue="01/24" name="input-name" title="Expiry Date" placeholder="01/23"/>
      <input id="password_field" class="input_field" type="number" defaultValue="386" name="cvv" title="CVV" placeholder="CVV"/>
    </div>
    </div>
  </div>
    <button onClick={(e)=>{
      e.preventDefault()
      setCheckout(false)
    }} class="purchase--btn">Checkout</button>
</form>
</div>
        ):(
<div class="container">
  <div class="left-side">
    <div class="card">
      <div class="card-line"></div>
      <div class="buttons"></div>
    </div>
    <div class="post">
      <div class="post-line"></div>
      <div class="screen">
        <div class="dollar">$</div>
      </div>
      <div class="numbers"></div>
      <div class="numbers-line2"></div>
    </div>
  </div>
  <div class="right-side">
    <div class="new">Hover to pay</div>
  </div>
</div>


        )
      }
  <div className='w-[600px] h-[500px]'>
  <iframe className='w-full h-full'   src="https://app.visualsitemaps.com/user_flows/embed/962c4849-3f02-4985-aff3-98d5eb1c3d4f"></iframe>

  </div>

  <div className='border-2 border-black h-[500px] w-[600px]'>
<CustomNodeFlow/>

  </div>
</div>





     


  </>
     
      
   
    
   

  
  )
}

export default App
