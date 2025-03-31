import AddNewUser from "@/components/add-new-user"

const UserManagement = () => {
    return (
        <div className="p-20 max-w-6xl">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">User Management</h1>
                <AddNewUser></AddNewUser>
            </div>
        </div>
    )
}

export default UserManagement