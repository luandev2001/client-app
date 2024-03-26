import { FC, ReactNode, useEffect, useState } from 'react'

interface ErrorBoundaryProps {
    children: ReactNode;
}

const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children }) => {
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const handleError = (error: ErrorEvent) => setError(new Error(error.message))
        window.addEventListener('error', handleError)
        return () => {
            window.removeEventListener('error', handleError)
        };
    }, [])

    return error ? (<div>Error: {error.message}</div>) : <>{children}</>
}

export default ErrorBoundary