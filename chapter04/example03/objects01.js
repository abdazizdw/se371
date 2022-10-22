
  const response = fetch('https://mocki.io/v1/4fa41abe-0efd-4b5d-8d1b-0a26e0d9b3f5');
  const myJson = response.json(); //extract JSON from the http response

  
  console.log( (myJson)? 'no response': ! myJson );
