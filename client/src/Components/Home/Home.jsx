
// import { Fragment } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { styled, Box } from "@mui/material"

const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`

const Home = () => {
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