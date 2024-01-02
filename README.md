# Mobile2PC Project

## Introduction
Welcome to the Mobile2PC project! This solution allows for instant file transfers from your mobile device to your PC using a QR Code.

## Project Structure
The project is divided into two components:

1. **Mobile2PC-API**: Handles all the file transfer logic.
2. **Mobile2PC-Vue**: The frontend, developed in Vue.js (Typescript), provides the user interface.

## Getting Started

### Prerequisites
- Docker
- Docker Compose

### Installation
Clone the repository and ensure Docker and Docker Compose are installed on your system.

## Building and Running the Project
Navigate to the repository's root and run:
- `docker-compose up --build`
- **Make sure to change the API and FRONT-END urls in the Dockerfile to simplify the usage**. 
**Replace localhost with the ip of your local machine, so the web application can be accessible from a mobile device on the same network.**

## Usage
1. **Open the Website on PC**: Access the Mobile2PC interface via the web address on your PC.
2. **Scan QR Code**: Scan the QR code displayed on the website using your mobile device.
3. **Upload File**: Select and upload the file from your mobile device.
4. **File Transfer**: The file will be transferred to your PC.

Enjoy using Mobile2PC for an effortless file transfer experience!
