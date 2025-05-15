import React from "react";
import NewsForm from "@/app/admin/news/form";
import { getNewsById } from "@/actions/newsAction";

const EditNewsPage = async ({ params }: { params: { newsId: string } }) => {
  console.log(params.newsId);
  const newsData = await getNewsById(params.newsId);
  return (
    <div>
      <NewsForm initialValues={newsData} />
    </div>
  );
};

export default EditNewsPage;
