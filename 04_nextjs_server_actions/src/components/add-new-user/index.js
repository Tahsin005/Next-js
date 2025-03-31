'use client';

import { addNewUserAction, editUserAction } from "@/actions";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserContext } from "@/context";
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils";
import { useContext, useState } from "react";
import toast from "react-hot-toast";


const AddNewUser = () => {
    const {openPopup, setOpenPopup, addNewUserFormData, setAddNewUserFormData, currentEditedID, setCurrentEditedID} = useContext(UserContext);

    function handleSaveButtonValid() {
        return Object.keys(addNewUserFormData).every(
            (key) => addNewUserFormData[key].trim() !== ""
        );
    }

    async function handleAddNewUserAction() {
        const result =
          currentEditedID !== null
            ? await editUserAction(
                currentEditedID,
                addNewUserFormData,
                "/user-management"
              )
            : await addNewUserAction(addNewUserFormData, "/user-management");
        console.log(result);
        if (result?.success) {
            toast.success(result?.message);
        } else {
            toast.error(result?.message);
        }
        setOpenPopup(false);
        setAddNewUserFormData(addNewUserFormInitialState);
        setCurrentEditedID(null);
    }
    return (
        <div>
            <Button onClick={() => setOpenPopup(true)}>Add New User</Button>
            <Dialog open={openPopup} onOpenChange={() => {
                setOpenPopup(false);
                setAddNewUserFormData(addNewUserFormInitialState);
                setCurrentEditedID(null);
            }}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{currentEditedID ? "Edit User" : "Add New User"}</DialogTitle>
                    </DialogHeader>
                    <form action={handleAddNewUserAction} className="grid gap-4 py-4">
                            {
                                addNewUserFormControls.map((controlItem) => <div className="mb-4" key={controlItem.name}>

                                    <Label htmlFor={controlItem.name} className="text-right mb-3">
                                        {controlItem.label}
                                    </Label>
                                    <Input
                                        id={controlItem.name}
                                        type={controlItem.type}
                                        name={controlItem.name}
                                        placeholder={controlItem.placeholder}
                                        className="col-span-3"
                                        value={addNewUserFormData[controlItem.name]}
                                        onChange={(e) => setAddNewUserFormData({ ...addNewUserFormData, [controlItem.name]: e.target.value })}
                                    />
                                </div>)
                            }
                            <DialogFooter>
                                <Button disabled={!handleSaveButtonValid()} type="submit">Save</Button>
                            </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewUser