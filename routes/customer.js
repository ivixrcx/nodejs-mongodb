app.get('/api/customer', controller.customer.get);
app.get('/api/customer/:id', controller.customer.getCustomer);

module.exports = router;
