const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_userName: "asmaa_ebeed",
        mongodb_password: "soma.200",
        mongodb_clustserName: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_userName: "asmaa_ebeed",
      mongodb_password: "soma.200",
      mongodb_clustserName: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
