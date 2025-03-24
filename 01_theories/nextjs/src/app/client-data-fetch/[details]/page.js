'use client';

import { useParams } from "next/navigation";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

const UserDetails = () => {
    const params = useParams();
    const { details } = params;
    const { data, error, isLoading } = useSWR(`https://dummyjson.com/users/${details}`, fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>Getting user details... shut the f up.....</div>
    return (
        <div className="border-2 p-3 rounded-lg bg-slate-200">
            <p className="font-bold">This is user details page {details}.</p>
            <br />
            <div>First Name : {data.firstName}</div>
            <div>Last Name : {data.lastName}</div>
            <div>Age : {data.age}</div>
            <div>Gender : {data.gender}</div>
            <div>Address : {data.address?.address}</div>
        </div>
    )
}

export default UserDetails