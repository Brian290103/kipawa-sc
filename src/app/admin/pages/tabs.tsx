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
import PageForm from "./form"; // Import the PageForm
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PageType } from "@/lib/types"; // Import the PageType
import { Button } from "@/components/ui/button";
import { CirclePlus, List, PencilLine, RefreshCcw } from "lucide-react";
import DeleteComponent from "./delete"; // Import the DeleteComponent
import { getPages } from "@/actions/pageActions"; // Import the getPages action

const PagesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [pagesData, setPagesData] = useState<PageType[]>([]);
  const [loading, setLoading] = useState(false);

  const handleEditClick = (id: string) => {
    setEditingId(id);
    setActiveTab("edit");
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const initialData = await getPages();
      setPagesData(initialData);
    } catch (error) {
      console.error("Failed to fetch pages:", error);
      // Handle error appropriately, e.g., show a toast message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
              <CardTitle>Add New Page</CardTitle>
              <CardDescription>
                Use the form below to add a new page.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PageForm onSuccess={fetchData} />
            </CardContent>
            <CardFooter>
              <p>Add a new page to the site</p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>List of Pages</CardTitle>
              <CardDescription>
                Here&apos;s a list of the pages.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Page Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Featured Image</TableHead>
                    {/*<TableHead>Created At</TableHead>*/}
                    {/*<TableHead>Updated At</TableHead>*/}
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pagesData.map((page) => (
                    <TableRow key={page.id}>
                      <TableCell>
                        <div className="w-[200px] text-wrap">{page.title}</div>
                      </TableCell>
                      <TableCell>{page.pageName}</TableCell>
                      <TableCell>
                        <div className="min-w-[300px] text-wrap">
                          {page.description}
                        </div>
                      </TableCell>
                      <TableCell>
                        {page.featuredImageUrl ? (
                          <img
                            src={page.featuredImageUrl}
                            alt={`Featured for ${page.title}`}
                            className="h-24 object-cover rounded-md"
                          />
                        ) : (
                          "No Image"
                        )}
                      </TableCell>
                      {/*<TableCell>*/}
                      {/*  {new Date(page.createdAt).toLocaleString()}*/}
                      {/*</TableCell>*/}
                      {/*<TableCell>*/}
                      {/*  {new Date(page.updatedAt).toLocaleString()}*/}
                      {/*</TableCell>*/}
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="default"
                            size="icon"
                            onClick={() => handleEditClick(page.id)}
                          >
                            <PencilLine className="h-4 w-4" />
                          </Button>
                          <DeleteComponent page={page} onSuccess={fetchData} />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button disabled={loading} onClick={() => fetchData()}>
                <RefreshCcw className={`${loading && "animate-spin"}`} />
                Refresh
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="edit">
          {editingId ? (
            <Card>
              <CardHeader>
                <CardTitle>Edit Page</CardTitle>
                <CardDescription>
                  Use the form below to edit the page&apos;s details.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PageForm
                  initialValues={pagesData.find(
                    (item) => item.id === editingId,
                  )}
                  onSuccess={fetchData}
                />
              </CardContent>
              <CardFooter>
                <p>Edit Page Details</p>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardContent>
                <p>Please select a page to edit.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PagesTabs;
