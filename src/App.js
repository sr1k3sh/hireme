import './App.scss';
import Banner from './components/Banner';
import Footer from './components/Footer';
import GetEmail from './components/GetEmail';
import MyServices from './components/MyServices';
import MyTool from './components/MyTool';
import PersonalContainer from './components/PersonalContainer';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <PersonalContainer></PersonalContainer>
      <MyServices></MyServices>
      <MyTool></MyTool>
      <GetEmail></GetEmail>
      <Footer></Footer>
    </div>
  );
}

export default App;
