const button = document.getElementById("saveButton")
const uname = document.getElementById("usernameInput")



button.addEventListener("click" , () => {
    const value = uname.value;
    console.log(value);
    localStorage.setItem("name",value)
});

// window.addEventListener("load",() => {
//     const value = localStorage.getItem("name");
//     uname.innerText = value;
// })