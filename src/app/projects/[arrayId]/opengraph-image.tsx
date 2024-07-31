import { ImageResponse } from "next/og";
import { findDataById } from "../DataFetch";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

interface MenuDetailsPageProps {
  params: {
    arrayId: string;
  };
}

// Generate metadata dynamically
export const generateMetadata = async ({ params }: MenuDetailsPageProps) => {
  try {
    const data = await findDataById(params.arrayId);
    return {
      title: data.title,
      description: data.text1,
      alternates: {
        canonical: `/projects/${data.title.replace(/\s+/g, "-").toLowerCase()}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {};
  }
};

// Image generation
export default async function Image({ params }: MenuDetailsPageProps) {
  try {
    // Fetch the font
    const interSemiBold = await fetch(
      new URL(
        "/fonts/Nunito_Sans/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf",
        import.meta.url
      )
    ).then((res) => res.arrayBuffer());

    // Fetch dynamic data
    const data = await findDataById(params.arrayId);

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {data.title}
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: "Nunito Sans",
            data: interSemiBold,
            style: "normal",
            weight: 400,
          },
        ],
      }
    );
  } catch (error) {
    console.error("Error generating image:", error);
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Error
        </div>
      ),
      {
        ...size,
      }
    );
  }
}
