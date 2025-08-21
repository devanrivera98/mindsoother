import OpenAI from "openai";

export async function POST(req: Request ) {
    try {
        const body = await req.json();
        console.log('server response', body)
    const client = new OpenAI({apiKey: process.env.OPEN_AI_KEY});

    const response = await client.responses.create({
        model: "gpt-5-nano",
        input: body.prompt,
        instructions: "Conduct yourself professionally like a psychology teacher and use the input given and provide a paragraph summary on the topic."
    })

        // console.log(response.output_text)

    const alexRes = await fetch (`https://api.openalex.org/works?search=${body.prompt}&per-page=20`, {method: 'GET'})

    if (!alexRes.ok) throw new Error(`OpenAlex request failed: ${alexRes.status}`);

    const alexData = await alexRes.json();

    return new Response(JSON.stringify({name: 'John Doe'}), {
        headers: {'Content-Type': 'application/json'},
        status: 200
    })
    }
    catch (error: any) {
    return new Response(JSON.stringify({error: `${error.message} catch`}), {status: 500})
    }
}

