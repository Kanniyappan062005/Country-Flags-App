import { useState } from "react";

function useErrorBoundary() {
    const [error, setError] = useState(null)

    const ErrorBoundary = ({ children }) => {
        if (error) {
            return <div><h1>Error: <span className="error-msg">{error}</span></h1></div>
        }

        return  children ;
    }

    const handleError = (error) =>{
        setError(error);
    }

    return{ ErrorBoundary, handleError }

}

export default useErrorBoundary