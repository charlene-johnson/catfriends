import {useState} from 'react';

function ErrorBoundary (props) {
    const [error, setError] = useState(false)
    setError(true)

    if (error) {
        return<h1>Oops! This is not good</h1>
    }
    return props.children
}

export default ErrorBoundary