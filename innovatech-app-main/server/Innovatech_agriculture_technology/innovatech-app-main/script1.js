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
      let nitrogen_data = document.querySelector(".nitrogen").nodeValue;
      let phosphorus_data = document.querySelector(".phosphorus").value;
      let potassium_data = document.querySelector(".potassium").value;
      let humidity_data = document.querySelector(".humidity").value;
      let temperature_data = document.querySelector(".temperature").value;
      let rainfall_data = document.querySelector(".rainfall").value;
      let ph = document.querySelector("#pH1").value;
      localStorage.setItem("ph_val", ph);
      console.log(ph)
      const formData = {
        N: nitrogen_data,
        P: phosphorus_data,
        K: potassium_data,
        temperature:temperature_data,
        humidity: humidity_data,
        ph:ph,
        rainfall: rainfall_data
    };
  
    console.log(formData);

    // Send POST request
    fetch('http://127.0.0.1:5000/crop', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        
    })
    // .then(response => response.json())
    // .then(data => {
    //     // Handle response data (e.g., display estimated rainfall)
    //     document.getElementById('estimatedRainfall').textContent = Estimated Rainfall: ${data.rainfall} mm;
    // })
    .then(function (response) {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json(); // Parse JSON response
  })
  .then(data => {
  // Handle the JSON data returned by the server
  console.log('Data:', data.prediction);
  document.getElementById('suggcrop').textContent = `Suggested Crop:: ${data.prediction}`;
  // You can use the data to update the UI or perform other actions
  })
  .catch(error => {
  console.error('Error:', error);
  document.getElementById('suggcrop').textContent = 'Error fetching rainfall data';
    });
  });


    
    document.querySelector(".yes").addEventListener("click", (event) => {
      event.preventDefault();
        let nitrogen_data = document.querySelector(".nitrogen").nodeValue;
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
    document.getElementById("product-prediction").addEventListener("click", function() {
      document.querySelector(".page2").style.display = "none";
      document.querySelector(".page1_form").style.display = "none";
      document.querySelector(".r1").style.display = "none";
      document.querySelector(".production_page").style.display = "block";
      
    });
    //  --------------------------------page2_js-------------------------------------------
    document.querySelector(".submit").addEventListener('click',()=>{
      document.querySelector(".page1_form").style.display = "none";
      document.querySelector(".r1").style.display = "none";
      document.querySelector("#sugy").style.display = "block";
    });
  
    const crops = ["apple", "banana", "blackgram", "chickpea", "coconut",
      "coffee", "cotton", "grapes", "jute", "kidney_beans", "lentil", "maize", "mango",
      "moth_beans", "mung_bean", "muskmelon", "orange", "papaya", "pigeon_peas",
      "pomegranate", "rice", "watermelon"];
  
    const cropSelect = document.getElementById("crop");
  
    crops.forEach(crop => {
      const option = document.createElement('option');
      option.value = crop.toUpperCase();
      option.textContent = crop;
      cropSelect.appendChild(option);
    });
    
    const nitrogen_data=localStorage.getItem("nitrogen_data")
    const phosphorus_data=localStorage.getItem("phosphorus_data");
    const potassium_data=localStorage.getItem("potassium_data");
    const humidity_data=localStorage.getItem("humidity_data");
    const temperature_data=localStorage.getItem("temperature_data");
    const rainfall_data=localStorage.getItem("rainfall_data");
    const ph=localStorage.getItem("ph_val");

        const crp =  document.getElementById('crop').value;
        console.log(ph)
      const formData = {
        N: nitrogen_data,
        P: phosphorus_data,
        K: potassium_data,
        temperature:temperature_data,
        humidity: humidity_data,
        ph:ph,
        rainfall: rainfall_data,
        crop: crp
    };
  
    console.log(formData);

    // Send POST request
    fetch('http://127.0.0.1:5000/yield', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        
    })
    // .then(response => response.json())
    // .then(data => {
    //     // Handle response data (e.g., display estimated rainfall)
    //     document.getElementById('estimatedRainfall').textContent = Estimated Rainfall: ${data.rainfall} mm;
    // })
    .then(function (response) {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json(); // Parse JSON response
  })
  .then(data => {
  // Handle the JSON data returned by the server
  console.log('Data:', data.prediction);
  document.getElementById('sugy').textContent = `Suggested Yield: ${data.prediction}`;
  // You can use the data to update the UI or perform other actions
  })
  .catch(error => {
  console.error('Error:', error);
  // document.getElementById('suggcrop').textContent = 'Error fetching rainfall data';
    });


    
  
    //  --------------------------------rainfall_js-------------------------------------------
    
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'ANNUAL', 'Jan-Feb',
      'Mar-May', 'Jun-Sep', 'Oct-Dec'];
  
      const monthSelect = document.getElementById("month");
  
      months.forEach((month) => {
          const option = document.createElement("option");
          option.value = month.toUpperCase();
          option.textContent = month;
          monthSelect.appendChild(option);
      });      

  const districts = [
    "NICOBAR", "SOUTH ANDAMAN", "N & M ANDAMAN", "LOHIT", "EAST SIANG",
    "SUBANSIRI F.D", "TIRAP", "ANJAW (LOHIT)", "LOWER DIBANG", "CHANGLANG",
    "PAPUM PARE", "LOW SUBANSIRI", "UPPER SIANG", "WEST SIANG", "DIBANG VALLEY",
    "WEST KAMENG", "EAST KAMENG", "TAWANG(W KAME", "KURUNG KUMEY", "CACHAR",
    "DARRANG", "GOALPARA", "KAMRUP", "LAKHIMPUR", "NORTH CACHAR",
    "NAGAON", "SIVASAGAR", "BARPETA", "DHUBRI", "DIBRUGARH",
    "JORHAT", "KARIMGANJ", "KOKRAJHAR", "SHONITPUR", "GOLAGHAT",
    "TINSUKIA", "HAILAKANDI", "DHEMAJI(LAKHI", "KARBI ANGLONG",
    "UDALGURI(DARA", "KAMRUP METROP", "CHIRANG(BONGAI", "BAKSA BARPETA",
    "BONGAIGAON", "MORIGAON", "NALBARI", "EAST KHASI HI", "JAINTIA HILLS",
    "EAST GARO HIL", "RI-BHOI", "SOUTH GARO HI", "W KHASI HILL",
    "WEST GARO HIL", "IMPHAL EAST", "SENAPATI", "TAMENGLONG", "CHANDEL",
    "UKHRUL", "THOUBAL", "BISHNUPUR", "IMPHAL WEST", "CHURACHANDPUR",
    "AIZAWL", "CHAMPHAI", "KOLASIB", "LUNGLEI", "CHHIMTUIPUI",
    "LAWNGTLAI", "MAMIT", "SAIHA", "SERCHHIP", "KOHIMA",
    "TUENSANG", "MOKOKCHUNG", "DIMAPUR", "WOKHA", "MON",
    "ZUNHEBOTO", "PHEK", "KEPHRIE", "LONGLENG", "PEREN",
    "NORTH TRIPURA", "SOUTH TRIPURA", "WEST TRIPURA", "DHALAI",
    "COOCH BEHAR", "DARJEELING", "JALPAIGURI", "MALDA", "SOUTH DINAJPUR",
    "NORTH DINAJPUR", "NORTH SIKKIM", "EAST SIKKIM", "WEST SIKKIM",
    "SOUTH SIKKIM", "BANKURA", "BIRBHUM", "BURDWAN", "HOOGHLY",
    "HOWRAH", "PURULIA", "MURSHIDABAD", "NADIA", "NORTH 24 PARG",
    "SOUTH 24 PARG", "EAST MIDNAPOR", "WEST MIDNAPOR", "KOLKATA",
    "BALASORE", "BOLANGIR", "KANDHAMAL/PHU", "CUTTACK", "DHENKANAL",
    "GANJAM", "KALAHANDI", "KEONDJHARGARH", "KORAPUT", "MAYURBHANJ",
    "PURI", "SAMBALPUR", "SUNDARGARH", "BHADRAK", "JAJPUR",
    "KENDRAPARA", "ANGUL", "NAWAPARA", "MALKANGIRI", "NAWARANGPUR",
    "NAYAGARH", "KHURDA", "BARGARH", "JHARSUGUDA", "DEOGARH",
    "RAYAGADA", "GAJAPATI", "JAGATSINGHAPU", "BOUDHGARH", "SONEPUR",
    "BOKARO", "DHANBAD", "DUMKA", "HAZARIBAG", "PALAMU",
    "RANCHI", "SAHIBGANJ", "WEST SINGHBHUM", "DEOGHAR", "GIRIDIH",
    "GODDA", "GUMLA", "LOHARDAGA", "CHATRA", "KODERMA",
    "PAKUR", "EAST SINGHBHU", "GARHWA", "SERAIKELA-KHA", "JAMTARA",
    "LATEHAR", "SIMDEGA", "KHUNTI(RANCHI", "RAMGARH", "BHAGALPUR",
    "EAST CHAMPARAN", "DARBHANGA", "GAYA", "MUNGER", "MUZAFFARPUR",
    "WEST CHAMPARAN", "PURNEA", "GOPALGANJ", "MADHUBANI", "AURANGABAD",
    "BEGUSARAI", "BHOJPUR", "NALANDA", "PATNA", "KATIHAR",
    "KHAGARIA", "SARAN", "MADHEPURA", "NAWADA", "ROHTAS",
    "SAMASTIPUR", "SITAMARHI", "SIWAN", "VAISHALI", "JAHANABAD",
    "BUXAR", "ARARIA", "BANKA", "BHABUA", "JAMUI",
    "KISHANGANJ", "SHEIKHPURA", "SUPAUL", "LAKHISARAI", "SHEOHAR",
    "ARWAL", "SAHARSA", "ALLAHABAD", "AZAMGARH", "BAHRAICH",
    "BALLIA", "BANDA", "BARABANKI", "BASTI", "DEORIA",
    "FAIZABAD", "FARRUKHABAD", "FATEHPUR", "GHAZIPUR", "GONDA",
    "GORAKHPUR", "HARDOI", "JAUNPUR", "KANPUR NAGAR", "KHERI LAKHIMP",
    "LUCKNOW", "MIRZAPUR", "PRATAPGARH", "RAE BARELI", "SITAPUR",
    "SULTANPUR", "UNNAO", "VARANASI", "SONBHADRA", "MAHARAJGANJ",
    "MAU", "SIDDHARTH NGR", "KUSHINAGAR", "AMBEDKAR NAGAR", "KANNAUJ",
    "BALRAMPUR", "KAUSHAMBI", "SAHUJI MAHARA", "KANPUR DEHAT", "CHANDAULI",
    "SANT KABIR NGR", "SANT RAVIDAS", "SHRAVASTI NGR", "AGRA",
    "ALIGARH", "BAREILLY", "BIJNOR", "BADAUN", "BULANDSHAHAR",
    "ETAH", "ETAWAH", "HAMIRPUR", "JALAUN", "JHANSI",
    "LALITPUR", "MAINPURI", "MATHURA", "MEERUT", "MORADABAD",
    "MUZAFFARNAGAR", "PILIBHIT", "RAMPUR", "SAHARANPUR", "SHAHJAHANPUR",
    "GHAZIABAD", "FIROZABAD", "MAHOBA", "MAHAMAYA NAGA", "AURAIYA",
    "BAGPAT", "JYOTIBA PHULE", "GAUTAM BUDDHA", "KANSHIRAM NAG", "ALMORA",
    "CHAMOLI", "DEHRADUN", "GARHWAL PAURI", "NAINITAL", "PITHORAGARH",
    "GARHWAL TEHRI", "UTTARKASHI", "HARIDWAR", "CHAMPAWAT", "RUDRAPRAYAG",
    "UDHAM SINGH N", "BAGESHWAR", "AMBALA", "GURGAON", "HISAR", "JIND", "KARNAL", "MAHENDRAGARH", "ROHTAK", "BHIWANI", "FARIDABAD", "KURUKSHETRA", "SIRSA", "SONEPAT(RTK)", "YAMUNANAGAR",
    "KAITHAL", "PANIPAT", "REWARI", "FATEHABAD", "JHAJJAR", "PANCHKULA", "MEWAT", "PALWAL(FRD)", "CHANDIGARH", "NORTH DELHI", "NE DELHI", "SW DELHI", "NW DELHI", "SOUTH DELHI",
    "WEST DELHI", "AMRITSAR", "BATHINDA", "FEROZEPUR", "GURDASPUR",
    "HOSHIARPUR", "JALANDHAR", "KAPURTHALA", "LUDHIANA", "PATIALA",
    "RUPNAGAR", "SANGRUR", "FARIDKOT", "MOGA", "NAWANSHAHR",
    "FATEHGARH SAH", "MUKTSAR", "MANSA", "BARNALA", "SAS NAGAR(MGA)",
    "TARN TARAN", "BILASPUR", "CHAMBA", "KANGRA", "KINNAUR",
    "KULLU", "LAHUL & SPITI", "MANDI", "SHIMLA", "SIRMAUR",
    "SOLAN", "UNA", "ANANTNAG", "BARAMULLA", "DODA",
    "JAMMU", "KATHUA", "LADAKH (LEH)", "UDHAMPUR", "BADGAM",
    "KUPWARA", "PULWAMA", "SRINAGAR", "KARGIL", "POONCH",
    "RAJOURI", "BANDIPORE", "GANDERWAL", "KULGAM/(ANT)", "SHOPAN",
    "SAMBA", "KISTWAR", "REASI", "RAMBAN(DDA)", "BARMER",
    "BIKANER", "CHURU", "SRI GANGANAGA", "JAISALMER", "JALORE",
    "JODHPUR", "NAGAUR", "PALI", "HANUMANGARH", "AJMER",
    "ALWAR", "BANSWARA", "BHARATPUR", "BHILWARA", "BUNDI",
    "CHITTORGARH", "DUNGARPUR", "JAIPUR", "JHALAWAR", "JHUNJHUNU",
    "KOTA", "SAWAI MADHOPUR", "SIKAR", "SIROHI", "TONK",
    "UDAIPUR", "DHOLPUR", "BARAN", "DAUSA", "RAJSAMAND",
    "KARAULI", "PRATAPGARH(CHT", "BETUL", "VIDISHA", "BHIND",
    "DATIA", "DEWAS", "DHAR", "GUNA", "GWALIOR",
    "HOSHANGABAD", "INDORE", "JHABUA", "MANDSAUR", "MORENA",
    "KHANDWA", "KHARGONE", "RAISEN", "RAJGARH", "RATLAM",
    "SEHORE", "SHAHDOL", "SIDHI", "TIKAMGARH", "KATNI",
    "DINDORI", "UMARIA", "DAMOH", "ANUPPUR(SHAHD", "SINGRAULI",
    "AHMEDABAD", "BANASKANTHA", "BARODA", "BHARUCH", "VALSAD",
    "DANGS", "KHEDA", "MEHSANA", "PANCHMAHALS", "SABARKANTHA",
    "SURAT", "GANDHINAGAR", "NARMADA(BRC)", "NAVSARI(VSD)",
    "ANAND(KHR)", "PATAN(MHSN)", "DAHOD(PNML)", "TAPI(SRT)",
    "AMRELI", "BHAVNAGAR", "JAMNAGAR", "JUNAGADH", "KUTCH",
    "RAJKOT", "SURENDRANAGAR", "PORBANDAR", "DNH", "DAMAN",
    "DIU", "MUMBAI CITY", "RAIGAD", "RATNAGIRI", "THANE",
    "SINDHUDURG", "MUMBAI SUB", "NORTH GOA", "SOUTH GOA",
    "AHMEDNAGAR", "DHULE", "JALGAON", "KOLHAPUR", "NASHIK",
    "PUNE", "SANGLI", "SATARA", "SOLAPUR", "NANDURBAR",
    "BEED", "NANDED", "OSMANABAD", "PARBHANI", "LATUR",
    "JALNA", "HINGOLI", "AKOLA", "AMRAVATI", "BHANDARA",
    "BULDHANA", "CHANDRAPUR", "NAGPUR", "YAVATMAL", "WARDHA",
    "GADCHIROLI", "WASHIM", "GONDIA", "BASTAR", "DURG",
    "RAIGARH", "RAIPUR", "SURGUJA", "RAJNANDGAON", "DANTEWADA",
    "KANKER (NORH", "JANJGIR-CHAMP", "KORBA", "JASHPUR",
    "DHAMTARI", "MAHASAMUND", "KORIYA", "KOWARDHA (KAB",
    "NARAYANPUR", "BIJAPUR", "EAST GODAVARI", "WEST GODAVARI",
    "GUNTUR", "KRISHNA", "NELLORE", "PRAKASAM", "SRIKAKULAM",
    "VISAKHAPATNAM", "VIZIANAGARAM", "ADILABAD", "HYDERABAD",
    "KARIMNAGAR", "KHAMMAM", "MAHABUBNAGAR", "MEDAK", "NALGONDA",
    "NIZAMABAD", "WARANGAL", "RANGAREDDY", "ANANTAPUR",
    "CHITTOOR", "KUDDAPAH", "KURNOOL", "VELLORE", "COIMBATORE",
    "DHARMAPURI", "KANYAKUMARI", "CHENNAI", "MADURAI",
    "NILGIRIS", "RAMANATHAPURA", "SALEM", "THANJAVUR",
    "TIRUCHIRAPPAL", "TIRUNELVELI", "ERODE", "PUDUKKOTTAI",
    "DINDIGUL", "VIRUDHUNAGAR", "SIVAGANGA", "THOOTHUKUDI",
    "TIRUVANNAMALA", "NAGAPATTINAM", "VILUPPURAM", "CUDDALORE",
    "KANCHIPURAM", "TIRUVALLUR", "THENI", "NAMAKKAL", "KARUR",
    "PERAMBALUR", "TIRUVARUR", "KRISHNAGIRI", "ARIYALUR",
    "TIRUPUR", "PONDICHERRY", "KARAIKAL", "MAHE", "YANAM",
    "UTTAR KANNADA", "DAKSHIN KANDA", "UDUPI", "BELGAM",
    "BIDAR", "DHARWAD", "GULBARGA", "YADGIR", "RAICHUR",
    "BAGALKOTE", "GADAG", "HAVERI", "KOPPAL", "BANGALORE RUR",
    "BELLARY", "CHIKMAGALUR", "CHITRADURGA", "KODAGU",
    "HASSAN", "KOLAR", "MANDYA", "MYSORE", "SHIMOGA",
    "TUMKUR", "BANGALORE URB", "CHAMARAJANAGA", "DAVANGERE",
    "RAMNAGAR(BNGR)", "CHICKBALLAPUR", "ALAPPUZHA", "CANNUR",
    "ERNAKULAM", "KOTTAYAM", "KOZHIKODE", "MALAPPURAM",
    "PALAKKAD", "KOLLAM", "THRISSUR", "THIRUVANANTHA",
    "IDUKKI", "KASARGOD", "PATHANAMTHITTA", "WAYANAD",
    "LAKSHADWEEP"
  ];
  
  
  districts.sort();
  
  const districtSelect = document.getElementById('district');
  
  districts.forEach(district => {
    const option = document.createElement('option');
    option.value = district.toUpperCase();
    option.textContent = district;
    districtSelect.appendChild(option);
  });

  

  //------------------------------------------- production-------------------------------------------------------------
  let states = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh',
    'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir',
    'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal'];

    let stateSelect = document.getElementById('state_p');
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });

  let districts_p = ["NICOBARS", "NORTH AND MIDDLE ANDAMAN", "SOUTH ANDAMANS", "ANANTAPUR", 
    "CHITTOOR", "EAST GODAVARI", "GUNTUR", "KADAPA", "KRISHNA", "KURNOOL", "PRAKASAM", "SPSR NELLORE", 
    "SRIKAKULAM", "VISAKHAPATANAM", "VIZIANAGARAM", "WEST GODAVARI", "ANJAW", "CHANGLANG", 
    "DIBANG VALLEY", "EAST KAMENG", "EAST SIANG", "KURUNG KUMEY", "LOHIT", "LONGDING", "LOWER DIBANG VALLEY", 
    "LOWER SUBANSIRI", "NAMSAI", "PAPUM PARE", "TAWANG", "TIRAP", "UPPER SIANG", "UPPER SUBANSIRI", 
    "WEST KAMENG", "WEST SIANG", "BAKSA", "BARPETA", "BONGAIGAON", "CACHAR", "CHIRANG", "DARRANG",
    "DHEMAJI", "DHUBRI", "DIBRUGARH", "DIMA HASAO", "GOALPARA", "GOLAGHAT", "HAILAKANDI", "JORHAT", 
    "KAMRUP", "KAMRUP METRO", "KARBI ANGLONG", "KARIMGANJ", "KOKRAJHAR", "LAKHIMPUR", "MARIGAON", "NAGAON", 
    "NALBARI", "SIVASAGAR", "SONITPUR", "TINSUKIA", "UDALGURI", "ARARIA", "ARWAL", "AURANGABAD", "BANKA", 
    "BEGUSARAI", "BHAGALPUR", "BHOJPUR", "BUXAR", "DARBHANGA", "GAYA", "GOPALGANJ", "JAMUI", "JEHANABAD", 
    "KAIMUR (BHABUA)", "KATIHAR", "KHAGARIA", "KISHANGANJ", "LAKHISARAI", "MADHEPURA", "MADHUBANI", "MUNGER", 
    "MUZAFFARPUR", "NALANDA", "NAWADA", "PASHCHIM CHAMPARAN", "PATNA", "PURBI CHAMPARAN", "PURNIA", 
    "ROHTAS", "SAHARSA", "SAMASTIPUR", "SARAN", "SHEIKHPURA", "SHEOHAR", "SITAMARHI", "SIWAN", "SUPAUL", 
    "VAISHALI", "CHANDIGARH", "BALOD", "BALODA BAZAR", "BALRAMPUR", "BASTAR", "BEMETARA", "BIJAPUR", "BILASPUR", 
    "DANTEWADA", "DHAMTARI", "DURG", "GARIYABAND", "JANJGIR-CHAMPA", "JASHPUR", "KABIRDHAM", "KANKER", 
    "KONDAGAON", "KORBA", "KOREA", "MAHASAMUND", "MUNGELI", "NARAYANPUR", "RAIGARH", "RAIPUR", "RAJNANDGAON", 
    "SUKMA", "SURAJPUR", "SURGUJA", "DADRA AND NAGAR HAVELI", "NORTH GOA", "SOUTH GOA", "AHMADABAD", "AMRELI", 
    "ANAND", "BANAS KANTHA", "BHARUCH", "BHAVNAGAR", "DANG", "DOHAD", "GANDHINAGAR", "JAMNAGAR", "JUNAGADH", "KACHCHH", "KHEDA", "MAHESANA", "NARMADA", "NAVSARI", "PANCH MAHALS", 
    "PATAN", "PORBANDAR", "RAJKOT", "SABAR KANTHA", "SURAT", "SURENDRANAGAR", "TAPI", "VADODARA", "VALSAD", "AMBALA", "BHIWANI", "FARIDABAD", "FATEHABAD", "GURGAON", "HISAR", 
    "JHAJJAR", "JIND", "KAITHAL", "KARNAL", "KURUKSHETRA", "MAHENDRAGARH", "MEWAT", "PALWAL", "PANCHKULA", "PANIPAT", 
    "REWARI", "ROHTAK", "SIRSA", "SONIPAT", "YAMUNANAGAR", "CHAMBA", "HAMIRPUR", "KANGRA", "KINNAUR", "KULLU", "LAHUL AND SPITI", "MANDI", "SHIMLA", "SIRMAUR", "SOLAN", "UNA", "ANANTNAG", 
    "BADGAM", "BANDIPORA", "BARAMULLA", "DODA", "GANDERBAL", "JAMMU", "KARGIL", "KATHUA", "KISHTWAR", "KULGAM", "KUPWARA", "LEH LADAKH", "POONCH", "PULWAMA", "RAJAURI", "RAMBAN", "REASI", "SAMBA", "SHOPIAN", "SRINAGAR", "UDHAMPUR", "BOKARO",
    "CHATRA", "DEOGHAR", "DHANBAD", "DUMKA", "EAST SINGHBUM", "GARHWA",
    "GIRIDIH", "GODDA", "GUMLA", "HAZARIBAGH", "JAMTARA", "KHUNTI", "KODERMA", "LATEHAR", "LOHARDAGA", "PAKUR", "PALAMU", "RAMGARH", "RANCHI", "SAHEBGANJ", "SARAIKELA KHARSAWAN", "SIMDEGA", "WEST SINGHBHUM", "BAGALKOT", "BANGALORE RURAL", 
    "BELGAUM", "BELLARY", "BENGALURU URBAN", "BIDAR", "CHAMARAJANAGAR", "CHIKBALLAPUR", "CHIKMAGALUR", "CHITRADURGA", "DAKSHIN KANNAD", "DAVANGERE", "DHARWAD", "GADAG", "GULBARGA", "HASSAN", 
    "HAVERI", "KODAGU", "KOLAR", "KOPPAL", "MANDYA", "MYSORE", "RAICHUR", "RAMANAGARA", "SHIMOGA", "TUMKUR", "UDUPI", "UTTAR KANNAD", "YADGIR", "ALAPPUZHA", "ERNAKULAM", "IDUKKI",
    "KANNUR", "KASARAGOD", "KOLLAM", "KOTTAYAM", "KOZHIKODE", "MALAPPURAM", "PALAKKAD", "PATHANAMTHITTA", "THIRUVANANTHAPURAM", "THRISSUR", "WAYANAD", 
    "AGAR MALWA", "ALIRAJPUR", "ANUPPUR", "ASHOKNAGAR", "BALAGHAT", "BARWANI", "BETUL", "BHIND", "BHOPAL", "BURHANPUR", "CHHATARPUR", "CHHINDWARA", "DAMOH", "DATIA", "DEWAS", "DHAR", 
    "DINDORI", "GUNA", "GWALIOR", "HARDA", "HOSHANGABAD", "INDORE", "JABALPUR", "JHABUA", "KATNI", "KHANDWA", "KHARGONE", "MANDLA", "MANDSAUR", "MORENA", "NARSINGHPUR", "NEEMUCH", "PANNA",
    "RAISEN", "RAJGARH", "RATLAM", "REWA", "SAGAR", "SATNA", "SEHORE", "SEONI", "SHAHDOL", "SHAJAPUR", "SHEOPUR", "SHIVPURI", "SIDHI", "SINGRAULI", "TIKAMGARH", "UJJAIN", "UMARIA", "VIDISHA", "AHMEDNAGAR", "AKOLA", "AMRAVATI", "BEED", 
    "BHANDARA", "BULDHANA", "CHANDRAPUR", "DHULE", "GADCHIROLI", "GONDIA", 
    "HINGOLI", "JALGAON", "JALNA", "KOLHAPUR", "LATUR", "MUMBAI", "NAGPUR", "NANDED", "NANDURBAR", "NASHIK", "OSMANABAD", "PALGHAR", "PARBHANI", "PUNE", "RAIGAD",
    "RATNAGIRI", "SANGLI", "SATARA", "SINDHUDURG", "SOLAPUR", "THANE", "WARDHA", "WASHIM", "YAVATMAL", "BISHNUPUR", "CHANDEL", "CHURACHANDPUR", "IMPHAL EAST", 
    "IMPHAL WEST", "SENAPATI", "TAMENGLONG", "THOUBAL", "UKHRUL", "EAST GARO HILLS",
    "EAST JAINTIA HILLS", "EAST KHASI HILLS", "NORTH GARO HILLS", "RI BHOI", "SOUTH GARO HILLS", "SOUTH WEST GARO HILLS", "SOUTH WEST KHASI HILLS", "WEST GARO HILLS", 
    "WEST JAINTIA HILLS", "WEST KHASI HILLS", "AIZAWL", "CHAMPHAI", "KOLASIB", "LAWNGTLAI", "LUNGLEI", "MAMIT", "SAIHA", "SERCHHIP", "DIMAPUR", "KIPHIRE", "KOHIMA", "LONGLENG", "MOKOKCHUNG", "MON", "PEREN", "PHEK", "TUENSANG", "WOKHA", "ZUNHEBOTO", "ANUGUL", "BALANGIR", "BALESHWAR", "BARGARH", "BHADRAK", "BOUDH", "CUTTACK", "DEOGARH", "DHENKANAL", "GAJAPATI", "GANJAM", "JAGATSINGHAPUR", "JAJAPUR", "JHARSUGUDA", "KALAHANDI", "KANDHAMAL", "KENDRAPARA", "KENDUJHAR", "KHORDHA", "KORAPUT", "MALKANGIRI", "MAYURBHANJ", "NABARANGPUR", "NAYAGARH", "NUAPADA", "PURI", "RAYAGADA", "SAMBALPUR", "SONEPUR", "SUNDARGARH", "KARAIKAL", "MAHE", "PONDICHERRY", "YANAM", "AMRITSAR", "BARNALA", "BATHINDA", "FARIDKOT", "FATEHGARH SAHIB", "FAZILKA", "FIROZEPUR", "GURDASPUR", "HOSHIARPUR", "JALANDHAR", "KAPURTHALA", "LUDHIANA", "MANSA", "MOGA", "MUKTSAR", "NAWANSHAHR", "PATHANKOT", 
    "PATIALA", "RUPNAGAR", "S.A.S NAGAR", "SANGRUR", "TARN TARAN", "AJMER", "ALWAR", "BANSWARA", "BARAN", "BARMER", "BHARATPUR", "BHILWARA", "BIKANER", "BUNDI", 
    "CHITTORGARH", "CHURU", "DAUSA", "DHOLPUR", "DUNGARPUR", "GANGANAGAR", "HANUMANGARH", "JAIPUR", "JAISALMER", "JALORE", "JHALAWAR", "JHUNJHUNU", "JODHPUR", "KARAULI", "KOTA", "NAGAUR", "PALI", "PRATAPGARH", "RAJSAMAND", "SAWAI MADHOPUR", "SIKAR", "SIROHI", "TONK", "UDAIPUR", "EAST DISTRICT", "NORTH DISTRICT", "SOUTH DISTRICT", "WEST DISTRICT", "ARIYALUR", "COIMBATORE", "CUDDALORE", "DHARMAPURI", "DINDIGUL", "ERODE", "KANCHIPURAM", "KANNIYAKUMARI", "KARUR", "KRISHNAGIRI", "MADURAI", "NAGAPATTINAM", "NAMAKKAL", "PERAMBALUR", "PUDUKKOTTAI", "RAMANATHAPURAM", "SALEM", "SIVAGANGA", "THANJAVUR", "THE NILGIRIS", "THENI", "THIRUVALLUR", "THIRUVARUR", "TIRUCHIRAPPALLI", "TIRUNELVELI", "TIRUPPUR", "TIRUVANNAMALAI", "TUTICORIN", "VELLORE", "VILLUPURAM", "VIRUDHUNAGAR", "ADILABAD", "HYDERABAD", "KARIMNAGAR", "KHAMMAM", "MAHBUBNAGAR", "MEDAK", "NALGONDA",
    "NIZAMABAD", "RANGAREDDI", "WARANGAL", "DHALAI", "GOMATI", "KHOWAI", "NORTH TRIPURA", "SEPAHIJALA", "SOUTH TRIPURA", "UNAKOTI", "WEST TRIPURA", "AGRA", "ALIGARH", 
    "ALLAHABAD", "AMBEDKAR NAGAR", "AMETHI", "AMROHA", "AURAIYA", "AZAMGARH", "BAGHPAT", "BAHRAICH", "BALLIA", "BANDA", "BARABANKI", "BAREILLY", "BASTI", "BIJNOR", "BUDAUN", "BULANDSHAHR", "CHANDAULI", "CHITRAKOOT", "DEORIA", "ETAH", "ETAWAH", "FAIZABAD", "FARRUKHABAD", "FATEHPUR", "FIROZABAD", "GAUTAM BUDDHA NAGAR", "GHAZIABAD", "GHAZIPUR", "GONDA", "GORAKHPUR", "HAPUR", "HARDOI", "HATHRAS", "JALAUN", "JAUNPUR", "JHANSI", "KANNAUJ", "KANPUR DEHAT", "KANPUR NAGAR", "KASGANJ", "KAUSHAMBI", "KHERI", "KUSHI NAGAR", "LALITPUR", "LUCKNOW", "MAHARAJGANJ", "MAHOBA", "MAINPURI", "MATHURA", "MAU", "MEERUT", "MIRZAPUR", "MORADABAD", "MUZAFFARNAGAR", "PILIBHIT", "RAE BARELI", "RAMPUR", "SAHARANPUR", "SAMBHAL", "SANT KABEER NAGAR", "SANT RAVIDAS NAGAR", "SHAHDOL", "SHAHPUR", "SHAMLI", "SHRAVASTI", "SIDDHARTH NAGAR", "SITAPUR", 
    "SONBHADRA", "SULTANPUR", "UNNAO", "VARANASI", "ALMORA", "BAGESHWAR", "CHAMOLI", "CHAMPAWAT", "DEHRADUN", "HARIDWAR", "NAINITAL", "PAURI GARHWAL", "PITHORAGARH", 
    "RUDRA PRAYAG", "TEHRI GARHWAL", "UDAM SINGH NAGAR", "UTTAR KASHI", "24 PARAGANAS NORTH", "24 PARAGANAS SOUTH", "BANKURA", "BARDHAMAN", "BIRBHUM", "COOCHBEHAR", "DARJEELING", "DINAJPUR DAKSHIN", "DINAJPUR UTTAR", "HOOGLY", "HOWRAH", "JALPAIGURI", "MALDAH", "MEDINIPUR EAST", "MEDINIPUR WEST", "MURSHIDABAD", "NADIA", "PURULIA"
];

districts_p.sort(); 

const districtSelect_p = document.getElementById('district_p');
districts_p.forEach(district => {
    const option = document.createElement('option');
    option.value = district;
    option.textContent = district;
    districtSelect_p.appendChild(option);
});

let crops_p = ['Arecanut', 'Other Kharif pulses', 'Rice', 'Banana', 'Cashewnut', 'Coconut', 'Dry ginger', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Black pepper', 'Dry chillies', 'other oilseeds', 'Turmeric', 'Maize', 'Moong(Green Gram)', 'Urad', 'Arhar/Tur', 'Groundnut', 'Sunflower', 'Bajra', 'Castor seed', 'Cotton(lint)', 'Horse-gram', 'Jowar', 'Korra', 'Ragi', 'Tobacco', 'Gram', 'Wheat', 'Masoor', 'Sesamum', 'Linseed', 'Safflower', 'Onion', 'other misc. pulses', 'Samai', 'Small millets', 'Coriander', 'Potato', 'Other Rabi pulses', 'Soyabean', 'Beans & Mutter(Vegetable)', 'Bhindi', 'Brinjal', 'Citrus Fruit', 'Cucumber', 'Grapes', 'Mango', 'Orange', 'other fibres', 'Other Fresh Fruits', 'Other Vegetables', 'Papaya', 'Pome Fruit', 'Tomato', 'Rapeseed &Mustard', 'Mesta', 'Cowpea(Lobia)', 'Lemon', 'Pome Granet', 'Sapota', 'Cabbage', 'Peas (vegetable)', 'Niger seed', 'Bottle Gourd', 'Sannhamp', 'Varagu', 'Garlic', 'Ginger', 'Oilseeds total', 'Pulses total', 'Jute', 'Peas & beans (Pulses)', 'Blackgram', 'Paddy', 'Pineapple', 'Barley', 'Khesari', 'Guar seed', 'Moth', 'Other Cereals & Millets', 'Cond-spcs other', 'Turnip', 'Carrot', 'Redish', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Cashewnut Processed', 'Cashewnut Raw', 'Cardamom', 'Rubber', 'Bitter Gourd', 'Drum Stick', 'Jack Fruit', 'Snak Guard', 'Pump Kin', 'Tea', 'Coffee', 'Cauliflower', 'Other Citrus Fruit', 'Water Melon', 'Total foodgrain', 'Kapas', 'Colocosia', 'Lentil', 'Bean', 'Jobster', 'Perilla', 'Rajmash Kholar', 'Ricebean (nagadal)', 'Ash Gourd', 'Beet Root', 'Lab-Lab', 'Ribed Guard', 'Yam', 'Apple', 'Peach', 'Pear', 'Plums', 'Litchi', 'Ber', 'Other Dry Fruit', 'Jute & mesta'];
crops_p.sort();

const cropSelect_p = document.getElementById('crop_p');
crops_p.forEach(crop => {
    const option = document.createElement('option');
    option.value = crop;
    option.textContent = crop;
    cropSelect_p.appendChild(option);
});

// Add an event listener for form submission
document.getElementById('rainfallForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form values
  const state = document.getElementById('state').value;
  const district = document.getElementById('district').value;
  const month = document.getElementById('month').value;

  console.log(state);

  // Prepare data for POST request
  const formData = {
      state_name: state,
      district: district,
      duration: month
  };

  console.log(formData)

  // Send POST request
  fetch('http://127.0.0.1:5000/rainfall', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
      
  })
  // .then(response => response.json())
  // .then(data => {
  //     // Handle response data (e.g., display estimated rainfall)
  //     document.getElementById('estimatedRainfall').textContent = Estimated Rainfall: ${data.rainfall} mm;
  // })
  .then(function (response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON response
})
.then(data => {
// Handle the JSON data returned by the server
console.log('Rainfall Data:', data.rainfall);
document.getElementById('estimatedRainfall').textContent = `Estimated Rainfall: ${data.rainfall} mm`;
// You can use the data to update the UI or perform other actions
})
.catch(error => {
console.error('Error:', error);
document.getElementById('estimatedRainfall').textContent = 'Error fetching rainfall data';
  });
});

document.getElementById('productionForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form values
  const state = document.getElementById('state').value;
  const district = document.getElementById('district').value;
  const month = document.getElementById('month').value;
  const year = document.getElementById('year').value;
  const crp = document.getElementById('crop_p').value
  const area = document.getElementById('area').value

  
  console.log(state);

  // Prepare data for POST request
  const formData = {
    State_Name: state,
    District_Name: district,
    Season: month,
    Crop: crp,
    Crop_Year: year,
    Area: area
  };

  console.log(formData)

  // Send POST request
  fetch('http://127.0.0.1:5000/production', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
      
  })
  // .then(response => response.json())
  // .then(data => {
  //     // Handle response data (e.g., display estimated rainfall)
  //     document.getElementById('estimatedRainfall').textContent = Estimated Rainfall: ${data.rainfall} mm;
  // })
  .then(function (response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON response
})
.then(data => {
// Handle the JSON data returned by the server
console.log('Data:', data.prediction);
// document.getElementById('estimatedRainfall').textContent = `Estimated Rainfall: ${data.rainfall} mm`;
// You can use the data to update the UI or perform other actions
})
.catch(error => {
console.error('Error:', error);
// document.getElementById('estimatedRainfall').textContent = 'Error fetching rainfall data';
  });
});