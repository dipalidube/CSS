// Function to show the Add Customer form
function showAddCustomerForm() {
    document.getElementById('customerForm').style.display = 'block';
}

// Function to handle Add Customer form submission
document.getElementById('addCustomerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const customer = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        pincode: document.getElementById('pincode').value
    };
    // Save customer to the server (here we just log it to the console)
    console.log('Customer:', customer);
    // After saving, hide the form and reload the customer list
    document.getElementById('customerForm').style.display = 'none';
    loadCustomers();
});

// Function to show the Add Product form
function showAddProductForm() {
    document.getElementById('productForm').style.display = 'block';
}

// Function to handle Add Product form submission
document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const product = {
        productName: document.getElementById('productName').value,
        productImage: document.getElementById('productImage').value,
        unit: document.getElementById('unit').value,
        rate: parseFloat(document.getElementById('rate').value),
        description: document.getElementById('description').value
    };
    // Save product to the server (here we just log it to the console)
    console.log('Product:', product);
    // After saving, hide the form and reload the product list
    document.getElementById('productForm').style.display = 'none';
    loadProducts();
});

// Function to show the Add Order form
function showAddOrderForm() {
    document.getElementById('orderForm').style.display = 'block';
}

// Function to handle Add Order form submission
document.getElementById('addOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const order = {
        orderDate: document.getElementById('orderDate').value,
        customerID: document.getElementById('customerID').value,
        totalQty: parseInt(document.getElementById('totalQty').value),
        totalAmount: parseFloat(document.getElementById('totalAmount').value)
    };
    // Save order to the server (here we just log it to the console)
    console.log('Order:', order);
    // After saving, hide the form and reload the order list
    document.getElementById('orderForm').style.display = 'none';
    loadOrders();
});

// Placeholder functions to load data (to be implemented)
function loadCustomers() {
    // Implement AJAX call to load customer data and update the DOM
    console.log('Loading customers...');
}

function loadProducts() {
    // Implement AJAX call to load product data and update the DOM
    console.log('Loading products...');
}

function loadOrders() {
    // Implement AJAX call to load order data and update the DOM
    console.log('Loading orders...');
}
