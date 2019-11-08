import React, { Component } from "react";
import Card from "./components/card";
import FormBtn from "./components/pointButton";
import './App.css';
import cards from "./cards.json";

class App extends Component {

    state = {
        cards
    };


    // pointsOnClick = id => {
    //   // Filter this.state.friends for friends with an id not equal to the id being removed
    //   const card = this.state.card.on
    //   // Set this.state.friends equal to the new friends array
    //   this.setState({ friends });
    // };

    render() {
        return (
            <div >
                <header className="App-header">
                    {this.state.cards.map(card => (
                        <Card
                            id={card.id}
                            key={card.key}
                            image={card.image}
                        />
                    ))}
                    <FormBtn></FormBtn>
                </header>
            </div>
        );
    }
}

export default App;
