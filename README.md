
<div align="center">
  <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=40&pause=1000&color=0FFF50&center=true&vCenter=true&width=600&lines=Nodestream;Visual+Pipeline+Builder;Build+Flows+Visually" alt="Typing SVG" /></a>

  <p align="center">
    <strong>A Powerful, Node-Based Visual Pipeline Builder</strong>
    <br />
    <br />
    <a href="https://reactjs.org/">
      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    </a>
    <a href="https://reactflow.dev/">
      <img src="https://img.shields.io/badge/React_Flow-FF0072?style=for-the-badge&logo=react&logoColor=white" alt="React Flow" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    </a>
  </p>
</div>

<br />

## ⚡ Overview

**PROJECT** is a modern, visual interface designed for constructing complex data pipelines. Built on top of **React Flow**, it provides a canvas where users can drag, drop, and connect various processing nodes to create functional workflows. Whether you're integrating LLMs, transforming data, or managing API calls, this tool visualizes the logic in an intuitive, interactive environment.

---

## 🚀 Key Features

### 🎨 Visual Workflow Builder
- **Drag-and-Drop Interface**: Effortlessly organize your pipeline logic.
- **Interactive Connections**: Real-time linking between nodes with dynamic validation.
- **Responsive Design**: optimized for a smooth user experience.

### 🧩 Comprehensive Node Library
Our architecture supports a wide array of specialized nodes to handle every aspect of your pipeline:

- **🤖 LLM Node**: Integrate Large Language Models directly into your flow.
- **🔌 API Call Node**: Connect to external services and APIs seamlessly.
- **🔄 Transformation Node**: Apply logic and modify data structures on the fly.
- **📥 Input / 📤 Output Nodes**: Define clear entry and exit points for your data.
- **📝 Text & Note Nodes**: Add static content or annotations to your workflow.
- **🔍 Filter Node**: Implement conditional logic to route data effectively.
- **💾 File Save Node**: Manage file persistence within the pipeline.

---

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/vectorshift-frontend.git
   ```
2. **Navigate to the directory**
   ```sh
   cd vectorshift-frontend/frontend
   ```
3. **Install dependencies**
   ```sh
   npm install
   ```
4. **Start the development server**
   ```sh
   npm start
   ```

   The app will run in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📂 Project Structure

A quick look at the top-level directory structure:

```text
src/
├── components/       # Shared UI components (Buttons, Toolbars)
├── nodes/            # Custom node logic and definitions
│   ├── APICallNode.js
│   ├── llmNode.js
│   ├── TransformationNode.js
│   └── ...
├── ui/               # Layout and container components
├── App.js            # Main application entry point
├── index.css         # Global styles
└── store.js          # State management
```

---

## 🔧 Scripts

- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Launches the test runner.
- **`npm run build`**: Builds the app for production to the `build` folder.

---

<!--
  Designed with care for VectorShift.
-->
