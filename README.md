## About The Project

**screenshots**

This project is a simple yet powerful tool for creating a personalized hub for all your social media links. Inspired by platforms like LinkTree, it allows users to centralize their online presence in a single, shareable URL.  

### Key Features

- **Personalized Link Hubs**: Users can create a custom page displaying their social media links.  
- **Customizable URLs**: Generate a unique and shareable URL for your profile, making it easy to share your links with anyone.  
- **Responsive Design**: Ensures an optimized viewing experience across all devices, from mobile to desktop.  
- **User-Friendly Interface**: A simple, intuitive UI for adding, editing, and organizing your links. 

### Built With

This app was designed to be both scalable and user-friendly, offering a modern solution to task and project management.

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [TailwindCSS](https://tailwindcss.com/)


## Usage

For those interested in how the project works without having to install it, here are some screenshots showcasing its key features:  

*Home Page* 
**screenshots**

*Login / Register pages*  
**screenshots**

*Update your profile data* 
**screenshots**

*Manage your socials*  
**screenshots**

*Your profile page*  
**screenshots**


## Getting Started

Follow the steps below to set up the project locally:

### Prerequisites

To get started first you will need to install the following:

- NodeJS
- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [MongoDB](https://www.mongodb.com/es/cloud/atlas/register)
2. Get a free API Key at [Cloudinary](https://cloudinary.com/users/register_free)
3. Clone the repo
   ```sh
   git clone https://github.com/DaniGarridoNunez/snaplink_frontend.git
   ```
4. Install NPM packages in both /frontend and /backend
   ```sh
   npm install
   ```
5. Enter your API keys in `.env` at /backend for example:
   ```sh
  FRONTEND_URL= http://localhost:5173
  MONGO_URI=mongodb+srv://root:<db_password>@cluster0.example.mongodb.net/snaplink
  CLOUDINARY_NAME=name
  CLOUDINARY_API_KEY=apikey
  CLOUDINARY_API_SECRET=apisecret
  JWT_SECRET=palabrasupersecreta
   ```
6. Enter your API keys in `.env.local` at /frontend:
    ```sh
    VITE_API_URL=http://localhost:4000
    ```
7. And then run in both /frontend and /backend:
   ```sh
   npm run dev
   ```


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git switch -c feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [MIT License](https://opensource.org/licenses/MIT) for more information.

## Contact

Daniel Garrido - danigarridonunez@gmail.com - [LinkedIn Profile](https://www.linkedin.com/in/daniel-garrido-87b041223/)