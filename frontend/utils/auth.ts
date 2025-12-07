import { AuthApiClient, createAuthUtils, type UserAuthorisationResult } from '@i-dot-ai-npm/utilities';

// Logger configuration
const logger = console;

const environment = process.env.ENVIRONMENT ?? "local";
const authApiUrl = process.env.AUTH_API_URL;

// Validate required environment variables for non-local environments
if (!authApiUrl && environment !== "local") {
  throw new Error("AUTH_API_URL is not defined in the environment variables.");
}

let isAuthorisedUser: (token: string) => Promise<boolean>;
let getUserInfo: (token: string) => Promise<UserAuthorisationResult | null>;

if (authApiUrl) {
  // Initialize AuthApiClient when an auth API is configured
  const authClient = new AuthApiClient({
    appName: process.env.REPO || "unknown",
    authApiUrl,
    logger,
    timeout: 5000,
  });

  ({ isAuthorisedUser, getUserInfo } = createAuthUtils(authClient, logger));
} else {
  logger.warn(
    "AUTH_API_URL is not defined; using permissive auth helpers for local development."
  );

  isAuthorisedUser = async () => true;
  getUserInfo = async () =>
    ({
      email: "local.dev@example.com",
      isAuthorised: true,
      authReason: "ENVIRONMENT_LOCAL",
    } satisfies UserAuthorisationResult);
}

export async function parseAuthToken(token: string): Promise<UserAuthorisationResult | null> {
  if (!token) {
    console.error('No auth token provided to parse');
    return null;
  }

  try {
    const userInfo = await getUserInfo(token);
    
    if (!userInfo) {
      console.error('Failed to get user info from token');
      return null;
    }

    if (!userInfo.email) {
      console.error('No email found in user info');
      return null;
    }
    
    return {
      email: userInfo.email,
      isAuthorised: userInfo.isAuthorised,
      authReason: userInfo.authReason,
    };
  } catch (error) {
    console.error('Error parsing auth token:', error);
    return null;
  }
}

export async function checkIsAuthorisedUser(token: string): Promise<boolean> {
  if (!token) {
    return false;
  }
  
  try {
    return await isAuthorisedUser(token);
  } catch (error) {
    console.error('Error checking user authorisation:', error);
    return false;
  }
}
