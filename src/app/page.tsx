import React from "react";
import HomePageWrapper from "@/@core/page/home/page-wrapper";
import Footer from "@/@core/components/footer";

export default async function MainPage({ params }: any) {
  return (
    <>
      <HomePageWrapper lang={"id"} />
      <Footer lang={"id"} />
    </>
  );
}
