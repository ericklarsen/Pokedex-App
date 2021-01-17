import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";

const CommonHead = (props) => {
  return (
    <Head {...props}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="icon" href="/static/img/ic_loading.png" />
      <link rel="apple-touch-icon" href="/static/img/ic_loading.png" />
      {props.children}
    </Head>
  );
};

CommonHead.propTypes = {
  children: PropTypes.any,
};

export default CommonHead;
