'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { deleteUserAction } from "@/actions";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "@/context";

function SingleUserCard({ user }) {
    const {setOpenPopup, setCurrentEditedID, setAddNewUserFormData} = useContext(UserContext);

    async function handleDelete(userID) {
      const result = await deleteUserAction(userID, "/user-management");
      console.log(result);
      if (result?.success) {
        toast.success(result?.message);
      } else {
        toast.error(result?.message);
      }
    }

    function handleEdit(user) {
      setOpenPopup(true);
      setCurrentEditedID(user?._id);
      setAddNewUserFormData({
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        address: user?.address,
      });
    }
    return (
        <Card>
          <CardHeader>
            <CardTitle>
              {user?.firstName} {user?.lastName}
            </CardTitle>
            <CardDescription>{user?.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{user?.address}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={() => handleEdit(user)}>Edit</Button>
            <Button onClick={() => handleDelete(user?._id)}>Delete</Button>
          </CardFooter>
        </Card>
    );
}

export default SingleUserCard;