const ICE_CREAM_ORDER = 'ICE_CREAM_ORDER';
const ICE_CREAM_RESTOCK = 'ICE_CREAM_RESTOCK';

const orderIceCream = (qty = 1) => {
  return {
    type: ICE_CREAM_ORDER,
    payload: qty,
  };
};

const restockIceCream = (qty = 1) => {
  return {
    type: ICE_CREAM_RESTOCK,
    payload: qty,
  };
};

module.exports = { orderIceCream, restockIceCream };
module.exports.actions = { ICE_CREAM_ORDER, ICE_CREAM_RESTOCK };
