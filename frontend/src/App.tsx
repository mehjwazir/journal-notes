import { useEffect, useState } from 'react';
import LoginModal from './components/LoginModal';
import NavBar from './components/NavBar';
import SignUpModal from './components/SignUpModal';
import { User } from './models/user';
import * as NotesApi from "./network/notes_api";
import { BrowserRouter } from 'react-router-dom';


function App() {


  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);


  useEffect(() => {
    async function fetchLoggedInUser() {
      try {
        const user = await NotesApi.getLoggedInUser();
        setLoggedInUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLoggedInUser();
  }, [])

  return (
    <BrowserRouter>
    <div>
      <NavBar
        loggedInUser={loggedInUser}
        onLogInClicked={() => setShowLoginModal(true)}
        onSignUpClicked={() => setShowSignUpModal(true)}
        onLogoutSuccessful={() => setLoggedInUser(null)}


      />
      

      {showSignUpModal &&
        <SignUpModal
          onDismiss={() => setShowSignUpModal(false)}
          onSignUpSuccessful={(user) => {
            setLoggedInUser(user);
            setShowSignUpModal(false);
          }}
        />
      }
      {showLoginModal &&
        <LoginModal
          onDismiss={() => setShowLoginModal(false)}
          onLoginSuccessful={(user) => {
            setLoggedInUser(user);
            setShowSignUpModal(false);

          }}
        />
      }
      </div>
    </BrowserRouter>
  );
}

export default App;
