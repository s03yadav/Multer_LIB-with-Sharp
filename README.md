# 🖼️ Image Compression App

A simple Node.js and Express.js application that demonstrates how to upload, validate, and compress images using **Multer** and **Sharp**.

This project was built for learning and practicing file uploads, middleware, and image processing in Express.js.

---

## 📌 Features

* Upload images using Multer
* Store uploaded images on the server
* Compress images using Sharp
* Resize and optimize uploaded images
* Display the compressed image on a success page
* Simple and clean UI
* Beginner-friendly project structure

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* Multer
* Sharp
* EJS
* HTML
* CSS

---

## 📂 Project Structure

```
project/
│
├── public/
│── uploads/
│── compressed/
│   
│
├── routes/
│   └── index.js
│
├── views/
│   ├── home.ejs
│   └── success.ejs
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repository-name.git
```

Move into the project directory:

```bash
cd your-repository-name
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 🚀 How It Works

1. Open the home page.
2. Select an image from your device.
3. Submit the form.
4. Multer receives and stores the uploaded image.
5. Sharp compresses and optimizes the image.
6. The success page displays the compressed image.

---

## 📸 Application Flow

```
User
   │
   ▼
Choose Image
   │
   ▼
Upload Form
   │
   ▼
Multer Middleware
   │
   ├── Parses multipart/form-data
   ├── Stores uploaded image
   ▼
Sharp
   │
   ├── Compresses image
   ├── Optimizes quality
   └── Saves compressed version
   ▼
Success Page
   │
   ▼
Displays Compressed Image
```

---

## 📚 Concepts Practiced

### Multer

* File uploads
* Storage engine
* `diskStorage()`
* `destination`
* `filename`
* `req.file`
* Multipart form handling

### Sharp

* Image compression
* Image resizing
* Format conversion
* JPEG quality optimization
* Saving processed images

### Express

* Routing
* Middleware
* Static files
* Rendering EJS templates

---

## 🎯 Purpose

This project was created as a hands-on practice project to understand how image upload and processing work in Node.js applications using Express, Multer, and Sharp.

It focuses on learning the complete workflow—from receiving an uploaded image to processing it and displaying the optimized result.


---

## 👨‍💻 Author

**Sumit Yadav**

Learning Node.js and Express.js applications.
