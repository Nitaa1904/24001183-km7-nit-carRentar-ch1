function loadCars() {
    const carsContainer = document.getElementById("cars-container");
    const driverType = document.getElementById("tipeDriver").value;
    const date = document.getElementById("tanggal").value;
    const time = document.getElementById("waktuJemput").value;
    const passengers = document.getElementById("jumlahPenumpang").value;
  
    carsContainer.innerHTML = ""; // Clear previous results
  
    // Filter cars based on passenger count and additional criteria
    const filteredCars = carsData.filter(car => {
      const matchPassengers = car.passengers >= passengers;
      // Add more conditions as needed, for example filtering by `driverType`, `date`, `time`
      return matchPassengers;
    });
  
    // Display the filtered cars
    filteredCars.forEach(car => {
      const carElement = `
        <div class="col-lg-4">
          <div class="card px-2 py-4">
            <img src="${car.image}" class="card-img-top mt-4 text-center">
            <div class="card-body">
              <h5 class="card-title fs-6">${car.name}</h5>
              <h5 class="card-title fs-5 fw-bold">Rp ${car.price.toLocaleString()} / hari</h5>
              <p class="cars__p">Mobil ${car.transmission}, kapasitas ${car.passengers} orang, Tahun ${car.year}</p>
              <a href="#" class="btn btn-utama" style="width:100%">Pilih Mobil</a>
            </div>
          </div>
        </div>`;
        
      carsContainer.insertAdjacentHTML("beforeend", carElement);
    });
  }
  
  document.getElementById("load-btn").addEventListener("click", loadCars);
  