'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

const ClientSideDataFetching = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('https://dummyjson.com/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data.users);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="bg-slate-400 text-lg m-4 p-4 rounded-lg">
                <h1>Loading... shut the f up..</h1>
            </div>
        )
    }

    return (
        <div className="m-4 p-4">
            <h1>Client Side Data Fetching</h1>
            <ul>
                {users.length > 0 ? users.map((user) => <li className="mt-5 cursor-pointer" key={user.id}>
                    <Link href={`/client-data-fetch/${user.id}`}>{user.firstName}</Link>
                </li>) : null}
            </ul>
        </div>
    )
}

export default ClientSideDataFetching