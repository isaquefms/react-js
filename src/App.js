import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';

function App() {
  const [employees, setEmployees] = useState([])

  const submitEmployee = (employee) => {

  }

  return (
    <div className="App">
      <Banner />
      <Form onSubmit={employee => submitEmployee(employee)}/>
    </div>
  );
}

export default App;
