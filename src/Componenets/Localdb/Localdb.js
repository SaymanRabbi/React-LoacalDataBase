const localDataBase = (props) => {
    let localValue;
    const gotCart = localStorage.getItem("shopping-cart");
    if (gotCart) {
        localValue=JSON.parse(gotCart)
    }
    else {
        localValue = {};
    }
    const quantity = localValue[props];
    if (quantity) {
        const newQuantity = quantity + 1;
        localValue[props] = newQuantity;
        // localStorage.setItem(props, newQuantity);
    }
    else {
        localValue[props] = 1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(localValue))
}
export {localDataBase}