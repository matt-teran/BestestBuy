import React from 'react';

class ReportAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reported: false,
      reportedArr: [],
      // reportedId: this.ansId = this.props,
    };
    this.reportBtn = this.reportBtn.bind(this);
  }

  reportBtn() {
    const { reportedArr, reportedId } = this.state;

    if (!reportedArr.includes(reportedId)) {
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
    const { reported } = this.state;
    return (
      <div>
        <button type="submit" onClick={this.reportBtn} className="report-helpful-btn">
          {reported ? 'Reported' : 'Report'}
        </button>
      </div>
    );
  }
}

export default ReportAnswer;
