// utils/plans.ts
export const PLAN_PERMISSIONS = {
    FREE: {
      maxWorkspaces: 1,
      maxMembersPerWorkspace: 1,
      maxDomains: 1,
    },
    BASIC: {
      maxWorkspaces: 3,
      maxMembersPerWorkspace: 5,
      maxDomains: 3,
    },
    PRO: {
      maxWorkspaces: Infinity, // Unlimited
      maxMembersPerWorkspace: Infinity, // Unlimited
      maxDomains: Infinity, // Unlimited
    },
  };