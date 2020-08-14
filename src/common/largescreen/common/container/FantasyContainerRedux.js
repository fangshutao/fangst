'use strict';

const nameSpace = 'fantasyContainer';

const generateInitialState = options => {
  return options.initialState || {};
};

const generateEffects = () => {
  return {};
};

const generateReducers = () => {
  return {};
};

export default options => {
  return {
    nameSpace: `${nameSpace}/${options.key}`,
    state: generateInitialState(options),
    effects: generateEffects(),
    reducers: generateReducers()
  };
};
