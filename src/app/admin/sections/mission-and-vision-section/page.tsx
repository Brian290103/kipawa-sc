import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MissionAndVisionForm from "@/app/admin/sections/mission-and-vision-section/form";
import { getMissionAndVisionSectionData } from "@/actions/missionAndVisionSectionActions";

const MissionAndVisionSectionPage = async () => {
  const sectionData = await getMissionAndVisionSectionData();

  console.log(sectionData);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            {sectionData ? "Edit Hero Section" : "Create Hero Section"}
          </CardTitle>
          <CardDescription>
            {sectionData
              ? "Modify the hero section data."
              : "Add data to the hero section."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {sectionData ? (
            <MissionAndVisionForm initialValues={sectionData} />
          ) : (
            <MissionAndVisionForm />
          )}
        </CardContent>
        <CardFooter>
          <p>
            {sectionData
              ? "Update the information above."
              : "Fill in the form to create a new hero section."}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MissionAndVisionSectionPage;
