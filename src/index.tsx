import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { rows } from './data'
import Thead from './table/thead'
import Tbody from './table/tbody'
import UseMemo from './useMemo'
import UseCallback from './useCallback'
import UseEffect from './useEffect'
import UseRef from './useRef'
import UseReducer from './useReducer'

ReactDOM.render(
  <>
    <App />
    <div className="wrapper">
      <h2>TheadとTbodyによるコンポーネントの切り分けとmapによるデータ取得「健康に関する調査」</h2>
      <table>
        <Thead />
        <Tbody rows={rows}/>
      </table>
      <UseMemo />
      <UseCallback />
      <UseEffect />
      <UseRef />
      <UseReducer />
    </div>
  </>
  , document.getElementById('root'));

  serviceWorker.unregister();
