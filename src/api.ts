export async function weatherCall(apiURL: string) {
    let response = await fetch(apiURL);
    if (response.status === 200) {
        let data = await response.json();
        return data;
    }
}

