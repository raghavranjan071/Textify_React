import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      {/* <div classNameName="App">
        <header classNameName="App-header">
          <img src={logo} classNameName="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            classNameName="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React With Raghav
          </a>
        </header>
      </div> */}


      <Navbar title="TextUtils"aboutText = "About TextUtils" />
      <div className='container my-3'> 
      <TextForm heading="Entering the text to analyze below" />
      <button className='btn btn-primary' ></button>
</div>
    </>

  );
}

export default App;
