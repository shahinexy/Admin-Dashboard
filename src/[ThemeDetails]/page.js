import React from 'react';
import { useParams } from 'react-router-dom';
import ShopDetail from '../views/apps/ecommerce/ShopDetail';


const ThemeDetails = () => {
    const {id} = useParams();
    console.log(id, "id from page themeDetails");
    return (
        <div>
            <ShopDetail id={id}></ShopDetail>
        </div>
    );
};

export default ThemeDetails;