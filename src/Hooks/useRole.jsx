import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from './useAuth';
const useIsAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: isAdmin = {}, isLoading } = useQuery({
        queryKey: ["isAdmin", user],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/isAdmin/${user?.email || ""}`)
            return data?.isAdmin
        }
    })
    return { isAdmin, isLoading }


};

export default useIsAdmin;