let apiKey = prompt('Masuakan Apikey')

const showValue = () => {
    var menu = document.getElementById('box');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

    var inputVal = document.getElementById("myInput").value;
    document.getElementById("output").innerText = inputVal;

    const apiUrl = `https://lolhuman.xyz/api/artinama?apikey=${apiKey}&nama=${inputVal}`

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = data.result;
    })  
}