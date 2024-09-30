"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function CarDetail() {
    const router = useRouter();
    const { id } = router.query; // Get the car ID from the URL
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return; // Wait until the ID is available

        async function fetchCarDetails() {
            try {
                const response = await fetch(`/api/cars/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setCar(data.data);
                } else {
                    console.error("Failed to fetch car details");
                }
            } catch (error) {
                console.error("Error fetching car details:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchCarDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!car) return <div>Car not found.</div>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Car Details</h1>
            <h2 className="text-lg font-semibold">{car.name}</h2>
            {/* Add more car details here as needed */}
            <p className="mt-2">ID: {car.id}</p>
            {/* Include more attributes based on your Car model, like createdAt, updatedAt, etc. */}
            <a href="/cars" className="text-blue-500 underline">Back to Cars List</a>
        </div>
    );
}
