
import './App.css';
import InputForm from './components/InputForm';
import DataProvider from './components/DataProvider';
import ListTodos from './components/ListTodos';
import FooterFom from './components/FooterFom';

function App() {

  return (
    <DataProvider>
      <div className="App  h-96  text-2xl text-green-500 min-h-full max-w-3xl bg-gray-100 mx-auto">
          <p className="m-2 p-2">Hello World </p>
          <InputForm/>
          <ListTodos/>
          <FooterFom />

      </div>
    </DataProvider>
  
  );
}

export default App;
