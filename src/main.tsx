import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import JobsProvider from './contexts/JobsContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <JobsProvider>
    <App />
  </JobsProvider>
);
