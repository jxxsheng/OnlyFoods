# 2006-SDAA-32

## Only Foods Web Application

![Cover](./Documents/Diagrams/OnlyFoods.png)

### Team Members

- [Chan Kee Qing](https://github.com/CHAN1203)
- [Toh Jun Sheng](https://github.com/jxxsheng)
- [Isaac Wong Jia Kai](https://github.com/izackyy)
- [Lim Jacky](https://github.com/Jeakai)
- [Yap Hong Sheng](https://github.com/YapHS0514)
- [Xu Shuwei](https://github.com/xushuwei281)

---

## Documentation

### Environment Set up for Local Deployment (Recommended)
This project is developed with [Express.js](https://expressjs.com/) and tested on [Visual Studio Code](https://code.visualstudio.com/).

**To run the application:**  
1. clone the repository into your local device, the directory should look something like this:
```
├── ONLYFOODS
|   ├── config
|   ├── controllers
|   ├── models
|   ├── node_modules
|   ├── public
|   ├── routes
|   ├── views
|   ├── .gitignore
|   ├── index.js
|   ├── package-lock.json
|   ├── package.json
```

2. Initialise your `.env` file. Check `.env.example` in the config folder for the environment variables required. 

3. You will require:
    - [Nutritionix](https://www.nutritionix.com/business/api) API Client ID and API Key
    - [Supabase](https://supabase.com/database) API Key

4. To run the programme, open terminal:

```
cd OnlyFoods
node index.js
```

### Demo Video of the product

Link to our Demo Video:
https://youtu.be/TNKK4Agpqcc

### Section 1: Introduction

In line with the growing digital era, our team is proud to introduce OnlyFoods—a social platform created for food enthusiasts to share their culinary creations, discover new recipes, and track their nutritional intake. OnlyFoods provides a personalized, interactive experience where users can post their favorite recipes, monitor daily calories and nutrients, and engage with a community of food lovers through comments and likes. Our goal is to build a vibrant, supportive community that brings people together over a shared passion for food and enhances their culinary journeys.

### Section 2: Features

#### 2.1 User Registration and Authentication:
OnlyFoods allows users to register and log in with email and password authentication, secured through bcrypt hashing for safe password storage. Unique email verification prevents duplicate accounts, and sessions are managed to ensure secure access. Users can log out, with sessions maintained to protect account integrity.

#### 2.2 Post Creation:
Users can create posts, including images and detailed descriptions of ingredients, nutritional values, and recipes. Each post allows users to specify ingredient quantities, descriptions, and categories, with the system verifying completeness and validity of entries. Posts are interactive, allowing users to like, comment, save, and flag them for inappropriate content.

#### 2.3 Post Interaction:
Users can engage with posts by liking, commenting, saving, or flagging them for review. Real-time feedback updates the like count and save status, while flagging a post opens a reporting form where users can select a reason, activating upon submission. Interactions are persistent, so users can return to posts with their previous interactions visible.

#### 2.4 Nutritional Tracking:
OnlyFoods automatically calculates calorie based on the ingredients in each post. Users can track their daily and long-term dietary goals directly through posts and their profile. Daily meals logged in the system increment the daily calorie count and update a progress bar accordingly.

#### 2.5 Admin Controls:
Administrators can moderate content by reviewing flagged posts and managing user reports. They can filter and search flagged posts to quickly assess content, issuing warnings, suspensions, or permanent bans if necessary. Admins also have the option to mark reports as resolved or take further action based on community guidelines.

#### 2.6 Account Suspension and Ban:
Users who violate guidelines by posting flagged or inappropriate content may receive warnings, suspensions, or permanent bans, as managed by admins. Suspended users are shown a message explaining the suspension duration upon login, while banned users are restricted from logging in altogether. After the suspension period ends, users can resume normal activity on the platform.

### Section 3: Software Architecture and Design Principles

#### 3.1 Software Architecture
Our web application adopts a Model-View-Controller (MVC) design architecture to ensure a clear separation of concerns and improve the scalability and maintainability of our application. By dividing the application into three interconnected components, Model, View, and Controller, each component can independently handle specific responsibilities. The Model manages our backend database (Supabase) to store and retrieve data such as user's information. The View is responsible for the user interface, displaying information and capturing user interactions in an intuitive way. The Controller acts as an intermediary, processing user inputs and updating the Model and View accordingly. This architecture allows us to efficiently manage feature updates, creating a more responsive and organized platform structure.

#### 3.2 High Cohesion and Loose Coupling
Our codebase is designed with high cohesion and loose coupling principles in mind to maximize efficiency, flexibility, and maintainability. High cohesion ensures that each component in our system has a well-defined responsibilities and focuses on a specific set of tasks, making the codebase more understandable and easier to modify. Loose coupling minimizes dependencies between different parts of the system, allowing each component to operate independently. This design means that changes in one module, like updating how we store notifications, won’t heavily impact other parts of the system. Loose coupling promotes flexibility and easier integration of new features, as we can add or modify functionality without requiring extensive adjustments across the entire platform.

#### 3.3 Express's Design Principles and Design Patterns
In this web application, we utilize Express.js framework as it is lightweight and flexible, allowing us to build a high-performance application with minimal overhead. We adopted Express's design principles, such as the route pattern which helps us organize routes by features. This approch makes the codebase more maintainable, which enhances reusability and scalability as the application evolves. By following these principles, we ensure a clean, organized structure that can easily accommodate new features in future.
```
import express from "express";
import { login, loginPage } from "../controllers/authController.js";

const router = express.Router();

router.get("/", loginPage);  // Show login page
router.post("/login", login); // Handle login submission

export default router;
```

_Submission: This repository is submitted to Nanyang Technological University Singapore as a project for module SC2006 AY2024_
