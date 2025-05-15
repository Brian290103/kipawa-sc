import React from "react";
import CustomTabs from "@/app/admin/sections/who-we-are-section/tabs";
import { getWhoWeAreSectionData } from "@/actions/whoWeAreSectionActions";

const WhoWeAreSectionPage = async () => {
  const data = await getWhoWeAreSectionData();
  console.log(data);
  return (
    <div>
      <CustomTabs data={data} />
    </div>
  );
};

export default WhoWeAreSectionPage;
