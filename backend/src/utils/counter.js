const { OCCUPATION_POINT, OBSERVATION_OBJECT_POINT } = require('./constant');

exports.countPriorityPoint = (payload) => {
  let priorityPoint = 0;

  if (payload.occupation) {
    const occupationPoint = OCCUPATION_POINT[payload.occupation];

    if (occupationPoint) priorityPoint += occupationPoint;
  }

  if (payload.observationObject) {
    const observationObjectPoint =
      OBSERVATION_OBJECT_POINT[payload.observationObject];

    if (observationObjectPoint) priorityPoint += observationObjectPoint;
  }

  return priorityPoint;
};
