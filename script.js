let ip = ""

let myFunction = async(ip) => {
    try {

        let data = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_s55VbYXo3geEUWeA6UHlCM4eRcX9b&ipAddress=${ip}`);
        console.log(data.data)

        const { location, isp, as } = data.data

        let address = document.getElementById("ip")
        let locate = document.getElementById("location")
        let timezone = document.getElementById("timezone")
        let ispn = document.getElementById("isp")
        locate.innerHTML = (`${location.region}, ${location.country}, ${as.asn}`)
        ispn.innerHTML = (`${isp}`)
        timezone.innerHTML = (`UTC ${location.timezone}`)
        address.innerHTML = (`${data.data.ip}`)

        getMap(location.lat, location.lng)
    } catch (error) {
        console.log(error)
        alert(error)
    }
}

myFunction(ip)

let map = L.map('map');


const getMap = (lat, lng) => {

    map.setView([lat, lng], 13);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map)
}


let form = document.getElementById("form")
let input = document.getElementById("input")
let mapp = document.getElementById("map")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    myFunction(input.value)
    document.mapp.style.transition = "1s all ease"
})