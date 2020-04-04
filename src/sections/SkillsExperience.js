import React from 'react';
import { Box, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import SocialLink from '../components/SocialLink';
import markdownRenderer from '../components/MarkdownRenderer';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const SkillsExperience = () => (
  <Section.Container id="Skills &amp; Experience" Background={Background}>
    <Section.Header
      name="Skills &amp; Experience"
      icon="⛹"
      label="Skills &amp; Experience"
    />
    <StaticQuery
      query={graphql`
        query SkillsExperienceQuery {
          contentfulAbout {
            cvIntro {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            cv {
              file {
                fileName
                url
              }
            }
          }
        }
      `}
      render={data => {
        const { cvIntro, cv } = data.contentfulAbout;
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
              <Fade bottom>
                <ReactMarkdown
                  source={cvIntro.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
              </Fade>
            </Box>

            <Box
              width={[1, 1, 2 / 6]}
              style={{ maxWidth: '300px', margin: 'auto' }}
              fontSize={[5, 6, 6]}
            >
              <Fade right>
                <SocialLink
                  fontAwesomeIcon="file-pdf-o"
                  name={cv.file.fileName}
                  url={cv.file.url}
                  isFile
                />
              </Fade>
            </Box>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default SkillsExperience;
