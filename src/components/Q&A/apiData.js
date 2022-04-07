/* eslint-disable no-console */
import axios from 'axios';
import { API_KEY, url, headers } from '../../config';
const getQuestion = (id, cb) => {
  const apiOptions = {
    method: 'GET',
    url: `${url}qa/questions?product_id=${id}&count=25`,
    headers,
  };
  axios(apiOptions)
    .then((response) => cb(response.data))
    .catch(() => {
      console.log('getQuestion error');
    });
};

const getHelpfulQuestCount = (id, cb) => {
  const apiOptions = {
    method: 'GET',
    url: `${url}qa/questions?product_id=${id}`,
    headers: { Authorization: API_KEY },
  };
  axios(apiOptions)
    .then((response) => cb(response.data))
    .catch(() => {
      console.log('QuestHelpfulCounter error');
    });
};

const getAnsCount = (id, cb) => {
  const apiOptions = {
    method: 'GET',
    url: `${url}qa/questions/${id}/answers?count=25`,
    headers: { Authorization: API_KEY },
  };
  axios(apiOptions)
    .then((response) => response.data.results.map((helpful) => {
      const isHelpful = ({
        helpful: helpful.helpfulness,
      });
      return isHelpful;
    }))
    .then((data) => {
      cb(data);
    })
    .catch(() => {
      console.log('getAnsCount error');
    });
};

const getReportedStatus = (id, cb) => {
  const apiOptions = {
    method: 'GET',
    url: `${url}qa/questions?product_id=${id}&count=100`,
    headers: { Authorization: API_KEY },
  };
  axios(apiOptions)
    .then((response) => response.data.results.map((report) => {
      const reported = {
        reported: report.reported,
      };
      return reported;
    }))
    .then((data) => {
      cb(data);
    })
    .catch(() => {
      console.log('get isreported error');
    });
};

/// API FUNCTIONS (POSTING)
const postQuestAPI = (data) => {
  const details = {
    body: data.body,
    name: data.name,
    email: data.email,
    product_id: data.product_id,
  };

  axios.post(`${url}qa/questions`, details, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then(() => {
      console.log('question created in API');
    })
    .catch(() => {
      console.log('error');
    });
};

const postAnsAPI = (data) => {
  console.log(data);
  const details = {
    body: data.body,
    name: data.name,
    email: data.email,
    photos: data.photos,
  };
  axios.post(`${url}qa/questions/${data.question_id}/answers`, details, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then(() => {
      console.log('Answer created in API');
    })
    .catch(() => {
      console.log('error');
    });
};

const putQuestHelpful = (id, cb) => {
  const apiOptions = {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${id}/helpful?count=25`,
    headers: { Authorization: API_KEY },
  };
  axios(apiOptions)
    .then((data) => {
      console.log('axios get success');
      return cb(data);
    })
    .catch(() => {
      console.log('catch putQuestionHelpful err');
    });
};

const putAnsHelpful = (id, cb) => {
  const apiOptions = {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${id}/helpful?count=25`,
    headers: { Authorization: API_KEY },
  };
  axios(apiOptions)
    .then((data) => {
      console.log('axios get success');
      return cb(data);
    })
    .catch(() => {
      console.log('catch putAnswerHelpful err');
    });
};

const putReportQuest = (questId) => {
  const apiOptions = {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questId}/report?count=25`,
    headers: { Authorization: API_KEY },
  };
  axios(apiOptions);
};

const putReportAns = (ansId, cb) => {
  const apiOptions = {
    method: 'PUT',
    url: `/qa/answers/${ansId}/report`,
    headers: { Authorization: API_KEY },
  };
  axios(apiOptions)
    .then((data) => {
      console.log('axios get success');
      return cb(data);
    })
    .catch(() => {
      console.log('catch answerAPI err');
    });
};

export default {
  getQuestion,
  getAnsCount,
  getReportedStatus,
  postAnsAPI,
  postQuestAPI,
  getHelpfulQuestCount,
  putReportQuest,
  putAnsHelpful,
  putReportAns,
  putQuestHelpful,
};
