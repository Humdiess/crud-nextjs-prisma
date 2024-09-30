"use client";

import { useState, useEffect } from "react";

export default function CreateCar() {
    const [name, setName] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (success) {
            setName("");
            setSuccess(false);
        }
    }, [success]);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch("/api/cars", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name }),
            });
            if (response.ok) {
                setSuccess(true);
            } else {
                console.error("Failed to create car");
            }
        } catch (error) {   
            console.error("Error creating car:", error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {success && <p>Car created successfully</p>}
        </div>
    );
}