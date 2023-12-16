import { MarketList } from "../components"

export const PanamaOestePage = () => {
    
    return (
        <>
            <div className="mt-5"><strong style={{fontSize: "40px"}}>Panamá Oeste</strong>, <span style={{fontSize: "30px"}}>Panamá</span></div>

            <MarketList province='Panamá Oeste' />
        </>
    )
}