import { Navigate, Route, Routes } from "react-router-dom"
import { Footer, Navbar } from "../../ui"
import { CoclePage, HomePage, MarketPage, PanamaOestePage, PanamaPage, SearchPage } from "../pages"
import { OrderList } from "../components/OrderList"

export const MarketsRoutes = () => {

    return (
        <>
            <Navbar />
            
            <div className="container">
                <Routes>
                    <Route path="home" element={ <HomePage /> } />

                    <Route path="pma" element={ <PanamaPage /> } />
                    <Route path="pma-oeste" element={ <PanamaOestePage /> } />
                    <Route path="cocle" element={ <CoclePage /> } />
                    
                    <Route path="search" element={ <SearchPage /> } />
                    
                    <Route path="orders" element={ <OrderList /> } />

                    <Route path="market/:id" element={ <MarketPage /> } />
                    
                    <Route path="/" element={ <Navigate to="/pma" /> } />
                </Routes>
            </div>

            <Footer />
        </>
    )
}