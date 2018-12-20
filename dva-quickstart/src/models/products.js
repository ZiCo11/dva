export default {
  // namespace 表示在全局state上的key
  namespace: 'products',
  // state是初始值，在这里是空数组
  state: [],
  // reducers 等同于redux的reducer，接收action，同步更新state
  reducers: {
    'delete' (state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
