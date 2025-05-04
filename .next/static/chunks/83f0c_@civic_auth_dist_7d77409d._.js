(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/logger.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createLogger": (()=>createLogger),
    "loggers": (()=>loggers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/debug/src/browser.js [app-client] (ecmascript)");
;
const PACKAGE_NAME = "@civic/auth";
class DebugLogger {
    debugLogger;
    infoLogger;
    warnLogger;
    errorLogger;
    constructor(namespace){
        // Format: @org/package:library:component:level
        this.debugLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`${PACKAGE_NAME}:${namespace}:debug`);
        this.infoLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`${PACKAGE_NAME}:${namespace}:info`);
        this.warnLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`${PACKAGE_NAME}:${namespace}:warn`);
        this.errorLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`${PACKAGE_NAME}:${namespace}:error`);
        this.debugLogger.color = "4";
        this.infoLogger.color = "2";
        this.warnLogger.color = "3";
        this.errorLogger.color = "1";
    }
    debug(message, ...args) {
        this.debugLogger(message, ...args);
    }
    info(message, ...args) {
        this.infoLogger(message, ...args);
    }
    warn(message, ...args) {
        this.warnLogger(message, ...args);
    }
    error(message, ...args) {
        this.errorLogger(message, ...args);
    }
}
const createLogger = (namespace)=>new DebugLogger(namespace);
const loggers = {
    // Next.js specific loggers
    nextjs: {
        routes: createLogger("api:routes"),
        middleware: createLogger("api:middleware"),
        handlers: {
            auth: createLogger("api:handlers:auth")
        }
    },
    // React specific loggers
    react: {
        components: createLogger("react:components"),
        hooks: createLogger("react:hooks"),
        context: createLogger("react:context")
    },
    // Shared utilities loggers
    services: {
        validation: createLogger("utils:validation"),
        network: createLogger("utils:network")
    }
}; //# sourceMappingURL=logger.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Checks if a popup window is blocked by the browser.
 *
 * This function attempts to open a small popup window and then checks if it was successfully created.
 * If the popup is blocked by the browser, the function returns `true`. Otherwise, it returns `false`.
 *
 * @returns {boolean} - `true` if the popup is blocked, `false` otherwise.
 */ __turbopack_context__.s({
    "isPopupBlocked": (()=>isPopupBlocked),
    "withoutUndefined": (()=>withoutUndefined)
});
const isPopupBlocked = ()=>{
    // First we try to open a small popup window. It either returns a window object or null.
    const popup = window.open("", "", "width=1,height=1");
    // If window.open() returns null, popup is definitely blocked
    if (!popup) {
        return true;
    }
    try {
        // Try to access a property of the popup to check if it's usable
        if (typeof popup.closed === "undefined") {
            throw new Error("Popup is blocked");
        }
    } catch  {
        // Accessing the popup's properties throws an error if the popup is blocked
        return true;
    }
    // Close the popup immediately if it was opened
    popup.close();
    return false;
};
const withoutUndefined = (obj)=>{
    const result = {};
    for(const key in obj){
        if (obj[key] !== undefined) {
            // TypeScript needs assurance that key is a valid key in WithoutUndefined<T>
            // We use type assertion here
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            result[key] = obj[key];
        }
    }
    return result;
}; //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AUTH_SERVER_LEGACY_SESSION": (()=>AUTH_SERVER_LEGACY_SESSION),
    "AUTH_SERVER_SESSION": (()=>AUTH_SERVER_SESSION),
    "CodeVerifier": (()=>CodeVerifier),
    "OAuthTokenTypes": (()=>OAuthTokenTypes),
    "UserStorage": (()=>UserStorage)
});
var OAuthTokenTypes;
(function(OAuthTokenTypes) {
    OAuthTokenTypes["ID_TOKEN"] = "id_token";
    OAuthTokenTypes["ACCESS_TOKEN"] = "access_token";
    OAuthTokenTypes["REFRESH_TOKEN"] = "refresh_token";
    OAuthTokenTypes["ACCESS_TOKEN_EXPIRES_AT"] = "access_token_expires_at";
})(OAuthTokenTypes || (OAuthTokenTypes = {}));
const AUTH_SERVER_SESSION = "_session";
const AUTH_SERVER_LEGACY_SESSION = "_session.legacy";
var CodeVerifier;
(function(CodeVerifier) {
    CodeVerifier["COOKIE_NAME"] = "code_verifier";
    CodeVerifier["APP_URL"] = "app_url";
})(CodeVerifier || (CodeVerifier = {}));
var UserStorage;
(function(UserStorage) {
    UserStorage["USER"] = "user";
})(UserStorage || (UserStorage = {})); //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AUTOREFRESH_TIMEOUT_NAME": (()=>AUTOREFRESH_TIMEOUT_NAME),
    "DARK_BACKGROUND_COLOR": (()=>DARK_BACKGROUND_COLOR),
    "DEFAULT_AUTH_SERVER": (()=>DEFAULT_AUTH_SERVER),
    "DEFAULT_DISPLAY_MODE": (()=>DEFAULT_DISPLAY_MODE),
    "DEFAULT_EXPIRES_IN": (()=>DEFAULT_EXPIRES_IN),
    "DEFAULT_OAUTH_GET_PARAMS": (()=>DEFAULT_OAUTH_GET_PARAMS),
    "DEFAULT_SCOPES": (()=>DEFAULT_SCOPES),
    "JWT_PAYLOAD_KNOWN_CLAIM_KEYS": (()=>JWT_PAYLOAD_KNOWN_CLAIM_KEYS),
    "LIGHT_BACKGROUND_COLOR": (()=>LIGHT_BACKGROUND_COLOR),
    "LOGOUT_STATE": (()=>LOGOUT_STATE),
    "REFRESH_IN_PROGRESS": (()=>REFRESH_IN_PROGRESS),
    "TOKEN_EXCHANGE_SUCCESS_TEXT": (()=>TOKEN_EXCHANGE_SUCCESS_TEXT),
    "TOKEN_EXCHANGE_TRIGGER_TEXT": (()=>TOKEN_EXCHANGE_TRIGGER_TEXT)
});
const DEFAULT_SCOPES = [
    "openid",
    "profile",
    "email",
    "forwardedTokens",
    "offline_access"
];
const DEFAULT_AUTH_SERVER = "https://auth.civic.com/oauth";
const DEFAULT_OAUTH_GET_PARAMS = [
    "code",
    "state",
    "iss"
];
const DEFAULT_EXPIRES_IN = 3600; // 1 hour in seconds
// The server's callback handler renders this text if it needs the front-end to make an additional token exchange call,
// for the iframe case where cookies are not sent along with the initial redirect.
const TOKEN_EXCHANGE_TRIGGER_TEXT = "sameDomainCodeExchangeRequired";
const TOKEN_EXCHANGE_SUCCESS_TEXT = "serverSideTokenExchangeSuccess";
const DEFAULT_DISPLAY_MODE = "iframe";
const JWT_PAYLOAD_KNOWN_CLAIM_KEYS = [
    "iss",
    "aud",
    "sub",
    "iat",
    "exp"
];
const AUTOREFRESH_TIMEOUT_NAME = "civicAuthAutorefreshTimeout";
const REFRESH_IN_PROGRESS = "civicAuthRefreshInProgress";
const LOGOUT_STATE = "logout_state";
const DARK_BACKGROUND_COLOR = "rgb(30, 41, 59)";
const LIGHT_BACKGROUND_COLOR = "white";
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resolveCallbackUrl": (()=>resolveCallbackUrl),
    "sanitizeBasePath": (()=>sanitizeBasePath)
});
const resolveCallbackUrl = (config, baseUrl)=>{
    const callbackUrl = new URL(config?.callbackUrl, baseUrl).toString();
    return callbackUrl.toString();
};
function sanitizeBasePath(path) {
    if (!path || path === "/") return "";
    // Ensure it starts with a slash
    const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
    // Remove all trailing slashes (not just one)
    return withLeadingSlash.replace(/\/+$/, "");
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/config.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createCivicAuthPlugin": (()=>createCivicAuthPlugin),
    "defaultAuthConfig": (()=>defaultAuthConfig),
    "resolveAuthConfig": (()=>resolveAuthConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ts$2d$deepmerge$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ts-deepmerge/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
const logger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loggers"].nextjs.handlers.auth;
const defaultServerSecure = !(("TURBOPACK compile-time value", "development") === "development");
const defaultCookiesMaxAge = 60 * 60; // 1 hour
const defaultAuthConfig = {
    oauthServer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"],
    callbackUrl: "/api/auth/callback",
    challengeUrl: "/api/auth/challenge",
    refreshUrl: "/api/auth/refresh",
    logoutUrl: "/api/auth/logout",
    logoutCallbackUrl: "/api/auth/logoutcallback",
    loginUrl: "/",
    include: [
        "/**"
    ],
    exclude: [
        "/api/auth/**"
    ],
    basePath: "",
    cookies: {
        tokens: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ID_TOKEN]: {
                secure: defaultServerSecure,
                httpOnly: true,
                sameSite: "strict",
                path: "/",
                maxAge: defaultCookiesMaxAge
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN]: {
                secure: defaultServerSecure,
                httpOnly: true,
                sameSite: "strict",
                path: "/",
                maxAge: defaultCookiesMaxAge
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].REFRESH_TOKEN]: {
                secure: defaultServerSecure,
                httpOnly: true,
                sameSite: "strict",
                path: "/",
                maxAge: defaultCookiesMaxAge
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN_EXPIRES_AT]: {
                secure: defaultServerSecure,
                httpOnly: false,
                sameSite: "strict",
                path: "/",
                maxAge: defaultCookiesMaxAge
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeVerifier"].COOKIE_NAME]: {
                secure: defaultServerSecure,
                httpOnly: true,
                sameSite: "strict",
                path: "/",
                maxAge: defaultCookiesMaxAge
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeVerifier"].APP_URL]: {
                secure: defaultServerSecure,
                httpOnly: true,
                sameSite: "strict",
                path: "/",
                maxAge: defaultCookiesMaxAge
            }
        },
        user: {
            secure: defaultServerSecure,
            httpOnly: false,
            sameSite: "strict",
            path: "/",
            maxAge: defaultCookiesMaxAge
        }
    }
};
const resolveAuthConfig = (config = {})=>{
    // Read configuration that was set by the plugin via environment variables
    const configFromEnv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withoutUndefined"])({
        clientId: ("TURBOPACK compile-time value", "2d27f3a7-8c99-4f42-a9ad-00894198ebe9"),
        oauthServer: ("TURBOPACK compile-time value", "https://auth.civic.com/oauth"),
        callbackUrl: ("TURBOPACK compile-time value", "/api/auth/callback"),
        challengeUrl: ("TURBOPACK compile-time value", "/api/auth/challenge"),
        loginUrl: ("TURBOPACK compile-time value", "/"),
        logoutUrl: ("TURBOPACK compile-time value", "/api/auth/logout"),
        logoutCallbackUrl: ("TURBOPACK compile-time value", "/api/auth/logoutcallback"),
        refreshUrl: ("TURBOPACK compile-time value", "/api/auth/refresh"),
        include: ("TURBOPACK compile-time value", "/**")?.split(","),
        exclude: ("TURBOPACK compile-time value", "/api/auth/**")?.split(","),
        cookies: ("TURBOPACK compile-time truthy", 1) ? JSON.parse(("TURBOPACK compile-time value", '{"tokens":{"id_token":{"secure":false,"httpOnly":false,"sameSite":"strict","path":"/","maxAge":3600},"access_token":{"secure":false,"httpOnly":true,"sameSite":"strict","path":"/","maxAge":3600},"refresh_token":{"secure":false,"httpOnly":true,"sameSite":"strict","path":"/","maxAge":3600},"access_token_expires_at":{"secure":false,"httpOnly":false,"sameSite":"strict","path":"/","maxAge":3600},"code_verifier":{"secure":false,"httpOnly":true,"sameSite":"strict","path":"/","maxAge":3600},"app_url":{"secure":false,"httpOnly":true,"sameSite":"strict","path":"/","maxAge":3600}},"user":{"secure":false,"httpOnly":false,"sameSite":"strict","path":"/","maxAge":3600}}')) : ("TURBOPACK unreachable", undefined),
        basePath: ("TURBOPACK compile-time value", "") || ""
    });
    // Ensure "/api/auth/**" is always excluded
    const finalExclude = new Set([
        ...defaultAuthConfig.exclude,
        ...configFromEnv.exclude || [],
        ...config.exclude ?? []
    ]);
    // Perform a deep merge of the configurations
    const mergedConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ts$2d$deepmerge$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"].withOptions({
        mergeArrays: false
    }, defaultAuthConfig, configFromEnv, config);
    // Override the exclude list with the ensured list
    mergedConfig.exclude = Array.from(finalExclude);
    logger.debug("Config from environment:", JSON.stringify(configFromEnv, null, 2));
    logger.debug("Resolved config:", JSON.stringify(mergedConfig, null, 2));
    if (mergedConfig.clientId === undefined) {
        throw new Error("Civic Auth client ID is required");
    }
    return mergedConfig;
};
const createCivicAuthPlugin = (authConfig)=>{
    return (nextConfig)=>{
        logger.debug("createCivicAuthPlugin nextConfig", JSON.stringify(nextConfig, null, 2));
        // Extract basePath from Next.js config
        const basePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeBasePath"])(nextConfig?.basePath || "");
        // Create a copy of default URLs with basePath added
        const defaultUrlsWithBasePath = {};
        // Only apply to URLs that aren't explicitly set in authConfig
        if (basePath) {
            if (!authConfig.callbackUrl) defaultUrlsWithBasePath.callbackUrl = `${basePath}/api/auth/callback`;
            if (!authConfig.challengeUrl) defaultUrlsWithBasePath.challengeUrl = `${basePath}/api/auth/challenge`;
            if (!authConfig.refreshUrl) defaultUrlsWithBasePath.refreshUrl = `${basePath}/api/auth/refresh`;
            if (!authConfig.logoutUrl) defaultUrlsWithBasePath.logoutUrl = `${basePath}/api/auth/logout`;
            if (!authConfig.logoutCallbackUrl) defaultUrlsWithBasePath.logoutCallbackUrl = `${basePath}/api/auth/logoutcallback`;
            if (!authConfig.loginUrl && authConfig.loginUrl !== "") defaultUrlsWithBasePath.loginUrl = basePath;
        }
        // Create final config with basePath and possibly modified URLs
        const resolvedConfig = resolveAuthConfig({
            ...defaultUrlsWithBasePath,
            ...authConfig,
            basePath
        });
        return {
            ...nextConfig,
            env: {
                ...nextConfig?.env,
                // Internal environment variables - do not set these manually
                _civic_auth_client_id: resolvedConfig.clientId,
                _civic_oauth_server: resolvedConfig.oauthServer,
                _civic_auth_callback_url: resolvedConfig.callbackUrl,
                _civic_auth_challenge_url: resolvedConfig.challengeUrl,
                _civic_auth_login_url: resolvedConfig.loginUrl,
                _civic_auth_logout_url: resolvedConfig.logoutUrl,
                _civic_auth_logout_callback_url: resolvedConfig.logoutCallbackUrl,
                _civic_auth_refresh_url: resolvedConfig.refreshUrl,
                _civic_auth_includes: resolvedConfig.include.join(","),
                _civic_auth_excludes: resolvedConfig.exclude.join(","),
                _civic_auth_cookie_config: JSON.stringify(resolvedConfig.cookies),
                _civic_auth_base_path: resolvedConfig.basePath
            }
        };
    };
}; //# sourceMappingURL=config.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/oauth.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "displayModeFromState": (()=>displayModeFromState),
    "generateState": (()=>generateState),
    "getIssuerVariations": (()=>getIssuerVariations),
    "getOauthEndpoints": (()=>getOauthEndpoints),
    "serverTokenExchangeFromState": (()=>serverTokenExchangeFromState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
;
const getIssuerVariations = (issuer)=>{
    const issuerWithoutSlash = issuer.endsWith("/") ? issuer.slice(0, issuer.length - 1) : issuer;
    const issuerWithSlash = `${issuerWithoutSlash}/`;
    return [
        issuerWithoutSlash,
        issuerWithSlash
    ];
};
const addSlashIfNeeded = (url)=>url.endsWith("/") ? url : `${url}/`;
const cache = {};
const getOauthEndpoints = async (oauthServer)=>{
    if (cache[oauthServer]) {
        return cache[oauthServer];
    }
    const openIdConfigResponse = await fetch(`${addSlashIfNeeded(oauthServer)}.well-known/openid-configuration`);
    const openIdConfig = await openIdConfigResponse.json();
    const endpoints = {
        jwks: openIdConfig.jwks_uri,
        auth: openIdConfig.authorization_endpoint,
        token: openIdConfig.token_endpoint,
        userinfo: openIdConfig.userinfo_endpoint,
        endsession: openIdConfig.end_session_endpoint
    };
    cache[oauthServer] = endpoints;
    return endpoints;
};
/**
 * creates a state string for the OAuth2 flow, encoding the display mode too for future use
 * @param {DisplayMode} displayMode
 * @returns {string}
 */ const generateState = (displayMode, serverTokenExchange)=>{
    const jsonString = JSON.stringify({
        uuid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
        displayMode,
        ...serverTokenExchange ? {
            serverTokenExchange
        } : {}
    });
    return btoa(jsonString);
};
/**
 * parses the state string from the OAuth2 flow, decoding the display mode too
 * @param state
 * @param sessionDisplayMode
 * @returns { uuid: string, displayMode: DisplayMode }
 */ const displayModeFromState = (state, sessionDisplayMode)=>{
    try {
        const jsonString = atob(state);
        return JSON.parse(jsonString).displayMode;
    } catch (e) {
        console.error("Failed to parse displayMode from state:", state, e);
        return sessionDisplayMode;
    }
};
const serverTokenExchangeFromState = (state)=>{
    try {
        const jsonString = atob(state);
        return JSON.parse(jsonString).serverTokenExchange;
    } catch  {
        console.error("Failed to parse serverTokenExchange from state:", state);
        return undefined;
    }
};
;
 //# sourceMappingURL=oauth.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/jwt.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "convertForwardedTokenFormat": (()=>convertForwardedTokenFormat)
});
const convertForwardedTokenFormat = (inputTokens)=>Object.fromEntries(Object.entries(inputTokens).map(([source, tokens])=>[
            source,
            {
                idToken: tokens?.id_token,
                accessToken: tokens?.access_token,
                refreshToken: tokens?.refresh_token
            }
        ])); //# sourceMappingURL=jwt.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/UserSession.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GenericUserSession": (()=>GenericUserSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$jwt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/jwt.js [app-client] (ecmascript)");
;
;
class GenericUserSession {
    storage;
    constructor(storage){
        this.storage = storage;
    }
    async get() {
        const user = await this.storage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserStorage"].USER);
        return user ? JSON.parse(user) : null;
    }
    async set(user) {
        const forwardedTokens = user?.forwardedTokens ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$jwt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertForwardedTokenFormat"])(user?.forwardedTokens) : null;
        const value = user ? JSON.stringify({
            ...user,
            forwardedTokens
        }) : "";
        await this.storage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserStorage"].USER, value);
    }
    async clear() {
        await this.storage.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserStorage"].USER);
    }
} //# sourceMappingURL=UserSession.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildOauth2Client": (()=>buildOauth2Client),
    "clearAuthServerSession": (()=>clearAuthServerSession),
    "clearTokens": (()=>clearTokens),
    "clearUser": (()=>clearUser),
    "deriveCodeChallenge": (()=>deriveCodeChallenge),
    "exchangeTokens": (()=>exchangeTokens),
    "generateOauthLoginUrl": (()=>generateOauthLoginUrl),
    "generateOauthLogoutUrl": (()=>generateOauthLogoutUrl),
    "getAccessTokenExpiresAt": (()=>getAccessTokenExpiresAt),
    "getCookiesMaxAge": (()=>getCookiesMaxAge),
    "getEndpointsWithOverrides": (()=>getEndpointsWithOverrides),
    "retrieveAccessTokenExpiresAt": (()=>retrieveAccessTokenExpiresAt),
    "retrieveTokens": (()=>retrieveTokens),
    "setAccessTokenExpiresAt": (()=>setAccessTokenExpiresAt),
    "storeServerTokens": (()=>storeServerTokens),
    "storeTokens": (()=>storeTokens),
    "validateOauth2Tokens": (()=>validateOauth2Tokens)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/oslo/dist/oauth2/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/oauth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwks$2f$remote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/browser/jwks/remote.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$verify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/browser/jwt/verify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$UserSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/UserSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/browser/util/decode_jwt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/logger.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const logger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loggers"].services.validation;
async function deriveCodeChallenge(codeVerifier, method = "S256") {
    if (method === "Plain") {
        console.warn("Using insecure plain code challenge method");
        return codeVerifier;
    }
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return btoa(String.fromCharCode(...new Uint8Array(digest))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function getEndpointsWithOverrides(oauthServer, endpointOverrides = {}) {
    const endpoints = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOauthEndpoints"])(oauthServer);
    return {
        ...endpoints,
        ...endpointOverrides
    };
}
async function generateOauthLoginUrl(config) {
    const endpoints = await getEndpointsWithOverrides(config.oauthServer, config.endpointOverrides);
    const oauth2Client = buildOauth2Client(config.clientId, config.redirectUrl, endpoints);
    const challenge = await config.pkceConsumer.getCodeChallenge();
    const oAuthUrl = await oauth2Client.createAuthorizationURL({
        state: config.state,
        scopes: config.scopes
    });
    // The OAuth2 client supports PKCE, but does not allow passing in a code challenge from some other source
    // It only allows passing in a code verifier which it then hashes itself.
    oAuthUrl.searchParams.append("code_challenge", challenge);
    oAuthUrl.searchParams.append("code_challenge_method", "S256");
    if (config.nonce) {
        // nonce isn't supported by oslo, so we add it manually
        oAuthUrl.searchParams.append("nonce", config.nonce);
    }
    // Required by the auth server for offline_access scope
    oAuthUrl.searchParams.append("prompt", "consent");
    return oAuthUrl;
}
async function generateOauthLogoutUrl(config) {
    const endpoints = await getEndpointsWithOverrides(config.oauthServer, config.endpointOverrides);
    const endSessionUrl = new URL(endpoints.endsession);
    endSessionUrl.searchParams.append("client_id", config.clientId);
    endSessionUrl.searchParams.append("id_token_hint", config.idToken);
    endSessionUrl.searchParams.append("state", config.state);
    endSessionUrl.searchParams.append("post_logout_redirect_uri", config.redirectUrl);
    return endSessionUrl;
}
function buildOauth2Client(clientId, redirectUri, endpoints) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuth2Client"](clientId, endpoints.auth, endpoints.token, {
        redirectURI: redirectUri
    });
}
async function exchangeTokens(code, state, pkceProducer, oauth2Client, oauthServer, endpoints) {
    const codeVerifier = await pkceProducer.getCodeVerifier();
    if (!codeVerifier) throw new Error("Code verifier not found in state");
    const tokens = await oauth2Client.validateAuthorizationCode(code, {
        codeVerifier
    });
    // Validate relevant tokens
    try {
        await validateOauth2Tokens(tokens, endpoints.jwks, oauth2Client, oauthServer);
    } catch (error) {
        console.error("tokenExchange error", {
            error,
            tokens
        });
        throw new Error(`OIDC tokens validation failed: ${error.message}`);
    }
    return tokens;
}
const getCookiesMaxAge = (tokens)=>{
    const parsedAccessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeJwt"])(tokens.access_token);
    // Get TTL values from the token or use defaults
    const accessTokenTTL = Number(parsedAccessToken?.accessTokenTTL) || 60 * 60; // 1 hour default
    const refreshTokenTTL = Number(parsedAccessToken?.refreshTokenTTL) || 60 * 60 * 24 * 30; // 30 days default
    // Calculate maxAge as TTL values directly (they represent seconds from now)
    // This is correct because TTL values represent the lifetime of the token
    const accessTokenMaxAge = accessTokenTTL;
    const refreshTokenMaxAge = refreshTokenTTL;
    return {
        accessTokenMaxAge,
        refreshTokenMaxAge
    };
};
const getAccessTokenExpiresAt = (tokens)=>{
    const parsedAccessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeJwt"])(tokens.access_token);
    if (parsedAccessToken?.exp || false) {
        return parsedAccessToken.exp;
    } else if (tokens.expires_in) {
        const now = Math.floor(new Date().getTime() / 1000);
        return now + tokens.expires_in;
    } else {
        throw new Error("Cannot determine access token expiry!");
    }
};
async function setAccessTokenExpiresAt(storage, tokens) {
    // try to extract absolute expiry time from access token but fallback to calculation if not possible
    const accessTokenExpiresAt = getAccessTokenExpiresAt(tokens);
    await storage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN_EXPIRES_AT, accessTokenExpiresAt.toString());
}
async function storeTokens(storage, tokens) {
    await storage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ID_TOKEN, tokens.id_token);
    await storage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN, tokens.access_token);
    if (tokens.refresh_token) {
        await storage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].REFRESH_TOKEN, tokens.refresh_token);
    }
    await setAccessTokenExpiresAt(storage, tokens);
}
async function storeServerTokens(storage, tokens) {
    const accessTokenExpiresAt = getAccessTokenExpiresAt(tokens);
    const cookieStorage = storage;
    const now = Math.floor(Date.now() / 1000);
    // Get maxAge values based on token TTLs
    const { refreshTokenMaxAge, accessTokenMaxAge } = getCookiesMaxAge(tokens);
    // Apply maxAge to cookie options
    const accessTokenCookieOptions = {
        maxAge: accessTokenMaxAge
    };
    const refreshTokenCookieOptions = {
        maxAge: refreshTokenMaxAge
    };
    // Set ID token with expiry based on the exp claim
    const idTokenExpiry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeJwt"])(tokens.id_token)?.exp;
    const idTokenMaxAge = idTokenExpiry ? idTokenExpiry - now : accessTokenMaxAge;
    await cookieStorage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ID_TOKEN, tokens.id_token, {
        maxAge: idTokenMaxAge
    });
    // Set access token
    await cookieStorage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN, tokens.access_token, accessTokenCookieOptions);
    // Set refresh token if present
    if (tokens.refresh_token) {
        await cookieStorage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].REFRESH_TOKEN, tokens.refresh_token, refreshTokenCookieOptions);
    }
    // Store the access token expiration timestamp
    await storage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN_EXPIRES_AT, accessTokenExpiresAt.toString(), accessTokenCookieOptions);
    logger.debug("storeServerTokens", {
        accessTokenExpiresAt,
        refreshTokenMaxAge,
        accessTokenMaxAge,
        idTokenMaxAge
    });
}
async function clearTokens(storage) {
    // clear all local storage keys related to OAuth and CivicAuth SDK
    const clearOAuthPromises = [
        ...Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REFRESH_IN_PROGRESS"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTOREFRESH_TIMEOUT_NAME"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOGOUT_STATE"]
    ].map(async (key)=>{
        await storage.delete(key);
    });
    await Promise.all([
        ...clearOAuthPromises
    ]);
}
async function clearAuthServerSession(storage) {
    await storage.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_SERVER_SESSION"]);
    await storage.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_SERVER_LEGACY_SESSION"]);
}
async function clearUser(storage) {
    const userSession = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$UserSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenericUserSession"](storage);
    await userSession.clear();
}
async function retrieveTokens(storage) {
    const idToken = await storage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ID_TOKEN);
    const accessToken = await storage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN);
    const refreshToken = await storage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].REFRESH_TOKEN);
    const accessTokenExpiresAt = await storage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN_EXPIRES_AT);
    return {
        id_token: idToken ?? undefined,
        access_token: accessToken ?? undefined,
        refresh_token: refreshToken ?? undefined,
        access_token_expires_at: accessTokenExpiresAt !== null ? parseInt(accessTokenExpiresAt, 10) : undefined
    };
}
async function retrieveAccessTokenExpiresAt(storage) {
    return Number(await storage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN_EXPIRES_AT));
}
// Single JWKS instance that persists for the lifetime of the SDK session
let cachedJWKS = null;
let cachedJwksUrl = null;
async function validateOauth2Tokens(tokens, jwksEndpoint, oauth2Client, issuer) {
    // Only create a new JWKS instance if one doesn't exist yet
    if (!cachedJWKS || cachedJwksUrl !== jwksEndpoint) {
        cachedJWKS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwks$2f$remote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRemoteJWKSet"])(new URL(jwksEndpoint));
        cachedJwksUrl = jwksEndpoint;
    }
    // validate the ID token
    const idTokenResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$verify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtVerify"])(tokens.id_token, cachedJWKS, {
        issuer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIssuerVariations"])(issuer),
        audience: oauth2Client.clientId
    });
    // validate the access token
    const accessTokenResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$verify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtVerify"])(tokens.access_token, cachedJWKS, {
        issuer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIssuerVariations"])(issuer)
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withoutUndefined"])({
        id_token: idTokenResponse.payload,
        access_token: accessTokenResponse.payload,
        refresh_token: tokens.refresh_token
    });
} //# sourceMappingURL=util.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/browser/storage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LocalStorageAdapter": (()=>LocalStorageAdapter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/eventemitter3/index.js [app-client] (ecmascript) <export default as EventEmitter>");
;
class LocalStorageAdapter {
    static _emitter;
    static get emitter() {
        if (!LocalStorageAdapter._emitter) {
            LocalStorageAdapter._emitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__["EventEmitter"]();
        }
        return LocalStorageAdapter._emitter;
    }
    async get(key) {
        return Promise.resolve(localStorage.getItem(key) || "");
    }
    async set(key, value) {
        localStorage.setItem(key, value);
    }
    async delete(key) {
        localStorage.removeItem(key);
    }
} //# sourceMappingURL=storage.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/PKCE.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BrowserPublicClientPKCEProducer": (()=>BrowserPublicClientPKCEProducer),
    "ConfidentialClientPKCEConsumer": (()=>ConfidentialClientPKCEConsumer),
    "GenericPublicClientPKCEProducer": (()=>GenericPublicClientPKCEProducer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/oslo/dist/oauth2/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/browser/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [app-client] (ecmascript)");
;
;
;
;
class ConfidentialClientPKCEConsumer {
    pkceChallengeEndpoint;
    basePath;
    constructor(pkceChallengeEndpoint, basePath){
        this.pkceChallengeEndpoint = pkceChallengeEndpoint;
        this.basePath = basePath;
    }
    async getCodeChallenge() {
        // Get only the origin from location
        const origin = window.location.origin;
        // Use only the origin plus basePath if provided, no need for pathname anymore
        const appUrl = this.basePath ? `${origin}${this.basePath}` : origin;
        const response = await fetch(`${this.pkceChallengeEndpoint}?appUrl=${encodeURIComponent(appUrl)}`);
        const data = await response.json();
        return data.challenge;
    }
}
class GenericPublicClientPKCEProducer {
    storage;
    constructor(storage){
        this.storage = storage;
    }
    // if there is already a verifier, return it,
    // If not, create a new one and store it
    async getCodeChallenge() {
        let verifier = await this.getCodeVerifier();
        if (!verifier) {
            verifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateCodeVerifier"])();
            this.storage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeVerifier"].COOKIE_NAME, verifier);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveCodeChallenge"])(verifier);
    }
    // if there is already a verifier, return it,
    async getCodeVerifier() {
        return this.storage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeVerifier"].COOKIE_NAME);
    }
}
class BrowserPublicClientPKCEProducer extends GenericPublicClientPKCEProducer {
    constructor(){
        super(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]());
    }
} //# sourceMappingURL=PKCE.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/SessionProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SessionContext": (()=>SessionContext),
    "SessionProvider": (()=>SessionProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const defaultSession = {
    data: {
        authenticated: false,
        idToken: undefined,
        accessToken: undefined,
        displayMode: "iframe"
    },
    error: null,
    // initialise in loading state
    isLoading: true
};
// Context for exposing session specifically to the TokenProvider
const SessionContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultSession);
const SessionProvider = ({ children, ...props })=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SessionContext.Provider, {
        value: {
            ...props,
            data: props.data || null,
            error: props.error || null
        },
        children: children
    });
};
;
 //# sourceMappingURL=SessionProvider.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useSession.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useSession": (()=>useSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$SessionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/SessionProvider.js [app-client] (ecmascript)");
"use client";
;
;
// TokenProvider will use this internal context to access session
const useSession = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$SessionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionContext"]);
    if (!context) {
        throw new Error("useSession must be used within an SessionProvider");
    }
    return context;
};
;
 //# sourceMappingURL=useSession.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/TokenProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TokenContext": (()=>TokenContext),
    "TokenProvider": (()=>TokenProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$jwt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/jwt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/browser/util/decode_jwt.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const TokenContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const TokenProvider = ({ children })=>{
    const { isLoading, error: authError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const decodeTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TokenProvider.useMemo[decodeTokens]": ()=>{
            if (!session?.idToken) return null;
            const { forwardedTokens } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeJwt"])(session.idToken);
            return forwardedTokens ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$jwt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertForwardedTokenFormat"])(forwardedTokens) : null;
        }
    }["TokenProvider.useMemo[decodeTokens]"], [
        session?.idToken
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TokenProvider.useMemo[value]": ()=>({
                accessToken: session?.accessToken || null,
                idToken: session?.idToken || null,
                forwardedTokens: decodeTokens || {},
                isLoading,
                error: authError
            })
    }["TokenProvider.useMemo[value]"], [
        session?.accessToken,
        session?.idToken,
        decodeTokens,
        isLoading,
        authError
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TokenContext.Provider, {
        value: value,
        children: children
    });
};
;
 //# sourceMappingURL=TokenProvider.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useToken.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useToken": (()=>useToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$TokenProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/TokenProvider.js [app-client] (ecmascript)");
"use client";
;
;
const useToken = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$TokenProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenContext"]);
    if (!context) {
        throw new Error("useToken must be used within a TokenProvider");
    }
    return context;
};
;
 //# sourceMappingURL=useToken.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/UserProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "UserContext": (()=>UserContext),
    "UserProvider": (()=>UserProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$UserSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/UserSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useToken.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const UserContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const UserProvider = ({ children, storage, user: inputUser, signOut, authStatus, signIn, displayMode })=>{
    const { error: authError, isLoading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const tokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToken"])();
    const [userLoading, setUserLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userError, setUserError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(inputUser);
    const fetchUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UserProvider.useCallback[fetchUser]": async ()=>{
            if (!session?.idToken) return null;
            const userSession = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$UserSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenericUserSession"](storage);
            return userSession.get();
        }
    }["UserProvider.useCallback[fetchUser]"], [
        session?.idToken,
        storage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserProvider.useEffect": ()=>{
            if (session?.idToken) {
                setUserLoading(true);
                fetchUser().then({
                    "UserProvider.useEffect": (user)=>{
                        setUserLoading(false);
                        setUser({
                            "UserProvider.useEffect": (prevUser)=>{
                                // we only want to update the user if it's set - if a user is passed in, don't assume it is wrong here
                                // it could be just the fetchUser returned null for some other reason.
                                // TODO consider cleaning this up in general to avoid needing context here.
                                return user ?? prevUser;
                            }
                        }["UserProvider.useEffect"]);
                    }
                }["UserProvider.useEffect"]).catch({
                    "UserProvider.useEffect": (error)=>{
                        setUserLoading(false);
                        setUserError(error);
                    }
                }["UserProvider.useEffect"]);
            } else {
                setUser(null);
            }
        }
    }["UserProvider.useEffect"], [
        fetchUser,
        session?.idToken
    ]);
    const isLoading = authLoading || userLoading;
    const error = authError ?? userError;
    // While we are passing a user as a prop _and_ storing it in state,
    // there is the case where the user is not set in the state yet
    // (setState is called but the rerender has not yet happened), but
    // is passed as a prop. In this case, we want to use the prop value.
    // A better solution is to avoid having multiple layers of context.
    // If the user is passed in, we just use that.
    // We should not split user state management across multiple contexts
    const userValue = user ?? inputUser;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(UserContext.Provider, {
        value: {
            ...tokens,
            user: userValue,
            isLoading,
            error,
            signIn,
            signOut,
            authStatus,
            displayMode: displayMode || "iframe"
        },
        children: children
    });
};
;
 //# sourceMappingURL=UserProvider.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/hooks/usePrevious.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePrevious": (()=>usePrevious)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function usePrevious(value) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePrevious.useEffect": ()=>{
            ref.current = value;
        }
    }["usePrevious.useEffect"], [
        value
    ]);
    return ref.current;
} //# sourceMappingURL=usePrevious.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/obj.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "objectsAreEqual": (()=>objectsAreEqual)
});
const objectsAreEqual = (obj1, obj2)=>{
    if (obj1 === obj2) return true;
    if (obj1 && !obj2 || obj2 && !obj1) {
        return false;
    }
    const keys1 = obj1 ? Object.keys(obj1) : [];
    const keys2 = obj2 ? Object.keys(obj2) : [];
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1){
        if ((obj1 || {})[key] !== (obj2 || {})[key]) return false;
    }
    return true;
};
;
 //# sourceMappingURL=obj.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/version.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// This is an auto-generated file. Do not edit.
__turbopack_context__.s({
    "VERSION": (()=>VERSION)
});
const VERSION = "@civic/auth:0.5.1"; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/storage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CookieStorage": (()=>CookieStorage),
    "DEFAULT_COOKIE_DURATION": (()=>DEFAULT_COOKIE_DURATION)
});
const DEFAULT_COOKIE_DURATION = 60 * 15; // 15 minutes
class CookieStorage {
    settings;
    constructor(settings = {}){
        this.settings = {
            httpOnly: settings.httpOnly ?? true,
            secure: settings.secure ?? true,
            // the callback request comes the auth server
            // 'lax' ensures the code_verifier cookie is sent with the request
            sameSite: settings.sameSite ?? "lax",
            expires: settings.expires ?? new Date(Date.now() + 1000 * DEFAULT_COOKIE_DURATION),
            path: settings.path ?? "/"
        };
    }
} //# sourceMappingURL=storage.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/BrowserCookieStorage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BrowserCookieStorage": (()=>BrowserCookieStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/storage.js [app-client] (ecmascript)");
;
// Ensure only runs in a browser environment
function documentObj() {
    if (typeof globalThis.window !== "undefined") return globalThis.document;
    const stack = new Error().stack;
    throw new Error("Document is not available in this environment:" + JSON.stringify(stack));
}
const split = (separator)=>(str)=>str.split(separator);
const cookieStringFromSettings = (settings)=>{
    let cookieSettings = "";
    if (settings.path) {
        cookieSettings += `Path=${settings.path}; `;
    }
    if (settings.expires) {
        cookieSettings += `Expires=${settings.expires}; `;
    }
    if (settings.secure) {
        cookieSettings += `Secure; `;
    }
    if (settings.httpOnly) {
        // HttpOnly cannot be set from client-side JavaScript, so this clause can be omitted.
        console.warn("HttpOnly cannot be set on client-side cookies. Ignoring this setting.");
    }
    if (settings.sameSite) {
        cookieSettings += `SameSite=${settings.sameSite}; `;
    }
    return cookieSettings.trim();
};
class BrowserCookieStorage extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CookieStorage"] {
    constructor(config = {}){
        super({
            // sensible browser defaults
            secure: false,
            httpOnly: false,
            ...config
        });
    }
    // Synchronous methods
    getSync(key) {
        const encodedValue = documentObj().cookie.split(";").map(split("=")).find(([cookieKey])=>cookieKey?.trim() === key)?.[1];
        return encodedValue ? decodeURIComponent(encodedValue) : null;
    }
    setSync(key, value, cookieConfigOverride = {}) {
        const encodedValue = encodeURIComponent(value);
        const settings = {
            ...this.settings,
            ...cookieConfigOverride
        };
        const cookieString = cookieStringFromSettings(settings);
        documentObj().cookie = `${key}=${encodedValue}; ${cookieString}`;
    }
    deleteSync(key) {
        documentObj().cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
    // Async methods (for API compatibility)
    async get(key) {
        return this.getSync(key);
    }
    async set(key, value, cookieConfigOverride = {}) {
        this.setSync(key, value, cookieConfigOverride);
    }
    async delete(key) {
        this.deleteSync(key);
    }
} //# sourceMappingURL=BrowserCookieStorage.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getVersion": (()=>getVersion),
    "printVersion": (()=>printVersion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/version.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserCookieStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/BrowserCookieStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
let versionPrinted = false;
const getVersion = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"];
const printVersion = ()=>{
    if (!versionPrinted) {
        versionPrinted = true;
        if (getVersion() && typeof window !== "undefined" && typeof document !== "undefined") {
            console.log(getVersion());
        }
    }
};
;
;
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/version.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserCookieStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/BrowserCookieStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/hooks/useUserCookie.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useUserCookie": (()=>useUserCookie)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$hooks$2f$usePrevious$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/hooks/usePrevious.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$obj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/obj.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserCookieStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/BrowserCookieStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usehooks-ts/dist/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const browserCookieStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserCookieStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserCookieStorage"]();
const getUserAndTokenFromCookie = ()=>{
    const userCookie = browserCookieStorage.getSync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserStorage"].USER);
    const idTokenCookie = browserCookieStorage.getSync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ID_TOKEN);
    return {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserStorage"].USER]: userCookie ? JSON.parse(userCookie) : undefined,
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ID_TOKEN]: idTokenCookie || undefined
    };
};
const useUserCookie = ()=>{
    const isClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsClient"])();
    // need to make sure this is only run on the client
    // because it uses cookies that expect a document object to be present to read from
    const response = isClient && getUserAndTokenFromCookie() || {};
    // initialise user and token from cookies so that we don't
    // have to wait for the first fetch to expose these values
    const userData = response[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserStorage"].USER];
    const tokenData = response[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ID_TOKEN];
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(userData || null);
    const [idToken, setIdToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tokenData || undefined);
    const [userChanged, setUserChanged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasRunRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [initialFetchComplete, setInitialFetchComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!!userData);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const prevUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$hooks$2f$usePrevious$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(user);
    const prevToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$hooks$2f$usePrevious$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(idToken);
    const prevPending = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$hooks$2f$usePrevious$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevious"])(isPending);
    const fetchUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserCookie.useCallback[fetchUser]": (abortController)=>{
            if (abortController?.signal.aborted) {
                setInitialFetchComplete(true);
                return;
            }
            const response = getUserAndTokenFromCookie() || {};
            const userData = response[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserStorage"].USER];
            const tokenData = response[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ID_TOKEN];
            if (abortController?.signal.aborted) {
                setInitialFetchComplete(true);
                return;
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$obj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectsAreEqual"])(prevUser, userData)) {
                setUser(userData || null);
                setUserChanged(true);
            }
            if (tokenData !== prevToken) {
                setIdToken(tokenData);
            }
            setInitialFetchComplete(true);
        }
    }["useUserCookie.useCallback[fetchUser]"], [
        prevToken,
        prevUser
    ]);
    // call fetch immediately after a refresh
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUserCookie.useEffect": ()=>{
            setUserChanged(false);
            if (prevPending && !isPending) {
                fetchUser();
            }
        }
    }["useUserCookie.useEffect"], [
        prevPending,
        isPending,
        fetchUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUserCookie.useEffect": ()=>{
            let abortController = new AbortController();
            const cookieListener = {
                "useUserCookie.useEffect.cookieListener": ()=>{
                    abortController = new AbortController();
                    fetchUser(abortController);
                }
            }["useUserCookie.useEffect.cookieListener"];
            document.addEventListener("visibilitychange", cookieListener);
            window.addEventListener("storage", cookieListener);
            window.addEventListener("focus", cookieListener);
            fetchUser(abortController);
            const intervalId = setInterval(cookieListener, 2000);
            return ({
                "useUserCookie.useEffect": ()=>{
                    abortController.abort();
                    document.removeEventListener("visibilitychange", cookieListener);
                    window.removeEventListener("storage", cookieListener);
                    window.removeEventListener("focus", cookieListener);
                    clearInterval(intervalId);
                }
            })["useUserCookie.useEffect"];
        }
    }["useUserCookie.useEffect"], [
        fetchUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUserCookie.useEffect": ()=>{
            if (userChanged) {
                if (!hasRunRef.current) {
                    hasRunRef.current = true;
                    startTransition({
                        "useUserCookie.useEffect": ()=>{
                            router.refresh();
                        }
                    }["useUserCookie.useEffect"]);
                }
            } else {
                hasRunRef.current = false;
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useUserCookie.useEffect"], [
        userChanged
    ]);
    return {
        user,
        idToken,
        fetchUser,
        isPending,
        isLoading: !initialFetchComplete
    };
}; //# sourceMappingURL=useUserCookie.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useOAuthEndpoints.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useOAuthEndpoints": (()=>useOAuthEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/oauth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const useOAuthEndpoints = (oauthServer)=>{
    const [endpoints, setEndpoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOAuthEndpoints.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOauthEndpoints"])(oauthServer || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"]).then({
                "useOAuthEndpoints.useEffect": (retrievedEndpoints)=>{
                    setEndpoints(retrievedEndpoints);
                }
            }["useOAuthEndpoints.useEffect"]);
        }
    }["useOAuthEndpoints.useEffect"], [
        oauthServer
    ]);
    return endpoints;
};
;
 //# sourceMappingURL=useOAuthEndpoints.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useCurrentUrl.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCurrentUrl": (()=>useCurrentUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const useCurrentUrl = ()=>{
    const [currentUrl, setCurrentUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    // update the current url when the url changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCurrentUrl.useEffect": ()=>{
            const handleUrlChange = {
                "useCurrentUrl.useEffect.handleUrlChange": ()=>{
                    setCurrentUrl(window.location.href);
                }
            }["useCurrentUrl.useEffect.handleUrlChange"];
            window.addEventListener("popstate", handleUrlChange);
            window.addEventListener("pushstate", handleUrlChange);
            window.addEventListener("replacestate", handleUrlChange);
            handleUrlChange();
            return ({
                "useCurrentUrl.useEffect": ()=>{
                    if (typeof window !== "undefined") {
                        window.removeEventListener("popstate", handleUrlChange);
                        window.removeEventListener("pushstate", handleUrlChange);
                        window.removeEventListener("replacestate", handleUrlChange);
                    }
                }
            })["useCurrentUrl.useEffect"];
        }
    }["useCurrentUrl.useEffect"], []);
    return currentUrl;
};
;
 //# sourceMappingURL=useCurrentUrl.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/CivicAuthConfigContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CivicAuthConfigContext": (()=>CivicAuthConfigContext),
    "CivicAuthConfigProvider": (()=>CivicAuthConfigProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useOAuthEndpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useOAuthEndpoints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCurrentUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useCurrentUrl.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const defaultConfig = null;
// Context for exposing Config specifically to the TokenProvider
const CivicAuthConfigContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultConfig);
const CivicAuthConfigProvider = ({ children, oauthServer, clientId, redirectUrl: inputRedirectUrl, nonce, challengeUrl, refreshUrl, logoutUrl, scopes, logoutRedirectUrl: inputLogoutRedirectUrl, displayMode = "iframe" })=>{
    const currentUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCurrentUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentUrl"])();
    const redirectUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CivicAuthConfigProvider.useMemo[redirectUrl]": ()=>{
            const useUrl = inputRedirectUrl || currentUrl;
            if (useUrl) {
                return `${useUrl.split("?")[0]}`;
            }
            return "";
        }
    }["CivicAuthConfigProvider.useMemo[redirectUrl]"], [
        currentUrl,
        inputRedirectUrl
    ]);
    const endpoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useOAuthEndpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOAuthEndpoints"])(oauthServer);
    const logoutRedirectUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CivicAuthConfigProvider.useMemo[logoutRedirectUrl]": ()=>{
            const useUrl = inputLogoutRedirectUrl || currentUrl;
            if (useUrl) {
                return `${useUrl.split("?")[0]}`;
            }
            return "";
        }
    }["CivicAuthConfigProvider.useMemo[logoutRedirectUrl]"], [
        currentUrl,
        inputLogoutRedirectUrl
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CivicAuthConfigProvider.useMemo[value]": ()=>endpoints ? {
                clientId,
                redirectUrl,
                oauthServer: oauthServer || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"],
                endpoints,
                nonce,
                challengeUrl,
                refreshUrl,
                logoutUrl,
                scopes: scopes || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SCOPES"],
                logoutRedirectUrl,
                displayMode
            } : null
    }["CivicAuthConfigProvider.useMemo[value]"], [
        clientId,
        redirectUrl,
        oauthServer,
        endpoints,
        nonce,
        challengeUrl,
        refreshUrl,
        logoutUrl,
        scopes,
        logoutRedirectUrl,
        displayMode
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CivicAuthConfigContext.Provider, {
        value: value,
        children: children
    });
};
;
 //# sourceMappingURL=CivicAuthConfigContext.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/windowUtil.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Detects if the current window is running inside an iframe
 * Uses multiple methods to improve detection reliability
 * If detected as iframe, adds an immediate style blocker to prevent content flashes
 */ __turbopack_context__.s({
    "isWindowInIframe": (()=>isWindowInIframe),
    "removeParamsWithoutReload": (()=>removeParamsWithoutReload)
});
const isWindowInIframe = (window1)=>{
    // Make sure we're in a browser environment
    if (typeof window1 === "undefined") {
        return false;
    }
    // Check if running in Cypress
    const isCypress = Boolean(window1.Cypress || window1.parent?.Cypress || window1.top?.Cypress);
    // If we're in Cypress, don't treat it as an iframe
    if (isCypress) {
        return false;
    }
    let isInIframe = false;
    try {
        // Method 1: Check for frameElement
        // This can throw a cross-origin error, but works reliably for same-origin frames
        if (window1.frameElement !== null) {
            isInIframe = true;
        }
        // Method 2: Check specifically for our civic auth iframe
        // Use explicit type assertion to handle the TypeScript issue
        const frameEl = window1.frameElement;
        if (frameEl && frameEl.id === "civic-auth-iframe") {
            isInIframe = true;
        }
    } catch  {
        // If we get a security/cross-origin error, it's likely because
        // we're in an iframe from a different origin
        // So this is actually a positive signal that we're in an iframe
        isInIframe = true;
    }
    return isInIframe;
};
const removeParamsWithoutReload = (paramsToRemove)=>{
    const url = new URL(window.location.href);
    paramsToRemove.forEach((param)=>{
        url.searchParams.delete(param);
    });
    try {
        window.history.replaceState({}, "", url);
        window.dispatchEvent(new Event("popstate"));
    } catch (error) {
        console.warn("window.history.replaceState failed", error);
    }
};
;
 //# sourceMappingURL=windowUtil.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIsInIframe.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useIsInIframe": (()=>useIsInIframe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$windowUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/windowUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
/**
 * React hook to detect if the current window is running inside an iframe
 * @returns boolean indicating whether the current window is in an iframe
 */ const useIsInIframe = ()=>{
    // Start with undefined to indicate we don't know yet
    const [isInIframe, setIsInIframe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsInIframe.useEffect": ()=>{
            if (typeof globalThis.window !== "undefined") {
                const isInIframeVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$windowUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWindowInIframe"])(globalThis.window);
                setIsInIframe(isInIframeVal);
            } else {
                setIsInIframe(false);
            }
        }
    }["useIsInIframe.useEffect"], []);
    // Return false if undefined to be safe
    return isInIframe === undefined ? false : isInIframe;
};
;
 //# sourceMappingURL=useIsInIframe.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/IframeProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IframeContext": (()=>IframeContext),
    "IframeProvider": (()=>IframeProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIsInIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIsInIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usehooks-ts/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const defaultIframe = {
    iframeRef: null,
    logoutIframeRef: null,
    setIframeIsVisible: ()=>{},
    setIframeAborted: ()=>{},
    setLogoutIframeIsVisible: ()=>{},
    iframeIsVisible: false,
    iframeAborted: false,
    logoutIframeIsVisible: false,
    iframeMode: "modal",
    renderIframe: false,
    backgroundColor: "white",
    isIframeMounted: false,
    setIframeMounted: ()=>{}
};
// Context for exposing Iframe specifically to the TokenProvider
const IframeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultIframe);
const IframeProvider = ({ children, iframeMode = "modal" })=>{
    const iframeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoutIframeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInIframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIsInIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsInIframe"])();
    const [isIframeMounted, setIframeMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [iframeIsVisible, setIframeIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [iframeAborted, setIframeAborted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logoutIframeIsVisible, setLogoutIframeIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [designOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])(`loginAppDesign`, {
        colorMode: "auto"
    });
    const { isDarkMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDarkMode"])();
    const loginAppBackgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "IframeProvider.useMemo[loginAppBackgroundColor]": ()=>{
            const colorFromWindow = isDarkMode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DARK_BACKGROUND_COLOR"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHT_BACKGROUND_COLOR"];
            const colorMode = designOptions?.colorMode;
            const colorFromStorage = colorMode === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DARK_BACKGROUND_COLOR"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHT_BACKGROUND_COLOR"];
            // if the color mode is auto then use the window matchMedia to determine the color mode
            // otherwise use the stored local color mode set from the login-app
            return colorMode && colorMode !== "auto" ? colorFromStorage : colorFromWindow;
        }
    }["IframeProvider.useMemo[loginAppBackgroundColor]"], [
        designOptions,
        isDarkMode
    ]);
    const renderIframe = iframeMode === "modal" && !isInIframe;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(IframeContext.Provider, {
        value: {
            iframeRef,
            logoutIframeRef,
            setIframeIsVisible,
            iframeAborted,
            setIframeAborted,
            setLogoutIframeIsVisible,
            iframeIsVisible,
            logoutIframeIsVisible,
            iframeMode,
            renderIframe,
            backgroundColor: loginAppBackgroundColor,
            setIframeMounted,
            isIframeMounted
        },
        children: children
    });
};
;
 //# sourceMappingURL=IframeProvider.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/types.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PopupError": (()=>PopupError)
});
class PopupError extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, PopupError.prototype);
    }
} //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/postMessage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "validateLoginAppPostMessage": (()=>validateLoginAppPostMessage)
});
const validateLoginAppPostMessage = (event, clientId)=>{
    const caseEvent = event;
    if (!caseEvent.clientId || !caseEvent.source || !caseEvent.type || caseEvent.clientId !== clientId || caseEvent.source !== "civicloginApp") {
        return false;
    }
    return true;
};
;
 //# sourceMappingURL=postMessage.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthStatus": (()=>AuthStatus),
    "tokenKeys": (()=>tokenKeys)
});
var AuthStatus;
(function(AuthStatus) {
    AuthStatus["AUTHENTICATED"] = "authenticated";
    AuthStatus["UNAUTHENTICATED"] = "unauthenticated";
    AuthStatus["AUTHENTICATING"] = "authenticating";
    AuthStatus["ERROR"] = "error";
    AuthStatus["SIGNING_OUT"] = "signing_out";
})(AuthStatus || (AuthStatus = {}));
const tokenKeys = [
    "sub",
    "idToken",
    "accessToken",
    "refreshToken",
    "forwardedTokens"
];
;
 //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/session.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearAuthCookies": (()=>clearAuthCookies),
    "getTokens": (()=>getTokens),
    "getUser": (()=>getUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/browser/util/decode_jwt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [app-client] (ecmascript)");
;
;
;
;
// Function to omit keys from an object
const omitKeys = (keys, obj)=>{
    const result = {
        ...obj
    };
    keys.forEach((key)=>{
        delete result[key];
    });
    return result;
};
const parseJWTToType = (jwt)=>{
    const parseResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeJwt"])(jwt);
    return parseResult;
};
async function getUser(storage) {
    const tokens = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieveTokens"])(storage);
    if (!tokens || !tokens.id_token) return null;
    const parsedToken = parseJWTToType(tokens.id_token);
    // it might be preferable to throw here
    if (!parsedToken.sub) return null;
    // set the user ID from the token sub
    const userWithAdditionalTokenFields = {
        ...parsedToken,
        id: parsedToken.sub
    };
    // Assumes all information is in the ID token
    // remove the token keys from the user object to stop it getting too large
    return omitKeys([
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JWT_PAYLOAD_KNOWN_CLAIM_KEYS"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenKeys"]
    ], userWithAdditionalTokenFields);
}
async function getTokens(storage) {
    const storageData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieveTokens"])(storage);
    if (!storageData) return null;
    return {
        idToken: storageData.id_token,
        accessToken: storageData.access_token,
        refreshToken: storageData.refresh_token
    };
}
const clearAuthCookies = async (storage)=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearTokens"])(storage);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearUser"])(storage);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthServerSession"])(storage);
}; //# sourceMappingURL=session.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/iframeUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Our custom iframe resizer doesn't add any special methods to the iframe element
// so we can just return the iframe element directly
__turbopack_context__.s({
    "getIframeRef": (()=>getIframeRef)
});
const getIframeRef = (iframeRef, allowNull = false)=>{
    if (!iframeRef && !allowNull) {
        throw new Error("iframeRef is required for displayMode 'iframe'");
    }
    return iframeRef;
}; //# sourceMappingURL=iframeUtils.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/GenericAuthenticationRefresher.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GenericAuthenticationRefresher": (()=>GenericAuthenticationRefresher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [app-client] (ecmascript)");
;
;
class GenericAuthenticationRefresher {
    onError;
    authConfig;
    storage;
    constructor(onError){
        this.onError = onError;
    }
    get oauthServer() {
        return this.authConfig?.oauthServer || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"];
    }
    async getRefreshToken() {
        if (!this.storage) throw new Error("No storage available");
        const tokens = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieveTokens"])(this.storage);
        if (!tokens?.refresh_token) throw new Error("No refresh token available");
        return tokens.refresh_token;
    }
    async refreshTokens() {
        try {
            const result = await this.refreshAccessToken();
            return result;
        } catch (error) {
            // Check if this is an AbortError or network-related error
            const errorMessage = error.message || "";
            const isNetworkError = errorMessage.includes("network") || errorMessage.includes("abort") || errorMessage.includes("cancel");
            if (isNetworkError) {
                console.warn("GenericAuthenticationRefresher: Network error during token refresh:", error);
            } else {
                console.error("GenericAuthenticationRefresher: Failed to refresh tokens:", error);
            }
            await this.onError(error);
            throw error;
        }
    }
} //# sourceMappingURL=GenericAuthenticationRefresher.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/AuthenticationRefresherImpl.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthenticationRefresherImpl": (()=>AuthenticationRefresherImpl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/oslo/dist/oauth2/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$GenericAuthenticationRefresher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/GenericAuthenticationRefresher.js [app-client] (ecmascript)");
;
;
;
class AuthenticationRefresherImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$GenericAuthenticationRefresher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenericAuthenticationRefresher"] {
    endpointOverrides;
    endpoints;
    oauth2client;
    constructor(authConfig, storage, onError, endpointOverrides){
        super(onError);
        this.endpointOverrides = endpointOverrides;
        this.authConfig = authConfig;
        this.storage = storage;
        this.init();
    }
    async init() {
        if (!this.authConfig) throw new Error("No auth config available");
        // resolve oauth config
        this.endpoints = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEndpointsWithOverrides"])(this.oauthServer, this.endpointOverrides);
        this.oauth2client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuth2Client"](this.authConfig.clientId, this.endpoints.auth, this.endpoints.token, {
            redirectURI: this.authConfig.redirectUrl
        });
        return this;
    }
    static async build(authConfig, storage, onError, endpointOverrides) {
        const refresher = new AuthenticationRefresherImpl(authConfig, storage, onError, endpointOverrides);
        await refresher.init();
        return refresher;
    }
    async storeTokens(tokenResponseBody) {
        if (!this.storage) throw new Error("No storage available");
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeTokens"])(this.storage, tokenResponseBody);
    }
    async refreshAccessToken() {
        if (!this.storage) throw new Error("No storage available");
        try {
            const refreshToken = await this.getRefreshToken();
            if (!this.oauth2client) {
                await this.init();
            }
            if (!this.endpoints?.jwks) {
                throw new Error("No jwks endpoint");
            }
            const oauth2Client = this.oauth2client;
            try {
                const tokenResponseBody = await oauth2Client.refreshAccessToken(refreshToken);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateOauth2Tokens"])(tokenResponseBody, this.endpoints.jwks, oauth2Client, this.oauthServer);
                await this.storeTokens(tokenResponseBody);
                return tokenResponseBody;
            } catch (tokenRequestError) {
                console.error("Error during refresh token network request:", tokenRequestError);
                throw new Error(`Token refresh failed: ${tokenRequestError.message}`);
            }
        } catch (error) {
            console.warn("refreshAccessToken failed");
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearTokens"])(this.storage);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearUser"])(this.storage);
            throw error;
        }
    }
} //# sourceMappingURL=AuthenticationRefresherImpl.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/BrowserAuthenticationRefresher.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BrowserAuthenticationRefresher": (()=>BrowserAuthenticationRefresher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$AuthenticationRefresherImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/AuthenticationRefresherImpl.js [app-client] (ecmascript)");
;
;
;
class BrowserAuthenticationRefresher extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$AuthenticationRefresherImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthenticationRefresherImpl"] {
    static async build(authConfig, storage, onError, endpointOverrides) {
        const refresher = new BrowserAuthenticationRefresher(authConfig, storage, onError, endpointOverrides);
        await refresher.init();
        return refresher;
    }
    handleError(error) {
        console.error("BrowserAuthenticationRefresher: Error", error);
        this.clearAutorefresh();
        this.onError(error);
    }
    async handleRefresh() {
        try {
            // ensure only one refresh is in progress
            if (localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REFRESH_IN_PROGRESS"]) !== "true") {
                localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REFRESH_IN_PROGRESS"], "true");
                await this.refreshTokens();
                await this.setupAutorefresh(); // Reset the timeout after successful refresh
            }
        } catch (error) {
            console.error("BrowserAuthenticationRefresher: Failed to refresh tokens:", error);
            // TODO detect if refresh token has expired and if yes then logout
            this.handleError(error);
        }
    }
    async setupAutorefresh() {
        // clear any existing state
        localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REFRESH_IN_PROGRESS"]);
        if (!this.storage) throw new Error("No storage available");
        // Clear any existing timeout
        this.clearAutorefresh();
        // get expires_in
        const now = Math.floor(Date.now() / 1000);
        const expiresAt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieveAccessTokenExpiresAt"])(this.storage) || now + 60;
        // Calculate time until expiry (subtract 30 seconds as buffer)
        const bufferTime = 30; // 30 seconds
        const refreshTime = Math.max(0, expiresAt - bufferTime - now); // handle case were token has expired in the past
        const refreshTimeout = setTimeout(()=>{
            this.handleRefresh();
        }, 1000 * refreshTime);
        localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTOREFRESH_TIMEOUT_NAME"], refreshTimeout.toString());
    }
    clearAutorefresh() {
        // use local storage to store the timeout id so that if multiple instances
        // of the refresher are created they can all clear the same timeout
        const existingTimeout = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTOREFRESH_TIMEOUT_NAME"]);
        if (existingTimeout) {
            clearTimeout(Number(existingTimeout));
            localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTOREFRESH_TIMEOUT_NAME"]);
        }
    }
} //# sourceMappingURL=BrowserAuthenticationRefresher.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/AuthenticationService.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Proposals for revised versions of the SessionService AKA AuthSessionService
__turbopack_context__.s({
    "BrowserAuthenticationInitiator": (()=>BrowserAuthenticationInitiator),
    "BrowserAuthenticationService": (()=>BrowserAuthenticationService),
    "GenericAuthenticationInitiator": (()=>GenericAuthenticationInitiator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/PKCE.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/oauth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/oslo/dist/oauth2/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/browser/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$windowUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/windowUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$postMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/postMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/session.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$UserSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/UserSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$iframeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/iframeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserAuthenticationRefresher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/BrowserAuthenticationRefresher.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultSetDesignOptions = (value)=>{
    localStorage.setItem("loginAppDesign", JSON.stringify(value));
};
class BrowserAuthenticationInitiator {
    setDesignOptions;
    postMessageHandler = null;
    config;
    setDisplayMode(displayMode) {
        this.config.displayMode = displayMode;
    }
    get displayMode() {
        return this.config.displayMode;
    }
    get isServerTokenExchange() {
        return this.config.pkceConsumer instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfidentialClientPKCEConsumer"];
    }
    get state() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateState"])(this.config.displayMode, this.isServerTokenExchange);
    }
    instanceId;
    constructor(config, setDesignOptions = defaultSetDesignOptions){
        this.setDesignOptions = setDesignOptions;
        this.instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
        this.config = config;
        this.postMessageHandler = (event)=>{
            const thisURL = new URL(window.location.href);
            if (event.origin.endsWith("civic.com") || thisURL.hostname === "localhost") {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$postMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateLoginAppPostMessage"])(event.data, this.config.clientId)) {
                    return;
                }
                const loginMessage = event.data;
                if (loginMessage.type === "generatePopupFailed") {
                    this.handleLoginAppPopupFailed(loginMessage.data.url);
                    return;
                }
                if (loginMessage.type === "design") {
                    // TODO handle the design message
                    this.handleLoginAppDesignUpdate(loginMessage.data);
                    return;
                }
            }
        };
        window.addEventListener("message", this.postMessageHandler);
    }
    async handleLoginAppPopupFailed(redirectUrl) {
        console.warn("Login app popup failed open a popup, using redirect mode instead...", redirectUrl);
        window.location.href = redirectUrl;
    }
    async handleLoginAppDesignUpdate(options) {
        this.setDesignOptions(options);
    }
    // Use the config (Client ID, scopes OAuth Server, Endpoints, PKCEConsumer) to generate a new login url
    // and then use the display mode to decide how to send the user there
    async signIn(iframeRef) {
        const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateOauthLoginUrl"])({
            ...this.config,
            state: this.state
        });
        if (this.config.displayMode === "iframe") {
            const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$iframeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIframeRef"])(iframeRef);
            ref.setAttribute("src", url.toString());
        }
        if (this.config.displayMode === "redirect") {
            window.location.href = url.toString();
        }
        if (this.config.displayMode === "new_tab") {
            try {
                const popupWindow = window.open(url.toString(), "_blank");
                if (!popupWindow) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopupError"]("Failed to open popup window");
                }
            // TODO handle the 'onclose' event to clean up and reset the authStatus
            } catch (error) {
                console.error("popupWindow", error);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopupError"]("window.open has thrown: Failed to open popup window");
            }
        }
        return url;
    }
    handleIframeUrlChange(iframe, expectedUrl) {
        return new Promise((resolve, reject)=>{
            let interval = undefined;
            let timeout = undefined;
            const messageHandler = (event)=>{
                if (event.source !== iframe.contentWindow) {
                    // This message did not originate from the iframe. Ignore it.
                    return;
                }
                const message = event.data;
                if (message.source === "civicloginApp" && (message.type === "auth_error" || message.type === "auth_error_try_again")) {
                    clearInterval(interval);
                    clearTimeout(timeout);
                    window.removeEventListener("message", messageHandler);
                    reject(new Error(message.data.error || "Authentication failed"));
                    return;
                }
            };
            window.addEventListener("message", messageHandler);
            // Keep the existing URL check logic for success case
            const checkIframe = ()=>{
                try {
                    const currentUrl = iframe.contentWindow?.location.href;
                    if (currentUrl?.includes(expectedUrl)) {
                        clearInterval(interval);
                        window.removeEventListener("message", messageHandler);
                        resolve();
                    }
                } catch  {
                // Ignore cross-origin errors
                }
            };
            interval = setInterval(checkIframe, 100);
            // Timeout after 10 seconds
            timeout = setTimeout(()=>{
                clearInterval(interval);
                window.removeEventListener("message", messageHandler);
                reject(new Error("Timeout waiting for iframe URL change"));
            }, 10000);
        });
    }
    async signOut(idToken, iframeRef) {
        let url;
        const localStorage1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]();
        const state = this.state;
        if (this.isServerTokenExchange) {
            if (!this.config.logoutUrl) {
                throw new Error("logoutUrl is required for server token exchange");
            }
            url = new URL(this.config.logoutUrl, window.location.origin);
            url.searchParams.append("state", state);
        } else {
            if (!idToken) {
                throw new Error("idToken is required for non-server token exchange");
            }
            url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateOauthLogoutUrl"])({
                ...this.config,
                idToken,
                state,
                redirectUrl: this.config.logoutRedirectUrl
            });
        }
        if (this.config.displayMode === "iframe") {
            localStorage1.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOGOUT_STATE"]);
            const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$iframeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIframeRef"])(iframeRef);
            ref.setAttribute("src", url.toString());
            try {
                await this.handleIframeUrlChange(ref, this.config.logoutRedirectUrl);
                // Clear storage before calling auth server
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearTokens"])(localStorage1);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearUser"])(localStorage1);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"].emitter.emit("signOut");
            } catch (error) {
                console.log("Failed to sign out", error);
                // on logout error, trigger the logout-callback directly,
                // if it is a logout from the server, so the the session is cleared
                // and user can still sign out.
                if (this.isServerTokenExchange) {
                    url = new URL(this.config.logoutRedirectUrl, window.location.origin);
                    url.searchParams.append("state", state);
                    // Use the configured basePath if present
                    const appUrl = this.config.basePath ? `${window.location.origin}${this.config.basePath}` : window.location.origin;
                    url.searchParams.append("appUrl", encodeURIComponent(appUrl));
                    ref.setAttribute("src", url.toString());
                }
            }
        }
        if (this.config.displayMode === "redirect") {
            localStorage1.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOGOUT_STATE"], state);
            window.location.href = url.toString();
        }
        if (this.config.displayMode === "new_tab") {
            try {
                const popupWindow = window.open(url.toString(), "_blank");
                if (!popupWindow) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopupError"]("Failed to open popup window");
                }
            } catch (error) {
                console.error("popupWindow", error);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopupError"]("window.open has thrown: Failed to open popup window");
            }
        }
        return url;
    }
    cleanup() {
        if (this.postMessageHandler) {
            window.removeEventListener("message", this.postMessageHandler);
        }
    }
}
class GenericAuthenticationInitiator {
    config;
    constructor(config){
        this.config = config;
    }
    // Use the config (Client ID, scopes OAuth Server, Endpoints, PKCEConsumer) to generate a new login url
    // and simply return the url
    async signIn() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateOauthLoginUrl"])(this.config);
    }
    async signOut(idToken) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateOauthLogoutUrl"])({
            ...this.config,
            idToken
        });
    }
}
class BrowserAuthenticationService extends BrowserAuthenticationInitiator {
    pkceProducer;
    oauth2client;
    endpoints;
    // TODO WIP - perhaps we want to keep resolver and initiator separate here
    constructor(config, // Since we are running fully on the client, we produce as well as consume the PKCE challenge
    pkceProducer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserPublicClientPKCEProducer"]()){
        super({
            ...config,
            // Store and retrieve the PKCE challenge in local storage
            pkceConsumer: pkceProducer
        });
        this.pkceProducer = pkceProducer;
    }
    // TODO too much code duplication here between the browser and the server variant.
    // Suggestion for refactor: Standardise the config for AuthenticationResolvers and create a one-shot
    // function for generating an oauth2client from it
    async init() {
        // resolve oauth config
        this.endpoints = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEndpointsWithOverrides"])(this.oauthServer, this.config.endpointOverrides);
        this.oauth2client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuth2Client"](this.config.clientId, this.endpoints.auth, this.endpoints.token, {
            redirectURI: this.config.redirectUrl
        });
        return this;
    }
    async storeTokensOnLogin(tokens) {
        const clientStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeTokens"])(clientStorage, tokens);
        // delete code verifier as it should be single-use
        await clientStorage.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeVerifier"].COOKIE_NAME);
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUser"])(clientStorage);
        if (!user) {
            throw new Error("Failed to get user info");
        }
        const userSession = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$UserSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenericUserSession"](clientStorage);
        await userSession.set(user);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"].emitter.emit("signIn");
    }
    // Two responsibilities:
    // 1. resolve the auth code to get the tokens (should use library code)
    // 2. store the tokens in local storage
    async tokenExchange(code, state) {
        if (!this.oauth2client) await this.init();
        const codeVerifier = await this.pkceProducer.getCodeVerifier();
        if (!codeVerifier) throw new Error("Code verifier not found in storage");
        // exchange auth code for tokens
        const tokens = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exchangeTokens"])(code, state, this.pkceProducer, this.oauth2client, this.oauthServer, this.endpoints);
        await this.storeTokensOnLogin(tokens);
        // cleanup the browser window if needed
        const parsedDisplayMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayModeFromState"])(state, this.config.displayMode);
        if (parsedDisplayMode === "new_tab") {
            // Close the popup window
            window.addEventListener("beforeunload", ()=>{
                window?.opener?.focus();
            });
            window.close();
        }
        // these are the default oAuth params that get added to the URL in redirect which we want to remove if present
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$windowUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeParamsWithoutReload"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_OAUTH_GET_PARAMS"]);
        return tokens;
    }
    // Get the session data from local storage
    async getSessionData() {
        const storageData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieveTokens"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]());
        if (!storageData) return null;
        return {
            authenticated: !!storageData.id_token,
            idToken: storageData.id_token,
            accessToken: storageData.access_token,
            refreshToken: storageData.refresh_token,
            accessTokenExpiresAt: storageData.access_token_expires_at
        };
    }
    async tryRefreshTokens(sessionData) {
        // If token validation fails but we have a refresh token, attempt to refresh
        if (sessionData?.refreshToken) {
            try {
                const clientStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]();
                // Create a BrowserAuthenticationRefresher to handle token refresh using the build method
                const authConfig = {
                    clientId: this.config.clientId,
                    oauthServer: this.oauthServer,
                    redirectUrl: this.config.redirectUrl
                };
                // Use build method which handles initialization
                const refresher = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserAuthenticationRefresher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserAuthenticationRefresher"].build(authConfig, clientStorage, async (error)=>{
                    console.warn("Failed to refresh tokens during validation", error);
                }, this.config.endpointOverrides);
                try {
                    // Perform token refresh (no need to call init explicitly)
                    const tokenResponse = await refresher.refreshAccessToken();
                    // Return a new session with the refreshed tokens
                    const refreshedSession = await this.getSessionData();
                    if (refreshedSession && refreshedSession.authenticated) {
                        await this.storeTokensOnLogin(tokenResponse);
                        return {
                            ...refreshedSession,
                            authenticated: true
                        };
                    } else {
                        throw new Error("Failed to get refreshed session data");
                    }
                } catch (refreshApiError) {
                    console.error("Error during token refresh API call:", refreshApiError);
                    throw refreshApiError; // Re-throw to be caught by outer catch block
                }
            } catch (error) {
                const refreshError = error;
                console.error("Token refresh failed with error:", refreshError);
                // Only delete refresh token if it's invalid, not for network errors
                // which might be temporary
                if (refreshError.message.includes("invalid") || refreshError.message.includes("expired")) {
                    const clientStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]();
                    console.log("Deleting invalid refresh token");
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearTokens"])(clientStorage);
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearUser"])(clientStorage);
                }
                console.warn("Failed to refresh tokens", refreshError);
            }
        }
        return {
            ...sessionData,
            authenticated: false
        };
    }
    async validateExistingSession() {
        try {
            const sessionData = await this.getSessionData();
            if (!sessionData?.idToken || !sessionData.accessToken) {
                const refreshedSessionData = await this.tryRefreshTokens(sessionData);
                if (refreshedSessionData.authenticated) {
                    return refreshedSessionData;
                }
                const unAuthenticatedSession = {
                    ...sessionData,
                    authenticated: false
                };
                return unAuthenticatedSession;
            }
            if (!this.endpoints?.jwks || !this.oauth2client) await this.init();
            if (!this.endpoints?.jwks) {
                throw new Error("No jwks endpoint");
            }
            // this function will throw if any of the tokens are invalid
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateOauth2Tokens"])({
                access_token: sessionData.accessToken,
                id_token: sessionData.idToken,
                refresh_token: sessionData.refreshToken,
                access_token_expires_at: sessionData.accessTokenExpiresAt
            }, this.endpoints.jwks, this.oauth2client, this.oauthServer);
            return sessionData;
        } catch (error) {
            console.warn("Failed to validate existing tokens", error);
            const unAuthenticatedSession = {
                authenticated: false
            };
            const storage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearTokens"])(storage);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearUser"])(storage);
            return unAuthenticatedSession;
        }
    }
    get oauthServer() {
        return this.config.oauthServer || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"];
    }
    async getEndSessionEndpoint() {
        if (!this.endpoints) {
            return null;
        }
        return this.endpoints?.endsession;
    }
    static async build(config) {
        const resolver = new BrowserAuthenticationService(config);
        await resolver.init();
        return resolver;
    }
} //# sourceMappingURL=AuthenticationService.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useCivicAuthConfig.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCivicAuthConfig": (()=>useCivicAuthConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$CivicAuthConfigContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/CivicAuthConfigContext.js [app-client] (ecmascript)");
"use client";
;
;
// TokenProvider will use this internal context to access Config
const useCivicAuthConfig = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$CivicAuthConfigContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CivicAuthConfigContext"]);
    return context;
};
;
 //# sourceMappingURL=useCivicAuthConfig.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIframe.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useIframe": (()=>useIframe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$IframeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/IframeProvider.js [app-client] (ecmascript)");
"use client";
;
;
// TokenProvider will use this internal context to access Iframe
const useIframe = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$IframeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IframeContext"]);
    if (!context) {
        throw new Error("useIframe must be used within an IframeProvider");
    }
    return context;
};
;
 //# sourceMappingURL=useIframe.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/AuthStatusContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthStatusProvider": (()=>AuthStatusProvider),
    "useAuthStatus": (()=>useAuthStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [app-client] (ecmascript)");
"use client";
;
;
;
const AuthStatusContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthStatusProvider = ({ children })=>{
    const [authStatus, setAuthStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].UNAUTHENTICATED);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AuthStatusContext.Provider, {
        value: {
            authStatus,
            setAuthStatus
        },
        children: children
    });
};
const useAuthStatus = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthStatusContext);
    if (context === undefined) {
        throw new Error("useAuthStatus must be used within an AuthStatusProvider");
    }
    return context;
}; //# sourceMappingURL=AuthStatusContext.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useSignIn.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useSignIn": (()=>useSignIn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$AuthenticationService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/AuthenticationService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/PKCE.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCivicAuthConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useCivicAuthConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/browser/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usehooks-ts/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$AuthStatusContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/AuthStatusContext.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const SIGN_IN_TIMEOUT_MS = 9 * 60 * 1000; // 9 minutes in milliseconds
const useSignIn = ({ pkceConsumer, preSignOut, postSignOut, displayMode } = {
    displayMode: "iframe"
})=>{
    const civicAuthConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCivicAuthConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicAuthConfig"])();
    const { iframeRef, logoutIframeRef, setIframeIsVisible, iframeIsVisible, setLogoutIframeIsVisible, iframeAborted, setIframeAborted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIframe"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    // Use the shared auth status from context instead of local state
    const { authStatus, setAuthStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$AuthStatusContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStatus"])();
    const [, setDesignOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])(`loginAppDesign`, {
        colorMode: "auto"
    });
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const authStatusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].UNAUTHENTICATED);
    const authInitiator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSignIn.useMemo[authInitiator]": ()=>{
            if (!civicAuthConfig) {
                return null;
            }
            const { clientId, redirectUrl, logoutUrl, logoutRedirectUrl, nonce, oauthServer, endpoints, scopes } = civicAuthConfig;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$AuthenticationService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserAuthenticationInitiator"]({
                pkceConsumer: pkceConsumer || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserPublicClientPKCEProducer"](),
                clientId,
                redirectUrl,
                logoutUrl,
                logoutRedirectUrl,
                scopes,
                displayMode,
                oauthServer,
                endpointOverrides: endpoints,
                nonce
            }, setDesignOption);
        }
    }["useSignIn.useMemo[authInitiator]"], [
        civicAuthConfig,
        displayMode,
        pkceConsumer,
        setDesignOption
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSignIn.useEffect": ()=>{
            return ({
                "useSignIn.useEffect": ()=>{
                    // Clean up on unmount
                    if (authInitiator) {
                        authInitiator.cleanup();
                    }
                    // Clear any existing timeout
                    if (timeoutRef.current !== null) {
                        window.clearTimeout(timeoutRef.current);
                        timeoutRef.current = null;
                    }
                }
            })["useSignIn.useEffect"];
        }
    }["useSignIn.useEffect"], [
        authInitiator
    ]);
    // This effect is used to clear the tokens and user when the user signs out after a redirect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSignIn.useEffect": ()=>{
            const params = new URLSearchParams(window.location.search);
            const state = params.get("state");
            const localStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]();
            localStorage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOGOUT_STATE"]).then({
                "useSignIn.useEffect": (storedLogoutState)=>{
                    if (state && state === storedLogoutState) {
                        // Clear storage
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearTokens"])(localStorage);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearUser"])(localStorage);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"].emitter.emit("signOut");
                        // Clean up storage and URL
                        sessionStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOGOUT_STATE"]);
                        const cleanUrl = window.location.href.split("?")[0];
                        window.history.replaceState({}, document.title, cleanUrl);
                    }
                }
            }["useSignIn.useEffect"]);
        }
    }["useSignIn.useEffect"], []);
    const startSignIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSignIn.useCallback[startSignIn]": async ()=>{
            if (!authInitiator) return;
            if (![
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].UNAUTHENTICATED,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].ERROR
            ].includes(authStatus)) {
                return;
            }
            // Clear any existing timeout
            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            setAuthStatus(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].AUTHENTICATING);
            authInitiator.setDisplayMode(displayMode);
            // Set a timeout to reset authentication state and retry if still authenticating
            timeoutRef.current = window.setTimeout({
                "useSignIn.useCallback[startSignIn]": ()=>{
                    // Check the current auth status via ref when the timeout fires
                    if (authStatusRef.current === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].AUTHENTICATING) {
                        console.log("Sign-in timeout reached. Resetting authentication state.");
                        setAuthStatus(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].UNAUTHENTICATED);
                        // Call startSignIn again to restart with fresh state
                        startSignIn();
                    }
                }
            }["useSignIn.useCallback[startSignIn]"], SIGN_IN_TIMEOUT_MS);
            const useIframeRef = iframeRef?.current || null;
            await authInitiator.signIn(useIframeRef).catch({
                "useSignIn.useCallback[startSignIn]": (error)=>{
                    setAuthStatus(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].ERROR);
                    console.error("signIn error", {
                        error,
                        isPopupError: error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopupError"]
                    });
                    // if we've tried to open a popup and it has failed, then fallback to redirect mode
                    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopupError"]) {
                        setIframeIsVisible(false); // hide the iframe
                        authInitiator.cleanup(); // clear any event listeners from before
                        authInitiator.setDisplayMode("redirect"); // switch to redirect mode
                        authInitiator.signIn(useIframeRef); // retry the sign in
                    }
                }
            }["useSignIn.useCallback[startSignIn]"]);
        }
    }["useSignIn.useCallback[startSignIn]"], [
        authInitiator,
        displayMode,
        iframeRef,
        setIframeIsVisible,
        authStatus,
        setAuthStatus
    ]);
    const signIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSignIn.useCallback[signIn]": async ()=>{
            if (displayMode === "iframe") {
                setIframeIsVisible(true);
            }
            return startSignIn();
        }
    }["useSignIn.useCallback[signIn]"], [
        startSignIn,
        displayMode,
        setIframeIsVisible
    ]);
    const signOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSignIn.useCallback[signOut]": async ()=>{
            const idToken = session?.idToken;
            if (!authInitiator) return;
            setAuthStatus(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].SIGNING_OUT);
            if (displayMode === "iframe") {
                setIframeIsVisible(false);
                setLogoutIframeIsVisible(true);
            }
            try {
                await preSignOut?.();
                const useIframeRef = logoutIframeRef?.current || null;
                await authInitiator.signOut(idToken, useIframeRef).catch({
                    "useSignIn.useCallback[signOut]": (error)=>{
                        setAuthStatus(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].ERROR);
                        console.error("signOut error", {
                            error,
                            isPopupError: error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopupError"]
                        });
                        // Same popup fallback as signIn
                        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopupError"]) {
                            setLogoutIframeIsVisible(false);
                            authInitiator.cleanup();
                            authInitiator.setDisplayMode("redirect");
                            authInitiator.signOut(idToken, useIframeRef);
                        }
                    }
                }["useSignIn.useCallback[signOut]"]);
            } catch (error) {
                console.error("Signout error:", error);
            }
        }
    }["useSignIn.useCallback[signOut]"], [
        session?.idToken,
        authInitiator,
        displayMode,
        setLogoutIframeIsVisible,
        setIframeIsVisible,
        preSignOut,
        logoutIframeRef,
        setAuthStatus
    ]);
    // Keep the authStatusRef in sync with authStatus
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSignIn.useEffect": ()=>{
            authStatusRef.current = authStatus;
            if (authStatus !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].AUTHENTICATING && timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        }
    }["useSignIn.useEffect"], [
        authStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSignIn.useEffect": ()=>{
            if (session?.authenticated) {
                setAuthStatus(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].AUTHENTICATED);
                // Clear timeout when authentication is successful
                if (timeoutRef.current !== null) {
                    window.clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                }
            }
            if (displayMode === "iframe" && iframeAborted) {
                setIframeAborted(false);
                // Clear timeout when iframe is aborted
                if (timeoutRef.current !== null) {
                    window.clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                }
            }
            if (!session?.authenticated) {
                setAuthStatus(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].UNAUTHENTICATED);
            }
        }
    }["useSignIn.useEffect"], [
        displayMode,
        iframeAborted,
        session?.authenticated,
        setIframeAborted,
        setAuthStatus
    ]);
    // handle logout finished
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSignIn.useEffect": ()=>{
            if (authStatus === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].SIGNING_OUT && !session?.authenticated) {
                setAuthStatus(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].UNAUTHENTICATED);
                postSignOut?.().then({
                    "useSignIn.useEffect": ()=>{
                        setLogoutIframeIsVisible(false);
                    }
                }["useSignIn.useEffect"]);
                return;
            }
        }
    }["useSignIn.useEffect"], [
        session,
        postSignOut,
        setLogoutIframeIsVisible,
        displayMode,
        iframeIsVisible,
        authStatus,
        setAuthStatus
    ]);
    return {
        signIn,
        signOut,
        startSignIn,
        authStatus,
        displayMode
    };
};
;
 //# sourceMappingURL=useSignIn.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/LoadingIcon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LoadingIcon": (()=>LoadingIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const LoadingIcon = ({ width = "2em", height = "2em", style = {} })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        id: "civic-auth-loading-icon",
        role: "status",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("style", {
                children: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
                "aria-hidden": "true",
                style: {
                    display: "inline",
                    width,
                    height,
                    animation: "spin 1s linear infinite",
                    fill: "#4b5563",
                    color: "#e5e7eb",
                    ...style
                },
                viewBox: "0 0 100 101",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                        d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                        fill: "currentColor"
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                        d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                        fill: "currentFill",
                        opacity: "0.7"
                    })
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                style: {
                    position: "absolute",
                    width: "1px",
                    height: "1px",
                    padding: 0,
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    border: 0
                },
                children: "Loading..."
            })
        ]
    });
;
 //# sourceMappingURL=LoadingIcon.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/CloseIcon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CloseIcon": (()=>CloseIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const CloseIcon = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "lucide lucide-x",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M18 6 6 18"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "m6 6 12 12"
            })
        ]
    });
;
 //# sourceMappingURL=CloseIcon.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/SVGLoading.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SVGLoading)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const shimmerKeyframes = `
  @keyframes shimmer {
    0% {
      transform: translate(-328px, 0);
    }
    to {
      transform: translate(328px, 0);
    }
  }
`;
const shimmerStyle = {
    animation: "1s linear infinite both shimmer"
};
function SVGLoading({ backgroundColor = "#ffffff" } = {
    backgroundColor: "#ffffff"
}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("style", {
                children: shimmerKeyframes
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                viewBox: "0 0 324 28" // Adjusted viewBox height
                ,
                height: "40" // Adjusted height
                ,
                width: "100%",
                style: {
                    position: "absolute",
                    top: -6,
                    left: 0,
                    borderRadius: "0.5rem",
                    backgroundColor
                },
                className: "svg-loading",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("defs", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("linearGradient", {
                            id: "Gradient-0",
                            x2: "320",
                            y1: "15",
                            y2: "15",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("stop", {
                                    offset: "0",
                                    stopColor: backgroundColor
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("stop", {
                                    offset: ".511",
                                    stopColor: "#9A9DA6"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("stop", {
                                    offset: "1",
                                    stopColor: backgroundColor
                                })
                            ]
                        })
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                        id: "rect",
                        fill: backgroundColor,
                        d: "M0 0h328v28H0z"
                    }),
                    " ",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                        id: "shimmer",
                        fill: "url(#Gradient-0)",
                        d: "M0 -2h328v34H0z",
                        transform: "translate(-328)",
                        style: shimmerStyle
                    })
                ]
            })
        ]
    });
} //# sourceMappingURL=SVGLoading.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/CivicAuthIframe.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CivicAuthIframe": (()=>CivicAuthIframe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$iframe$2d$resizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/iframe-resizer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$SVGLoading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/SVGLoading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usehooks-ts/dist/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const CivicAuthIframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ onLoad, id }, ref)=>{
    const [isLoaded, setIsLoaded] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const { iframeMode, backgroundColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIframe"])();
    const iframeRef = ref;
    const isClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsClient"])();
    // don't render on the server as the appearance changes when the iframe is loaded from login-app post-messages
    return !isClient ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        style: {
            position: "relative",
            borderRadius: isLoaded ? "24px" : 0,
            overflow: "hidden",
            transition: "all 250ms ease",
            backgroundColor: isLoaded ? backgroundColor : "transparent",
            minHeight: iframeMode !== "embedded" ? "26px" : "auto"
        },
        children: [
            !isLoaded ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                "data-testid": "iframe-shimmer-loader",
                style: {
                    width: "100%",
                    height: "26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "13px",
                    overflow: "hidden"
                },
                children: iframeMode !== "embedded" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$SVGLoading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    backgroundColor: backgroundColor
                })
            }) : null,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                style: {
                    opacity: isLoaded ? 1 : 0,
                    transition: "opacity 250ms ease"
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$iframe$2d$resizer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IframeResizer"], {
                    ref: iframeRef,
                    id: id,
                    "data-testid": "civic-auth-iframe-with-resizer",
                    initialHeight: iframeMode !== "embedded" ? "26px" : "max-content",
                    animate: true,
                    animationDuration: 250,
                    checkOrigin: false,
                    style: {
                        width: "100%",
                        border: "none",
                        minWidth: "100%",
                        backgroundColor: isLoaded ? backgroundColor : "transparent",
                        pointerEvents: "auto"
                    },
                    onLoad: ()=>{
                        setIsLoaded(true);
                        onLoad?.();
                    },
                    allow: "camera; screen-wake-lock",
                    allowFullScreen: true
                })
            })
        ]
    });
});
CivicAuthIframe.displayName = "CivicAuthIframe";
;
 //# sourceMappingURL=CivicAuthIframe.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/AuthContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthContext": (()=>AuthContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
const AuthContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null); //# sourceMappingURL=AuthContext.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useAuth.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/AuthContext.js [app-client] (ecmascript)");
"use client";
;
;
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthContext"]);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
;
 //# sourceMappingURL=useAuth.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/providers/ClientTokenExchangeSessionProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientTokenExchangeSessionContext": (()=>ClientTokenExchangeSessionContext),
    "ClientTokenExchangeSessionProvider": (()=>ClientTokenExchangeSessionProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$AuthenticationService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/AuthenticationService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$windowUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/windowUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCurrentUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useCurrentUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCivicAuthConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useCivicAuthConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSignIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useSignIn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/browser/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$iframeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/iframeUtils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const defaultSession = {
    data: {
        authenticated: false,
        idToken: undefined,
        accessToken: undefined,
        displayMode: "iframe"
    },
    error: null,
    isLoading: false,
    doTokenExchange: null
};
// Context for exposing session specifically to the TokenProvider
const ClientTokenExchangeSessionContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultSession);
const ClientTokenExchangeSessionProvider = ({ children })=>{
    const authConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCivicAuthConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicAuthConfig"])();
    const [authService, setAuthService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { iframeRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIframe"])();
    const currentUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCurrentUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentUrl"])();
    // Use the signIn hook with iframe displayMode
    const { startSignIn, authStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSignIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignIn"])({
        displayMode: authConfig?.displayMode || "iframe"
    });
    // Add a ref to track processed codes
    const processedCodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientTokenExchangeSessionProvider.useEffect": ()=>{
            if (!currentUrl || !authConfig) return;
            const { redirectUrl, clientId, oauthServer, scopes, logoutRedirectUrl, logoutUrl } = authConfig;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$AuthenticationService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserAuthenticationService"].build({
                clientId,
                redirectUrl,
                logoutRedirectUrl,
                logoutUrl,
                oauthServer,
                scopes,
                displayMode: "iframe"
            }).then(setAuthService);
        }
    }["ClientTokenExchangeSessionProvider.useEffect"], [
        currentUrl,
        authConfig
    ]);
    const isInIframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$windowUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWindowInIframe"])(globalThis.window);
    const doTokenExchange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ClientTokenExchangeSessionProvider.useCallback[doTokenExchange]": async (inUrl)=>{
            if (!authService) return;
            const url = new URL(inUrl);
            const code = url.searchParams.get("code");
            const state = url.searchParams.get("state");
            // Create a unique key for this code/state combination
            const exchangeKey = `${code}:${state}`;
            // If we've already processed this code, skip it
            if (processedCodes.current.has(exchangeKey)) {
                console.log("Token exchange already processed for this code");
                return;
            }
            if (code && state) {
                try {
                    // Mark this code as processed before starting the exchange
                    processedCodes.current.add(exchangeKey);
                    setIsLoading(true);
                    await authService.tokenExchange(code, state);
                } catch (error) {
                    setError(error);
                    setSession({
                        authenticated: false
                    });
                }
                setIsLoading(false);
            }
        }
    }["ClientTokenExchangeSessionProvider.useCallback[doTokenExchange]"], [
        authService
    ]);
    const onSignIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ClientTokenExchangeSessionProvider.useCallback[onSignIn]": async ()=>{
            if (!authService) return;
            const session = await authService.getSessionData();
            setSession(session);
        }
    }["ClientTokenExchangeSessionProvider.useCallback[onSignIn]"], [
        authService
    ]);
    const onSignOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ClientTokenExchangeSessionProvider.useCallback[onSignOut]": ()=>{
            setSession(null);
        }
    }["ClientTokenExchangeSessionProvider.useCallback[onSignOut]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientTokenExchangeSessionProvider.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"].emitter.on("signIn", onSignIn);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"].emitter.on("signOut", onSignOut);
            return ({
                "ClientTokenExchangeSessionProvider.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"].emitter.off("signIn", onSignIn);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"].emitter.off("signOut", onSignOut);
                }
            })["ClientTokenExchangeSessionProvider.useEffect"];
        }
    }["ClientTokenExchangeSessionProvider.useEffect"], [
        onSignIn,
        onSignOut
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientTokenExchangeSessionProvider.useEffect": ()=>{
            if (!authConfig) {
                setIsLoading(true);
            } else {
                setIsLoading(false);
            }
        }
    }["ClientTokenExchangeSessionProvider.useEffect"], [
        authConfig
    ]);
    const [validationInProgress, setValidationInProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle page load or refocus
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientTokenExchangeSessionProvider.useEffect": ()=>{
            if (!authConfig?.redirectUrl || !authService || !currentUrl || isInIframe || isLoading) {
                return;
            }
            // We specifically don't want to abort token refresh operations
            // The AbortController is mainly used to prevent token exchange after unmount
            const abortController = new AbortController();
            const onPageLoad = {
                "ClientTokenExchangeSessionProvider.useEffect.onPageLoad": async ()=>{
                    if (validationInProgress || authStatus === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].SIGNING_OUT) return;
                    // if we have existing tokens, then validate them and return the session data
                    // otherwise check if we have a code in the url and exchange it for tokens
                    // if we have neither, initiate sign-in flow
                    setValidationInProgress(true);
                    try {
                        const existingSessionData = await authService.validateExistingSession();
                        if (existingSessionData.authenticated) {
                            setSession(existingSessionData);
                            return;
                        }
                        // If we have a code in the URL, attempt token exchange
                        if (new URL(currentUrl).searchParams.get("code")) {
                            await doTokenExchange(currentUrl);
                            return;
                        }
                        // No valid session and no code in URL - initiate sign-in
                        // But only if we're not in an iframe (to prevent infinite loops in embedded scenarios)
                        if (!isInIframe && authConfig) {
                            const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$iframeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIframeRef"])(iframeRef?.current, true);
                            if (ref && authConfig?.displayMode === "iframe") {
                                startSignIn();
                            }
                        }
                    } catch (error) {
                        console.error("Error during session validation:", error);
                    } finally{
                        setValidationInProgress(false);
                    }
                }
            }["ClientTokenExchangeSessionProvider.useEffect.onPageLoad"];
            onPageLoad();
            return ({
                "ClientTokenExchangeSessionProvider.useEffect": ()=>{
                    abortController.abort();
                }
            })["ClientTokenExchangeSessionProvider.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ClientTokenExchangeSessionProvider.useEffect"], [
        authConfig,
        authService,
        currentUrl,
        doTokenExchange,
        isInIframe,
        isLoading,
        startSignIn
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClientTokenExchangeSessionProvider.useMemo[value]": ()=>({
                data: session,
                error,
                isLoading,
                doTokenExchange: authService ? doTokenExchange : null
            })
    }["ClientTokenExchangeSessionProvider.useMemo[value]"], [
        session,
        error,
        isLoading,
        authService,
        doTokenExchange
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ClientTokenExchangeSessionContext.Provider, {
        value: value,
        children: children
    });
};
;
 //# sourceMappingURL=ClientTokenExchangeSessionProvider.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/useClientTokenExchangeSession.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useClientTokenExchangeSession": (()=>useClientTokenExchangeSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$providers$2f$ClientTokenExchangeSessionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/providers/ClientTokenExchangeSessionProvider.js [app-client] (ecmascript)");
"use client";
;
;
// TokenProvider will use this internal context to access session
const useClientTokenExchangeSession = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$providers$2f$ClientTokenExchangeSessionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientTokenExchangeSessionContext"]);
    if (!context) {
        throw new Error("useSession must be used within an SessionProvider");
    }
    return context;
};
;
 //# sourceMappingURL=useClientTokenExchangeSession.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useWindowFocused.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useWindowFocused": (()=>useWindowFocused)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const useWindowFocused = ()=>{
    const [isWindowFocused, setIsWindowFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWindowFocused.useEffect": ()=>{
            const handleFocus = {
                "useWindowFocused.useEffect.handleFocus": ()=>{
                    setIsWindowFocused(true);
                }
            }["useWindowFocused.useEffect.handleFocus"];
            const handleBlur = {
                "useWindowFocused.useEffect.handleBlur": ()=>{
                    setIsWindowFocused(false);
                }
            }["useWindowFocused.useEffect.handleBlur"];
            window.addEventListener("focus", handleFocus);
            window.addEventListener("blur", handleBlur);
            return ({
                "useWindowFocused.useEffect": ()=>{
                    window.removeEventListener("focus", handleFocus);
                    window.removeEventListener("blur", handleBlur);
                }
            })["useWindowFocused.useEffect"];
        }
    }["useWindowFocused.useEffect"], []);
    return {
        isWindowFocused
    };
};
;
 //# sourceMappingURL=useWindowFocused.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useRefresh.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useRefresh": (()=>useRefresh)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCivicAuthConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useCivicAuthConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/browser/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserAuthenticationRefresher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/BrowserAuthenticationRefresher.js [app-client] (ecmascript)");
;
;
;
;
const useRefresh = (session)=>{
    const authConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCivicAuthConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicAuthConfig"])();
    const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useRefresh.useMemo[storage]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]()
    }["useRefresh.useMemo[storage]"], []);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    // setup token autorefresh
    const [refresher, setRefresher] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRefresh.useEffect": ()=>{
            if (!authConfig) return;
            const abortController = new AbortController();
            const currentRefresher = refresher;
            const onError = {
                "useRefresh.useEffect.onError": async (error)=>{
                    console.error("Error refreshing token", error);
                    refresher?.clearAutorefresh();
                    setError(error);
                }
            }["useRefresh.useEffect.onError"];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserAuthenticationRefresher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserAuthenticationRefresher"].build({
                ...authConfig
            }, storage, onError).then({
                "useRefresh.useEffect": (newRefresher)=>{
                    if (abortController.signal.aborted) return;
                    currentRefresher?.clearAutorefresh();
                    setRefresher(newRefresher);
                }
            }["useRefresh.useEffect"]);
            return ({
                "useRefresh.useEffect": ()=>{
                    abortController.abort();
                    currentRefresher?.clearAutorefresh();
                }
            })["useRefresh.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useRefresh.useEffect"], [
        authConfig,
        storage
    ]); // Only depend on what actually changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRefresh.useEffect": ()=>{
            if (session?.authenticated) {
                refresher?.setupAutorefresh();
            } else {
                refresher?.clearAutorefresh();
            }
            return ({
                "useRefresh.useEffect": ()=>refresher?.clearAutorefresh()
            })["useRefresh.useEffect"];
        }
    }["useRefresh.useEffect"], [
        refresher,
        session?.authenticated
    ]);
    return {
        error
    };
};
;
 //# sourceMappingURL=useRefresh.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCivicAuthConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useCivicAuthConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useOAuthEndpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useOAuthEndpoints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCurrentUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useCurrentUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$useClientTokenExchangeSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/useClientTokenExchangeSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useWindowFocused$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useWindowFocused.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useRefresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useRefresh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSignIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useSignIn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$AuthStatusContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/AuthStatusContext.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCivicAuthConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useCivicAuthConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useOAuthEndpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useOAuthEndpoints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCurrentUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useCurrentUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$useClientTokenExchangeSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/useClientTokenExchangeSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useWindowFocused$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useWindowFocused.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useRefresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useRefresh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSignIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useSignIn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$AuthStatusContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/AuthStatusContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/CivicAuthIframeContainer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CivicAuthIframeContainer": (()=>CivicAuthIframeContainer),
    "IframeChrome": (()=>IframeChrome)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$LoadingIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/LoadingIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CloseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/CloseIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/CivicAuthIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCivicAuthConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useCivicAuthConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$useClientTokenExchangeSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/useClientTokenExchangeSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$iframeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/iframeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usehooks-ts/dist/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function NoChrome({ children }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-testid": "civic-iframe-no-chrome",
        style: {
            position: "relative"
        },
        children: children
    });
}
function IframeChrome({ children, onClose, isFrameLoaded }) {
    const { setIframeAborted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIframe"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: {
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 50,
            display: "flex",
            height: "100vh",
            width: "100vw",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(17, 24, 39, 0.5)",
            backdropFilter: "blur(4px)"
        },
        onClick: ()=>{
            setIframeAborted(true);
            onClose?.();
        },
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            "data-testid": "iframe-chrome",
            style: {
                position: "relative",
                overflow: "hidden",
                paddingLeft: "0",
                paddingRight: "0",
                paddingBottom: "0",
                width: "20rem"
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                isFrameLoaded && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                    style: {
                        position: "absolute",
                        right: "0.6rem",
                        top: "0.6rem",
                        cursor: "pointer",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "none",
                        backgroundColor: "transparent",
                        padding: "0.25rem",
                        color: "#9ca3af",
                        zIndex: 100
                    },
                    onClick: ()=>{
                        setIframeAborted(true);
                        onClose?.();
                    },
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CloseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseIcon"], {})
                }),
                children
            ]
        })
    });
}
const CivicAuthIframeContainer = ({ onClose, closeOnRedirect = true })=>{
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCivicAuthConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicAuthConfig"])();
    const [tokenExchangeUrl, setTokenExchangeUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { doTokenExchange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$useClientTokenExchangeSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTokenExchangeSession"])();
    const { iframeRef, iframeMode, backgroundColor, setIframeMounted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIframe"])();
    const [isIframeContentLoaded, setIsIframeContentLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CivicAuthIframeContainer.useEffect": ()=>{
            setIframeMounted(true);
        }
    }["CivicAuthIframeContainer.useEffect"], [
        setIframeMounted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CivicAuthIframeContainer.useEffect": ()=>{
            if (tokenExchangeUrl) {
                doTokenExchange?.(tokenExchangeUrl);
            }
        }
    }["CivicAuthIframeContainer.useEffect"], [
        doTokenExchange,
        tokenExchangeUrl
    ]);
    const processIframeUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CivicAuthIframeContainer.useCallback[processIframeUrl]": ()=>{
            if (!config) return;
            if (iframeRef && iframeRef.current) {
                const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$iframeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIframeRef"])(iframeRef.current);
                if (ref.contentWindow) {
                    try {
                        const iframeUrl = ref.contentWindow.location.href;
                        // we know that oauth has finished when the iframe redirects to our redirectUrl
                        if (iframeUrl.startsWith(config.redirectUrl)) {
                            const iframeBody = ref.contentWindow.document.body.innerHTML;
                            // If we're doing a server token exchange, we need to call the server a second time
                            // using a fetch so that we're on the same domain and cookies can be sent and read
                            // The server will use the presence of the code_verifier cookie to determine whether to do a token exchange or not.
                            // On the initial (3rd party) redirect from the auth server, the cookie won't be sent, so the server-side callback route will just render a blank page,
                            // and we'll do the exchange request from here, which will include the cookies.
                            if (iframeBody.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_EXCHANGE_TRIGGER_TEXT"])) {
                                const params = new URL(iframeUrl).searchParams;
                                const appUrl = globalThis.window?.location?.origin;
                                fetch(`${config.redirectUrl}?${params.toString()}&appUrl=${appUrl}`);
                            } else {
                                // if we're doing token-exchange in the client, we can just set the authResponseUrl
                                // to be handled by the auth provider
                                // iframeRef.current.setAttribute("src", "");
                                setTokenExchangeUrl(iframeUrl);
                            }
                            if (closeOnRedirect) onClose?.();
                            return true; // Successfully processed the URL
                        }
                    } catch  {
                    // ignore errors while waiting for redirect
                    }
                }
            }
            return false; // Haven't processed the URL yet
        }
    }["CivicAuthIframeContainer.useCallback[processIframeUrl]"], [
        closeOnRedirect,
        config,
        iframeRef,
        onClose
    ]);
    const intervalId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const handleEscape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CivicAuthIframeContainer.useCallback[handleEscape]": (event)=>{
            if (event.key === "Escape") {
                onClose?.();
            }
        }
    }["CivicAuthIframeContainer.useCallback[handleEscape]"], [
        onClose
    ]);
    // handle Escape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CivicAuthIframeContainer.useEffect": ()=>{
            window.addEventListener("keydown", handleEscape);
            return ({
                "CivicAuthIframeContainer.useEffect": ()=>window.removeEventListener("keydown", handleEscape)
            })["CivicAuthIframeContainer.useEffect"];
        }
    }["CivicAuthIframeContainer.useEffect"]);
    const handleIframeLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CivicAuthIframeContainer.useCallback[handleIframeLoad]": ()=>{
            setIsIframeContentLoaded(true);
            const iframeHasUrl = processIframeUrl();
            if (iframeHasUrl && intervalId.current) {
                clearInterval(intervalId.current);
            }
        }
    }["CivicAuthIframeContainer.useCallback[handleIframeLoad]"], [
        processIframeUrl,
        intervalId
    ]);
    const WrapperComponent = iframeMode === "embedded" ? NoChrome : IframeChrome;
    const isClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsClient"])();
    // if the iframe is embedded, we need to handle the loading state differently
    if (iframeMode === "embedded") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(WrapperComponent, {
            onClose: onClose,
            isFrameLoaded: isIframeContentLoaded,
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                style: {
                    minHeight: isIframeContentLoaded ? "auto" : "225px",
                    backgroundColor: isClient ? backgroundColor : "#8E949D",
                    borderRadius: "24px",
                    position: "relative",
                    transition: "all 0.5s ease-in-out",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden"
                },
                children: [
                    !isIframeContentLoaded && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$LoadingIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingIcon"], {})
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        style: {
                            width: "100%",
                            minWidth: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "24px",
                            overflow: "hidden",
                            opacity: isIframeContentLoaded ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CivicAuthIframe"], {
                            ref: iframeRef,
                            id: "civic-auth-iframe",
                            onLoad: handleIframeLoad
                        })
                    })
                ]
            })
        });
    }
    // if the iframe is not embedded, we can just render the iframe directly
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(WrapperComponent, {
        onClose: onClose,
        isFrameLoaded: isIframeContentLoaded,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CivicAuthIframe"], {
            ref: iframeRef,
            id: "civic-auth-iframe",
            onLoad: handleIframeLoad
        })
    });
};
;
 //# sourceMappingURL=CivicAuthIframeContainer.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/BlockDisplay.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BlockDisplay": (()=>BlockDisplay)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usehooks-ts/dist/index.js [app-client] (ecmascript)");
;
;
;
;
const BlockDisplay = ({ children })=>{
    const { backgroundColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIframe"])();
    const isClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsClient"])();
    // don't render in server-mode as the appearance changes after load
    return !isClient ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        id: "iframe-block-display-wrapper",
        style: {
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 200,
            display: "flex",
            height: "100vh",
            width: "100vw",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor
        },
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            id: "iframe-block-display",
            style: {
                position: "relative",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor
            },
            children: children
        })
    });
};
;
 //# sourceMappingURL=BlockDisplay.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/CivicAuthLogoutIframeContainer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CivicAuthLogoutIframeContainer": (()=>CivicAuthLogoutIframeContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/CivicAuthIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$LoadingIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/LoadingIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthIframeContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/CivicAuthIframeContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usehooks-ts/dist/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const CivicAuthLogoutIframeContainer = ({ isLoading = false })=>{
    const { logoutIframeRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIframe"])();
    const isClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsClient"])();
    // don't render the in server-mode as the appearance changes after load
    return !isClient ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthIframeContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IframeChrome"], {
        isFrameLoaded: true,
        children: [
            isLoading ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                id: "civic-auth-loading-icon-wrapper",
                style: {
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$LoadingIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingIcon"], {})
            }) : null,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CivicAuthIframe"], {
                ref: logoutIframeRef,
                id: "civic-auth-logout-iframe",
                onLoad: ()=>{}
            })
        ]
    });
};
;
 //# sourceMappingURL=CivicAuthLogoutIframeContainer.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/IFrameAndLoading.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IFrameAndLoading": (()=>IFrameAndLoading)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIsInIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIsInIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthIframeContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/CivicAuthIframeContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$BlockDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/BlockDisplay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$LoadingIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/LoadingIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthLogoutIframeContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/CivicAuthLogoutIframeContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useSession.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const IFrameAndLoading = ({ error, showIframeOnLogout = false })=>{
    const isInIframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIsInIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsInIframe"])();
    const [logoutIframeLoading, setLogoutIframeLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { renderIframe, iframeIsVisible, setIframeIsVisible, logoutIframeIsVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIframe"])();
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    // we show a loading overlay to block the display for the user
    // as the page that loads within the iframe will be the actual customer
    // login page just after authenticatino, which shouldn't be shown to the user during login
    // there's a small period where we're resolving the session and the iframe is showing
    const showLoadingOverlay = isInIframe;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IFrameAndLoading.useEffect": ()=>{
            const handleErrorMessage = {
                "IFrameAndLoading.useEffect.handleErrorMessage": (event)=>{
                    const thisURL = new URL(window.location.href);
                    if (!(event.origin.endsWith("civic.com") || thisURL.hostname === "localhost")) {
                        return;
                    }
                    // The login app has thrown an error, so we need to show the logout iframe
                    if (event.data?.source === "civicloginApp" && event.data?.type === "auth_error") {
                        setLogoutIframeLoading(false);
                        return;
                    }
                    setLogoutIframeLoading(true);
                }
            }["IFrameAndLoading.useEffect.handleErrorMessage"];
            window.addEventListener("message", handleErrorMessage);
            return ({
                "IFrameAndLoading.useEffect": ()=>window.removeEventListener("message", handleErrorMessage)
            })["IFrameAndLoading.useEffect"];
        }
    }["IFrameAndLoading.useEffect"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            renderIframe && !session.data?.authenticated && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                style: iframeIsVisible ? {
                    display: "block"
                } : {
                    display: "none"
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthIframeContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CivicAuthIframeContainer"], {
                    onClose: ()=>setIframeIsVisible(false)
                })
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                style: showIframeOnLogout && logoutIframeIsVisible ? {
                    display: "block"
                } : {
                    display: "none"
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthLogoutIframeContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CivicAuthLogoutIframeContainer"], {
                    isLoading: logoutIframeLoading
                })
            }),
            error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$BlockDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockDisplay"], {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    children: [
                        "Error: ",
                        error?.message
                    ]
                })
            }),
            showLoadingOverlay && !error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$BlockDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockDisplay"], {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$LoadingIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingIcon"], {})
            })
        ]
    });
};
;
 //# sourceMappingURL=IFrameAndLoading.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/NextClientAuthenticationRefresher.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NextClientAuthenticationRefresher": (()=>NextClientAuthenticationRefresher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserAuthenticationRefresher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/BrowserAuthenticationRefresher.js [app-client] (ecmascript)");
;
class NextClientAuthenticationRefresher extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserAuthenticationRefresher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserAuthenticationRefresher"] {
    static async build(authConfig, storage, onError) {
        const refresher = new NextClientAuthenticationRefresher(authConfig, storage, onError);
        return refresher;
    }
    async refreshAccessToken() {
        if (!this.authConfig) throw new Error("No auth config available");
        if (!this.authConfig.refreshUrl) throw new Error("No refresh URL available");
        try {
            const res = await fetch(this.authConfig.refreshUrl);
            const json = await res.json();
            return json.tokens;
        } catch (error) {
            console.error("NextClientAuthenticationRefresher refreshAccessToken: Failed to refresh tokens:", error);
            this.onError(error);
            throw error;
        }
    }
} //# sourceMappingURL=NextClientAuthenticationRefresher.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/hooks/useRefresh.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useRefresh": (()=>useRefresh)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCivicAuthConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useCivicAuthConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserCookieStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/BrowserCookieStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$NextClientAuthenticationRefresher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/NextClientAuthenticationRefresher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useSession.js [app-client] (ecmascript)");
;
;
;
;
;
;
const useRefresh = ()=>{
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const authConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCivicAuthConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicAuthConfig"])();
    // setup token autorefresh
    const [refresher, setRefresher] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRefresh.useEffect": ()=>{
            if (!authConfig) return;
            const abortController = new AbortController();
            const currentRefresher = refresher;
            const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(authConfig ?? {});
            const storage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserCookieStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserCookieStorage"](config.cookies.tokens.access_token);
            const onError = {
                "useRefresh.useEffect.onError": async (error)=>{
                    console.error("Error refreshing token", error);
                    refresher?.clearAutorefresh();
                    setError(error);
                }
            }["useRefresh.useEffect.onError"];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$NextClientAuthenticationRefresher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextClientAuthenticationRefresher"].build({
                ...authConfig
            }, storage, onError).then({
                "useRefresh.useEffect": (newRefresher)=>{
                    if (abortController.signal.aborted) return;
                    currentRefresher?.clearAutorefresh();
                    setRefresher(newRefresher);
                }
            }["useRefresh.useEffect"]);
            return ({
                "useRefresh.useEffect": ()=>{
                    abortController.abort();
                    currentRefresher?.clearAutorefresh();
                }
            })["useRefresh.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useRefresh.useEffect"], [
        authConfig
    ]); // Only depend on what actually changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRefresh.useEffect": ()=>{
            if (session?.authenticated) {
                refresher?.setupAutorefresh();
            } else {
                refresher?.clearAutorefresh();
            }
            return ({
                "useRefresh.useEffect": ()=>refresher?.clearAutorefresh()
            })["useRefresh.useEffect"];
        }
    }["useRefresh.useEffect"], [
        refresher,
        session?.authenticated
    ]);
    return {
        error
    };
};
;
 //# sourceMappingURL=useRefresh.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/providers/NextAuthProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CivicNextAuthProvider": (()=>CivicNextAuthProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
/**
 * A very small context provider for the user object - it takes the user object from the cookie and provides it to the app.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/PKCE.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$UserProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/UserProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$hooks$2f$useUserCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/hooks/useUserCookie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$CivicAuthConfigContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/CivicAuthConfigContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$SessionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/SessionProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$IframeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/IframeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$TokenProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/TokenProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSignIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useSignIn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCivicAuthConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useCivicAuthConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$IFrameAndLoading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/IFrameAndLoading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$BlockDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/BlockDisplay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$LoadingIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/LoadingIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIsInIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIsInIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$hooks$2f$useRefresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/hooks/useRefresh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCurrentUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useCurrentUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserCookieStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/BrowserCookieStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$iframeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/iframeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$AuthStatusContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/AuthStatusContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/usehooks-ts/dist/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const CivicNextAuthTokenProviderInternal = ({ children, displayMode = "iframe", user, fetchUser, ...props })=>{
    const { iframeMode, resolvedConfig } = props;
    const { iframeRef, setIframeIsVisible, isIframeMounted, setIframeMounted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIframe"])();
    const civicAuthConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCivicAuthConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicAuthConfig"])();
    const { challengeUrl } = resolvedConfig;
    const pkceConsumer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfidentialClientPKCEConsumer"](challengeUrl, resolvedConfig.basePath);
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const currentUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCurrentUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentUrl"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CivicNextAuthTokenProviderInternal.useEffect": ()=>{
            if (session?.authenticated) {
                setIframeMounted(false);
                // the session is authenticated, so don't show the login iframe
                setIframeIsVisible(false);
                return;
            }
        }
    }["CivicNextAuthTokenProviderInternal.useEffect"], [
        session?.authenticated,
        setIframeIsVisible,
        setIframeMounted
    ]);
    const postSignOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CivicNextAuthTokenProviderInternal.useCallback[postSignOut]": async ()=>{
            // user is signed out, manually update the user from cookies to not wait for polling
            fetchUser();
            await props?.onSignOut?.();
        }
    }["CivicNextAuthTokenProviderInternal.useCallback[postSignOut]"], [
        fetchUser,
        props
    ]);
    const { signIn, startSignIn, signOut, authStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSignIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignIn"])({
        postSignOut,
        pkceConsumer,
        displayMode
    });
    const { error: refreshError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$hooks$2f$useRefresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefresh"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CivicNextAuthTokenProviderInternal.useEffect": ()=>{
            const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$iframeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIframeRef"])(iframeRef?.current, true);
            if (isIframeMounted && civicAuthConfig && !session?.authenticated && ref && authStatus === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].UNAUTHENTICATED && displayMode === "iframe" && !currentUrl?.includes("code=")) {
                startSignIn();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CivicNextAuthTokenProviderInternal.useEffect"], [
        isIframeMounted,
        currentUrl,
        iframeMode,
        iframeRef,
        civicAuthConfig,
        session?.authenticated,
        authStatus,
        startSignIn,
        displayMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CivicNextAuthTokenProviderInternal.useEffect": ()=>{
            if (refreshError) {
                console.error("Error refreshing token, signing out...", refreshError);
                signOut();
            }
        }
    }["CivicNextAuthTokenProviderInternal.useEffect"], [
        refreshError,
        signOut
    ]);
    // if the SDK loads in an iframe, we show the loading spinner as the iframe
    // will be waiting to be minimized
    const isInIframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIsInIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsInIframe"])();
    const isClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsClient"])();
    return !isClient ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$TokenProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenProvider"], {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$UserProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserProvider"], {
            storage: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserCookieStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserCookieStorage"](),
            user: user,
            signOut: signOut,
            signIn: signIn,
            displayMode: displayMode,
            authStatus: authStatus,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$IFrameAndLoading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IFrameAndLoading"], {
                    error: null,
                    isLoading: isInIframe
                }),
                isInIframe && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$BlockDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockDisplay"], {
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$LoadingIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingIcon"], {})
                }),
                children
            ]
        })
    });
};
const CivicNextAuthProviderInternal = ({ children, ...props })=>{
    const { user, idToken, fetchUser, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$hooks$2f$useUserCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserCookie"])();
    const session = {
        authenticated: !!user,
        idToken
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$SessionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        data: session,
        isLoading: isLoading,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CivicNextAuthTokenProviderInternal, {
            ...props,
            user: user,
            idToken: idToken,
            fetchUser: fetchUser,
            isLoading: isLoading,
            children: children
        })
    });
};
const CivicNextAuthProvider = ({ children, ...props })=>{
    const resolvedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAuthConfig"])();
    const { clientId, oauthServer, callbackUrl, challengeUrl, logoutUrl, refreshUrl, logoutCallbackUrl } = resolvedConfig;
    const [redirectUrl, setRedirectUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CivicNextAuthProvider.useEffect": ()=>{
            if (typeof globalThis.window !== "undefined") {
                const appUrl = globalThis.window.location.origin;
                setRedirectUrl((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCallbackUrl"])(resolvedConfig, appUrl));
            }
        }
    }["CivicNextAuthProvider.useEffect"], [
        callbackUrl,
        resolvedConfig
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$CivicAuthConfigContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CivicAuthConfigProvider"], {
        oauthServer: oauthServer,
        clientId: clientId,
        redirectUrl: redirectUrl,
        logoutRedirectUrl: logoutCallbackUrl,
        nonce: props?.nonce,
        challengeUrl: challengeUrl,
        refreshUrl: refreshUrl,
        logoutUrl: logoutUrl,
        logoutCallbackUrl: logoutCallbackUrl,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$AuthStatusContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatusProvider"], {
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$IframeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IframeProvider"], {
                iframeMode: props.iframeMode,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CivicNextAuthProviderInternal, {
                    ...props,
                    resolvedConfig: resolvedConfig,
                    children: children
                })
            })
        })
    });
};
;
 //# sourceMappingURL=NextAuthProvider.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/cookies.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NextjsCookieStorage": (()=>NextjsCookieStorage),
    "clearAuthCookies": (()=>clearAuthCookies)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/session.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Clears all authentication cookies on server. Note, this can only be called by the server
 */ const clearAuthCookies = async ()=>{
    const cookieStorage = new NextjsCookieStorage(); // no cookie storage needed to simply clear it
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthCookies"])(cookieStorage);
};
class NextjsCookieStorage extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CookieStorage"] {
    config;
    constructor(config = {}){
        super({
            secure: true,
            httpOnly: true
        });
        this.config = config;
    }
    async get(key) {
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookies"])();
        return cookieStore.get(key)?.value || null;
    }
    async set(key, value, cookieConfigOverride = {}) {
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookies"])();
        const cookieSettings = this.config?.[key] || {
            ...this.settings
        };
        const useCookieSettings = {
            ...cookieSettings,
            ...cookieConfigOverride
        };
        cookieStore.set(key, value, useCookieSettings);
    }
    async delete(key) {
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.delete(key);
    }
}
;
 //# sourceMappingURL=cookies.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/ServerAuthenticationResolver.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ServerAuthenticationResolver": (()=>ServerAuthenticationResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/PKCE.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/oslo/dist/oauth2/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/logger.js [app-client] (ecmascript)");
;
;
;
;
;
;
const logger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loggers"].services.validation;
class ServerAuthenticationResolver {
    authConfig;
    storage;
    endpointOverrides;
    pkceProducer;
    oauth2client;
    endpoints;
    constructor(authConfig, storage, endpointOverrides){
        this.authConfig = authConfig;
        this.storage = storage;
        this.endpointOverrides = endpointOverrides;
        this.pkceProducer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenericPublicClientPKCEProducer"](storage);
    }
    /**
     * Attempts to refresh tokens if a refresh token is available
     * @param sessionData Current session data
     * @returns Updated session data
     */ async tryRefreshTokens(sessionData) {
        logger.debug("tryRefreshTokens", {
            sessionData
        });
        // If there's a refresh token, attempt to refresh tokens
        if (sessionData?.refreshToken) {
            try {
                // Only attempt refresh if we have necessary components
                if (!this.oauth2client || !this.endpoints?.jwks) {
                    await this.init();
                }
                if (!this.oauth2client || !this.endpoints?.jwks) {
                    throw new Error("Failed to initialize OAuth client for token refresh");
                }
                // Use the oauth2client to refresh the access token
                const tokenResponseBody = await this.oauth2client.refreshAccessToken(sessionData.refreshToken);
                if (!tokenResponseBody) {
                    throw new Error("Failed to get token response from refresh");
                }
                // Validate the refreshed tokens
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateOauth2Tokens"])(tokenResponseBody, this.endpoints.jwks, this.oauth2client, this.oauthServer);
                // Store the refreshed tokens
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeServerTokens"])(this.storage, tokenResponseBody);
                // Construct a refreshed session with the new tokens
                return {
                    authenticated: true,
                    idToken: tokenResponseBody.id_token,
                    accessToken: tokenResponseBody.access_token,
                    refreshToken: tokenResponseBody.refresh_token,
                    accessTokenExpiresAt: tokenResponseBody.access_token_expires_at
                };
            } catch (error) {
                logger.warn("Failed to refresh tokens", error);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearTokens"])(this.storage);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearUser"])(this.storage);
                return {
                    ...sessionData,
                    authenticated: false
                };
            }
        }
        // No refresh token available
        return {
            ...sessionData,
            authenticated: false
        };
    }
    /**
     * returns The session data if the session is valid, otherwise an unauthenticated session
     * @returns {Promise<SessionData>}
     */ async validateExistingSession(autoRefresh = true) {
        // TODO: investigate a more peformant way to validate a server session
        // other than using JWKS and JWT verification which is what validateOauth2Tokens uses
        const sessionData = await this.getSessionData();
        // If we don't have tokens, try to refresh if we have a refresh token
        if (!sessionData?.idToken || !sessionData.accessToken) {
            if (autoRefresh) {
                const refreshedSessionData = await this.tryRefreshTokens(sessionData);
                if (refreshedSessionData.authenticated) {
                    return refreshedSessionData;
                }
            }
            return {
                ...sessionData,
                authenticated: false
            };
        }
        // Initialize if needed
        if (!this.endpoints?.jwks || !this.oauth2client) await this.init();
        if (!this.endpoints?.jwks) {
            throw new Error("JWKS endpoint not found");
        }
        try {
            // Validate existing tokens
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateOauth2Tokens"])({
                access_token: sessionData.accessToken,
                id_token: sessionData.idToken,
                refresh_token: sessionData.refreshToken,
                access_token_expires_at: sessionData.accessTokenExpiresAt
            }, this.endpoints.jwks, this.oauth2client, this.oauthServer);
            return sessionData;
        } catch (error) {
            logger.warn("Error validating tokens", {
                error,
                autoRefresh
            });
            if (autoRefresh) {
                // If token validation fails, try to refresh tokens
                const refreshedSessionData = await this.tryRefreshTokens(sessionData);
                if (refreshedSessionData.authenticated) {
                    return refreshedSessionData;
                }
            }
            return {
                ...sessionData,
                authenticated: false
            };
        }
    }
    get oauthServer() {
        return this.authConfig.oauthServer || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"];
    }
    async init() {
        // resolve oauth config
        this.endpoints = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEndpointsWithOverrides"])(this.oauthServer, this.endpointOverrides);
        this.oauth2client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuth2Client"](this.authConfig.clientId, this.endpoints.auth, this.endpoints.token, {
            redirectURI: this.authConfig.redirectUrl
        });
        return this;
    }
    async tokenExchange(code, state) {
        if (!this.oauth2client) await this.init();
        const codeVerifier = await this.pkceProducer.getCodeVerifier();
        if (!codeVerifier) throw new Error("Code verifier not found in storage");
        // exchange auth code for tokens
        const tokens = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exchangeTokens"])(code, state, this.pkceProducer, this.oauth2client, this.oauthServer, this.endpoints);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeServerTokens"])(this.storage, tokens);
        // the code verifier should be single-use, so we delete it
        await this.storage.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeVerifier"].COOKIE_NAME);
        return tokens;
    }
    async getSessionData() {
        const storageData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieveTokens"])(this.storage);
        if (!storageData) return null;
        return {
            authenticated: !!storageData.id_token,
            idToken: storageData.id_token,
            accessToken: storageData.access_token,
            refreshToken: storageData.refresh_token
        };
    }
    async getEndSessionEndpoint() {
        if (!this.endpoints) {
            return null;
        }
        return this.endpoints.endsession;
    }
    static async build(authConfig, storage, endpointOverrides) {
        const resolver = new ServerAuthenticationResolver(authConfig, storage, endpointOverrides);
        await resolver.init();
        return resolver;
    }
} //# sourceMappingURL=ServerAuthenticationResolver.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTokens": (()=>getTokens),
    "getUser": (()=>getUser),
    "isLoggedIn": (()=>isLoggedIn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/cookies.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$ServerAuthenticationResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/ServerAuthenticationResolver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/session.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$routeHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/routeHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$providers$2f$NextAuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/providers/NextAuthProvider.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["printVersion"])();
;
;
;
const getAuthResolver = async ()=>{
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAuthConfig"])();
    const clientStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextjsCookieStorage"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$ServerAuthenticationResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServerAuthenticationResolver"].build({
        ...config,
        redirectUrl: config.callbackUrl
    }, clientStorage);
};
const isLoggedIn = async ()=>{
    const authResolver = await getAuthResolver();
    const existingSession = await authResolver.validateExistingSession(false);
    return existingSession.authenticated;
};
const getUser = async ()=>{
    const hasValidSession = await isLoggedIn();
    if (!hasValidSession) return null;
    const clientStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextjsCookieStorage"]();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUser"])(clientStorage);
};
const getTokens = async ()=>{
    const hasValidSession = await isLoggedIn();
    if (!hasValidSession) return null;
    const clientStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextjsCookieStorage"]();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTokens"])(clientStorage);
};
;
;
;
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/login.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildLoginUrl": (()=>buildLoginUrl),
    "isLoggedIn": (()=>isLoggedIn),
    "resolveOAuthAccessCode": (()=>resolveOAuthAccessCode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$AuthenticationService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/AuthenticationService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/PKCE.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$ServerAuthenticationResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/ServerAuthenticationResolver.js [app-client] (ecmascript)");
;
;
;
;
async function resolveOAuthAccessCode(code, state, storage, config) {
    const authSessionService = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$ServerAuthenticationResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServerAuthenticationResolver"].build({
        ...config,
        oauthServer: config.oauthServer ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"]
    }, storage, config.endpointOverrides);
    return authSessionService.tokenExchange(code, state);
}
async function isLoggedIn(storage) {
    return !!await storage.get("id_token");
}
async function buildLoginUrl(config, storage) {
    // generate a random state if not provided
    const state = config.state ?? Math.random().toString(36).substring(2);
    const scopes = config.scopes ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SCOPES"];
    const pkceProducer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenericPublicClientPKCEProducer"](storage);
    const authInitiator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$AuthenticationService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenericAuthenticationInitiator"]({
        ...config,
        state,
        scopes,
        oauthServer: config.oauthServer ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"],
        // When retrieving the PKCE challenge on the server-side, we produce it and store it in the session
        pkceConsumer: pkceProducer
    });
    return authInitiator.signIn();
} //# sourceMappingURL=login.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/NextServerAuthenticationRefresherImpl.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NextServerAuthenticationRefresherImpl": (()=>NextServerAuthenticationRefresherImpl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$AuthenticationRefresherImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/AuthenticationRefresherImpl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [app-client] (ecmascript)");
;
;
class NextServerAuthenticationRefresherImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$AuthenticationRefresherImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthenticationRefresherImpl"] {
    endpointOverrides;
    storage;
    constructor(authConfig, storage, onError, endpointOverrides){
        super(authConfig, storage, onError, endpointOverrides);
        this.endpointOverrides = endpointOverrides;
        this.storage = storage;
    }
    async storeTokens(tokenResponseBody) {
        if (!this.storage) throw new Error("No storage available");
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeServerTokens"])(this.storage, tokenResponseBody);
    }
    static async build(authConfig, storage, onError, endpointOverrides) {
        const refresher = new NextServerAuthenticationRefresherImpl(authConfig, storage, onError, endpointOverrides);
        await refresher.init();
        return refresher;
    }
} //# sourceMappingURL=NextServerAuthenticationRefresherImpl.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/routeHandler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleLogout": (()=>handleLogout),
    "handleLogoutCallback": (()=>handleLogoutCallback),
    "handler": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/oauth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/cookies.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$login$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/login.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/PKCE.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$UserSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/UserSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$NextServerAuthenticationRefresherImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/NextServerAuthenticationRefresherImpl.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const logger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loggers"].nextjs.handlers.auth;
class AuthError extends Error {
    status;
    constructor(message, status = 401){
        super(message);
        this.status = status;
        this.name = "AuthError";
    }
}
const getAppUrl = (request)=>{
    // First check the cookie as it might have the full path with base directory
    const cookieValue = request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeVerifier"].APP_URL)?.value;
    if (cookieValue) {
        // The cookie might contain URL-encoded values
        try {
            return decodeURIComponent(cookieValue);
        } catch (e) {
            logger.error("Error decoding appUrl cookie:", e);
            return cookieValue;
        }
    }
    // Fallback to query parameter
    const queryParam = request.nextUrl.searchParams.get("appUrl");
    if (queryParam) {
        try {
            return decodeURIComponent(queryParam);
        } catch (e) {
            logger.error("Error decoding appUrl query param:", e);
            return queryParam;
        }
    }
    return null;
};
const getIdToken = async (config)=>{
    const cookieStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextjsCookieStorage"](config.cookies?.tokens ?? {});
    return cookieStorage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ID_TOKEN);
};
/**
 * create a code verifier and challenge for PKCE
 * saving the verifier in a cookie for later use
 * @returns {Promise<NextResponse>}
 */ async function handleChallenge(request, config) {
    const cookieStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextjsCookieStorage"](config.cookies?.tokens ?? {});
    const pkceProducer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenericPublicClientPKCEProducer"](cookieStorage);
    const challenge = await pkceProducer.getCodeChallenge();
    const appUrl = request.nextUrl.searchParams.get("appUrl");
    if (appUrl) {
        await cookieStorage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeVerifier"].APP_URL, appUrl);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextResponse"].json({
        status: "success",
        challenge
    });
}
const getCookieStorageWithUserOverrides = (config)=>{
    const resolvedConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(config);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextjsCookieStorage"]({
        ...resolvedConfigs.cookies.tokens,
        user: resolvedConfigs.cookies.user
    });
};
async function performTokenExchangeAndSetCookies(config, code, state, appUrl) {
    const resolvedConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(config);
    // TODO This is messy, better would be to fix the config.cookies type to always be <name: settings>
    // rather than nesting the tokens-related ones *and* code-verifier inside "tokens"
    // (despite code-verifier not relating directly to tokens)
    const cookieStorage = getCookieStorageWithUserOverrides(config);
    const callbackUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCallbackUrl"])(resolvedConfigs, appUrl);
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$login$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOAuthAccessCode"])(code, state, cookieStorage, {
            ...resolvedConfigs,
            redirectUrl: callbackUrl
        });
    } catch (error) {
        logger.error("Token exchange failed:", error);
        throw new AuthError("Failed to authenticate user", 401);
    }
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getUser"])();
    if (!user) {
        throw new AuthError("Failed to get user info", 401);
    }
    const userSession = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$UserSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenericUserSession"](cookieStorage);
    await userSession.set(user);
}
async function handleRefresh(request, config) {
    const resolvedConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(config);
    const cookieStorage = getCookieStorageWithUserOverrides(config);
    const userSession = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$UserSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenericUserSession"](cookieStorage);
    try {
        const onError = (error)=>{
            logger.error("handleRefresh: Token refresh failed:", error);
            throw new AuthError("Failed to refresh tokens", 500);
        };
        const refresher = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$NextServerAuthenticationRefresherImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextServerAuthenticationRefresherImpl"].build({
            clientId: resolvedConfigs.clientId,
            oauthServer: resolvedConfigs.oauthServer,
            redirectUrl: resolvedConfigs.callbackUrl,
            refreshUrl: resolvedConfigs.refreshUrl
        }, cookieStorage, onError);
        const tokens = await refresher.refreshAccessToken();
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getUser"])();
        if (!user) {
            throw new AuthError("Failed to get user info", 401);
        }
        await userSession.set(user);
        const targetUrl = request.nextUrl.searchParams.get("targetUrl");
        if (targetUrl) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextResponse"].redirect(targetUrl);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: "success",
            tokens
        });
    } catch (error) {
        logger.error("handleRefresh: Token refresh failed:", error);
        const targetUrl = request.nextUrl.searchParams.get("targetUrl");
        if (targetUrl) {
            logger.warn("clearing tokens and redirecting to targetUrl", targetUrl);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearTokens"])(cookieStorage);
            await userSession.clear();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextResponse"].redirect(targetUrl);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: "failed"
        });
    }
}
const generateHtmlResponseWithCallback = (request, callbackUrl)=>{
    // we need to replace the URL with resolved config in case the server is hosted
    // behind a reverse proxy or load balancer
    const requestUrl = new URL(request.url);
    const fetchUrl = `${callbackUrl}?${requestUrl.searchParams.toString()}&sameDomainCallback=true`;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextResponse"](`<html lang="en">
         <body>
             <span style="display:none">
                 <script>
                     window.onload = function () {
                         // Get the complete URL including origin and path
                         // This ensures we capture any base path like /directory
                         const appUrl = window.location.href.substring(
                           0, 
                           window.location.href.indexOf("/api/auth")
                         );
                         fetch('${fetchUrl}&appUrl=' + encodeURIComponent(appUrl)).then((response) => {
                             response.json().then((jsonResponse) => {
                                 if (jsonResponse.redirectUrl) {
                                     window.location.href = jsonResponse.redirectUrl;
                                 }
                             });
                         });
                     };
                 </script>
             </span>
         </body>
     </html>
    `);
};
async function handleCallback(request, config) {
    const resolvedConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(config);
    const code = request.nextUrl.searchParams.get("code");
    const state = request.nextUrl.searchParams.get("state");
    if (!code || !state) throw new AuthError("Bad parameters", 400);
    // appUrl is passed from the client to the server in the query string
    // this is necessary because the server does not have access to the client's window.location.origin
    // and can not accurately determine the appUrl (specially if the app is behind a reverse proxy)
    const appUrl = getAppUrl(request);
    // If we have a code_verifier cookie and the appUrl, we can do a token exchange.
    // Otherwise, just render an empty page.
    // The initial redirect back from the auth server does not send cookies, because the redirect is from a 3rd-party domain.
    // The client will make an additional call to this route with cookies included, at which point we do the token exchange.
    const codeVerifier = request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeVerifier"].COOKIE_NAME);
    if (!codeVerifier || !appUrl) {
        logger.debug("handleCallback no code_verifier found", {
            state,
            serverTokenExchange: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTokenExchangeFromState"])(`${state}`)
        });
        let response = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextResponse"](`<html lang="en"><body><span style="display:none">${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_EXCHANGE_TRIGGER_TEXT"]}</span></body></html>`);
        // in server-side token exchange mode we need to launch a page that will trigger the token exchange
        // from the same domain, allowing it access to the code_verifier cookie
        // we only need to do this in redirect mode, as the iframe already triggers a client-side token exchange
        // if no code-verifier cookie is found
        if (state && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTokenExchangeFromState"])(state)) {
            logger.debug("handleCallback serverTokenExchangeFromState, launching redirect page...", {
                requestUrl: request.url,
                configCallbackUrl: resolvedConfigs.callbackUrl
            });
            // generate a page that will callback to the same domain, allowing access
            // to the code_verifier cookie and passing the appUrl.
            response = generateHtmlResponseWithCallback(request, resolvedConfigs.callbackUrl);
        }
        response.headers.set("Content-Type", "text/html; charset=utf-8");
        logger.debug(`handleCallback no code_verifier found, returning ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_EXCHANGE_TRIGGER_TEXT"]}`);
        return response;
    }
    await performTokenExchangeAndSetCookies(resolvedConfigs, code, state, appUrl);
    if (request.url.includes("sameDomainCallback=true")) {
        logger.debug("handleCallback sameDomainCallback = true, returning redirectUrl", appUrl);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: "success",
            redirectUrl: appUrl
        });
    }
    // this is the case where a 'normal' redirect is happening
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTokenExchangeFromState"])(state)) {
        logger.debug("handleCallback serverTokenExchangeFromState, redirect to appUrl", appUrl);
        if (!appUrl) {
            throw new Error("appUrl undefined. Cannot redirect.");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextResponse"].redirect(`${appUrl}`);
    }
    // return an empty HTML response so the iframe doesn't show any response
    // in the short moment between the redirect and the parent window
    // acknowledging the redirect and closing the iframe
    const response = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextResponse"](`<html lang="en"><span style="display:none">${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_EXCHANGE_SUCCESS_TEXT"]}</span></html>`);
    response.headers.set("Content-Type", "text/html; charset=utf-8");
    return response;
}
/**
 * If redirectPath is an absolute path, return it as-is.
 * Otherwise for relative paths, append it to the current domain.
 * @param redirectPath
 * @param currentBasePath
 * @returns
 */ const getAbsoluteRedirectPath = (redirectPath, currentBasePath)=>new URL(redirectPath, currentBasePath).href;
const getPostLogoutRedirectUrl = (request, config)=>{
    const { loginUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(config);
    const redirectTarget = loginUrl ?? "/";
    // if the optional loginUrl is provided and it is an absolute URL,
    // use it as the redirect target
    const isAbsoluteRedirect = /^(https?:\/\/|www\.).+/i.test(redirectTarget);
    if (isAbsoluteRedirect) {
        return redirectTarget;
    }
    // if loginUrl is not defined, the appUrl is passed from the client to the server
    // in the query string or cookies. This is necessary because the server does not
    // have access to the client's window.location and can not accurately determine
    // the appUrl (specially if the app is behind a reverse proxy).
    const appUrl = getAppUrl(request);
    if (appUrl) return getAbsoluteRedirectPath(redirectTarget, appUrl);
    return null;
};
const revalidateUrlPath = async (url)=>{
    try {
        const path = new URL(url).pathname;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revalidatePath"])(path);
    } catch (error) {
        logger.warn("Failed to revalidate path after logout:", error);
    }
};
async function handleLogout(request, config) {
    const resolvedConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(config);
    // Ensure we have the proper app URL including any base path
    const appBaseUrl = getAppUrl(request) || request.url;
    // Construct the post-logout URL with the base path included
    const postLogoutUrl = new URL(resolvedConfigs.logoutCallbackUrl, appBaseUrl);
    // read the id_token from the cookies
    const idToken = await getIdToken(resolvedConfigs);
    // read the state from the query parameters
    const state = request.nextUrl.searchParams.get("state");
    if (!state || !idToken) {
        logger.error("handleLogout: missing state or idToken", {
            state,
            idToken
        });
        // if token or state is missing, the logout call to the server will fail,
        // (token has potentially expired already) so go straight to the postLogoutUrl
        //  so the user can be signed out.
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextResponse"].redirect(`${postLogoutUrl}${state ? "?state=" + state : ""}`);
    }
    const logoutUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateOauthLogoutUrl"])({
        clientId: resolvedConfigs.clientId,
        idToken,
        state,
        redirectUrl: postLogoutUrl.href,
        oauthServer: resolvedConfigs.oauthServer
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextResponse"].redirect(`${logoutUrl.href}`);
}
async function handleLogoutCallback(request, config) {
    const resolvedConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(config);
    const state = request.nextUrl.searchParams.get("state") || "";
    const displayMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayModeFromState"])(state, "iframe");
    const canAccessCookies = !!await getIdToken(resolvedConfigs);
    const isSameDomainCallback = request.url.includes("sameDomainCallback=true");
    if (canAccessCookies || isSameDomainCallback) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthCookies"])();
    }
    let response;
    // handle logout for iframe display mode
    if (displayMode === "iframe") {
        // try to read the token from cookies. If cookies cant be read/written
        // because the request cames from a cross-origin redirect,
        // we need to show a page that will trigger the logout from the same domain
        if (canAccessCookies || isSameDomainCallback) {
            // just return success
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextResponse"].json({
                status: "success"
            });
        }
        // return a page that will trigger the logout from the same domain
        response = generateHtmlResponseWithCallback(request, resolvedConfigs.logoutCallbackUrl);
        response.headers.set("Content-Type", "text/html; charset=utf-8");
        return response;
    }
    // handle logout for non-iframe display mode
    const redirectUrl = getPostLogoutRedirectUrl(request, resolvedConfigs);
    if (redirectUrl && (canAccessCookies || isSameDomainCallback)) {
        // just redirect to the app url
        response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextResponse"].redirect(`${redirectUrl}`);
        revalidateUrlPath(redirectUrl);
    } else {
        logger.debug("handleLogout no redirectUrl found", {
            state
        });
        response = generateHtmlResponseWithCallback(request, resolvedConfigs.logoutCallbackUrl);
        response.headers.set("Content-Type", "text/html; charset=utf-8");
    }
    return response;
}
const handler = (authConfig = {})=>async (request)=>{
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(authConfig);
        try {
            const pathname = request.nextUrl.pathname;
            const pathSegments = pathname.split("/");
            const lastSegment = pathSegments[pathSegments.length - 1];
            switch(lastSegment){
                case "challenge":
                    return await handleChallenge(request, config);
                case "callback":
                    return await handleCallback(request, config);
                case "refresh":
                    return await handleRefresh(request, config);
                case "logout":
                    return await handleLogout(request, config);
                case "logoutcallback":
                    return await handleLogoutCallback(request, config);
                default:
                    throw new AuthError(`Invalid auth route: ${pathname}`, 404);
            }
        } catch (error) {
            logger.error("Auth handler error:", error);
            const status = error instanceof AuthError ? error.status : 500;
            const message = error instanceof Error ? error.message : "Authentication failed";
            const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: message
            }, {
                status
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthCookies"])();
            return response;
        }
    }; //# sourceMappingURL=routeHandler.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/cookies.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$ServerAuthenticationResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/ServerAuthenticationResolver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/session.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$routeHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/routeHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$providers$2f$NextAuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/providers/NextAuthProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/providers/NextAuthProvider.js [app-client] (ecmascript) <export CivicNextAuthProvider as CivicAuthProvider>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CivicAuthProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$providers$2f$NextAuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CivicNextAuthProvider"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$providers$2f$NextAuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/providers/NextAuthProvider.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/useUser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useUser": (()=>useUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$UserProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/UserProvider.js [app-client] (ecmascript)");
"use client";
;
;
const useUser = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$UserProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserContext"]);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
;
 //# sourceMappingURL=useUser.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$useUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/useUser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useToken.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$useUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/useUser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/providers/AuthProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthProvider": (()=>AuthProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSignIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useSignIn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCivicAuthConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useCivicAuthConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$IFrameAndLoading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/IFrameAndLoading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIsInIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIsInIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useRefresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useRefresh.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
// Global this object setup
let globalThisObject;
if (typeof window !== "undefined") {
    globalThisObject = window;
} else if (typeof global !== "undefined") {
    globalThisObject = global;
} else {
    globalThisObject = Function("return this")();
}
globalThisObject.globalThis = globalThisObject;
const AuthProvider = ({ children, onSignIn, onSignOut, pkceConsumer, displayMode = "iframe" })=>{
    const authConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useCivicAuthConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCivicAuthConfig"])();
    const { signIn, signOut, authStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSignIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignIn"])({
        preSignOut: onSignOut,
        pkceConsumer,
        displayMode
    });
    const [localSessionData, setLocalSessionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const { data: session, error: tokenExchangeError, isLoading: tokenExchangeInProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            if (session) {
                setLocalSessionData(session);
                if (session.authenticated) {
                    onSignIn?.();
                }
            }
        }
    }["AuthProvider.useEffect"], [
        onSignIn,
        session
    ]);
    const isAuthenticated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AuthProvider.useMemo[isAuthenticated]": ()=>{
            return !!localSessionData?.idToken;
        }
    }["AuthProvider.useMemo[isAuthenticated]"], [
        localSessionData
    ]);
    // The startSignIn functionality has been moved to ClientTokenExchangeSessionProvider
    // to prevent race conditions with validateExistingSession
    const isInIframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIsInIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsInIframe"])();
    // if the SDK loads in an iframe, we show the loading spinner until we know the auth state
    // but don't keep showing it indefinitely if it's just the isInIframe status
    const isLoading = tokenExchangeInProgress || !authConfig || isInIframe && !localSessionData?.authenticated;
    const { error: refreshError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useRefresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefresh"])(session);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            if (refreshError) {
                console.error("Error refreshing token, signingOut...", refreshError);
                signOut();
            }
        }
    }["AuthProvider.useEffect"], [
        refreshError,
        signOut
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AuthProvider.useMemo[value]": ()=>({
                isLoading,
                error: tokenExchangeError,
                signOut,
                authStatus,
                isAuthenticated,
                signIn,
                displayMode
            })
    }["AuthProvider.useMemo[value]"], [
        isLoading,
        tokenExchangeError,
        signOut,
        authStatus,
        isAuthenticated,
        signIn,
        displayMode
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthContext"].Provider, {
        value: value,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$IFrameAndLoading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IFrameAndLoading"], {
                error: tokenExchangeError,
                isLoading: isLoading
            }),
            children
        ]
    });
};
;
 //# sourceMappingURL=AuthProvider.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/providers/CivicAuthProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CivicAuthProvider": (()=>CivicAuthProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$providers$2f$AuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/providers/AuthProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/PKCE.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$UserProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/UserProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/browser/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$CivicAuthConfigContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/CivicAuthConfigContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$IframeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/IframeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$providers$2f$ClientTokenExchangeSessionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/providers/ClientTokenExchangeSessionProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$SessionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/SessionProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$useClientTokenExchangeSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/useClientTokenExchangeSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$TokenProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/TokenProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$AuthStatusContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/AuthStatusContext.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const WrapperUserProvider = ({ children })=>{
    const { signIn, signOut, displayMode, authStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$UserProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserProvider"], {
        storage: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageAdapter"](),
        signIn: signIn,
        signOut: signOut,
        user: null,
        authStatus: authStatus,
        displayMode: displayMode,
        children: children
    });
};
const WrapperSessionAuthProvider = ({ children, ...props })=>{
    const sessionData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$useClientTokenExchangeSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTokenExchangeSession"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$SessionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        ...sessionData,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$providers$2f$AuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
            ...props,
            pkceConsumer: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserPublicClientPKCEProducer"](),
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$TokenProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenProvider"], {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(WrapperUserProvider, {
                    children: children
                })
            })
        })
    });
};
const CivicAuthProvider = ({ children, ...props })=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$CivicAuthConfigContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CivicAuthConfigProvider"], {
        oauthServer: props?.config?.oauthServer,
        clientId: props?.clientId,
        redirectUrl: props?.redirectUrl,
        nonce: props?.nonce,
        logoutRedirectUrl: props?.logoutRedirectUrl,
        displayMode: props?.displayMode,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$AuthStatusContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatusProvider"], {
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$IframeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IframeProvider"], {
                iframeMode: props.iframeMode,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$providers$2f$ClientTokenExchangeSessionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientTokenExchangeSessionProvider"], {
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(WrapperSessionAuthProvider, {
                        ...props,
                        children: children
                    })
                })
            })
        })
    });
};
;
 //# sourceMappingURL=CivicAuthProvider.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/providers/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$UserProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/UserProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$TokenProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/TokenProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$providers$2f$AuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/providers/AuthProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$SessionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/SessionProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$providers$2f$CivicAuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/providers/CivicAuthProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/AuthContext.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/providers/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$UserProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/UserProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$TokenProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/TokenProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$providers$2f$AuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/providers/AuthProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$SessionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/SessionProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$providers$2f$CivicAuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/providers/CivicAuthProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$providers$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/providers/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$providers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/providers/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "shouldShowLoader": (()=>shouldShowLoader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [app-client] (ecmascript)");
;
const shouldShowLoader = (authStatus, displayMode, userActionStarted)=>{
    if (displayMode === "new_tab") {
        return false;
    }
    if (authStatus === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].AUTHENTICATING) {
        if (displayMode === "iframe") {
            return userActionStarted;
        }
        return true;
    }
    if (authStatus === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].SIGNING_OUT) {
        return true;
    }
    return false;
}; //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/ButtonContentOrLoader.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ButtonContentOrLoader": (()=>ButtonContentOrLoader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$LoadingIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/LoadingIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/hooks/useIframe.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const ButtonContentOrLoader = ({ authStatus, displayMode, userActionStarted, children })=>{
    const { iframeAborted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$hooks$2f$useIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIframe"])();
    const showLoader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldShowLoader"])(authStatus, displayMode, userActionStarted && !iframeAborted);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        css: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                css: {
                    visibility: showLoader ? "hidden" : "visible",
                    whiteSpace: "nowrap"
                },
                children: children
            }),
            showLoader ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                css: {
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$LoadingIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingIcon"], {
                    width: "1.5em",
                    height: "1.5em"
                })
            }) : null
        ]
    });
}; //# sourceMappingURL=ButtonContentOrLoader.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/UserButton.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "UserButton": (()=>UserButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$useUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/useUser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$ButtonContentOrLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/ButtonContentOrLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const ChevronDown = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "lucide lucide-chevron-down",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "m6 9 6 6 6-6"
        })
    });
const ChevronUp = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "lucide lucide-chevron-up",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "m18 15-6-6-6 6"
        })
    });
const UserButton = ({ className, wrapperClassName, style, wrapperStyle })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [buttonWidth, setButtonWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { user, signIn, signOut, authStatus, displayMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$useUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [userActionStarted, setUserActionStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserButton.useEffect": ()=>{
            if ([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].AUTHENTICATED,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].UNAUTHENTICATED
            ].includes(authStatus)) {
                setUserActionStarted(false);
            }
        }
    }["UserButton.useEffect"], [
        authStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserButton.useEffect": ()=>{
            if (buttonRef.current) {
                setButtonWidth(buttonRef.current.offsetWidth);
            }
        }
    }["UserButton.useEffect"], [
        isOpen
    ]);
    const handleClickOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UserButton.useCallback[handleClickOutside]": (event)=>{
            const target = event.target;
            if (buttonRef.current && dropdownRef.current && !buttonRef.current.contains(target) && !dropdownRef.current.contains(target)) {
                setIsOpen(false);
            }
        }
    }["UserButton.useCallback[handleClickOutside]"], []);
    const handleSignOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UserButton.useCallback[handleSignOut]": async ()=>{
            setIsOpen(false);
            await signOut();
        }
    }["UserButton.useCallback[handleSignOut]"], [
        signOut
    ]);
    const handleSignIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UserButton.useCallback[handleSignIn]": async ()=>{
            setIsOpen(false);
            await signIn();
        }
    }["UserButton.useCallback[handleSignIn]"], [
        signIn
    ]);
    const handleEscape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UserButton.useCallback[handleEscape]": (event)=>{
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }
    }["UserButton.useCallback[handleEscape]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserButton.useEffect": ()=>{
            if (isOpen) {
                window.addEventListener("click", handleClickOutside);
                window.addEventListener("keydown", handleEscape);
            }
            return ({
                "UserButton.useEffect": ()=>{
                    window.removeEventListener("click", handleClickOutside);
                    window.removeEventListener("keydown", handleEscape);
                }
            })["UserButton.useEffect"];
        }
    }["UserButton.useEffect"], [
        handleClickOutside,
        handleEscape,
        isOpen
    ]);
    if (user) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            css: {
                position: "relative",
                width: "auto"
            },
            className: wrapperClassName,
            style: wrapperStyle,
            id: "civic-dropdown-container",
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                    ref: buttonRef,
                    css: {
                        cursor: "pointer",
                        display: "flex",
                        minWidth: "10rem",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "0.5rem",
                        borderRadius: "9999px",
                        border: "1px solid #6b7280",
                        padding: "0.75rem 1rem",
                        color: "#6b7280",
                        transition: "background-color 0.2s",
                        "&:hover": {
                            backgroundColor: "#f3f4f6"
                        }
                    },
                    className: className,
                    style: style,
                    onClick: ()=>{
                        setUserActionStarted(true);
                        authStatus !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].SIGNING_OUT && setIsOpen((isOpen)=>!isOpen);
                    },
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            user?.picture ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                css: {
                                    position: "relative",
                                    display: "flex",
                                    height: "1.5rem",
                                    width: "1.5rem",
                                    flexShrink: 0,
                                    gap: "0.5rem",
                                    overflow: "hidden",
                                    borderRadius: "9999px"
                                },
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("img", {
                                    css: {
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "cover"
                                    },
                                    src: user.picture,
                                    alt: user?.name || user?.email
                                })
                            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                css: {
                                    display: "block"
                                }
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$ButtonContentOrLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonContentOrLoader"], {
                                authStatus: authStatus,
                                displayMode: displayMode,
                                userActionStarted: userActionStarted,
                                children: user?.name || user?.email
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                css: {
                                    display: "block",
                                    pointerEvents: "none",
                                    visibility: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldShowLoader"])(authStatus, displayMode) ? "hidden" : "visible"
                                },
                                children: isOpen ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ChevronUp, {}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ChevronDown, {})
                            })
                        ]
                    })
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    ref: dropdownRef,
                    css: isOpen ? {
                        position: "absolute",
                        left: 0,
                        width: buttonWidth || "auto",
                        marginTop: "0.5rem",
                        borderRadius: "0.5rem",
                        backgroundColor: "white",
                        padding: "0.5rem 0",
                        color: "#6b7280",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                        zIndex: 1000
                    } : {
                        display: "none"
                    },
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("ul", {
                        css: {
                            listStyleType: "none",
                            margin: 0,
                            padding: 0
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("li", {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                css: {
                                    display: "block",
                                    width: "100%",
                                    padding: "0.5rem 1rem",
                                    transition: "background-color 0.2s",
                                    background: "none",
                                    border: "none",
                                    textAlign: "center",
                                    cursor: "pointer"
                                },
                                onClick: ()=>{
                                    setUserActionStarted(true);
                                    !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldShowLoader"])(authStatus, displayMode) && handleSignOut();
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "#f3f4f6",
                                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "transparent",
                                children: "Logout"
                            })
                        })
                    })
                })
            ]
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
        ref: buttonRef,
        "data-testid": "sign-in-button",
        css: {
            cursor: "pointer",
            borderRadius: "9999px",
            border: "1px solid #6b7280",
            padding: "0.75rem 1rem",
            background: "none",
            transition: "background-color 0.2s",
            minWidth: "9em",
            "&:hover": {
                backgroundColor: "#f3f4f6"
            }
        },
        className: className,
        style: style,
        onClick: ()=>{
            setUserActionStarted(true);
            !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldShowLoader"])(authStatus, displayMode) && handleSignIn();
        },
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$ButtonContentOrLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonContentOrLoader"], {
            authStatus: authStatus,
            displayMode: displayMode,
            userActionStarted: userActionStarted,
            children: "Sign in"
        })
    });
};
;
 //# sourceMappingURL=UserButton.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/SignInButton.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SignInButton": (()=>SignInButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$useUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/useUser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$ButtonContentOrLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/ButtonContentOrLoader.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const SignInButton = ({ displayMode, className, style })=>{
    const { signIn, authStatus, displayMode: userDisplayMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$useUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const [userActionStarted, setUserActionStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // reset the userActionStarted state if the user logs out or aborts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignInButton.useEffect": ()=>{
            if ([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].AUTHENTICATED,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].UNAUTHENTICATED
            ].includes(authStatus)) {
                setUserActionStarted(false);
            }
        }
    }["SignInButton.useEffect"], [
        authStatus
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
        "data-testid": "sign-in-button",
        css: {
            borderRadius: "9999px",
            border: "1px solid #6b7280",
            padding: "0.75rem 1rem",
            transition: "background-color 0.2s",
            minWidth: "9em"
        },
        className: className,
        style: style,
        onClick: ()=>{
            setUserActionStarted(true);
            signIn(displayMode);
        },
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$ButtonContentOrLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonContentOrLoader"], {
            authStatus: authStatus,
            displayMode: displayMode || userDisplayMode,
            userActionStarted: userActionStarted,
            children: "Sign In"
        })
    });
};
;
 //# sourceMappingURL=SignInButton.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/SignOutButton.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SignOutButton": (()=>SignOutButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$useUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/useUser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$ButtonContentOrLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/ButtonContentOrLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const SignOutButton = ({ className, style })=>{
    const { signOut, authStatus, displayMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$useUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const [userActionStarted, setUserActionStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // reset the userActionStarted state if the user logs out or aborts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignOutButton.useEffect": ()=>{
            if ([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].AUTHENTICATED,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthStatus"].UNAUTHENTICATED
            ].includes(authStatus)) {
                setUserActionStarted(false);
            }
        }
    }["SignOutButton.useEffect"], [
        authStatus
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
        css: {
            borderRadius: "9999px",
            border: "1px solid #6b7280",
            padding: "0.75rem 1rem",
            transition: "background-color 0.2s"
        },
        className: className,
        style: style,
        onClick: ()=>signOut(),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$jsx$2d$runtime$2f$dist$2f$emotion$2d$react$2d$jsx$2d$runtime$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$ButtonContentOrLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonContentOrLoader"], {
            authStatus: authStatus,
            displayMode: displayMode,
            userActionStarted: userActionStarted,
            children: "Sign Out"
        })
    });
};
;
 //# sourceMappingURL=SignOutButton.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/CivicAuthIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthIframeContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/CivicAuthIframeContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$UserButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/UserButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$SignInButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/SignInButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$SignOutButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/SignOutButton.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthIframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/CivicAuthIframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthIframeContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/CivicAuthIframeContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$UserButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/UserButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$SignInButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/SignInButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$SignOutButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/SignOutButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// These are the default exports of the project.
// They are limited by design to ensure that the public API does not expose any internal implementation details.
// Do not change this without thinking carefully about the impact on the client-facing public API.
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$providers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/providers/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthIframeContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/CivicAuthIframeContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/index.js [app-client] (ecmascript) <module evaluation>"); //# sourceMappingURL=index.js.map
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["printVersion"])();
;
;
;
;
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/hooks/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$providers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/providers/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$components$2f$CivicAuthIframeContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/components/CivicAuthIframeContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$components$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/components/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$reactjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/reactjs/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/logger.js [app-client] (ecmascript)");
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["printVersion"])();
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/index.js [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=83f0c_%40civic_auth_dist_7d77409d._.js.map