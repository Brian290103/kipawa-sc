"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WhoWeAreForm from "@/app/admin/sections/who-we-are-section/form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { WhoWeAreSectionType } from "@/lib/types"; // Import the WhoWeAreSection type
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CirclePlus, List, PencilLine } from "lucide-react";
import DeleteData from "@/app/admin/sections/who-we-are-section/delete"; // Import the Image component

interface CustomTabsProps {
  data: WhoWeAreSectionType[];
}

const CustomTabs: React.FC<CustomTabsProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState("create");
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleEditClick = (id: string) => {
    setEditingId(id);
    setActiveTab("edit");
  };

  return (
    <div>
      <Tabs
        defaultValue={activeTab}
        className="w-full"
        onValueChange={setActiveTab}
      >
        <Card className={"sticky top-16 left-0 right-0 z-10 bg-white"}>
          <CardContent>
            <TabsList>
              <TabsTrigger value="create">
                <CirclePlus /> Add New
              </TabsTrigger>
              <TabsTrigger value="list">
                <List />
                View All
              </TabsTrigger>
              {editingId && (
                <TabsTrigger value="edit">
                  {" "}
                  <PencilLine /> Edit
                </TabsTrigger>
              )}
            </TabsList>
          </CardContent>
        </Card>

        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle>Create Who We Are Section</CardTitle>
              <CardDescription>
                Use the form below to create a new "Who We Are" section.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <WhoWeAreForm />
            </CardContent>
            <CardFooter>
              <p>Add a new Who We Are Section</p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>List Who We Are Sections</CardTitle>
              <CardDescription>
                Here's a list of existing "Who We Are" sections.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>A list of "Who We Are" sections.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Updated At</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>
                        <div className="w-[300px] text-wrap">
                          {item.description}
                        </div>
                      </TableCell>
                      <TableCell>
                        {item.imageUrl ? (
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            width={200}
                            height={100}
                            className="rounded-md h-20 w-28 min-w-28 min-h-20 object-cover"
                          />
                        ) : (
                          "No Image"
                        )}
                      </TableCell>

                      <TableCell>
                        {new Date(item.updatedAt).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        {new Date(item.updatedAt).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="default"
                            size="icon"
                            onClick={() => handleEditClick(item.id)}
                          >
                            <PencilLine className="h-4 w-4" />
                          </Button>
                          <DeleteData id={item.id} />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <p>View and manage existing Who We Are Sections</p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="edit">
          {editingId ? (
            <Card>
              <CardHeader>
                <CardTitle>Edit Who We Are Section</CardTitle>
                <CardDescription>
                  Use the form below to edit an existing "Who We Are" section.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WhoWeAreForm
                  initialValues={data.find((item) => item.id === editingId)}
                />
              </CardContent>
              <CardFooter>
                <p>Edit Who We Are Section</p>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardContent>
                <p>Please select a section to edit.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomTabs;
