import { Navigate } from 'react-router-dom';
import useRole from '../Hooks/useRole';
import useAuth from '../Hooks/useAuth';
const AdminRoute = ({ children }) => {
    const { isAdmin, isLoading } = useRole()
    const { user } = useAuth()
    if (isLoading) return <div className='text-4xl font-bold flex justify-center items-center h-[100dvh]'>Loading...</div>
    if (isAdmin && user) return children

    return <Navigate to="/"></Navigate>
};

export default AdminRoute;