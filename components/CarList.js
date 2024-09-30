"use client";

import { useState, useEffect } from "react";

export default function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await fetch("/api/cars");
                if (response.ok) {
                    const data = await response.json();
                    setCars(data.data);
                } else {
                    console.error("Failed to fetch cars");
                }
            } catch (error) {
                console.error("Error fetching cars:", error);
            }
        }
        fetchCars();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Cars</h1>
            <ul>
                {cars.map((car) => (
                    <>
                        <li key={car.id} className="mb-4">
                            <h2 className="text-lg font-semibold">{car.name}</h2>
                        </li>
                        <a href={`/cars/${car.id}`} className="text-blue-500 underline">Detail</a>
                    </>
                ))}
            </ul>
        </div>
    );
}