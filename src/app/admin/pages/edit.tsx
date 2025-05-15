"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { PageType } from "@/lib/types"; // Import PageType
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PageForm from "./form"; // Import PageForm

interface EditComponentProps {
  page: PageType; // Use PageType
}

const EditFormComponent: React.FC<EditComponentProps> = ({ page }) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsEditDialogOpen(false);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsEditDialogOpen(true)}
      >
        <Edit className="h-4 w-4" />
      </Button>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Page</DialogTitle>
            <DialogDescription>
              Modify the Page details below.
            </DialogDescription>
          </DialogHeader>
          <PageForm initialValues={page} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditFormComponent;
