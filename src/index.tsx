import ReactDOM from 'react-dom/client'
import App from './App';
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <App />
);