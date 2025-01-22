import Footer from './components/tags/Footer';
import Header from './components/tags/Header'
import Requirements from './components/tags/Requirements';
import Results from './components/tags/Results';

function App() {
  return (
    <div>
      <Header header="Rsyslog Configuration Helper"/>
      <Requirements configSegement="Provide Configuration Requirements"/>
      <Results />
      <Footer />
    </div>
  );
}

export default App;
