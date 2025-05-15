"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Delete } from "lucide-react";
import { PageType } from "@/lib/types"; // Import PageType
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { deletePage } from "@/actions/pageActions"; // Import deletePage action
import { toast } from "sonner";

interface DeleteComponentProps {
  page: PageType;
}

const DeleteComponent: React.FC<DeleteComponentProps> = ({ page }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const confirmDelete = async () => {
    setIsDeleteDialogOpen(false); // Close dialog
    try {
      await deletePage(page.id);
      toast.success("Page deleted successfully!");
    } catch (error: any) {
      toast.error(`Failed to delete page: ${error.message}`);
      console.error("Error deleting page:", error);
    }
  };

  return (
    <>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => setIsDeleteDialogOpen(true)}
      >
        <Delete className="h-4 w-4" />
      </Button>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            This action cannot be undone. This will permanently delete this
            page.
          </DialogDescription>
          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteComponent;
