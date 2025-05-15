import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getFaqs } from "@/actions/faqsActions"; // Import getFaqs
import { FaqType } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EditComponent from "@/app/admin/faqs/edit";
import DeleteComponent from "@/app/admin/faqs/delete";
import CreateComponent from "@/app/admin/faqs/create";

const FaqPage = async () => {
  const faqs: FaqType[] = await getFaqs(); // Fetch FAQs

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>FAQs</CardTitle>
          <CardDescription>Manage Frequently Asked Questions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SNO</TableHead>
                <TableHead>Question</TableHead>
                <TableHead>Answer</TableHead>
                <TableHead>Updated At</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {faqs.map((faq, index) => (
                <TableRow key={faq.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{faq.question}</TableCell>
                  <TableCell>
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </TableCell>
                  <TableCell>
                    {new Date(faq.updatedAt).toLocaleString()}
                  </TableCell>{" "}
                  <TableCell>
                    {new Date(faq.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <EditComponent faq={faq} />
                      <DeleteComponent faq={faq} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <CreateComponent />
        </CardFooter>
      </Card>
    </div>
  );
};

export default FaqPage;
