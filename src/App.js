import Header from './components/Header'
import BoardCanvas from './components/BoardCanvas'
import BoardHeader from './components/BoardHeader'
import Avatar from './components/Avatar'
import IconButton from './components/IconButton'
import BellIcon from './components/Icons/Bell'
import Dnd from './components/Dnd'

function App() {
  return (
    <div className="bg-blue w-full h-screen font-sans">
      <Header avatar={<Avatar src="https://i.imgur.com/OZaT7jl.png" />}  addButton={<IconButton>+</IconButton>} infoButton={<IconButton>i</IconButton>} alertButton={<IconButton color="red"><BellIcon/></IconButton>} />
      <BoardHeader title="Company Overview" companyName="Acme" />
      <BoardCanvas>
        <Dnd />
      </BoardCanvas>
    </div>
  );
}

export default App;
