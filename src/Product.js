import React, { useState } from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";
import { Snackbar } from "@mui/material";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [snackbar_Status, setSnackbar_Status] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = snackbar_Status;

  const onClose = () => {
    setSnackbar_Status({...snackbar_Status, open:false})
  }
  const handleClick = () => {
    setSnackbar_Status({ ...snackbar_Status, open: true });
    // Dispatch item to Data Layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={id}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt=""></img>
      <button onClick={() => handleClick()}>Add To Basket</button>
      <Snackbar
        className="snackbar__tile"
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={() => onClose()}
        autoHideDuration={3000}
        message={
          <div className="snackbar">
            <img className="snackbar__img" src={image} alt="" />
            <div className="snackbar__text">
              <strong>{title}</strong>
              <span>is added to cart</span>
            </div>
          </div>
        }
        key={vertical + horizontal}
      />
    </div>
  );
}

export default Product;
