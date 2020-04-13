const getters = {
  token: state => state.user.token,
  lang: state => state.user.lang,
  user: state => state.user.user,
  id: state => state.user.user.id,
  new_count: state => state.message.new_count
};
export default getters;
