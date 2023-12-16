
export const getMarketsByProvince = async (province) => {

    const validProvinces = ['Chiriquí', 'Bocas del toro', 'Veraguas', 'Los Santos', 'Herrera', 'Coclé', 'Panamá Oeste', 'Panamá', 'Colón', 'Darién',];

    if (!validProvinces.includes(province))
        throw new Error(`${province} is not a valid province`);

    const url = `${import.meta.env.VITE_BASE_ALL_URL}/markets`;
    const res = await fetch(url);
    const data = await res.json();

    const market = await data.filter(market => market.province === province);

    return market;
}

