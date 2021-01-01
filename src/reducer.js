export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // remove after finished after developing
  // token:
  // "BQBMR5IS3UzCuKHdAyzmERXxJFPfeOTB--6bXthwchmQVROzXNQVwqBHeLbFczBoL5Fe1WlQs1HJ5mItFNGMv2TISFMVTURhCFlUQEimJwnbT6JnK4RPrw6aMWZ_rzP_bsMyE6KoanlVErmTSyMm92g3KFcqosHFu9ZOrkVRN5-PvOM5E-4n",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
