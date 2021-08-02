export let selectCatAction = (data) => {
    return {
      type: "SELECTEDCAT",
      payload: data,
    };
  };

export let addToCartReducer = (data) => {
    return {
      type: "CART",
      payload: data,
    };
  };