const {
  getAllCustomers,
  getTotalCustomers,
} = require('./customer.service')

async function allCustomersHandler() {
  const customers = await getAllCustomers()
  return customers;
}

async function totalCustomersHandler() {
  const customers = await getTotalCustomers()
  return customers;
}

async function createAccountHandler(parent, args) {
  const { input } = args
  // const customer = await createCustomer(input)
  // return customer;
  return null
}

module.exports = {
  query: {
    allCustomers: allCustomersHandler,
    totalCustomers: totalCustomersHandler,
  },

  mutation: {
    createAccount: createAccountHandler,
  }
}
