import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const todos = await prisma.todo.findMany();

        return NextResponse.json(
            {
                success: true,
                message: "Todos fetched successfully",
                data: todos,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch todos",
                error: error.message,
            },
            {
                status: 500,
            }
        );
    }
}

export async function POST(request) {
    try {
        const { title } = await request.json();

        if (!title) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Title is required",
                },
                {
                    status: 400,
                }
            );
        }

        const todo = await prisma.todo.create({
            data: {
                title: title,
            },
        });

        return NextResponse.json(
            {
                success: true,
                message: "Todo created successfully",
                data: todo,
            },
            {
                status: 201,
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Failed to create todo",
                error: error.message,
            },
            {
                status: 500,
            }
        );
    }
}
