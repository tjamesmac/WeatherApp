export async function weatherCall(apiURL: string) {
    let response = await fetch(apiURL);
    let data = await response.json();
    return data;
}

