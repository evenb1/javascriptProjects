import './App.css';

function Header(){
  const name = "Even";
  return (
    <div className="App">
      <h1>hello {name}</h1>
    </div>
  );
}
function App() {
  return <Header/>
}

export default App;
