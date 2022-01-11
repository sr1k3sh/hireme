import './App.scss';
import Banner from './components/Banner';
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
    </div>
  );
}

export default App;
