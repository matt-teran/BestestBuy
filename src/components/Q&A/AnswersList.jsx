import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import { url, headers } from '../../config';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      answers: null
    };
  }

  componentDidMount() {
    const { id } = this.props;
    this.getAnswer(id);
  }

  getAnswer(id) {
    axios(`${url}/qa/questions/${id}/answers?count=25`, headers)
      .then((response) => {
        console.log(response);
        this.setState({
          answers: response.data,
        });
      })
      .catch(() => {
        console.log('getAnswer error');
      });
  }
}
