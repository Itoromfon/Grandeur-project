import { openai } from "@ai-sdk/openai";
import { streamText, streamToResponse } from "ai";

export async function POST(req) {
    const { messages } = await req.json();

    const result = await streamText({
        model: openai('gpt-3.5-turbo-0125'),
        messages,
    });
    return new ReadableStream()
}