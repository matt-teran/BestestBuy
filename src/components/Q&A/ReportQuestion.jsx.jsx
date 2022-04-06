import React from 'react';
import apiData from './apiData.jsx';

const ReportQuestion = (props) => {
  let reportStatus = 'Report';
  const reportBtn = () => {
    reportStatus = "Reported";
    apiData.putReportQuest(props.questId);
  };

  return (
    <div>
      <button type='submit' onCLick={reportBtn} className='report-helpful-btn'>{reportStatus}</button>
    </div>
  );
};

export default ReportQuestion;