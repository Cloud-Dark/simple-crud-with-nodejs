# Simple CRUD With Node JS

Aplikasi CRUD sederhana menggunakan node js

## Persiapan

![Node Version](https://img.shields.io/badge/node-v14.17.0-yellowgreen.svg)
![NPM Version](https://img.shields.io/badge/npm-v6.14.13-blue.svg)
![My SQL Version](https://img.shields.io/badge/mysql-v5.7.24-blue.svg)
![Language: Indonesia](https://img.shields.io/badge/language-Indonesia-red.svg)




## Credit :heart: :wave:
[![GitHub Stars](https://img.shields.io/github/stars/Cloud-Dark/simple-crud-with-nodejs.svg?style=social&label=Star)](https://github.com/cefjoeii/mern-crud)
[![GitHub Forks](https://img.shields.io/github/forks/Cloud-Dark/simple-crud-with-nodejs.svg?style=social&label=Fork)](https://github.com/cefjoeii/mern-crud/fork)
[![GitHub Watchers](https://img.shields.io/github/watchers/Cloud-Dark/simple-crud-with-nodejs.svg?style=social&label=Watch)](https://github.com/cefjoeii/mern-crud)

[![Follow on GitHub](https://img.shields.io/github/followers/Cloud-Dark.svg?style=social&label=Follow)](https://github.com/Cloud-Dark)
[![Follow on Facebook](https://img.shields.io/badge/Follow%20%40syahdandev%20on-Facebook-%233C5A99.svg)](https://www.facebook.com/massyahdanfilsafan)
[![Follow on Instagram](https://img.shields.io/badge/Follow%20%40syahdandev%20on-Instagram-C13584.svg)](https://www.instagram.com/portofolio_syahdan/)


## Demo

Demo: [http://127.0.0.1/](https://127.0.0.1/)


## Teknologi digunakan
Untuk menyempurnakan aplikasi ini developer menggunakan beberapa bantuan tools agar lebih mudah di gunakan
- Node JS V 14.17.0
- MySQL V 5.7.24
## Library Berjalan
- Sentry.io : digunakan untuk mode debugging agar ketika terjadi error, bisa dengan mudah terlacak errornya ada di sebelah mana dan berbasis cloud sehingga akan dengan mudah untuk monitoring sistem yang sudah terdeploy
- CORS : untuk melakukan whitelist url apa saja yang boleh mengakses aplikasi ini, sehingga akan lebih secure.
- .env : untuk menyembunyikan beberapa configurasi agar tidak mudah di ambil oleh orang lain.
- express : agar aplikasi dapat menyediakan API Endpoint sehingga akan dengan mudah di kendalikan melalui aplikasi lain.
  - express-pino-logger: digunakan untuk tracking debug pada library express.
  - express-validator: validasi data yang dikirimkan oleh user sebelum akhirnya di proses oleh sistem.
- mysql2: sebagai penghubung antara nodejs dan database.
- pino : digunakan untuk debugging aplikasi node js dalam skala client side.
- sequelize (ORM Library): digunakan untuk mempermudah pembuatan CRUD di node js dengan memanfaatkan modelling database.
- pino-pretty : digunakan untuk mempercantik tampilan pino agar lebih mudah proses debugging pada aplikasi
## Feature Berjalan
adapun beberapa feature yang berjalan pada apliaksi ini.
- CRUD data bersifat async 
- Memanfaatkan feature Endpoint berupa routing dengan baik
  - POST : untuk menambah data.
  - Delete : digunakan untuk hapus data berdasarkan ID.
  - PATCH : Update Data.
  - GET : untuk mengambil semua data yang tersimpan di database.
  - Get ID : di gunakan untuk mengambil data berdasarkan ID.
- Debugging menggunakan sistem client side ataupun server side berbasis cloud
- Dilengkapi CORS agar lebih secure.
- Semua data tersimpan di database MySQL
- Permodelan database menggunakan sequelize
- Memanfaatkan Middleware untuk validation dan response


## Installation

install aplikasi ini menggunakan bantuan dari NPM

```bash
  git clone https://github.com/Cloud-Dark/simple-crud-with-nodejs
  cd simple-crud-with-nodejs
  npm i
```
Selanjutnya anda dapat melakukan configurasi di bagian .env
```env
  HOST = "localhost"
  USER = "root"
  PASSWORD = "root"
  DB = "simplecurd-nodejs"
  ENGINE = "mysql"
  PORT = "3000"
```
dan terakhir anda dapat menjalankan script dibawah ini untuk mulai menjalankan aplikasi
```bash
  npm start
```
## API Dokumentasi

- Check aplikasi siap digunakan

```http
  GET /
```
- Ambil semua tugas
```http
  GET /tugas/
```
- Ambil tugas berdasarkan ID
```http
  GET /tugas/:id
```
- Menambahkan data tugas
```http
  POST /tugas/:id
```
Raw JSON for Request
```json
{
    "judul" : "test judul tugas",
    "deskripsi" : "test deskripsi tugas",
    "selesai" : true
}
```
- Edit Tugas Berdasarkan ID
```http
  PATCH /tugas/:id
```
Raw JSON for Request
```json
{
    "judul" : "test judul tugas",
    "deskripsi" : "test deskripsi tugas",
    "selesai" : true
}
```
- HapusTugas Berdasarkan ID
```http
  DELETE /tugas/:id
```
