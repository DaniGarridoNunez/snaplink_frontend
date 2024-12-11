import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import { getUser } from "../api/SnapLinkAPI";
import SnapLink from "../components/SnapLink";

export default function AppLayout() {
    const { data, isLoading, isError } = useQuery({
        queryFn: getUser, 
        queryKey: ['user'],
        retry: 1,
        refetchOnWindowFocus: false
    })
    if(isLoading) return 'Cargando...'
    if(isError) return <Navigate to={'/auth/login'} />
    if(data) return <SnapLink data={data} />
}