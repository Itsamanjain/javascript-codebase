const button = document.getElementById("get-location")


function gotLocation (position) {
    console.log(position);
}

function failedToGet () {
    console.log("There was some error");
}


button.addEventListener("click", async () => {
    navigator.geolocation.getCurrentPosition(gotLocation , failedToGet)
})



