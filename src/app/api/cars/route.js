import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET() {
    try {
        const cars = await prisma.car.findMany();
        return NextResponse.json(
            {
                success: true,
                message: "Cars fetched successfully",
                data: cars
            },
            {
                status: 200
            }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch cars",
                error: error.message
            },
            {
                status: 500
            }
        );
    }
}

export async function POST(request) {
    try {
        const { name } = await request.json();
        const car = await prisma.car.create({
            data: {
                name
            }
        });
        return NextResponse.json(
            {
                success: true,
                message: "Car created successfully",
                data: car
            },
            {
                status: 201
            }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                success: false,
                message: "Failed to create car",
                error: error.message
            },
            {
                status: 500
            } 
        );
    }
}
