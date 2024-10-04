const carsData = [
    {
      id: "6e2bc663-5197-441a-957b-bc75e4a2da7c",
      plate: "DBH-3491",
      transmission: "Automatic",
      manufacture: "Ford",
      model: "F150",
      year: 2022,
      driverType: "true", 
      passengers: 4,
      price: 500000,
      image: "images/car01.min.jpg",
      options: [
        "Cruise Control",
        "Tinted Glass",
        "AM/FM Stereo"
      ],
      specs: [
        "Brake assist",
        "Leather-wrapped shift knob"
      ]
    },
    {
      id: "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
      plate: "WXB-3984",
      transmission: "Automatic",
      manufacture: "BMW",
      model: "X5",
      year: 2019,
      driverType: "false", 
      passengers: 5,
      price: 600000,
      image: "images/car02.min.jpg",
      options: [
        "Keyless Entry",
        "Power Windows"
      ],
      specs: [
        "Electrochromic rearview mirror",
        "Dual chrome exhaust tips"
      ]
    },
    {
      id: "bf6b5c43-1377-4ae0-8908-310c64266f81",
      plate: "OSL-4224",
      transmission: "Automanual",
      manufacture: "Lincoln",
      model: "MKZ",
      year: 2021,
      driverType: "true", 
      passengers: 3,
      price: 550000,
      image: "images/car03.min.jpg",
      options: [
        "Bucket Seats",
        "Airbag: Passenger"
      ],
      specs: [
        "Driver & front passenger map pockets",
        "Tire pressure monitor system"
      ]
    }
  ];
  
  // Function to load cars based on user input
  function loadCars() {
    const carsContainer = document.getElementById("cars-container");
    const driverType = document.getElementById("tipeDriver").value;
    const date = document.getElementById("tanggal").value;
    const time = document.getElementById("waktuJemput").value;
    const passengers = parseInt(document.getElementById("jumlahPenumpang").value, 10);
    
    // Clear previous results
    carsContainer.innerHTML = "";
  
    // Check if all required fields are selected
    if (driverType === "default" || date === "" || time === "false") {
      carsContainer.innerHTML = `<p>Please select all required fields.</p>`;
      return;
    }
  
    // Filter cars based on user input
    const filteredCars = carsData.filter(car => {
      return car.passengers >= passengers && car.driverType === driverType;
    });
  
    // Display filtered cars
    if (filteredCars.length === 0) {
      carsContainer.innerHTML = `<p>No cars match your criteria.</p>`;
    } else {
      filteredCars.forEach(car => {
        const carElement = `
          <div class="col-lg-4">
            <div class="card px-2 py-4">
              <img src="${car.image}" class="card-img-top mt-4 text-center">
              <div class="card-body">
                <h5 class="card-title fs-6">${car.manufacture} ${car.model}</h5>
                <h5 class="card-title fs-5 fw-bold">Rp ${car.price.toLocaleString()} / hari</h5>
                <p class="cars__p">Mobil ${car.transmission}, kapasitas ${car.passengers} orang, Tahun ${car.year}</p>
                <a href="#" class="btn btn-custom" style="width:100%">Pilih Mobil</a>
              </div>
            </div>
          </div>`;
          
        carsContainer.insertAdjacentHTML("beforeend", carElement);
      });
    }
  }
  
  // Event listener for search button
  document.getElementById("load-btn").addEventListener("click", loadCars);
  