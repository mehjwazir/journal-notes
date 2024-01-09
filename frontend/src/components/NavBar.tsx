import { Container, Nav, Navbar } from "react-bootstrap";
import { User } from "../models/user";
import NavBarLoggedOutView from "./NavBarLoggedOutView";
import NaveBarLoggedInView from "./NavBarLoggedInView";
import { Link } from "react-router-dom";


interface NavBarProps {
	loggedInUser: User | null,
	onSignUpClicked: () => void,
	onLogInClicked: () => void,
	onLogoutSuccessful: () => void,
}



//functional component
const  NavBar = ({loggedInUser, onSignUpClicked, onLogInClicked, onLogoutSuccessful}: NavBarProps) => {
	

	return (
		<Navbar bg="success" variant="dark" expand="sm" sticky="top">
			<Container>
				<Navbar.Brand as={Link} to="/">
					Journal Notes
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="main-navbar" />
				<Navbar.Collapse id="main-navbar">
					<Nav>
						<Nav.Link as={Link} to="/privacy">
								Privacy
						</Nav.Link>
					</Nav>
					<Nav className="ms-auto">
						{loggedInUser
							? <NaveBarLoggedInView user={loggedInUser} onLogoutSuccessful={onLogoutSuccessful} />
							: <NavBarLoggedOutView onLoginClicked={onLogInClicked} onSignUpClicked={onSignUpClicked} />
						}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	  );
}
 
export default NavBar;