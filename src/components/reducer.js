export const reducer = (state, action) => {
  if (action.type === "VALUE") {
    return {
      ...state,
      loading: true,
      alert: "",
      loadingText: "Searching results...",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      loading: false,
      alert: "Enter movie name",
      loadingText: "",
    };
  }

  if (action.type === "HIDE_ALERT") {
    return {
      ...state,
      loading: false,
      alert: "",
      loadingText: "",
    };
  }

  if (action.type === "DATA") {
    return {
      ...state,
      loading: false,
      alert: "",
      loadingText: "",
    };
  }

  if (action.type === "NO_DATA") {
    return {
      ...state,
      loading: true,
      alert: "",
      loadingText: "No movies matched your search result",
    };
  }

  if (action.type === "ERROR") {
    return {
      ...state,
      loading: false,
      alert: "An error occured, try again",
      loadingText: "",
    };
  }
};
