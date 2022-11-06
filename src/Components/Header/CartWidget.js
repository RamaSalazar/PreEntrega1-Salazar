import React, {useContext} from "react";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Context } from "../../Context/CartContext";


export const CartWidget = () => {
    const { qty } = useContext(Context);
    return (
      <>
        <p>{qty}</p>
        <LocalMallIcon color="primary" fontSize="large" />
      </>
    );
  };
  