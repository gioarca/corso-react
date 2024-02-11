import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
// import CardPersona from './components/CardPersona.jsx'
import CardForm from './components/CardForm.jsx'
// import CardDati from './components/CardDati.jsx'

function handleClick() {
  alert("ciao")
}
function handleChange(e) {
  console.log(e.target.value)   // console.log(e.target.value)  consente di vedere i valori degli eventi in js
}
function handleSubmit(e) {
  e.preventDefault();
  console.log(e)  // in questo modo si vedono gli eventi, da ricordare!
}

function App() {

  const [cities, setCities] = useState([
    {
    id: 0,
    name: "Tokyo",
    description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nesciunt.", 
    imgURL: 
      "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVisited: true,
  }, 
    {
    id: 1,
    name: "New York",
    description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nesciunt.",
    imgURL: 
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVisited: false,
  }, 
    {
    id: 2,
    name: "Rome",
    description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nesciunt.",
    imgURL: 
      "https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVisited: true,
  }, 
    {
    id: 3,
    name: "Paris",
    description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nesciunt.",
    imgURL: 
      "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVisited: false,
  }
  ])

  const addCity = (city) => {
    setCities([...cities, city])
  }

  // const [dati, setDati] = useState([
  //   {
  //   id: 0,
  //   nome: "Luca",
  //   cognome: "Rossi",
  //   codiceFiscale: "SHVWFS55B25E557Y",
  //   città: "Roma",
  //   stato: "Italia",
  //   via: "via Nettuno, 58",
  //   isVisited: true,
  // }, 
  //   {
  //   id: 1,
  //   nome: "Chiara",
  //   cognome: "Antonelli",
  //   codiceFiscale: "HCNSQU43E27E841U",
  //   città: "Treviso",
  //   stato: "Italia",
  //   via: "via Asdrubale Paolo, 132",
  //   isVisited: false,
  // }, 
  //   {
  //   id: 2,
  //   nome: "Giovanni",
  //   cognome: "Esposito",
  //   codiceFiscale: "LLWRGV99B16L551J",
  //   città: "Napoli",
  //   stato: "Italia",
  //   via: "piazza Del Nord Italia, 69",
  //   isVisited: true,
  // }, 
  //   {
  //   id: 3,
  //   nome: "Francesco",
  //   cognome: "Franco",
  //   codiceFiscale: "NQHGSL45E43I422K",
  //   città: "Bari",
  //   stato: "Italia",
  //   via: "via Le mani dal culo, 48",
  //   isVisited: false,
  // }, 
  // ])

  // const addDati = (dato) => {
  //   setDati([...dati, dato])
  // }

  return (
    <>
    {/* <CardDati addDati={addDati}></CardDati> */}
    <CardForm addCity={addCity}></CardForm>
    <div className="grid grid-cols-4 gap-7">
      {/* {dati
      .map((dato) => (
        <CardPersona
        key = {dato.id}
        nome = {dato.nome}
        cognome = {dato.cognome}
        codiceFiscale = {dato.codiceFiscale}
        città = {dato.città}
        stato = {dato.stato}
        via = {dato.via}
        isVisited = {dato.isVisited}>
        </CardPersona>
      ))} */}
      {/* <Card 
      isVisited = {cities[0].isVisited}
        title={cities[0].name} 
        imgURL= {cities[0].imgURL}>
        Lorem ipsum dolor sit amet consectetur.
      </Card>  
      <Card 
      isVisited = {cities[1].isVisited}
        title={cities[1].name} 
        imgURL= {cities[1].imgURL}>
        Lorem ipsum dolor sit amet consectetur.
      </Card>  
      <Card 
      isVisited = {cities[2].isVisited}
        title={cities[2].name} 
        imgURL= {cities[2].imgURL}>
        Lorem ipsum dolor sit amet consectetur.
      </Card>  
      <Card 
      isVisited = {cities[3].isVisited}
        title={cities[3].name} 
        imgURL= {cities[3].imgURL}>
        Lorem ipsum dolor sit amet consectetur.
      </Card>   */}
      { cities 
      // .filter((city) => city.isVisited) // mi permette di filtrare le città in base ai valori di isVisited
      .map((city) => (
        <Card 
          key = {city.id}
          title = {city.name}
          isVisited = {city.isVisited}
          imgURL = {city.imgURL}>
          {city.description}
        </Card>
      ))}
    </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleClick}>Click me!</button>
        <input type="text" onChange={handleChange}/>
        <form onSubmit={handleSubmit}>
          <button type='submit'>Invia</button>
        </form>
      </div> */}
    </>
  )
}

export default App;
