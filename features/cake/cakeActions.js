const CAKE_ORDER = 'CAKE_ORDER';
const CAKE_RESTOCK = 'CAKE_RESTOCK';

//-- action creators(not required, we could just pass the actions in the dispatch,
// but this avoids code repetition)
const orderCake = (qty = 1) => {
  return {
    type: CAKE_ORDER,
    payload: qty, // optional property
  };
};

const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCK,
    payload: qty,
  };
};

module.exports = { orderCake, restockCake };
module.exports.actions = { CAKE_ORDER, CAKE_RESTOCK };
