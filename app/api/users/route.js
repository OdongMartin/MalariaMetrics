

export async function GET(request){
    const users = [
        { id: 1, name: 'Martin'},
        { id: 2, name: 'Martha'},
        { id: 3, name: 'Marita'},
    ]

    return new Response(JSON.stringify(users));
}