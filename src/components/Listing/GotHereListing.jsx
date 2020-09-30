import React from "react";
import styled from "@emotion/styled";
import GotHereListItem from "./GotHereListItem";
// import { Link, useStaticQuery } from "gatsby";

// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionTitle = styled.h3`
  text-align: center;
  margin-top: 60px;
`

const GotHereListing = ({ posts }) => {
  const sliderSettings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true,
    slidesToShow: 1,
    centerMode: true,
  };

  return (
    <>
      <SectionTitle>How I got here</SectionTitle>
      <Slider
        {...sliderSettings}
        style={{ cursor: "grab", height: 560, zIndex: 9, margin: "0 0 80px 0" }}
      >
        {posts.map((post) => {
          let categories = false;

          if (post.data.categories[0].category) {
            categories = post.data.categories.map(
              (c) => c.category.document[0].data.name
            );
          }

          if (post.data.how_you_got_here) {
            return (
              <GotHereListItem
                key={post.uid}
                node={post}
                categories={categories}
              />
            );
          }
        })}
      </Slider>
    </>
  );
};

export default GotHereListing;
