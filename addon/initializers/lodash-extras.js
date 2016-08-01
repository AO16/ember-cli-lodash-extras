const { _, lodashExtras: { all } } = window;

export function initialize() {
  _.merge(_, all);
}

export default {
  name: 'lodash-extras',
  initialize
};
