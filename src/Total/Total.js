const total = (props) => {
    const reducer = (prev, next) => prev + parseInt(next.balance);
    const total = props.reduce(reducer, 0);
    return total;
}
export{total}