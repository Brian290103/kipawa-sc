import React from "react";
import { getNews } from "@/actions/newsAction";
import { NewsDataTable } from "@/app/admin/news/data-table";
import { NewsType } from "@/lib/types"; // Make sure this path is correct
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const NewsPage = async () => {
  const data: NewsType[] = await getNews();
  return (
    <section className={"flex flex-col gap-4"}>
      <Card>
        <CardContent className="justify-between w-full flex items-center gap-3 flex-wrap">
          <h2 className={"font-semibold"}>News Overview</h2>
          <Button asChild>
            <a href="/admin/news/create">
              <PlusCircle className="mr-2 h-4 w-4" /> Create News
            </a>
          </Button>
        </CardContent>
      </Card>

      <NewsDataTable data={data} />
    </section>
  );
};

export default NewsPage;
