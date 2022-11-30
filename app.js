function myFunction(){
    // api url
   
    let a=document.getElementById("Access Token").value;
    let l=document.getElementById("Location").value;
   
    console.log(a);
    console.log(l);
    if(a===""|| l===""){
        document.getElementById("val").style.display="block";
    }
    else{
        const api_url =
        "http://api.weatherstack.com/current?access_key="+a+"&query="+l+"api.weatherstack.com/current?access_key="+a+"&query="+l;
        console.log(api_url);
        getapi(api_url);
        async function getapi(url) {
        const response = await fetch(url);
        console.log(response);    

          const data = await response.json();
          console.log(data);
          show(data);
        }
        function show(data) {
            if(data.error) {
                document.getElementById("no").style.display="block";
            }
            var loc=data.location.name+","+data.location.country;
            var lat=data.location.lat;
            var long=data.location.lon;
            var tz=data.location.timezone_id;
            var hm=data.current.humidity;
            var ws=data.current.wind_speed;
            var ps=data.current.pressure;
            var wd=data.current.wind_dir;
            var uv=data.current.uv_index;
            var feel=data.current.feelslike;
           
            document.getElementById("loc").innerHTML += loc;
            document.getElementById("lat").innerHTML=lat;
            document.getElementById("long").innerHTML=long;
            document.getElementById("tz").innerHTML += tz;
            document.getElementById("ws").innerHTML += ws;
            document.getElementById("ps").innerHTML += ps;
            document.getElementById("hm").innerHTML += hm;
            document.getElementById("wd").innerHTML += wd;
            document.getElementById("uv").innerHTML += uv;
            document.getElementById("feel").innerHTML += feel;
       }
    }
}    
