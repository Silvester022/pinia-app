import { useEffect, useState } from "react"
import { MarketCard } from "./MarketCard";

import { getMarketsByProvince } from "../use-cases/getMarketsByProvince";

export const MarketList = ({ province }) => {

    const [markets, setMarkets] = useState([]);
    
    useEffect(() => {
        getMarketsByProvince( province )
            .then( arr => {
                setMarkets( arr || [] );
            } )
            .catch( err => {
                console.error('Error fetching markets',err);
            } )
    }, [province])

    return (
        <>
            {
                markets.map(market => (
                    <MarketCard
                        key={market.id}
                        {...market}
                    />
                ))
            }
        </>
    )
}