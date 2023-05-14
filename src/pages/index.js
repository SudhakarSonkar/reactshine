import React, { Fragment } from "react";

import BannerSection from "containers/Charity/BannerSection";
import FeatureSection from "containers/Charity/FeatureSection";
import BranchSection from "containers/Charity/BranchSection";
import WorkSection from "containers/Charity/WorkSection";
import MilestoneBlock from "containers/Charity/MilestoneBlock";
import HumanityBlock from "containers/Charity/HumanityBlock";
import PromotionBlock from "containers/Charity/PromotionBlock";
import DonateSection from "containers/Charity/DonateSection";
import MapSection from "containers/Charity/MapSection";
import FundraiserSection from "containers/Charity/FundraiserSection";
import BlogSection from "containers/Charity/BlogSection";
import TeamPortfolioSection from "containers/AppModern/TeamPortfoilo";
import ClientBlock from "containers/Charity/ClientBlock";

const Charity = () => {
  return (
    <Fragment>
      <BannerSection />
      <FeatureSection />
      <BranchSection />
      <WorkSection />
      <MilestoneBlock />
      <HumanityBlock />
      <PromotionBlock />
      <DonateSection />
      <MapSection />
      <FundraiserSection />
      <BlogSection />
      <ClientBlock />
      <TeamPortfolioSection />
    </Fragment>
  );
};
export default Charity;
