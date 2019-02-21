import React from "react"
import ChampionObjectCard from "./components/ChampionObjectCard"
import Header from "./components/Header"


function App() {
    return (
      <div>
        <div>
          <Header />
          <ChampionObjectCard
            champion = {{name: "Vayne", id: "67", role: "Carry", "secondary": "Assassin", title: "the Night Hunter"}}
          />
        </div>
        <div>
          <Header />
          <ChampionObjectCard
            champion = {{name: "Ezreal", id: "81", role: "Carry", "secondary": "Mage", title: "the Prodigal Explorer"}}
          />
        </div>
        <div>
          <Header />
          <ChampionObjectCard
            champion = {{name: "Caitlyn", id: "51", role: "Carry", "secondary": "N/A", title: "the Sheriff of Piltover"}}
            />
        </div>
      </div>
    );
}

export default App
