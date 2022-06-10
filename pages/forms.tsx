import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
	username: string;
	email: string;
	password: string;
}

export default function Form() {
	const { register, handleSubmit } = useForm<LoginForm>();

	const onValid = (data: LoginForm) => {};

	const onInValid = (errors: FieldErrors) => {
		console.log(errors);
	};

	return (
		<form onSubmit={handleSubmit(onValid, onInValid)}>
			<input
				{...register("username", {
					required: "Username is required",
				})}
				type="text"
				placeholder="Username"
				required
			/>
			<input
				{...register("email", {
					required: "Email is required",
				})}
				type="email"
				placeholder="Email"
				required
			/>
			<input
				{...register("password", {
					required: "Password is redquired",
				})}
				type="password"
				placeholder="Password"
				required
			/>
			<input type="submit" value="Submit" />
		</form>
	);
}
