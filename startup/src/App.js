import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header';
import Todo from './components/todo';
import List from './components/list';
import Footer from './components/footer';
import Accueil from './components/accueil';
import Produit from './components/produit';
import Equipe from './components/equipe';

const initialFormData = Object.freeze({
  title: "",
  description: "",
  done: false,
  id : Math.ceil(Math.random() * 10000)
});

function App() {

  const [formData, updateFormData] = useState(initialFormData);

  const [todos, addTodos] = useState([]);

  return (
    <div class="fond">
      <div className="App">
        <Header/>
        <Router>
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route exact path="/produit" element={<Produit />} />
            <Route exact path="/equipe" element={<Equipe />} />
          </Routes>
        </Router>
        <Footer/>
      </div>
    </div>
  );
}



export default App;