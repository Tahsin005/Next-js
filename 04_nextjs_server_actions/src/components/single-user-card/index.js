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

function SingleUserCard({ user }) {
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