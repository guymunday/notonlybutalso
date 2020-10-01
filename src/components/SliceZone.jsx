import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import {
  BodyText,
  Embed,
  Image,
  ImageCaption,
  Quote,
  WhoWhatWhere,
  Seperator,
} from "../slices";

const Content = styled.div``;

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props;
    const slice = allSlices.map((s) => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case "text":
          return <BodyText key={s.id} input={s} />;
        case "image":
          return <Image key={s.id} input={s} />;
        case "quote":
          return <Quote key={s.id} input={s} />;
        case "image_caption":
          return <ImageCaption key={s.id} input={s} />;
        // case "embed":
        //   return <Embed key={s.id} input={s} />;
        case "seperator":
          return <Seperator key={s.id} input={s} />;
        case "who_what_where":
          return <WhoWhatWhere key={s.id} input={s} />;
        default:
          return null;
      }
    });
    return <Content>{slice}</Content>;
  }
}

SliceZone.propTypes = {
  allSlices: PropTypes.array.isRequired,
};
