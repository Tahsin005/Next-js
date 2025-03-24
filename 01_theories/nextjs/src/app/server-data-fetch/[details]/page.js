const fetchUserDetails = async (currentUserId) => {
    try {
        const response = await fetch(`https://dummyjson.com/users/${currentUserId}`, {
            cache: 'force-cache',
        });
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

export default async function UserDetails({ params }) {
    const { details } = await params;
    const userDetails = await fetchUserDetails(details);
    console.log(userDetails);
    return (
        <div className="border-2 p-3 rounded-lg bg-slate-200">
            <p className="font-bold">This is user details page {details}.</p>
            <br />
            <div>First Name : {userDetails.firstName}</div>
            <div>Last Name : {userDetails.lastName}</div>
            <div>Age : {userDetails.age}</div>
            <div>Gender : {userDetails.gender}</div>
            <div>Address : {userDetails.address?.address}</div>
        </div>
    )
}