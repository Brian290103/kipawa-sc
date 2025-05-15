"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Delete } from "lucide-react";
import { FaqType } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { deleteFaq } from "@/actions/faqsActions"; // Import deleteFaq action
import { toast } from "sonner";

const DeleteComponent = ({ faq }: { faq: FaqType }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const confirmDelete = async () => {
    setIsDeleteDialogOpen(false); // Close dialog
    try {
      await deleteFaq(faq.id);
      toast.success("FAQ deleted successfully!");
    } catch (error: any) {
      toast.error(`Failed to delete FAQ: ${error.message}`);
      console.error("Error deleting FAQ:", error);
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
            This action cannot be undone. This will permanently delete this FAQ.
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
