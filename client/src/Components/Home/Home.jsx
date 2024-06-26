import { useEffect } from "react";
// import { Fragment } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
import { styled, Box } from "@mui/material"
import { getProducts } from "../../Redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`

const Home = () => {

    const { products } = useSelector(state => state.getProducts)  //this getProducts is of redux store name

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())  //dispatch will call getProducts
    }, [dispatch])
    return (
        //It will show warning if we will not use div or fragments because jsx cannot return two parent components
        //and now they are child of div.
        //fragments are faster than div.
        <>
            <Navbar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true} />
                <MidSection />
                <Slide products={products} title="Discounts for You" timer={false} />
                <Slide products={products} title="Top Selection" timer={false} />
                <Slide products={products} title="Trending Offers" timer={false} />
                <Slide products={products} title="Season's top picks" timer={false} />
            </Component>
        </>
    )
}
export default Home;