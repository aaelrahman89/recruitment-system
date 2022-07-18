export const state = () => ({
  questionsList: [],
  answersList: [],
  candidateEvaluationDetails: {}
})

export const getters = {
  questionsList: state => state.questionsList,
  answersList: state => state.answersList,
  candidateEvaluationDetails: state => state.candidateEvaluationDetails
};

export const actions = {
  // fetchQuestionsList
  async fetchQuestionsList({ commit }) {
    const response = await this.$axios.$post( `questions/list`, null );
    commit('setQuestionsList', response.data);
  },

  // fetchAnswersList
  async fetchAnswersList({ commit }) {
    const response = await this.$axios.$post( `questions/rate/list`, null );
    commit('setAnswersList', response.data.question_rate_list);
  },

  // evaluateCandidate
  async evaluateCandidate({ commit }, { id, data }) {
    const response = await this.$axios.$post( `candidates/${id}/evaluate`, data );
    this.$swal('Good job!', 'Successfully Done!', 'success');
    this.$router.push('/candidates');
  },

  // finalEvaluateCandidate
  async finalEvaluateCandidate({ commit }, { id, data }) {
    const response = await this.$axios.$post( `candidates/${id}/evaluate/final`, data );
    this.$swal('Good job!', 'Successfully Done!', 'success');
    this.$router.push('/candidates');
  },

  // fetchCandidateEvaluationDetails
  async fetchCandidateEvaluationDetails({ commit }, id) {
    const response = await this.$axios.$post( `candidates/${id}/evaluate/details`, null );
    commit('setCandidateEvaluationDetails', response.data.question_rate_list);
  },

};

export const mutations = {
  setQuestionsList: (state, questionsList) => (state.questionsList = questionsList),
  setAnswersList: (state, answersList) => (state.answersList = answersList),
  setCandidateEvaluationDetails: (state, candidateEvaluationDetails) => (state.candidateEvaluationDetails = candidateEvaluationDetails)
};

