import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  Marker
} from '@vis.gl/react-google-maps'


function App() {
  const [img, setImg] = useState()

  const handleChange=(e)=>{
    console.log(e.target.files)
    const data = new FileReader()
    data.addEventListener('load',()=>{
setImg(data.result)
    })
    data.readAsDataURL(e.target.files[0])
  };
  console.log(img)

  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState({ lat: 37.7749, lng: -122.4178 })

  const RamdomAbbottabadLocations=[

    {lat:34.187875,lng:73.233663},
    {lat:34.1488,lng:73.239663},
    {lat:34.1499175,lng:73.779},
    {lat:34.1490875,lng:73.239663},
    {lat:34.1493775,lng:73.2394563},

  ]

  const atd=()=>{
setPosition({lat:34.1490875,lng:73.239663})
  }

  const china=()=>{
setPosition({lat:35.86166,lng:104.195397})
  }

  const uk=()=>{
setPosition({lat:55.378051,lng:-3.435973})
  }

  return (
    <div className='w-full h-auto text-white text-2xl flex flex-col justify-around items-center  bg-black'>
      <APIProvider apiKey='AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg'>
        <div><p>Google map testing</p></div>
        <div className='flex gap-x-10 items-center'>

<div className='border-2 border-white p-2 rounded-xl cursor-pointer' onClick={()=>{atd()}}>Abbottabad</div>
<div className='border-2 border-white p-2 rounded-xl cursor-pointer' onClick={()=>{china()}}>China</div>
<div className='border-2 border-white p-2 rounded-xl cursor-pointer' onClick={()=>{uk()}}>UK</div>

        </div>
<div className='h-[500px] w-[400px] border-2 border-white'>

  <Map zoom={15} center={position} mapId='73536c9502fc7cce'>


    
    <AdvancedMarker position={position} onClick={()=>{setOpen(true)}}></AdvancedMarker>
    {open && <InfoWindow position={position} onCloseClick={()=>{setOpen(false)}}>
      <div className='text-black font-bold'>
        <h1>San Francisco</h1>
        <p>Population: 837,442</p>
      </div>
    </InfoWindow>}
  </Map>
</div>
      </APIProvider>

      <div className='h-[500px] border-2 border-white w-full '>

        <input type="file" onChange={handleChange}/> 

        {
          img && <img src={img} alt="image" className='w-full h-full'/> 
        }

      </div>
    </div>
  )
} //add image and preview

export default App
