export async function fetchJSON(url) {
    const res = await fetch(url);
    if (!res.ok) {
        return res.status;
    }
    return await res.json();
}

export async function postJSON(url, json) {
    const res = await fetch(url, {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(json),
    });
    if (!res.ok) {
        return res.status;
    }
}

