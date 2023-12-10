function clock(){
    setInterval(()=>{
        let date = new Date();
        console.clear();
        let hours = date.getHours();
        let ampm = hours >= 12 ? "PM": "AM"
        if(hours!==12)
        hours = hours % 12;
        console.log(`${hours}:${date.getMinutes()}:${date.getSeconds()} ${ampm}`)
    }, 1000);
}

clock();