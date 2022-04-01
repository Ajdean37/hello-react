import Header from '../Header/Header';
import './App.css';
import List from '../List/List';
import Card from '../Card/Card';

function App() {

  return (
    <div>
      <Header content={"Hello React"}/> 
      <Header hSelection={"h2"} content={"Groceries"} />
      <List classList={['font1', 'no-bullets']} />
      <Card />
    </div> 
  );
}

export default App
