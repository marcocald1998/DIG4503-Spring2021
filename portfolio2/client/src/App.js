import CreateIcecream from './components/CreateIcecream';
import DeleteIcecream from './components/DeleteIcecream';
import ReadIcecream from './components/ReadIcecream';
import UpdateIcecream from './components/UpdateIcecream';
import './App.css';


function App() {
  return (
    <div>
      <h1>Favorite Icecream Flavors</h1>
    <div className="App">
      <div> <CreateIcecream className="Create"/> </div>
      <div><UpdateIcecream className="Update"/></div>
      <div><ReadIcecream className="Read"/></div>
      <div><DeleteIcecream className="Delete"/></div>
    
      
    </div>
    
    </div>
   
  );
}

export default App;
