# P-Flow

## Project Overview

P-FLOW is a React-based web app for managing drug inventory in pharmacies. It supports role-based access for staff, managers, and admins, with features for tracking, ordering, and managing stock.

## Live Demo

Experience the application live:

- [**P-Flow Live Demo**](https://p-flow.pages.dev/)

## Features

- **Interactive User Interface**: Built with Material UI for a responsive and intuitive user experience.
- **Optimized Data Fetching**: Implements React Query for robust and performant data synchronization.
- **Geospatial Visualization**: Incorporates Leaflet for interactive map displays and location-based features.
- **Form Handling**: Manages complex forms with Formik and Yup for validation.
- **Animations**: Enhances user experience with smooth animations powered by Framer Motion.
- **Data Grids**: Displays and manages data efficiently using `@mui/x-data-grid`.
- **Charting**: Visualizes data with Recharts for insightful analytics.

## Technologies Used

- **Frontend**: React.js, Vite
- **UI Framework**: Material UI (`@mui/material`, `@mui/icons-material`, `@mui/x-data-grid`)
- **State Management**: Context 
- **Data Fetching**: React Query (`@tanstack/react-query`)
- **Backend**: Node.js
- **Mapping**: Leaflet, React Leaflet (`leaflet`, `react-leaflet`, `@maptiler/sdk`)
- **HTTP Client**: Axios
- **Form Management**: Formik, Yup
- **Animations**: Framer Motion
- **Charting**: Recharts
- **Routing**: React Router DOM
- **Date Management**: Date-fns, Day.js
- **Other**: React Avatar Editor, React CountUp, React Hot Toast, React Infinite Scroll Component, React Scroll, Swiper, Use Debounce

## Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed.

- Node.js (v18 or higher recommended)
- npm (v8 or higher) or Yarn

### Clone the repository

```bash
git clone https://github.com/elref7i/p-flow.git
cd p-flow
```

### Install dependencies

```bash
npm install
# or
yarn install
```

### Environment Variables

Create a `.env` file in the root directory and add your Firebase configuration and any other necessary environment variables. Example:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Usage

To run the project in development mode:

```bash
npm run dev
# or
yarn dev
```

This will start the development server, and you can view the application in your browser at `http://localhost:5173` (or another port if 5173 is in use).

To build the project for production:

```bash
npm run build
# or
yarn build
```

This will create a `dist` folder with the production-ready build.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Ahmed Refai - ahmed.khaled.refai.b@gmail.com

Project Link: [https://github.com/elref7i/p-flow](https://github.com/elref7i/p-flow)


