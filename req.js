fetch('http://localhost:5000/getUser/Random/2')
.then(response => response.json())
.then(console.log(response))