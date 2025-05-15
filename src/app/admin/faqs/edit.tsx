"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { FaqType } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import FaqForm from "./form"; // Import the FaqForm
// import { updateFaq } from "@/actions/faqsAction"; // Remove import here

interface EditComponentProps {
  faq: FaqType;
}

const EditComponent: React.FC<EditComponentProps> = ({ faq }) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

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
            <DialogTitle>Edit FAQ</DialogTitle>
            <DialogDescription>Modify the FAQ details below.</DialogDescription>
          </DialogHeader>
          <FaqForm initialValues={faq} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditComponent;
