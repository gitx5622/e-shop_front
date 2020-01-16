export const formatPrice = (x, currency) => {
    switch (currency) {
        case 'USD':
            return x.toFixed(2).replace('.', ',');
        default:
            return x.toFixed(2);
    }
};
