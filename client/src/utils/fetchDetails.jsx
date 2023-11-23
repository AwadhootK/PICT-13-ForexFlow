
  

  
  fetchDetailsData(startCountry, destinationCountry, startDate, endDate)
    .then(data => {
      console.log('Details data:', data);
      // Handle the data as needed
    })
    .catch(error => {
      console.error('Error:', error.message);
      // Handle the error
    });
  