# A Real-Time Weather Dashboard Powered by OpenWeatherMap API

![Screenshot (16)](https://github.com/user-attachments/assets/8d4f587c-726f-4a37-8b42-e6539f87dab7)

## Key Features

- Real-time weather data
- Persisted searched city
- 5-day weather forecast
- Caching and revalidation (polling)
- Clean code and best practices
- Organised file and folder structure
- Fully responsive
- Beautifully designed loading state
- Error states as fallback
- Authentication using Supabase

## Tech Stack

- **React.js** + **Vite**
- **CSS Modules**
- **TypeScript**
- **OpenWeatherMap API**
- **React Query**
- **Supabase**
- **React Router**
- **Lucide React**
- **Vercel**
- **Git**
- **GitHub**

## Getting Started

1. Clone the repo

```bash
git clone https://github.com/sougata-github/weather-app.git
cd weather-app
```

2. Create a .env file in the root of your project and add the following environment variable:

```bash
VITE_WEATHER_API_KEY=your_api_key

VITE_SUPABASE_URL=supabase_url
VITE_SUPABASE_KEY=supabase_key

GOOGLE_CLIENT_ID=google_client_id
GOOGLE_CLIENT_SECRET=google_client_secret
```

3. Install dependencies

```bash
npm install
```

4. Run the project locally

```bash
npm run dev
```
