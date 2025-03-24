import Link from "next/link";

const fetchListOfUsers = async () => {
    try {
        const response = await fetch('https://dummyjson.com/users', {
            cache: 'force-cache',
        });
        const result = await response.json();
        return result.users;
    } catch (error) {
        throw new Error(error);
    }
}

const ServerSideDataFetching = async () => {
    const listOfUsers = await fetchListOfUsers();
    return (
        <div>
            <h1>Server Side Data Fetching</h1>
            <ul>
                {listOfUsers.length > 0 ? listOfUsers.map((user) => <li className="mt-5 cursor-pointer" key={user.id}>
                    <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
                </li>) : null}
            </ul>
        </div>
    )
}

export default ServerSideDataFetching