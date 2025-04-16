function calculateDescountedPrice(price, discountPercentage){
    const discount = (price * discountPercentage) / 100;
    const priceWithDiscount = price - discount;

    return priceWithDiscount;

}

const originalPrice = 14990;
const discountPercentage = 15;
const finalPrice = calculateDescountedPrice(originalPrice, discountPercentage);

console.log(`El precio original es: $${originalPrice}`);
console.log(`El porcentaje de descuento es: ${discountPercentage}%`);
console.log(`El precio con descuento es: $${finalPrice}`);
