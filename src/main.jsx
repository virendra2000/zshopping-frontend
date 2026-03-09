import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="930518765030-vv9fn4c7qt799sknqfi02b4u3ar5811r.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
)
