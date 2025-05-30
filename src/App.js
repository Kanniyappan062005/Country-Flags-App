import './App.css';
import React, { Suspense, useEffect, useState, } from 'react'
import useErrorBoundary from './hooks/useErrorBoundary';

const CountryCard = React.lazy(() => import('./components/CountryCard/CountryCard'));

function App() {

  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true);
  const { ErrorBoundary, handleError } = useErrorBoundary();

  useEffect(() => {

    (async () => {
      try {
        setLoading(true)
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();
        setCountries(countries)
      }
      catch (error) {
        handleError(error.message)
        console.log(error.message);
      }
      finally {
        setLoading(false)
      }
    })();

  }, [])

  if (loading) {
    return <div>API Loading...</div>
  }

  return (
    <div className="App">
      <ErrorBoundary>
        <h1>Country Flags</h1>
        <div class="country-grid">
          <Suspense fallback={<div>Loading...</div>}>
            {countries.map((data) => {
              const cName = data.name.common;
              const cFlag = data.flags.png;
              return (
                <CountryCard name={cName} flag={cFlag} />
              )
            })}
          </Suspense>
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
