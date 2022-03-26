import './App.css';
import Header from './Component/Header/Header';
import Qnapart from './Component/Qnapart/Qnapart';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Qnapart></Qnapart>
    </div>
  );
}

export default App;
