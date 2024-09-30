import { NextResponse } from "next/server";

import prisma from "@prisma/client";

export async function GET() {
    
    try {
        const siswas = await prisma.siswa.findMany();

        return NextResponse.json(
            {
                success: true,
                message: "Siswas fetched successfully",
                data: siswas
            },
            {
                status: 200
            }
        );
    } catch (error) {   
        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch siswas",
                error: error.message
            },
            {
                status: 500
            }
        );
    }
}