import { useSelector } from "react-redux";
import { Typography, Grid, Box } from "@mui/material";

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);

    return (
        <>
            {
                cartItems ?
                    <Grid container>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <Box>
                                <Typography style={{ fontWeight: 600, fontSize: 18 }}>My Cart ({cartItems?.length})</Typography>
                            </Box>

                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>

                        </Grid>
                    </Grid>
                    : <div>Empty</div>
            }


        </>
    )

}
export default Cart;