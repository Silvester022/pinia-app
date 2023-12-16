
export const getSales = async() => {

    const url = `${import.meta.env.VITE_BASE_ALL_URL}/sales`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}