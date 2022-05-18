const Customer = require('./customer.model');

async function getAllCustomers() {
  return await Customer.find();
}

async function getFindCustomers(query) {
  return await Customer.find(query);
}

async function getCustomerById(id) {
  return await Customer.findById(id);
}

async function createCustomer(customer) {
  return await Customer.create(customer);
}

async function updateCustomer(id, customer) {
  return await Customer.findByIdAndUpdate(id, customer, { new: true });
}

async function deleteCustomer(id) {
  return await Customer.findByIdAndDelete(id);
}

async function getTotalCustomers(query) {
  return await Customer.find(query).countDocuments();
}

module.exports = {
  getAllCustomers,
  getFindCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getTotalCustomers,
}
