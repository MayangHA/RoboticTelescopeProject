exports.USER_ROLE = {
  USER: 'user',
  ADMIN: 'admin',
};

exports.TABLE_NAME = {
  USER: 'user',
  BORROWING: 'borrowing',
};

exports.BORROWING_STATUS = {
  PENDING: 'pending', // IN REVIEW
  APPROVED: 'approved',
  REJECTED: 'rejected',
  CANCELLED: 'cancelled',
};

exports.OCCUPATION = {
  RESEARCHER: 'researcher',
  ITERA_LECTOR: 'itera_lector',
  LABORATORY: 'laboratory',
  STUDENT_RESEARCH: 'student_research',
  STUDENT_PRACTICE: 'student_practice',
  STUDENT: 'student',
  OTHER: 'other',
};

exports.OCCUPATION_POINT = {
  [this.OCCUPATION.RESEARCHER]: 25,
  [this.OCCUPATION.ITERA_LECTOR]: 20,
  [this.OCCUPATION.LABORATORY]: 18,
  [this.OCCUPATION.STUDENT_RESEARCH]: 15,
  [this.OCCUPATION.STUDENT_PRACTICE]: 10,
  [this.OCCUPATION.STUDENT]: 7,
  [this.OCCUPATION.OTHER]: 5,
};

exports.OBSERVATION_OBJECT = {
  TRANSIENT_OBJECT: 'transient_object',
  ROUTINE_OBSERVATION: 'routine_observation',
  ETC: 'etc',
};

exports.OBSERVATION_OBJECT_POINT = {
  [this.OBSERVATION_OBJECT.TRANSIENT_OBJECT]: 75,
  [this.OBSERVATION_OBJECT.ROUTINE_OBSERVATION]: 15,
  [this.OBSERVATION_OBJECT.ETC]: 10,
};

exports.TELESCOPE_TYPE = {
  IRT: 'IRT',
  OZT_ALTS: 'OZT-ALTS',
};

exports.FILE_EXTENSION = {
  PDF: 'pdf',
  DOC: 'doc',
  DOCX: 'docx',
};
