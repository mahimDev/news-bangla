import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from './useAuth';
const useIsAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    console.log(user)
    const { data: isAdmin = {} } = useQuery({
        queryKey: ["isAdmin", user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/isAdmin/${user?.email || ""}`)
            console.log(data)
            return data
        }
    })
    return { isAdmin }
};

export default useIsAdmin;