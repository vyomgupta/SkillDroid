console.log("hi");
document.addEventListener('DOMContentLoaded', function () {
    // Fetch service details based on the selected service (you can replace this with your actual data)
    const selectedService = getSelectedService(); // Replace with your logic to get the selected service

    // Update the service details on the page
    updateServiceDetails(selectedService);
});

// Function to get service details (replace this with your logic)
function getSelectedService() {
    return {
        name: 'Driving',
        price: '$50.00',
        details: 'Learn how to drive with our professional instructors. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };
}

// Function to update service details on the page
function updateServiceDetails(service) {
    const serviceNameElement = document.getElementById('serviceName');
    const servicePriceElement = document.getElementById('servicePrice');
    const serviceDetailsElement = document.getElementById('serviceDetails');
    const bookButton = document.getElementById('bookButton');

    // Update elements with service details
    serviceNameElement.textContent = service.name;
    servicePriceElement.textContent = `Price: ${service.price}`;
    serviceDetailsElement.textContent = `Details: ${service.details}`;

    // Add a click event listener to the "Book Now" button (replace with your booking logic)
    bookButton.addEventListener('click', function () {
        alert(`Booking for ${service.name} is not implemented in this example.`);
        // Add your booking logic here
        console.log("hi");
    });
}
