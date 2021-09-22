export default {
  listAPOD: (startDate = "2021-07-02") => {
    return {
      url: `/apod`,
      method: "get",
      params: {
        start_date: startDate,
      },
    };
  },
};
