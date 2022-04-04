import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import List from './components/List';
import Form from './components/Form';

import { fetchPosts, togleeList } from  './store/actions';

import './App.css';

function App() {
  const showList = useSelector(state => state.showList);
  const dispatch  = useDispatch();

  const handleClick = () => {
    dispatch(togleeList());
  }

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <div className="App-header">
      <div className="form-container">
        <Form />
      </div>
      <button onClick={handleClick}>
        Toggle List
      </button>

      {
        showList && (
          <div className="list-container">
            <List />
          </div>
        )
      }

    </div>
  );
}

export default App;
