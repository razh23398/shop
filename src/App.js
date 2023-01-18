
import NavBar from './components/navBar';
import About from './components/about';
import Footer from './components/footer';
import GameHolder from './components/gameHolder';
import games from './data/games';
import Select from 'react-select'

function App() {
  return (
    <div>
    <NavBar />
    <About />
    <GameHolder 
    key="1"
    name="Action"
    holderGaner={games.Action.title}
    />
    <GameHolder 
    key="2"
    name="Kids"
    holderGaner={games.Kids.title}
    />
    <GameHolder 
    key="3"
    name="Strategy"
    holderGaner={games.Strategy.title}
    />
    <GameHolder 
    key="4"
    name="Sport"
    holderGaner={games.Sport.title}
    />
    <GameHolder 
    key="5"
    name="Simulator"
    holderGaner={games.Simulator.title}
    />
    <GameHolder 
    key="6"
    name="Adventures"
    holderGaner={games.Adventures.title}
    />
    <Footer />
    </div>
  );
}

export default App;
