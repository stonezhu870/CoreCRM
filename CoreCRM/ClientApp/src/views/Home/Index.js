import React from 'react';
import { connect } from 'dva';
// import styles from './Index.css';

function Index() {
  return (
    <div>Home/Index</div>
  );
}

Index.propTypes = {
};

export default connect()(Index);
