
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetails } from "../../Redux/actions/productActions";
import { Box, Typography } from '@mui/material';

const DetailView = () => {
    const { loading, product } = useSelector(state => state.getProductDetails)
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id))
    }, [dispatch, id, product, loading])
    return (
        <Box>
            {
                loading && product && Object.keys(product).length &&
                <Box>
                    <Box>

                    </Box>
                    <Box>
                        <Typography>{product.title.longtitle}</Typography>
                    </Box>
                </Box>

            }
        </Box>

    )
}

export default DetailView