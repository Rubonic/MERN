// Basic "if" statement
let canAfford = (itemPrice, accountBalance) => {
    if (itemPrice > accountBalance) {
        return 'Cannot afford! You are $${itemPrice - accountBalance} short';
    } else {
        return "Can afford!"
    }
};

// Ternary Statement
let canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance
    ? 'Cannot afford! You are $${itemPrice - accountBalance} short'
    : "Can afford";
};
