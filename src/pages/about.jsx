import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import website from "../../config/website";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Email from "../components/Email";
import { SeperatorSpan } from "../slices/Seperator";
import GetFeatured from "../components/GetFeatured";

const RolesCards = styled.div`
  display: flex;
  padding: 20px 50px;
  max-width: 1100px;
  margin: auto;
  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
  .roles-outer {
    display: flex;
    flex-direction: column;
    h3 {
      font-family: var(--text2);
      text-align: center;
      font-size: 1.2rem;
      margin: 0 0 10px 0;
      @media screen and (max-width: 780px) {
        margin: 10px 0;
      }
    }
    .roles-card {
      flex-grow: 1;
      background: var(--bg);
      border-radius: 15px;
      overflow: hidden !important;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      border: 2px solid var(--secondary);
      box-shadow: var(--shadow);
      padding: 20px;
      :nth-child(2) {
        margin: 0 10px;
        @media screen and (max-width: 780px) {
          margin: 0 0 20px 0;
        }
      }
      p {
        margin: 15px 0 0 0;
      }
      a {
        span {
          font-size: inherit;
        }
      }
    }
  }
`;

const AboutContainer = styled.div`
  max-width: 660px;
  margin: auto;
  overflow: hidden;
  padding: 20px;
  h1 {
    font-size: 2.1rem;
    text-align: center;
    margin: 20px 0 0 0;
    line-height: 1.3;
  }
  h2 {
    font-family: var(--text1);
    font-weight: 600;
  }
  p {
    margin: 30px 0;
  }
  .buttons {
    display: flex;
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
    .button1 {
      margin-right: 15px;
      @media screen and (max-width: 600px) {
        margin-right: 0px;
        margin-bottom: 15px;
        margin-top: 15px;
      }
    }
  }
`;

const About = () => {
  return (
    <>
      <Layout>
        <SEO title={`About | ${website.titleAlt}`} />
        <AboutContainer>
          <h1>The creative industry is Not Only about graphic design</h1>
          <p>
            Let’s be honest, there's endless content available on what it takes
            to be a Graphic Designer with interviews, talks, events and awards
            left right and centre.
          </p>
          <p>
            But as Graphic Design graduates eager to get started at an agency,
            we quickly realised that the creative industry is Not Only full of
            Graphic Designers, But Also tonnes of other roles. Ones that we had
            never even heard of before; Copywriters, Coders, Client Services,
            Strategists, UX, UI and Motion Designers, and so many more.
          </p>
          <p>
            This was where we came unstuck, asking ourselves; What do these
            people actually do? How did they end up here? Do I want to do that?
            Do I even actually want to be a Graphic Designer?
          </p>
          <p>That’s why we created Not Only — But Also.</p>
          <h2>What is Not Only — But Also</h2>
          <p>
            Not Only — But Also is here to help people understand these roles
            and maybe even help them find where they fit. We want to open the
            conversation around the design industry in order to create new
            opportunities for young creatives looking for their first move.
          </p>
          <p>
            We’ll be answering some of the big questions by speaking directly to
            the people who do these roles day in, day out. With features,
            interviews and talks we’ll share top insights from the people who
            know them best.
          </p>
          <p>
            We don’t yet know all these answers ourselves, so this is a learning
            curve for us as much as you!
          </p>
        </AboutContainer>
        <RolesCards className="roles-container">
          <div className="roles-outer">
            <h3>The other roles</h3>
            <div className="roles-card">
              <Link to="/strategy/strategy-at-designstudio">
                Studio Sessions{" "}
                <span role="img" aria-label="pointing finger emoji">
                  👉
                </span>
              </Link>
              <p>
                A behind the scenes look at what these roles do and how they fit
                into different name agencies and brands.
              </p>
            </div>
          </div>
          <div className="roles-outer">
            <h3>Who does them</h3>
            <div className="roles-card">
              <Link to="/how-i-got-here">
                How I got here{" "}
                <span role="img" aria-label="pointing finger emoji">
                  👉
                </span>
              </Link>
              <p>
                A series to show you how industry insiders landed their role,
                what they do everyday and their top tips.
              </p>
            </div>
          </div>
          <div className="roles-outer">
            <h3>How to get there</h3>
            <div className="roles-card">
              <Link to="/strategy/brand-strategist-skills">
                Where to start{" "}
                <span role="img" aria-label="pointing finger emoji">
                  👉
                </span>
              </Link>
              <p>
                Insider tips on what you need to know and need to do to kick
                start your career in one of these roles.
              </p>
            </div>
          </div>
        </RolesCards>
        <AboutContainer>
          <p>
            Alongside these we will be featuring some great people with opinion
            pieces that share different perspectives on these roles and the
            industry.
          </p>
          <p>
            If you’d like to help us make some of this happen or you’d like to
            contribute and you’re working in: Strategy, copywriting,
            development, UX, UI, client services, artworking, product, motion,
            service design or another role we haven’t even thought of yet, fill
            out our form or shoot us an email:
          </p>
          <div className="buttons">
            <div className="button1">
              <GetFeatured />
            </div>
            <div className="button2">
              <Email />
            </div>
          </div>
          <p>We’d love to hear from you!</p>
          <SeperatorSpan />
        </AboutContainer>
      </Layout>
    </>
  );
};

export default About;
