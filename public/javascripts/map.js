document.addEventListener("DOMContentLoaded", function(event) {
  const baseURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCwSt9xzoEQLQCHhIxf7ITb7XuxyUaDyAo&callback=initMap'

  // document.querySelector('#get-all-button').addEventListener('click', () => {
    const mapContainer = document.querySelector('#map-container');
    axios.get(`${baseURL}`)
      .then(result => {
        mapContainer.innerHTML = `
          <code>${JSON.stringify(result.data)}</code>
        `
      })
      .catch(err => {
        mapContainer.innerHTML = `
          <code>${JSON.stringify(err.error)}<code>
          `
      })
  // })

  function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
});
