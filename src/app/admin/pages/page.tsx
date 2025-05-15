import React from "react";
import CustomTabs from "./tabs";
import { getPages } from "@/actions/pageActions";

const PagesPage = async () => {
  const data = await getPages();
  console.log(data);
  return (
    <div>
      <CustomTabs data={data} />
    </div>
  );
};

export default PagesPage;
