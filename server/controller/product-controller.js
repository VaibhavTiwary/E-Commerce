import Product from "../model/product-schema.js";

export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});    //empty object means it will provide all data from database although we can also pass some conditions but here we need all the data.
        response.status(200).json(products);   //return it to frontend

    } catch (error) {
        response.status(500).json({ message: error.message });
    }

}
export const getProductById = async (request, response) => {
    try {
        const id = request.params.id;
        const product = await Product.findOne({ 'id': id })

        response.status(200).json(product);
    } catch (error) {
        esponse.status(500).json({ message: error.message });
    }
}