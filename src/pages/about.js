import React, { Fragment } from "react";
import Head from "next/head";
import WalletExperience from "containers/AppMinimal/WalletExperience";
import SecureTransaction from "containers/AppMinimal/SecureTransaction";
import SystemMonitoring from "containers/SaasAppCreative/SystemMonitoring";
import AnalyticsTool from "containers/SaasAppCreative/AnalyticsTool";
import Portfolio from "containers/SaasAppCreative/Portfolio";
import styles from "../../styles/teamMember.module.css";
import clsx from "clsx";

// import about from "../common/data/charity/aboutus.json";
const aboutUs = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Shine NGO | A Non Government Organization Based at Gorakhpur
        </title>
        <meta
          name="Description"
          content="We are not for profit organisation with our office based at Gorakhpur, Uttar pradesh. We work for better education in the early stage(class 1-3) in Rural villages. We have two Education hut at Shankrapur and Adarsh nagar (Gorakhpur). "
        />
      </Head>

    <div>
        <p className={clsx(styles.text_blk, styles.team_head_text)}>About Us</p>
        <AnalyticsTool/>
        <Portfolio />
        <SystemMonitoring />
        <SecureTransaction />
        <WalletExperience />
    </div>

    </Fragment>
  );
};
export default aboutUs;
