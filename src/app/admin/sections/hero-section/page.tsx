import React from "react";
import { getHeroSectionData } from "@/actions/heroSectionActions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeroSectionForm from "@/app/admin/sections/hero-section/form";

const HeroSectionPage = async () => {
  const sectionData = await getHeroSectionData();

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
            <HeroSectionForm initialValues={sectionData} />
          ) : (
            <HeroSectionForm />
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

export default HeroSectionPage;
