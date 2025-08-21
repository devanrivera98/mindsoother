export async function searchRequest( prompt: string) {

    try {   
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/search`, {method: 'POST', body: JSON.stringify({prompt}), headers: {
            'Content-Type': 'application/json'
        },})
        const data = await res.json();
        console.log(data)

        if (!res.ok) {
            throw new Error(`Search request failed with status ${res.status}`)
        }

        console.log(data)
    }
    catch (err: any) {
        console.error(err.message);
        return { error: err.message };
    }
}