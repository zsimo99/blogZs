import startDB from "@/lib/db"
import PostModel from "@/models/PostModel"
import { NextResponse } from "next/server"

export const GET = async (req) => {
    await startDB()
    const post = await PostModel.find().populate("comments").populate("likes")
    return NextResponse.json({ post }, { status: 200 })
}