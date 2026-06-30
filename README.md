# Chart.js React Dashboard

A beautiful and responsive data visualization dashboard built with **React**, **Vite**, and **Chart.js** (`react-chartjs-2`).

![Dashboard Preview](./dashboard-preview.png)

## 📊 Features

- **Multiple Chart Types:** Includes Line, Bar, Pie, and Doughnut charts.
- **Dynamic Data Rendering:** Ingests external JSON data files for scalable and clean code.
- **Responsive Layout:** The dashboard layout and the charts automatically resize to fit the screen.
- **Modern UI:** Built with an eye-catching purple theme and custom chart tooltips.

## 📁 Project Structure

The chart data is structured into dedicated JSON files in the `src/data` directory for easy updating:

- `financeData.json` - Contains Income and Outflow numbers across various project phases (Powers the Line and Bar charts).
- `businessStream.json` - Contains value distribution for different business sectors (Powers the Pie and Doughnut charts).
- `activityData.json` - Contains activity labels.

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed on your system.

### Installation

1. Clone the repository and navigate into the directory.
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App Locally

To start the Vite development server, run:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🛠️ Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Chart.js](https://www.chartjs.org/)
- [react-chartjs-2](https://react-chartjs-2.js.org/)

## 📝 Note on Image
Make sure to save your dashboard screenshot as `dashboard-preview.png` in the root of the project directory so it displays correctly in this README!
