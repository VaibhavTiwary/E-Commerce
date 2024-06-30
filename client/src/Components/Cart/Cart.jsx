import { useSelector } from "react-redux";
import { Typography, Grid, Box, styled } from "@mui/material";
import CartItem from "./CartItem";
import TotalBalance from "./TotalBalance";

const Component = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        padding: '15px 0'
    }
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);

    return (
        <>
            {
                cartItems.length ?
                    <Component container>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography style={{ fontWeight: 600, fontSize: 18 }}>My Cart ({cartItems?.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} />
                                ))
                            }

                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalBalance />
                        </Grid>
                    </Component>
                    : <div>Empty</div>
            }


        </>
    )

}
export default Cart;