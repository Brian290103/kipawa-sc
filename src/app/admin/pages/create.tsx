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
import PageForm from "./form"; // Import the PageForm

interface CreateComponentProps {}

const CreateComponent: React.FC<CreateComponentProps> = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" size="sm">
            <CirclePlus className="h-4 w-4" />
            Create Page
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create Page</DialogTitle>
            <DialogDescription>Add the Page details below.</DialogDescription>
          </DialogHeader>
          <PageForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateComponent;
