import { Form, FormControl } from "react-bootstrap";
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

interface TextInputFieldProps {
	name: string,
	label: string,
	register: UseFormRegister<any>,  // Function provided by the useForm hook for registering the input field
	registerOptions?: RegisterOptions, // Optional configuration options for registration
	error?: FieldError, // Error object for handling form validation errors
	[x: string]: any, // Allows passing any other props to the form input field.
	// The [x: string]: any syntax indicates that additional properties with string keys are allowed,
	// and they can be of any type.
}


const TextInputField = ({ name, label, register, registerOptions, error, ...props }: TextInputFieldProps) => { // 'name', 'label', 'register', 'registerOptions', and 'error' are destructured from the props
// '...props' captures any other properties not explicitly defined in TextInputFieldProps

	return ( 
		<Form.Group className="mb-3" controlId={name + "-input"}>
			<Form.Label>{label}</Form.Label>
			<FormControl
				{...props}
				{...register(name, registerOptions)}
				isInvalid = {!!error}
			/>
			<Form.Control.Feedback type="invalid">
				{error?.message}
			</Form.Control.Feedback>
</Form.Group>

	 );
}
 
export default TextInputField;