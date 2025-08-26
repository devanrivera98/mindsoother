import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("server response", body);
    const client = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

    const response = await client.responses.create({
      model: "gpt-5-nano",
      input: body.prompt,
      instructions: `
        You are an academic summarizer.
        - If the input relates to suicide, self-harm, or thoughts of hurting oneself or others, 
          respond ONLY with: 
          "If you are thinking about suicide or self-harm, you are not alone. 
          In the U.S., you can call or text the Suicide & Crisis Lifeline at **988**. 
          You can also visit https://988lifeline.org 
          for immediate support and resources. 
          If outside the U.S., please look up your local crisis hotline."
        - Otherwise, respond with a single concise paragraph (3-5 sentences).
        - Write in a neutral, professional tone without offering advice, follow-ups, or dialogue.
        - If the topic is unrelated to psychology or connected fields (cognition, behavior, neuroscience, development, etc.), 
          respond with a prompt warning them about potentially falling out of the scope but let them know you'll give at least a high school level short fun fact about the topic relating to psychology (2 sentences max).
      `,
    });

    console.log("chatgpt response", response.output_text);

    const alexRes = await fetch(
      `https://api.openalex.org/works?search=${body.prompt}&per-page=20&filter=open_access.is_oa:true,topics.field.id:32`,
      { method: "GET" },
    );

    if (!alexRes.ok)
      throw new Error(`OpenAlex request failed: ${alexRes.status}`);

    const alexData = await alexRes.json();

    return new Response(
      JSON.stringify({
        chatResponse: response.output_text,
        alexData: alexData,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      },
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: `${error.message} catch` }), {
      status: 500,
    });
  }
}
