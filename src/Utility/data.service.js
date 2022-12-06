export const dataServices = {
    GetHistory,
    GetPayloads
}

function GetHistory() {
    const requestOptions = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",

        },
    };
    return fetch("https://api.spacexdata.com/v3/history",requestOptions)
        .then(res => res.json())
        .then(result => {
            return result;
        });
}
function GetPayloads() {
    const requestOptions = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",

        },
    };
    return fetch("https://api.spacexdata.com/v3/payloads",requestOptions)
        .then(res => res.json())
        .then(result => {
            return result;
        });
}