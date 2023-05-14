import React, { Fragment } from "react";
import Head from "next/head";

import styles from "../../styles/teamMember.module.css";
import Footer from "containers/Charity/Footer";
import styled from "styled-components";
import clsx from "clsx";
import { Row, Col } from "@bootstrap-styled/v4";
import Image from 'next/image';

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  flex-direction:column;
`;

import teamMember from "../common/data/charity/team.json";
const TeamPage = () => {
  return (
    <Fragment>
      {/* Start charity head section */}
      <Head>
        <title>
          Shine NGO | A Non Government Organization Based at Gorakhpur
        </title>
        <meta
          name="Description"
          content="e are not for profit organisation with our office based at Gorakhpur, Uttar pradesh. We work for better education in the early stage(class 1-3) in Rural villages. We have two Education hut at Shankrapur and Adarsh nagar (Gorakhpur). "
        />
      </Head>

      {/* End of charity head section */}
      {/* Start charity wrapper section */}

      {/* <ContentWrapper style={{ marginTop: "2%" }}> */}
      <div className={clsx(styles.container_block, styles.container)} id="team">
        <p className={clsx(styles.text_blk, styles.team_head_text)}>Our Team</p>
        <Row>
          {teamMember &&
            teamMember.map(({image,name,designation}) => (
              <StyledCol lg="3" xs="12" >
                <div>
                  
                  <Image
                   src={image} 
                   width={500}
                   height={500}
                   alt={name}
                   />
                </div>
                <div>
                  <p>{name}</p>
                  <p>{designation}</p>
                </div>
              </StyledCol>
            ))}
        </Row>
      </div>
      {/* </ContentWrapper> */}
    </Fragment>
  );
};
export default TeamPage;
