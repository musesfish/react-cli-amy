import Service from "./service";

const home = {
  state: {
    title: "加载中..."
  },
  reducers: {
    title(state, data) {
      return {
        ...state,
        title: data.title
      };
    }
  },
  effects: {
    async getTitle(payload, rootState) {
      const { data } = await Service.getTitle();
      this.title(data);
      return data;
    }
  }
};

export default home;
