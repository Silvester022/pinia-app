
export const getProductByName = async(name) => {
    
    try {
        name = name.toLocaleLowerCase().trim();
        
        if(name.length === 0) return [];

        const url = `${ import.meta.env.VITE_BASE_ALL_URL }/products`;
        const res = await fetch( url );

        if(!res.ok) throw new Error(`Error fetching products. Status: ${res.status}`)

        const data = await res.json();
        
        return data.filter( product => product.name.toLocaleLowerCase().includes( name ) );

    } catch (error) {
        console.error('Error in getProductByName:',error);
        
        throw error;
    }
}