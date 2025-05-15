"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LeaderForm from "@/app/admin/our-leaders/form"; // Assuming you'll create this form
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LeadersSectionType } from "@/lib/types"; // Import the LeadersSection type
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CirclePlus, List, PencilLine } from "lucide-react";
import DeleteData from "@/app/admin/our-leaders/delete";
import { getLeadersSectionData } from "@/actions/ourLeadersSectionActions"; // Import the DeleteData component

interface LeadersTabsProps {
  data: LeadersSectionType[];
}

const LeadersTabs: React.FC<LeadersTabsProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState("create");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [leadersData, setLeadersData] = useState<LeadersSectionType[]>(data);

  const handleEditClick = (id: string) => {
    setEditingId(id);
    setActiveTab("edit");
  };

  useEffect(() => {
    const fetchData = async () => {
      const initialData = await getLeadersSectionData();
      if (initialData) {
        setLeadersData(initialData);
      }
    };
    fetchData();
  }, []);

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
                  <PencilLine /> Edit
                </TabsTrigger>
              )}
            </TabsList>
          </CardContent>
        </Card>

        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle>Add New Leader</CardTitle>
              <CardDescription>
                Use the form below to add a new leader.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LeaderForm />
            </CardContent>
            <CardFooter>
              <p>Add a new leader to the section</p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>List of Leaders</CardTitle>
              <CardDescription>Here's a list of the leaders.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>A list of leaders.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Username</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Updated At</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leadersData.map((leader) => (
                    <TableRow key={leader.id}>
                      <TableCell>{leader.username}</TableCell>
                      <TableCell>
                        <div className="w-[300px] text-wrap">
                          {leader.description}
                        </div>
                      </TableCell>
                      <TableCell>
                        {leader.imageUrl ? (
                          <Image
                            src={leader.imageUrl}
                            alt={leader.username}
                            width={100}
                            height={200}
                            className="rounded-md min-h-28 min-w-20 object-cover"
                          />
                        ) : (
                          "No Image"
                        )}
                      </TableCell>
                      <TableCell>
                        {new Date(leader.createdAt).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        {new Date(leader.updatedAt).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="default"
                            size="icon"
                            onClick={() => handleEditClick(leader.id)}
                          >
                            <PencilLine className="h-4 w-4" />
                          </Button>
                          <DeleteData id={leader.id} />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <p>View and manage the list of leaders</p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="edit">
          {editingId ? (
            <Card>
              <CardHeader>
                <CardTitle>Edit Leader</CardTitle>
                <CardDescription>
                  Use the form below to edit the leader&apos;s details.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LeaderForm
                  initialValues={leadersData.find(
                    (item) => item.id === editingId,
                  )}
                />
              </CardContent>
              <CardFooter>
                <p>Edit Leader Details</p>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardContent>
                <p>Please select a leader to edit.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LeadersTabs;
