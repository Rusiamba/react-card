import './App.css';
import Card from "./Card";

function App() {
  return (
    <div className="App">
        <Card discription='react' img='https://ru.reactjs.org/logo-og.png'>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </Card>
        <Card>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </Card>
    </div>
  );
}

export default App;