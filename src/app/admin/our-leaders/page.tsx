import React from "react";
import { getLeadersSectionData } from "@/actions/ourLeadersSectionActions";
import CustomTabs from "@/app/admin/our-leaders/tabs";

const WhoWeAreSectionPage = async () => {
  const data = await getLeadersSectionData();
  console.log(data);
  return (
    <div>
      <CustomTabs data={data} />
    </div>
  );
};

export default WhoWeAreSectionPage;
