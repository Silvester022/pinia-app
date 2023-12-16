import { MarketList } from "../components";

export const CoclePage = () => {
    
    return (
        <>
            <div className="mt-5"><strong style={{fontSize: "40px"}}>Coclé</strong>, <span style={{fontSize: "30px"}}>Panamá</span></div>

            <MarketList province='Coclé' />
        </>
    )
}