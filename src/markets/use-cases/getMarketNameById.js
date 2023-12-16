
export const getMarketNameById = async (id) => {

    const url = `${import.meta.env.VITE_BASE_ALL_URL}/markets`;
    const res = await fetch(url);
    const data = await res.json();

    const market = await data.find(market => market.id === id);

    const { 
        name
    } = market;

    return name;
}