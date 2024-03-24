const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

module.exports = { updateStreet };
module.exports.actions = { STREET_UPDATED };
