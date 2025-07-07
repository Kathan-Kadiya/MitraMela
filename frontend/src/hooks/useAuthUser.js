import { useQuery } from '@tanstack/react-query'
import { getAuthUser } from '../lib/api.js'

const useAuthUser = () => {
    const authUser = useQuery({
        queryKey: ["authUser"],
                                // this is just to learn the useQuery and axios will modify it later
        queryFn: getAuthUser,
        retry: false,
    });

    return {isLoading: authUser.isLoading, authUser: authUser.data?.user};
}



export default useAuthUser;