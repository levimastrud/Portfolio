import './ForgedInIsolation.scss';
import { useEffect } from 'react';

function ForgedInIsolation() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <h1>ForgedInIsolation</h1>
        </>
    )
}

export default ForgedInIsolation;