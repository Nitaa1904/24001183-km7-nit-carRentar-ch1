document.getElementById("load-btn").addEventListener("click", function() {
  const tipeDriver = document.getElementById("tipeDriver").value;
  const tanggal = document.getElementById("tanggal").value;
  const waktuJemput = document.getElementById("waktuJemput").value;
  const jumlahPenumpang = document.getElementById("jumlahPenumpang").value;

  // Filter mobil berdasarkan input pengguna
  const filteredCars = cars.filter(car => {
    return (
      car.driverType === tipeDriver &&
      car.date === tanggal &&
      car.time === waktuJemput &&
      car.capacity >= jumlahPenumpang
    );
  });

  // Tampilkan hasil pencarian
  const hasilPencarianDiv = document.getElementById("hasilPencarian");
  hasilPencarianDiv.innerHTML = ""; // Kosongkan hasil sebelumnya

  if (filteredCars.length === 0) {
    hasilPencarianDiv.innerHTML = "<p>Tidak ada mobil yang sesuai dengan kriteria Anda.</p>";
  } else {
    filteredCars.forEach(car => {
      hasilPencarianDiv.innerHTML += `
        <div class="car-item">
          <img src="${car.image}" alt="${car.name}">
          <h3>${car.name}</h3>
          <p>Tipe Driver: ${car.driverType}</p>
          <p>Kapasitas: ${car.capacity} penumpang</p>
        </div>
      `;
    });
  }
});
