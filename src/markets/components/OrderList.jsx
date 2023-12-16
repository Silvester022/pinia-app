import { useEffect, useState } from "react";

import { getSales } from "../use-cases";
import { OrderPage } from "../pages";

export const OrderList = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        getSales()
            .then( d => {
                setData( d || [] );
            } )
            .catch( err => {
                console.error('Error fetching markets',err);
            } )
    }, [setData])

    return (
        <>
            {
                data.map(orderData => (
                    <OrderPage
                        key={orderData.id}
                        data={orderData}
                    />
                ))
            }
        </>
    )
}