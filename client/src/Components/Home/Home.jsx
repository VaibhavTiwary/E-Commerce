import { useEffect } from "react";
// import { Fragment } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { styled, Box } from "@mui/material"
import { getProducts } from "../../Redux/actions/productActions";
import { useDispatch } from "react-redux";

const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`

const Home = () => {

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
            </Component>
        </>
    )
}
export default Home;