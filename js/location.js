document.addEventListener('DOMContentLoaded', function () {
    // Get the location button and input field
    const getLocationBtn = document.getElementById('getLocationBtn');
    const userLocationInput = document.getElementById('userLocation');

    // Add an event listener to the location button
    getLocationBtn.addEventListener('click', getLocation);

    // Function to get user location
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            userLocationInput.value = "Geolocation is not supported by this browser.";
        }
    }

    // Function to handle successful location retrieval
    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Use reverse geocoding to get the city based on coordinates
        reverseGeocode(latitude, longitude);
    }

    // Function to handle errors in location retrieval
    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                userLocationInput.value = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                userLocationInput.value = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                userLocationInput.value = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                userLocationInput.value = "An unknown error occurred.";
                break;
        }
    }

    // Function for reverse geocoding
    function reverseGeocode(latitude, longitude) {
        const apiKey = 'dd5190dab5e34fc4b1262853c10360e8'; // Replace with your actual API key
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude}+${longitude}&pretty=1`;

        // Make a request to the API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const city = data.results[0].components.city;

                // Display the city in the userLocationInput box
                userLocationInput.value = `City: ${city}`;
                console.log(userLocationInput.value);
            })
            .catch(error => {
                console.error('Error in reverse geocoding:', error);
            });
    }
});
