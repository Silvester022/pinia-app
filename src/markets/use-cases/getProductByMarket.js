
export const getProductByMarket = async(id) => {
    
    try {
        if(id.length === 0) return [];

        const url = `${ import.meta.env.VITE_BASE_ALL_URL }/products`;
        const res = await fetch( url );

        if(!res.ok) throw new Error(`Error fetching products. Status: ${res.status}`)

        const data = await res.json();
        
        const products = data.filter( product => product.merchant.includes( id ));
        
        return products;

    } catch (error) {
        console.error('Error in getProductByName:',error);
        
        throw error;
    }
}