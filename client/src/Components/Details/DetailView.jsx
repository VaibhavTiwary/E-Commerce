
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetails } from "../../Redux/actions/productActions";

const DetailView = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch, id])
    return (

        <div>hello</div>
    )
}

export default DetailView