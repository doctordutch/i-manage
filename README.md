<h1 align="center">iManage: Employee Tracker Using MySQL, Inquirer, Console.Table and Node.js </h1>

<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/jQuery-blue"  />
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-inquirer-red" />
    <img src="https://img.shields.io/badge/-console.table%20-yellowgreen" /><img src="https://img.shields.io/badge/mySQL-blue" />
</p>

## ✏️Project Description
This CLI application uses Node and MySQL to allow a user to view and manage departments, roles, and employees in a company.

## :hammer: Tools Used to Create This Project
* JavaScript
* Node.js
* MySQL
* npm modules:
    * inquirer for command line prompts
    * mysql2 for database connection
    * console.table for formatted printing of MySQL data
    * chalk for colored console.log notifications
    * figlet for header and footer text ascii art

## Installation 

### 🔍 Project Setup
* Clone the repository to your computer
* In the directory where the project is saved, make sure any required dependencies are installed. As necessary for your system and setup:
    * Install Node.js from their website
    * Initialize npm
        * type `npm init` in your command line
    * Type `npm install` in yor command line to install the packages as noted in the package.json file

### 💾 Database Setup
* (This assumes you have MySQL installed)
* Type `mysql -u root -p` in the command line in the project directory and press enter. Enter your password. 
* Type `source db/schema.sql` and press enter, then type `source db/seeds.sql` and press enter to create the database and seed it with data.
* Create a .env file in the root folder of your project with the following data: MYSQL_PASSWORD="your password" 
* (or)
* In the db/database.js file of the project, replace the "process.env.MYSQL_PASSWORD" line with your password as a string so Node.js will be able to connect to the database.

### 💻 Usage
* From the command line in the project directory, type `npm start` to start the application.
* Make your selections from the menu and respond to the prompts to see how the database can be viewed and changed through the CLI application.

## 🎥 Video Walkthrough

https://user-images.githubusercontent.com/64736572/155914230-a8ee1a20-87e3-4c81-b025-4de24a266139.mp4



