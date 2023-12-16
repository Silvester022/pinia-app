
export const saveSale = async ( cardProducts, total, enLocal ) => {

    const url = `${import.meta.env.VITE_BASE_ALL_URL}/sales`;

    try {
        const dataToSend = {
            products: cardProducts,
            total,
            enLocal
        }
    
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
    } catch (error) {
        console.error(error);
    }
}