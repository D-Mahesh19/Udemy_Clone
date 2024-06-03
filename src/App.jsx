import './App.css';
import Article from './Components/Article';
import Article2 from './Components/Article2';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navi from './Components/Navi';
import Section from './Components/Section';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navi/>
      <Section/>
      <Section2/>
      <Section3/>
      <Article/>
      <Article2/>
      <Footer/>
    </div>
  );
}

export default App;
