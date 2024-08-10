


document.querySelector(".submit").addEventListener("click", (event) => {
    event.preventDefault();
    setTimeout(() => {
        document.querySelector(".page1_form").style.display = "none";
        
    }, 500);
    let nitrogen_data=document.querySelector(".nitrogen").value;
    let phosphorus_data=document.querySelector(".phosphorus").value;
    let potassium_data=document.querySelector(".potassium").value;
    let humidity_data=document.querySelector(".humidity").value;
    let temperature_data=document.querySelector(".temperature").value;
    let rainfall_data=document.querySelector(".rainfall").value;
    localStorage.setItem("nitrogen_data",nitrogen_data);
    localStorage.setItem("phosphorus_data",phosphorus_data);
    localStorage.setItem("potassium_data",potassium_data);
    localStorage.setItem("humidity_data",humidity_data);
    localStorage.setItem("temperature_data",temperature_data);
    localStorage.setItem("rainfall_data",rainfall_data);
});
