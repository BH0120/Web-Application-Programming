import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Page1(props) {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/page2");
            alert("페이지 이동됨");
        }, 2000);
    }, []);
    return (
        <div>
            <h1>1번입니다.</h1>
            <Link to={'/page2'}>2번</Link>
        </div>
    );
}

export default Page1;