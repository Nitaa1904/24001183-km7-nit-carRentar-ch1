// Data dummy mobil yang tersedia nanti dipindah ke car.example.js
const carsData = [
  {
      name: "Toyota Avanza",
      price: 430000,
      passengers: 4,
      transmission: "Manual",
      year: 2020,
      image: "images/cars.png"
  },
  {
      name: "Honda Jazz",
      price: 500000,
      passengers: 5,
      transmission: "Automatic",
      year: 2019,
      image: "images/cars.png"
  },
];

// Fungsi untuk memuat mobil berdasarkan input pengguna
function loadCars() {
  const carsContainer = document.getElementById("cars-container");
  const driverType = document.getElementById("tipeDriver").value;
  const date = document.getElementById("tanggal").value;
  const time = document.getElementById("waktuJemput").value;
  const passengers = document.getElementById("jumlahPenumpang").value;

  carsContainer.innerHTML = ""; // Kosongkan kontainer sebelum menampilkan hasil

  // Filter data mobil berdasarkan input pengguna
  const filteredCars = carsData.filter(car => car.passengers >= passengers);

  // Menampilkan data mobil yang sudah difilter
  filteredCars.forEach(car => {
      const carElement = `
          <div class="col-lg-4">
              <div class="card px-2 py-4">
                  <img src="${car.image}" class="card-img-top mt-4 text-center">
                  <div class="card-body">
                      <h5 class="card-title fs-6">${car.name}</h5>
                      <h5 class="card-title fs-5 fw-bold">Rp ${car.price} / hari</h5>
                      <p class="cars__p">Mobil ${car.transmission}, kapasitas ${car.passengers} orang, Tahun ${car.year}</p>
                      <a href="#" class="btn btn-utama" style="width:100%">Pilih Mobil</a>
                  </div>
              </div>
          </div>
      `;
      carsContainer.insertAdjacentHTML("beforeend", carElement);
  });
}
