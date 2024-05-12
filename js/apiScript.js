fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    document.getElementById('ip-address').textContent = data.ip;
    document.getElementById('city').textContent = data.city;
    document.getElementById('region').textContent = data.region;
  })
  .catch(error => {
    console.error('Error fetching location data:', error);
  });
