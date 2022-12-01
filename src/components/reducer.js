export const reducer = (state, action) => {
  if (action.type === "VALUE") {
    return {
      ...state,
      isLoading: true,
      alert: "",
      loadingText: "Searching for results...",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isLoading: false,
      alert: "Enter a movie name",
      loadingText: "",
    };
  }

  if (action.type === "HIDE_ALERT") {
    return {
      ...state,
      isLoading: false,
      alert: "",
      loadingText: "",
    };
  }

  if (action.type === "DATA") {
    return {
      ...state,
      isLoading: false,
      alert: "",
      loadingText: "",
    };
  }

  if (action.type === "NO_DATA") {
    return {
      ...state,
      isLoading: true,
      alert: "",
      loadingText: "No movies matched your search result",
    };
  }

  if (action.type === "ERROR") {
    return {
      ...state,
      isLoading: false,
      alert: "An error occured, try again",
      loadingText: "",
    };
  }
};
