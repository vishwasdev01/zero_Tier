import './App.css';
import Navbar from './components/sections/Navbar';
import Card from './components/sections/Card';
import Footer from './components/sections/Footer';
import Network from './components/sections/Network';
import FirstSection from './components/sections/FirstSection';
import MainCard from './components/sections/MainCard';
import Pricing from './components/sections/Pricing';

function App() {
  return (
    <div className='text-white bg-[#1a1a1a]'>
      <div className='bg-[url(https://scontent.fnag1-2.fna.fbcdn.net/v/t39.30808-6/370481181_799283112206663_8178920693622850340_n.png?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=M36yh8as8d4AX8CS8I0&_nc_ht=scontent.fnag1-2.fna&oh=00_AfCI0a5SNNJw7oJirOOe1Kqg9w182bXaRlIN3pzAjdtBTQ&oe=6546A6CB)] bg-contain bg-no-repeat bg-right'>

        <Navbar />
        <FirstSection />
      </div>
      <MainCard />
      <Network />
      <Pricing />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
