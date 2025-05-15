"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FaqForm from "./form"; // Import the FaqForm
// import { updateFaq } from "@/actions/faqsAction"; // Remove import here

interface CreateComponentProps {}

const CreateComponent: React.FC<CreateComponentProps> = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" size="sm">
            <CirclePlus className="h-4 w-4" />
            Create FAQ
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create FAQ</DialogTitle>
            <DialogDescription>Add the FAQ details below.</DialogDescription>
          </DialogHeader>
          <FaqForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateComponent;
