import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import enUS from 'antd/lib/locale/en_US';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ConfigProvider } from 'antd';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ConfigProvider locale={enUS} theme={{
      "token": {
        "colorPrimary": "#42a5f5",
        "colorTextBase": "#f1f1f1",
        "colorBgBase": "#1c1c1e",
        "colorSuccess": "#66bb6a",
        "colorWarning": "#ff9f00",
        "colorInfo": "#42a5f5",
        "wireframe": false
      }
    }}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
