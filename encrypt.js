import handler from './libs/handler-lib';
const bcrypt = require('bcryptjs');

export const main = handler(async (event, context) => {
  const payload = JSON.parse(event.payload);
  const hash = bcrypt.hashSync(payload.value);

  return hash;
});

export const compare = handler(async (event, context) => {
  // todo: write comparison handler
});