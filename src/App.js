
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Form>
      <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Nom</Form.Label>
      <Form.Control type="Nom" placeholder="Donner votre nom" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Prénom

      </Form.Label>
      <Form.Control type="Nom" placeholder="Donner votre prénom" />
    </Form.Group>

    
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>



  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Ville</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Gafsa</option>
        <option>Sfax</option>
        <option>Touzer</option>
      </Form.Select>
    </Form.Group>

  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Envoyer une demande
  </Button>
</Form>
    




      </header>
    </div>
  );
}

export default App;
