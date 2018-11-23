/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


class ReadingStatus extends Component {
  render() {
    const { read, wrote } = this.props;
    return (
      <Fragment>
        <div className="row">
          <div className="col-sm-3" />
          <div className="reading-stats">
            <div className="reading-stats-title">
                            Read
            </div>
            <div className="reading-stats-body">
              {read}
            </div>
          </div>
          <div className="col-sm-1" />
          <div className="reading-stats">
            <div className="reading-stats-title">
                            Written
            </div>
            <div className="reading-stats-body">
              {wrote}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

ReadingStatus.propTypes = {
  read: PropTypes.number.isRequired,
  wrote: PropTypes.number.isRequired,
};

export default ReadingStatus;
