document.addEventListener('DOMContentLoaded', function () {
    // Array of services with names and background images
    const servicesData = [
        { name: 'Driving', background: 'driving.jpeg' },
        { name: 'Painting', background: 'painting.jpeg' },
        { name: 'Pottery', background: 'pottery.jpeg' },
        { name: 'Driving', background: 'driving.jpeg' },
        { name: 'Painting', background: 'painting.jpeg' },
        { name: 'Painting', background: 'painting.jpeg' },
        { name: 'Pottery', background: 'pottery.jpeg' },
        { name: 'Driving', background: 'driving.jpeg' },
        { name: 'Painting', background: 'painting.jpeg' },
        
    ];

    // Get the services container
    const servicesContainer = document.getElementById('servicesContainer');

    // Loop through the services data and create HTML for each service
    servicesData.forEach(service => {
        // Create a service element
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service');

        // Set the background image using inline style
        serviceElement.style.backgroundImage = `url('./images/${service.background}')`;

        // Add the service name as text content
        serviceElement.textContent = service.name;

        // Append the service element to the services container
        servicesContainer.appendChild(serviceElement);
    });
});
