const day = document.getElementById('day');
const today_date = document.getElementById('today_date');
const date = new Date(); 

const getCurrentDay = () =>{
 
     let weekday = new Array(7);
     weekday[0] = "Sunday";
     weekday[1] = "Monday";
     weekday[2] = "Tuesday";
     weekday[3] = "Wednesday";
     weekday[4] = "Thursday";
     weekday[5] = "Friday";
     weekday[6] = "Saturday"; 

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
 };

 const getCurrentMonth = () =>{
     const months = [
                   "January",
                   "February",
                   "March",	
                    "April",	
                    "May",	
                    "June",	
                    "July",	
                   "August",	
                    "September",	
                    "October",	
                    "November",	
                   "December",
                 ]; 
    let now = new Date();
       
    let month = months[now.getMonth()];
 
    return month;
 };

 day.innerHTML = `${getCurrentDay()}`;
 today_date.innerHTML = `${date.getDate()} ${getCurrentMonth()}`;