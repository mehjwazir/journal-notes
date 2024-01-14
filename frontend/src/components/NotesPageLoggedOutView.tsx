import Img1 from "./img/Journal Notes2.png"



const NotesPageLoggedOutView = () => {
	return ( 
		<>
			<h5 className="mt-5 text-secondary">Please login to see your notes</h5>
			<div className="jn-img-div">
				<img src={Img1} alt="journal-notes-img" className="jn-img"/>
			</div>
		</>
	
		
		
	 );
}
 
export default NotesPageLoggedOutView;