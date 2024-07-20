import React, { Suspense } from "react";
import {
  websiteProjectsProps,
  websiteProjects,
} from "../../../components/vakoLeoProjects/websiteData";

export const generateMetadata = ({ params }: SlugPageProps) => {
  try {
    const project = websiteProjects.find(
      (project) => project.id.toString() === params.projectId
    );

    if (!project) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist",
        alternates: {
          canonical: "/",
        },
      };
    }

    // Return metadata based on the found project
    return {
      title: project.title,
      description: project.text,
      alternates: {
        canonical: `/${project.title.replace(/\s+/g, "-").toLowerCase()}`, // Clean up title for URL
      },
    };
  } catch (error) {
    // Generic catch block in case of unexpected errors
    console.error("Error generating metadata:", error);
    return {
      title: "Error",
      description: "An error occurred while trying to generate page metadata.",
      alternates: {
        canonical: "/",
      },
    };
  }
};

interface SlugPageProps {
  params: {
    projectId: string;
  };
}

export default function SlugPage({ params }: SlugPageProps) {
  const projectId = params.projectId;
  //   const project: websiteProjectsProps | undefined = websiteProjects[projectId];

  // console.log(params.projectId);
  // console.log(Object.keys(projects));
  return <div className={`fadeOut `}></div>;
}
