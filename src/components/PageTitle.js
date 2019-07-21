import { Col } from "shards-react";
import PropTypes from "prop-types";
import React from "react";

const PageTitle = ({ title, subtitle, ...attrs }) => {
  return (
    <Col xs="16" sm="4" className="title" {...attrs}>
      <span className="text-uppercase page-subtitle">{subtitle}</span>
      <h3 className="page-title">{title}</h3>
    </Col>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string
};

export default PageTitle;