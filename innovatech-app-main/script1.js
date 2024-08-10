// document.addEventListener("DOMContentLoaded", function() {
let flag = false;
document.querySelector(".buttonSubmit").addEventListener("click",(event)=>{
  event.preventDefault();
  let crop = "rice";
  if (!flag) {
    document.querySelector(".sugC").textContent += " " + crop;
    flag = true;
  }
})
document.querySelector(".yes").addEventListener("click", (event) => {
  event.preventDefault();
  setTimeout(() => {
    let nitrogen_data = document.querySelector(".nitrogen").value;
    let phosphorus_data = document.querySelector(".phosphorus").value;
    let potassium_data = document.querySelector(".potassium").value;
    let humidity_data = document.querySelector(".humidity").value;
    let temperature_data = document.querySelector(".temperature").value;
    let rainfall_data = document.querySelector(".rainfall").value;
    localStorage.setItem("nitrogen_data", nitrogen_data);
    localStorage.setItem("phosphorus_data", phosphorus_data);
    localStorage.setItem("potassium_data", potassium_data);
    localStorage.setItem("humidity_data", humidity_data);
    localStorage.setItem("temperature_data", temperature_data);
    localStorage.setItem("rainfall_data", rainfall_data);
    document.querySelector(".soil_data").style.display = "block";
    document.querySelector(".page2").style.display = "block";
    document.querySelector(".page1_form").style.display = "none";

    console.log(
      nitrogen_data,
      phosphorus_data,
      potassium_data,
      humidity_data,
      temperature_data,
      rainfall_data
    );
    // Retrieve stored values from localStorage

    // Update corresponding span elements with retrieved values
    document.querySelector("span#nitrogen-value").textContent = nitrogen_data;
    document.querySelector("span#phosphorus-value").textContent =
      phosphorus_data;
    document.querySelector("span#potassium-value").textContent = potassium_data;
    document.querySelector("span#humidity-value").textContent = humidity_data;
    document.querySelector("span#temperature-value").textContent =
      temperature_data;
    document.querySelector("span#rainfall-value").textContent = rainfall_data;

    document.getElementById("Nitrogen").value = nitrogen_data;
    document.getElementById("Phosphorus").value = phosphorus_data;
    document.getElementById("Potassium").value = potassium_data;
    document.getElementById("Humidity").value = humidity_data;
    document.getElementById("Temperature").value = temperature_data;
    document.getElementById("Rainfall").value = rainfall_data;
  }, 500);
});
// });
