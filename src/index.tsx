import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScripttab="home"
root.render(<App />);
