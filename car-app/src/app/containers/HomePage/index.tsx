import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import { NavBar } from "../../components/navbar";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden  
  `}
`;

export const HomePage = () => {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer margin="4em" direction="vertical" />
      <BookCard />
      <Marginer margin="8em" direction="vertical" />
      <BookingSteps />
      <Marginer margin="4em" direction="vertical" />
      <AboutUs />
    </PageContainer>
  );
};
