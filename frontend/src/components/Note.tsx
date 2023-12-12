import styles from "../styles/Note.module.css";
import { Card } from "react-bootstrap";
import { Note as NoteModel } from "../models/note";



interface NoteProps {
	note: NoteModel,
	className?: string,
}


const Note = ({ note, className }: NoteProps) => {

	const {
		title,
		text,
		createdAt,
		updatedAt,
	} = note;

	return (
		<Card className={styles.noteCard}>
			<Card.Body className={styles.cardBody}>
				<Card.Title>
					{title}
				</Card.Title>
				<Card.Text className={`${styles.cardText} ${className}`}>
					{text}
				</Card.Text>
			</Card.Body>
			<Card.Footer className="text-muted">
				{createdAt}
			</Card.Footer>
		</Card>
		
	)
}

export default Note;