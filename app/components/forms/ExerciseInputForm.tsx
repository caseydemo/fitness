"use client";
import { useState } from "react";
export default function ExerciseInputForm() {
	const [formData, setFormData] = useState({
		name: "",
		description: "",
	});

    interface FormData {
        name: string;
        description: string;
    }

    interface ChangeEvent {
        target: {
            name: string;
            value: string;
        };
    }

    const handleChange = (e: ChangeEvent) => {
        const { name, value } = e.target;
        setFormData((prevState: FormData) => ({
            ...prevState,
            [name]: value,
        }));
    };

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
		// Add your submission logic here
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
			</label>
			<label>
				Description:
				<input
					type="text"
					name="description"
					value={formData.description}
					onChange={handleChange}
				/>
			</label>
			<button type="submit">Submit</button>
		</form>
	);
}
