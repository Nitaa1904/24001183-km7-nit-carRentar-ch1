const fs = require("fs");
const express = require("express");
const PORT = 3000;
const path = require('path');

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        "status": "Success",
        "message": "Application is running good..."
    });
});

// Route untuk mendapatkan list semua mobil
app.get('/api/v1/cars', (req, res) => {
    try {
        const cars = JSON.parse(
            // Membaca file cars.json
            fs.readFileSync(path.join(__dirname, 'data/cars.json'), "utf-8")
        );
        // Proses API
        res.status(200).json({
            status: "sukses",
            message: "ping success",
            isSuccess: true,
            totalData: cars.length,
            // Panggil data
            data: {
                cars,
            },
        });
    } catch (error) {
        // Jika terjadi error
        res.status(500).json({
            status: "error",
            message: "failed",
            error: error.message
        });
    }
});


// Route untuk menambahkan mobil baru
app.post('/api/v1/cars', (req, res) => {
    try {
        const cars = JSON.parse(
            fs.readFileSync(path.join(__dirname, 'data/cars.json'), "utf-8")
        );

        // Data mobil baru dari body request
        const newCar = req.body;
        cars.push(newCar);

        // Tulis ulang file cars.json dengan data mobil yang baru
        fs.writeFileSync(path.join(__dirname, 'data/cars.json'), JSON.stringify(cars, null, 2));
        res.status(201).json({
            status: "sukses",
            message: "Mobil baru berhasil ditambahkan",
            isSuccess: true,
            totalData: cars.length,
            data: {
                cars,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "failed",
            error: error.message
        });
    }
});

// update
// hapus

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});