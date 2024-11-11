import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { setNavigate } from './navigation';

type Props = {
    children: React.ReactNode;
};

export const CustomRouter = ({ children }: Props) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Set the global navigate function upon component mounting
        setNavigate(navigate);
    }, [navigate]);

    return children;
};
