import React from 'react';

class ReportAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reported: false,
      reportedArr: [],
      reportedId: this.ansId = this.props,
    };
    this.reportBtn = this.reportBtn.bind(this);
  }

  reportBtn() {
    if (!this.state.reportedArr.includes(this.state.reportedId)) {
      this.setState({
        reported: true,
      });
    } else {
      this.setState({
        reported: false,
      });
    }
  }

  render() {
    return (
      <div>
        <button type='submit' onCLick={this.reportBtn} className='report-helpful-btn'>
          {this.state.reported ? 'Reported' : 'Report'}
        </button>
      </div>
    );
  }
}