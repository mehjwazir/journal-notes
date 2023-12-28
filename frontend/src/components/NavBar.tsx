import { Container, Navbar } from "react-bootstrap";
import { User } from "../models/user";


interface NavBarProps {
	loggedInUser: User | null,
	onSignUpClicked: () => void,
	onLogInClicked: () => void,
	onLogoutSuccessful: () => void,
}



//functional component
const  NavBar = ({loggedInUser, onSignUpClicked, onLogInClicked, onLogoutSuccessful}: NavBarProps) => {
	

	return (
		<Navbar bg="primary" variant="dark" expand="lg" sticky="top">
			<Container>
				<Navbar.Brand>
					Journal Notes
				</Navbar.Brand>
			</Container>
		</Navbar>
	  );
}
 
export default NavBar;