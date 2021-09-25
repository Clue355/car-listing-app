type Response = {
    response: {};
    headers?: HeadersInit | undefined;
};

export async function getData(): Promise<Response> {
    const myHeaders = new Headers({
        Authorization: `Bearer ${process.env.apiKey}`,
    });

    const myRequest = new Request("https://auto.dev/api/listings?city/fortworth", {
        method: "GET",
        headers: myHeaders,
    });

    const data = await fetch(myRequest).then((res) => res.json());

    return data;
}
