import { NextResponse } from "next/server";

import prisma from "../../../../../prisma/client";

export async function GET(request, { params }) {

    const id = parseInt(params.id);

    const car = await prisma.car.findUnique({
        where: {
            id
        }
    });

    if (!car) {
        return NextResponse.json(
            {
                success: true,
                message: "Car not found",
                data: null
            },
            {
                status: 404
            }
        );
    }

    return NextResponse.json(
        {
            success: true,
            message: "Car fetched successfully",
            data: car
        },
        {
            status: 200
        }
    );
}