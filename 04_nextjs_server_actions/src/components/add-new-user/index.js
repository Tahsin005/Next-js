'use client';

import { addNewUserAction } from "@/actions";
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
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils";
import { useState } from "react";


const AddNewUser = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [addNewUserFormData, setAddNewUserFormData] = useState(addNewUserFormInitialState);
    console.log(addNewUserFormData);

    function handleSaveButtonValid() {
        return Object.keys(addNewUserFormData).every(
            (key) => addNewUserFormData[key].trim() !== ""
        );
    }

    async function handleAddNewUserAction () {
        const result = await addNewUserAction(addNewUserFormData, "/user-management");
        console.log(result);
        setOpenPopup(false);
        setAddNewUserFormData(addNewUserFormInitialState);
    }
    return (
        <div>
            <Button onClick={() => setOpenPopup(true)}>Add New User</Button>
            <Dialog open={openPopup} onOpenChange={() => {
                setOpenPopup(false);
                setAddNewUserFormData(addNewUserFormInitialState);
            }}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New User</DialogTitle>
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