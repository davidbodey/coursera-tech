import './index.css';
import Navbar from "./jsx/_navbar";
import Three from "./jsx/_three";
import SectionTitle from "./jsx/_sectiontitle";
import LeftColumn from "./jsx/_leftcolumn";
import RightColumn from "./jsx/_rightcolumn";
import Footer from "./jsx/_footer";

function App() {
  return (
        <div>
            <div className="App">
                <Navbar />

                <div className="hero-main columns">
                    <LeftColumn />
                    <RightColumn />
                </div><br /><br />

                <hr className='horizontal-line'/>

                <SectionTitle title='Excepteur sint occaecat'/>
                <Three />

                <SectionTitle title='Duis aute irure dolor'/>
                <Three />

                <SectionTitle title='Excepteur sint occaecat'/>
                <Three title={['230,000', 'Duis aute', 'Excepteur']} />

                <Footer />
            </div><br />
        </div>
  );
}

export default App;
