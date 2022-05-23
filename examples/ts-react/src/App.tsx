import Card from './component/Card';
import Form from './component/Form';

import './App.css';

function App() {

  return (
    <div className="App">
      <Card
        title="Hola Mundo"
        description="Como estas"
      >
        <p>Este es un hijo dentro del Card</p>
      </Card>

      <Form />
    </div>
  );
}

export default App;
