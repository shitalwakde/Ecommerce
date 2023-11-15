import React from "react";
import { useMyOrdersQuery } from "../../redux/api/orderApi";


const MyOrders = () => {

    const { data, isLoading, error } = useMyOrdersQuery();

    return (
        <div></div>
    )
}


export default MyOrders;