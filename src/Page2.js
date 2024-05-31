import React from 'react';
import { Link } from 'react-router-dom';

function Page2(props) {
    return (
        <div>
            <Link to={'..'}>이전</Link>
            <h1>2번입니다</h1>
            <Link to={'/page3'}>3번</Link>
        </div>
    );
}

export default Page2;