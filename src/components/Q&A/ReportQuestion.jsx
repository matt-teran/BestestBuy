import React from 'react';
import PropTypes from 'prop-types';

import apiData from './apiData';

function ReportQuestion({ questId }) {
  let reportStatus = 'Report';
  const reportBtn = () => {
    reportStatus = 'Reported';
    apiData.putReportQuest(questId);
  };
  return (
    <div>
      <button type="submit" onClick={reportBtn} className="report-helpful-btn">{reportStatus}</button>
    </div>
  );
}

ReportQuestion.propTypes = {
  questId: PropTypes.number.isRequired,
};

export default ReportQuestion;
