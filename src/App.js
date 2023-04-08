import logo from './logo.svg';
import './App.css';
import ModelViewer from './components/modelViewer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <ModelViewer scale="10" modelPath={"fpoon2.glb"} position={[0,0,0]}/>
    </div>
  );
}

export default App;
