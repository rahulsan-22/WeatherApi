// let apiKey = "5396dc24488bdf9745431426bbecfcda"
// let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

// https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=5396dc24488bdf9745431426bbecfcda
let form = document.querySelector("form")
let apiKey = "5396dc24488bdf9745431426bbecfcda"
let img = document.querySelector("img")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let city = document.getElementById("city").value
    let getDetails = async()=>{
        let output1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        let output2 = await output1.json()
        console.log(output2)
        let degree = Math.round(output2.main.temp - 273)
        let humidValue = Math.round(output2.main.humidity)
        let desc = output2.weather[0].main

        let temp = document.querySelector("#temp_value")
        let humid = document.querySelector("#humid_value")
        let h3 = document.querySelector("h3")
        temp.innerHTML=`
        <p>${degree}<sup>0</sup>C</p>
        `
        humid.innerHTML=`
        <p>${humidValue} kmph</p>
        `
        h3.innerHTML=desc
        
        switch (desc) {
            case 'Haze':
                img.src='./Haze.png'
                break;
            case 'Snow':
                img.src='./Snow.png'
                break;
            case "Clouds":
                img.src='./Clouds.png'
                break;
            case "Clear":
                img.src='./Clear.png'
                break;
            default:
                img.src="./Rainy.png"
                break;
        }
    
    }
    getDetails()

})