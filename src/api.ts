export async function weatherCall(apiURL: string) {
    let response = await fetch(apiURL);
    console.log(response);
    console.log(typeof response);
    if (response.status === 200) {
        let data = await response.json();
        return data;
    }
}

