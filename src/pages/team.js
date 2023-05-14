import React, { Fragment } from "react";
import Head from "next/head";

import styles from "../../styles/teamMember.module.css";
import Footer from "containers/Charity/Footer";
import styled from "styled-components";
import clsx from "clsx";

const DivTile = styled.div`
  /* Adapt the colors based on primary prop */
  dislplay: flex;
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
        <DivTile>
          {teamMember &&
            teamMember.map((member) => (
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <img src={member.image} />
                      </div>
                      <div>
                        <p>{member.name}</p>
                        <p>{member.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </DivTile>
      </div>
      {/* </ContentWrapper> */}
    </Fragment>
  );
};
export default TeamPage;
