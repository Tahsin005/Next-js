import { fetchUsersAction } from "@/actions"
import AddNewUser from "@/components/add-new-user"
import SingleUserCard from "@/components/single-user-card";

const UserManagement = async () => {
    const getListOfUsers = await fetchUsersAction();

    console.log(getListOfUsers);

    return (
        <div className="p-20 max-w-6xl mx-auto">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">User Management</h1>
                <AddNewUser></AddNewUser>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {getListOfUsers &&
                getListOfUsers.data &&
                getListOfUsers.data.length > 0 ? (
                    getListOfUsers.data.map((userItem) => (
                        <SingleUserCard key={userItem._id} user={userItem} />
                    ))
                ) : (
                    <h3>No users found! Please create one</h3>
                )}
            </div>
        </div>
    )
}

export default UserManagement