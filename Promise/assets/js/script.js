let dateControl = document.querySelector('input[type="date"]');
dateControl.onchange = function () {
    let year = dateControl.value[0]+dateControl.value[1]+dateControl.value[2]+dateControl.value[3];
    let month = dateControl.value[5]+dateControl.value[6];
    let day = dateControl.value[8]+dateControl.value[9];
    async function getAlldate() {
        load.classList.remove("d-none");
        let data = await fetch(`https://api.aladhan.com/v1/calendar?latitude=40&longitude=49&method=2&month=${month}&year=${year}`);
        let days = await data.json();
        filltable(days,day);
        load.classList.add("d-none");
    }
    getAlldate ();
}
function filltable(days,day){
    let container = document.getElementById("card")
    container.innerHTML = '';
    i=day-1;
    container.innerHTML+=`
    <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
    <div class="card-header">
    ${days.data[i].date.readable}
  </div>
        <li class="list-group-item">Asr: ${days.data[i].timings.Asr}</li>
        <li class="list-group-item">Dhuhr: ${days.data[i].timings.Dhuhr}</li>
        <li class="list-group-item">Fajr: ${days.data[i].timings.Fajr}</li>
        <li class="list-group-item">Imsak: ${days.data[i].timings.Imsak}</li>
        <li class="list-group-item">Isha: ${days.data[i].timings.Isha}</li>
        <li class="list-group-item">Maghrib: ${days.data[i].timings.Maghrib}</li>
        <li class="list-group-item">Midnight: ${days.data[i].timings.Midnight}</li>
        <li class="list-group-item">Sunrise: ${days.data[i].timings.Sunrise}</li>
        <li class="list-group-item">Sunset: ${days.data[i].timings.Sunset}</li>
    </ul>
</div>
    `
};