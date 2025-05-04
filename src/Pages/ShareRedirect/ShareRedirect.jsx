import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ShareRedirect() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/news/${id}`);
    }, [id, navigate]);

    return <p>loading...</p>;
}
