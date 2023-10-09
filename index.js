console.log("hello jee")
const API_KEY="96d4ca65c49492cfd7c19ae763465f34";

function renderWeatherInfo(data){
    let newPara=document.createElement('p');
    newPara.textContent=`${data?.main?.temp.toFixed(2)} °C`

    document.body.appendChild(newPara);
}

async function fetchWeatherDetails(){
    // let latitude=15.333;
    // let longitude=74.08333;
    try{
        let city='goa';

    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);


    const data=await response.json();
    console.log("Weather data:->",data);

    
    renderWeatherInfo(data);
    }
    catch(err){
        //handle the error here 
    }
  
}

async function getCustomWeatherDetails(){
    try{
        let latitude=17.6333;
        let longitude=18.3333;

        let result=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

        let data=await result.json();
        console.log(data);
    }
    catch(err){
        console.log("Error Found",err)
    }
    
}

function switchTab(newTab)
{
    if(newTab != oldTab)
    {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if(!serachForm.classList.contains("active"))
        {
            // kya search form wla container invisible, if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            serachForm.classList.add("active");
        }
        else
        {
            // main pehle search wale tab pr the, ab your weather tab visible krna hai
            serachForm.classList.remove("active");
            serachForm.classList.remove("active");
            // ab main your weather tab me aagya hu, to weather bhi display karna padega, so let's check local storage first for coordinates, if we haved saved then there.
            getfromSessionStorage();
        }
    }
}


function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geoLocation Support")
    }
}
function showPosition(position){
    let lat=position.coords.latitude;
    let longi=position.coords.longitude;

    console.log(lat);
    console.log(longi);
}