"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Trash2 } from "lucide-react"; // Import Loader2
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteWhoWeAreSectionData } from "@/actions/whoWeAreSectionActions"; // Import the server action

const DeleteData = ({ id }: { id: string }) => {
  const [isDeleting, setIsDeleting] = useState(false); // Add a state for deletion status

  const handleDelete = async () => {
    setIsDeleting(true); // Set to true before starting deletion
    try {
      await deleteWhoWeAreSectionData(id); // Call the server action
    } finally {
      setIsDeleting(false); // Set to false after deletion (success or failure)
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          size="icon"
          disabled={isDeleting} // Disable the button when deleting
        >
          {isDeleting ? (
            <Loader2 className="h-4 w-4 animate-spin" /> // Show loader when deleting
          ) : (
            <Trash2 className="h-4 w-4" /> // Show trash icon otherwise
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            section.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              handleDelete(); // Trigger the server action on confirmation
            }}
            disabled={isDeleting} // Disable action button during deletion
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteData;
