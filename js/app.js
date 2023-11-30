document.addEventListener('DOMContentLoaded', function () {
    // Array of services with names and background images
    const servicesData = [
        { name: 'Driving', background: 'driving.jpeg', link: 'pages/service.html' },
        { name: 'Painting', background: 'painting.jpeg', link: 'pages/service.html' },
        { name: 'Pottery', background: 'pottery.jpeg', link: 'pages/service.html' }
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

        // Add a click event listener to navigate to the service detail page
        serviceElement.addEventListener('click', function () {
            window.location.href = service.link;
        });

        // Append the service element to the services container
        servicesContainer.appendChild(serviceElement);
    });
});
