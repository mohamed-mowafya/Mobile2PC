# AWS S3 File Upload and Signed URL Generator

This project is a Node.js application (with express) that enables file uploads to Amazon S3 and generates pre-signed URLs for the uploaded files. It's designed to handle various file formats such as images, PDFs, and documents. I used the Multer library to handle file uploads and the MulterS3 library for S3 uploads to AWS. This README provides instructions on setting up and using the application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Features](#features)

## Prerequisites

Before using this project, ensure you have the following prerequisites:

- Node.js and npm installed
- An Amazon Web Services (AWS) account
- AWS Access Key ID and Secret Access Key
- An S3 bucket created on AWS for storing the uploaded files

## Installation

1. Clone the repository to your local machine.

```bash
git clone https://github.com/mohamed-mowafya/FileUpload-API
cd FileUpload-API
```

2. Install the project's dependencies
```bash
npm install
```

3. Start the application
```bash
npm start
```

## Usage
To use the application:

1. Make a POST request to the /upload endpoint with a file attached. The file should be sent as multipart/form-data (with a boundary). 
Normally this is the by default Content-Type setting when using postman and uploading a file.

2. Upon successful upload, the application will generate a pre-signed URL for the uploaded file and return it in the response.

## Configuration
You can configure the application by creating a .env file (based off the example.env file).

## Features

1. File upload to AWS S3 bucket.
2. Generation of pre-signed URLs for uploaded files.
3. Customizable file type filtering to restrict allowed file formats.