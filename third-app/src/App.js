import React from "react"
import Champion from "./components/ChampionObjectCard"
import Header from "./components/Header"
import Product from "./Product"
import productsData from "./champData"


//add champion data


function App() {
  const championComponent = productsData.map(champion => <Champion key ={champion.id} value={champion}/>)
    return (
      <div>
        {championComponent}
      </div>
    );
}

export default App
