import OpenAI from "openai";

export async function POST(req: Request ) {
    return new Response(JSON.stringify({name: 'John Doe'}), {
        headers: {'Content-Type': 'application/json'},
        status: 200
    })
}

