# Code Sync 💻

Code Sync is a real-time code editor and collaboration tool built using React, Node.js, Express.js, and Socket.io. It empowers developers to work together on code in real-time, facilitating seamless collaboration by providing a synchronized editing experience. With Code Sync, multiple users can edit the same code simultaneously and see each other's changes instantly, making it perfect for pair programming, remote team collaboration, or teaching environments.

[Live Demo](https://code-sync-52s9.onrender.com)

## Features ✨

- **Real-time Collaboration:** Multiple users can edit the same code file simultaneously, with changes being instantly reflected across all connected clients.
- **Multi-User Editing:** Multiple users can edit the code simultaneously.
- **Syntax Highlighting:** Supports syntax highlighting for various programming languages, making code more readable and understandable.


<!-- TODO
- **Multi-User Editing:** Multiple users can edit the code simultaneously, with clear visual indicators of who's making changes.
- **Chat Functionality:** Integrated chat feature allows collaborators to communicate while working on code, facilitating better collaboration and teamwork.
- **User Authentication:** Secure user authentication system ensures that only authorized users can access and collaborate on code projects.
- **Persistent Code Storage:** The code is saved in the cloud, ensuring accessibility and version control (implementation details to be specified based on your chosen persistence mechanism).
- **Version History:** Keeps track of version history, allowing users to revert to previous versions of code files if needed. -->


## Installation 🚀

To run Code Sync locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/vaibhavchaubey/Code-Sync.git
   ```

2. Install dependencies:
    ```bash
    cd Code-Sync
    npm install
    ```

3. Run the Development Server:

    ```bash
    npm run start:dev
    ```
4. Open your web browser and navigate to http://localhost:5000 to access Code Sync.

## Technologies Used 🛠️

- React: Frontend user interface and components.
- Node.js: Backend server environment.
- Express.js: Web framework for Node.js, used for routing and handling HTTP requests.
- Socket.io: Real-time bidirectional communication library for web applications, used for implementing WebSocket functionality.


<!-- TODO
- MongoDB: NoSQL database for storing user information, code files, and version history. -->


## Contributing 🤝

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests. For major changes, please open an issue first to discuss the proposed changes.

## License 📝

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
