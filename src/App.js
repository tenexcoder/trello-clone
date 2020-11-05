import logo from './logo.svg';
import Header from './components/Header'
import BoardCanvas from './components/BoardCanvas'
import BoardHeader from './components/BoardHeader'
import List from './components/List'
import Avatar from './components/Avatar'
import IconButton from './components/IconButton'
import BellIcon from './components/Icons/Bell'
import data from './database.json'
import './App.css';

function App() {
  return (
    <div className="bg-blue w-full h-screen font-sans">
      <Header avatar={<Avatar src="https://i.imgur.com/OZaT7jl.png" />}  addButton={<IconButton>+</IconButton>} infoButton={<IconButton>i</IconButton>} alertButton={<IconButton color="red"><BellIcon/></IconButton>} />
      <BoardHeader title="Company Overview" companyName="Acme" />
      <BoardCanvas>
        {data.board.lists.map(({id, header, cards}) => <List key={id} header={header} cards={cards} />)}
      </BoardCanvas>
    </div>
  );
}

export default App;
