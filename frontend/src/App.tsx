import { Container } from 'react-bootstrap';
import LoginModal from './components/LoginModal';
import NavBar from './components/NavBar';
import SignUpModal from './components/SignUpModal';


function App() {

  return (
    <div>
      <NavBar
        loggedInUser={null}
        onLogInClicked={() => { }}
        onSignUpClicked={() => { }}
        onLogoutSuccessful={() => {}}


      />
      <Container className='{styles.notesPage'>

        {false &&
          <SignUpModal
            onDismiss={() => { }}
            onSignUpSuccessful={() => { }}
          />
        }
        {false &&
          <LoginModal
            onDismiss={() => { }}
            onLoginSuccessful={() => { }}
          />
        }


      </Container>
    </div>
  );
}

export default App;
