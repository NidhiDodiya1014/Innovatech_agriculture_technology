// document.addEventListener("DOMContentLoaded", function() {
    let flag = false;
    document.querySelector(".buttonSubmit").addEventListener("click",(event)=>{
      setTimeout(() => {
        document.querySelector(".ask").style.display = "block";
      }, 1000);
      document.querySelector(".green_box").style.display = "flex";
      document.querySelector(".green_box").style.justifyContent = "space-around";
      event.preventDefault();
      let crop = "rice";
      if (!flag) {
        document.querySelector(".sugC").textContent += " " + crop;
        flag = true;
      }
    })
    // document.querySelector(".started_get").addEventListener("click",(event)=>{
    //   document.querySelector('.homepage1').style.display = "none";
    //   document.querySelector('.page1_form').style.display = "block";
    //   document.querySelector('.menu').style.display = "block";
    //   document.querySelector('.side').style.display = "block";
    // })
    document.querySelector(".yes").addEventListener("click", (event) => {
      event.preventDefault();
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
    });
    // });
    
    document.getElementById("crop-yield-link").addEventListener("click", function() {
      document.querySelector(".page2").style.display = "block";
      document.querySelector(".page1_form").style.display = "none";
      document.querySelector(".r1").style.display = "none";
      
    });
    
    document.getElementById("first_page").addEventListener("click", function() {
      document.querySelector(".page1_form").style.display = "block";
      document.querySelector(".page2").style.display = "none"; 
      document.querySelector(".r1").style.display = "none";
    });
    document.getElementById("rainfall_link").addEventListener("click", function() {
      document.querySelector(".page2").style.display = "none";
      document.querySelector(".page1_form").style.display = "none";
      document.querySelector(".r1").style.display = "block";
      
    });
    //  --------------------------------page2_js-------------------------------------------
    document.querySelector(".submit").addEventListener('click',()=>{
      document.querySelector(".page1_form").style.display = "none";
      document.querySelector(".page2").style.display = "none"; 
      document.querySelector(".r1").style.display = "block";
    });
    
    
  
    //  --------------------------------rainfall_js-------------------------------------------
    const state = document.getElementById('state');
      const district = document.getElementById('district');
  
      state.addEventListener('change', () => {
          // Clear the districts
          district.innerHTML = '';
  
          // Add the districts based on the state
          if (state.value === 'Andhra Pradesh') {
              const districts = ['Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Krishna', 'Kurnool', 'Nellore', 'Prakasam', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'YSR Kadapa'];
              districts.forEach(districtName => {
                  const option = document.createElement('option');
                  option.value = districtName;
                  option.textContent = districtName;
                  district.appendChild(option);
              });
          } else if (state.value === 'Arunachal Pradesh') {
              const districts = ['Anjaw', 'Changlang', 'Dibang Valley', 'East Kameng', 'East Siang', 'Kamle', 'Kra Daadi', 'Kurung Kumey', 'Lepa Rada', 'Lohit', 'Longding', 'Lower Dibang Valley', 'Lower Siang', 'Lower Subansiri', 'Namsai', 'Pakke Kessang', 'Papum Pare', 'Shi Yomi', 'Siang', 'Tawang', 'Tirap', 'Upper Siang', 'Upper Subansiri', 'West Kameng', 'West Siang'];
              districts.forEach(districtName => {
                  const option = document.createElement('option');
                  option.value = districtName;
                  option.textContent = districtName;
                  district.appendChild(option);
              });
          } else if (state.value === 'Assam') {
              const districts = ['Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasao', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'South Salmara-Mankachar', 'Tinsukia', 'Udalguri', 'West Karbi Anglong'];
              districts.forEach(districtName => {
                  const option = document.createElement('option');
                  option.value = districtName;
                  option.textContent = districtName;
                  district.appendChild(option);
              });
          }
      });