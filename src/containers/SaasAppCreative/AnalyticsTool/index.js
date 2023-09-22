import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Section, { Grid, FigureGroup, Content } from './analytics.style';
import rightArrow from 'common/assets/image/saasAppCreative/icons/right-arrow.svg';

import graph1 from 'common/assets/image/charity/banner/team3.png';
import graph2 from 'common/assets/image/charity/banner/team2.png';


const AnalyticsTool = () => {
  return (
    <Section id="features">
      <Container width="1360px">
        <Grid>
          <FigureGroup>
            <Fade up>
              <NextImage src={graph1} alt="graph1" />
            </Fade>
            <div className="graph-2">
              <Fade up delay={200}>
                <NextImage src={graph2} alt="graph2" />
              </Fade>
            </div>
          </FigureGroup>
          <Content>
            <Text className="subtitle" content="Who We Are?" />
            {/* <Heading content="Advanced analytics tools to keep you in control &amp; customizable" /> */}
            <Text
              className="description"
              content="Shine Educational and Welfare Society started as a camp meant for encouraging education, providing financial support and establishing a good society. The aim got streamlined to make Education Hut centres all round the villages. Along with that we do work for upliftment of women in all spheres and general financial aid that we try to collect for someone in actual need. Fortunately, there were many people like us who joined us in the way and today we are a big family of 125 volunteers all round the country."
            />
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default AnalyticsTool;
