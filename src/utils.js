export const calculateTotalAmount = (items) => {
    const totalAmount = items.reduce((total, currentItem) => {
        total += currentItem.price * currentItem.count;
        return total;
    }, 0);
    return totalAmount;
}

export const calculateTotalProducts = (items) => {
    const totalProducts = items.reduce((total, currentItem) => {
        total += currentItem.count;
        return total;
    }, 0);
    return totalProducts;    
}

