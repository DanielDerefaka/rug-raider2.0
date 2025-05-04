(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/83f0c_@civic_auth_dist_af749cd4._.js", {

"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/logger.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createLogger": (()=>createLogger),
    "loggers": (()=>loggers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/debug/src/browser.js [middleware-edge] (ecmascript)");
;
const PACKAGE_NAME = "@civic/auth";
class DebugLogger {
    debugLogger;
    infoLogger;
    warnLogger;
    errorLogger;
    constructor(namespace){
        // Format: @org/package:library:component:level
        this.debugLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(`${PACKAGE_NAME}:${namespace}:debug`);
        this.infoLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(`${PACKAGE_NAME}:${namespace}:info`);
        this.warnLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(`${PACKAGE_NAME}:${namespace}:warn`);
        this.errorLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(`${PACKAGE_NAME}:${namespace}:error`);
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/utils.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/utils.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/config.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createCivicAuthPlugin": (()=>createCivicAuthPlugin),
    "defaultAuthConfig": (()=>defaultAuthConfig),
    "resolveAuthConfig": (()=>resolveAuthConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/logger.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/utils.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ts$2d$deepmerge$2f$esm$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ts-deepmerge/esm/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/utils.js [middleware-edge] (ecmascript)");
;
;
;
;
;
;
const logger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["loggers"].nextjs.handlers.auth;
const defaultServerSecure = !(("TURBOPACK compile-time value", "development") === "development");
const defaultCookiesMaxAge = 60 * 60; // 1 hour
const defaultAuthConfig = {
    oauthServer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"],
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
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ID_TOKEN]: {
                secure: defaultServerSecure,
                httpOnly: true,
                sameSite: "strict",
                path: "/",
                maxAge: defaultCookiesMaxAge
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN]: {
                secure: defaultServerSecure,
                httpOnly: true,
                sameSite: "strict",
                path: "/",
                maxAge: defaultCookiesMaxAge
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].REFRESH_TOKEN]: {
                secure: defaultServerSecure,
                httpOnly: true,
                sameSite: "strict",
                path: "/",
                maxAge: defaultCookiesMaxAge
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN_EXPIRES_AT]: {
                secure: defaultServerSecure,
                httpOnly: false,
                sameSite: "strict",
                path: "/",
                maxAge: defaultCookiesMaxAge
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["CodeVerifier"].COOKIE_NAME]: {
                secure: defaultServerSecure,
                httpOnly: true,
                sameSite: "strict",
                path: "/",
                maxAge: defaultCookiesMaxAge
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["CodeVerifier"].APP_URL]: {
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
    const configFromEnv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["withoutUndefined"])({
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
    const mergedConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ts$2d$deepmerge$2f$esm$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["merge"].withOptions({
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
        const basePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["sanitizeBasePath"])(nextConfig?.basePath || "");
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/storage.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/oauth.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-browser/v4.js [middleware-edge] (ecmascript) <export default as v4>");
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
        uuid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/jwt.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/UserSession.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GenericUserSession": (()=>GenericUserSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/jwt.js [middleware-edge] (ecmascript)");
;
;
class GenericUserSession {
    storage;
    constructor(storage){
        this.storage = storage;
    }
    async get() {
        const user = await this.storage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["UserStorage"].USER);
        return user ? JSON.parse(user) : null;
    }
    async set(user) {
        const forwardedTokens = user?.forwardedTokens ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["convertForwardedTokenFormat"])(user?.forwardedTokens) : null;
        const value = user ? JSON.stringify({
            ...user,
            forwardedTokens
        }) : "";
        await this.storage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["UserStorage"].USER, value);
    }
    async clear() {
        await this.storage.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["UserStorage"].USER);
    }
} //# sourceMappingURL=UserSession.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/oslo/dist/oauth2/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/oauth.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwks$2f$remote$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/browser/jwks/remote.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$verify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/browser/jwt/verify.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/utils.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$UserSession$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/UserSession.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$decode_jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/browser/util/decode_jwt.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/logger.js [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
;
;
const logger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["loggers"].services.validation;
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
    const endpoints = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getOauthEndpoints"])(oauthServer);
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
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuth2Client"](clientId, endpoints.auth, endpoints.token, {
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
    const parsedAccessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$decode_jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["decodeJwt"])(tokens.access_token);
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
    const parsedAccessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$decode_jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["decodeJwt"])(tokens.access_token);
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
    await storage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN_EXPIRES_AT, accessTokenExpiresAt.toString());
}
async function storeTokens(storage, tokens) {
    await storage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ID_TOKEN, tokens.id_token);
    await storage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN, tokens.access_token);
    if (tokens.refresh_token) {
        await storage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].REFRESH_TOKEN, tokens.refresh_token);
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
    const idTokenExpiry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$decode_jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["decodeJwt"])(tokens.id_token)?.exp;
    const idTokenMaxAge = idTokenExpiry ? idTokenExpiry - now : accessTokenMaxAge;
    await cookieStorage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ID_TOKEN, tokens.id_token, {
        maxAge: idTokenMaxAge
    });
    // Set access token
    await cookieStorage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN, tokens.access_token, accessTokenCookieOptions);
    // Set refresh token if present
    if (tokens.refresh_token) {
        await cookieStorage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].REFRESH_TOKEN, tokens.refresh_token, refreshTokenCookieOptions);
    }
    // Store the access token expiration timestamp
    await storage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN_EXPIRES_AT, accessTokenExpiresAt.toString(), accessTokenCookieOptions);
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
        ...Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["REFRESH_IN_PROGRESS"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AUTOREFRESH_TIMEOUT_NAME"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LOGOUT_STATE"]
    ].map(async (key)=>{
        await storage.delete(key);
    });
    await Promise.all([
        ...clearOAuthPromises
    ]);
}
async function clearAuthServerSession(storage) {
    await storage.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AUTH_SERVER_SESSION"]);
    await storage.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AUTH_SERVER_LEGACY_SESSION"]);
}
async function clearUser(storage) {
    const userSession = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$UserSession$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GenericUserSession"](storage);
    await userSession.clear();
}
async function retrieveTokens(storage) {
    const idToken = await storage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ID_TOKEN);
    const accessToken = await storage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN);
    const refreshToken = await storage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].REFRESH_TOKEN);
    const accessTokenExpiresAt = await storage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN_EXPIRES_AT);
    return {
        id_token: idToken ?? undefined,
        access_token: accessToken ?? undefined,
        refresh_token: refreshToken ?? undefined,
        access_token_expires_at: accessTokenExpiresAt !== null ? parseInt(accessTokenExpiresAt, 10) : undefined
    };
}
async function retrieveAccessTokenExpiresAt(storage) {
    return Number(await storage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ACCESS_TOKEN_EXPIRES_AT));
}
// Single JWKS instance that persists for the lifetime of the SDK session
let cachedJWKS = null;
let cachedJwksUrl = null;
async function validateOauth2Tokens(tokens, jwksEndpoint, oauth2Client, issuer) {
    // Only create a new JWKS instance if one doesn't exist yet
    if (!cachedJWKS || cachedJwksUrl !== jwksEndpoint) {
        cachedJWKS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwks$2f$remote$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createRemoteJWKSet"])(new URL(jwksEndpoint));
        cachedJwksUrl = jwksEndpoint;
    }
    // validate the ID token
    const idTokenResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$verify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["jwtVerify"])(tokens.id_token, cachedJWKS, {
        issuer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getIssuerVariations"])(issuer),
        audience: oauth2Client.clientId
    });
    // validate the access token
    const accessTokenResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$verify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["jwtVerify"])(tokens.access_token, cachedJWKS, {
        issuer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getIssuerVariations"])(issuer)
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["withoutUndefined"])({
        id_token: idTokenResponse.payload,
        access_token: accessTokenResponse.payload,
        refresh_token: tokens.refresh_token
    });
} //# sourceMappingURL=util.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/session.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearAuthCookies": (()=>clearAuthCookies),
    "getTokens": (()=>getTokens),
    "getUser": (()=>getUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$decode_jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/browser/util/decode_jwt.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [middleware-edge] (ecmascript)");
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
    const parseResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$decode_jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["decodeJwt"])(jwt);
    return parseResult;
};
async function getUser(storage) {
    const tokens = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["retrieveTokens"])(storage);
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
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["JWT_PAYLOAD_KNOWN_CLAIM_KEYS"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["tokenKeys"]
    ], userWithAdditionalTokenFields);
}
async function getTokens(storage) {
    const storageData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["retrieveTokens"])(storage);
    if (!storageData) return null;
    return {
        idToken: storageData.id_token,
        accessToken: storageData.access_token,
        refreshToken: storageData.refresh_token
    };
}
const clearAuthCookies = async (storage)=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearTokens"])(storage);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearUser"])(storage);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearAuthServerSession"])(storage);
}; //# sourceMappingURL=session.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/cookies.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NextjsCookieStorage": (()=>NextjsCookieStorage),
    "clearAuthCookies": (()=>clearAuthCookies)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/storage.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/session.js [middleware-edge] (ecmascript)");
;
;
;
;
/**
 * Clears all authentication cookies on server. Note, this can only be called by the server
 */ const clearAuthCookies = async ()=>{
    const cookieStorage = new NextjsCookieStorage(); // no cookie storage needed to simply clear it
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearAuthCookies"])(cookieStorage);
};
class NextjsCookieStorage extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["CookieStorage"] {
    config;
    constructor(config = {}){
        super({
            secure: true,
            httpOnly: true
        });
        this.config = config;
    }
    async get(key) {
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
        return cookieStore.get(key)?.value || null;
    }
    async set(key, value, cookieConfigOverride = {}) {
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
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
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.delete(key);
    }
}
;
 //# sourceMappingURL=cookies.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/browser/storage.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LocalStorageAdapter": (()=>LocalStorageAdapter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/eventemitter3/index.mjs [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/eventemitter3/index.js [middleware-edge] (ecmascript) <export default as EventEmitter>");
;
class LocalStorageAdapter {
    static _emitter;
    static get emitter() {
        if (!LocalStorageAdapter._emitter) {
            LocalStorageAdapter._emitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__["EventEmitter"]();
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/PKCE.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BrowserPublicClientPKCEProducer": (()=>BrowserPublicClientPKCEProducer),
    "ConfidentialClientPKCEConsumer": (()=>ConfidentialClientPKCEConsumer),
    "GenericPublicClientPKCEProducer": (()=>GenericPublicClientPKCEProducer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/oslo/dist/oauth2/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/browser/storage.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [middleware-edge] (ecmascript)");
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
            verifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateCodeVerifier"])();
            this.storage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["CodeVerifier"].COOKIE_NAME, verifier);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["deriveCodeChallenge"])(verifier);
    }
    // if there is already a verifier, return it,
    async getCodeVerifier() {
        return this.storage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["CodeVerifier"].COOKIE_NAME);
    }
}
class BrowserPublicClientPKCEProducer extends GenericPublicClientPKCEProducer {
    constructor(){
        super(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]());
    }
} //# sourceMappingURL=PKCE.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/ServerAuthenticationResolver.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ServerAuthenticationResolver": (()=>ServerAuthenticationResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/PKCE.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/oslo/dist/oauth2/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/logger.js [middleware-edge] (ecmascript)");
;
;
;
;
;
;
const logger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["loggers"].services.validation;
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
        this.pkceProducer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GenericPublicClientPKCEProducer"](storage);
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
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["validateOauth2Tokens"])(tokenResponseBody, this.endpoints.jwks, this.oauth2client, this.oauthServer);
                // Store the refreshed tokens
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["storeServerTokens"])(this.storage, tokenResponseBody);
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
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearTokens"])(this.storage);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearUser"])(this.storage);
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["validateOauth2Tokens"])({
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
        return this.authConfig.oauthServer || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"];
    }
    async init() {
        // resolve oauth config
        this.endpoints = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEndpointsWithOverrides"])(this.oauthServer, this.endpointOverrides);
        this.oauth2client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuth2Client"](this.authConfig.clientId, this.endpoints.auth, this.endpoints.token, {
            redirectURI: this.authConfig.redirectUrl
        });
        return this;
    }
    async tokenExchange(code, state) {
        if (!this.oauth2client) await this.init();
        const codeVerifier = await this.pkceProducer.getCodeVerifier();
        if (!codeVerifier) throw new Error("Code verifier not found in storage");
        // exchange auth code for tokens
        const tokens = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["exchangeTokens"])(code, state, this.pkceProducer, this.oauth2client, this.oauthServer, this.endpoints);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["storeServerTokens"])(this.storage, tokens);
        // the code verifier should be single-use, so we delete it
        await this.storage.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["CodeVerifier"].COOKIE_NAME);
        return tokens;
    }
    async getSessionData() {
        const storageData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["retrieveTokens"])(this.storage);
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/version.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// This is an auto-generated file. Do not edit.
__turbopack_context__.s({
    "VERSION": (()=>VERSION)
});
const VERSION = "@civic/auth:0.5.1"; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/BrowserCookieStorage.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BrowserCookieStorage": (()=>BrowserCookieStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/storage.js [middleware-edge] (ecmascript)");
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
class BrowserCookieStorage extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["CookieStorage"] {
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getVersion": (()=>getVersion),
    "printVersion": (()=>printVersion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$version$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/version.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserCookieStorage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/BrowserCookieStorage.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [middleware-edge] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
let versionPrinted = false;
const getVersion = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$version$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["VERSION"];
const printVersion = ()=>{
    if (!versionPrinted) {
        versionPrinted = true;
        if (getVersion() && "undefined" !== "undefined" && typeof document !== "undefined") {
            "TURBOPACK unreachable";
        }
    }
};
;
;
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$version$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/version.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserCookieStorage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/BrowserCookieStorage.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/providers/NextAuthProvider.js (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CivicNextAuthProvider": (()=>CivicNextAuthProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$server$2e$edge$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/server.edge.js [middleware-edge] (ecmascript)");
;
const CivicNextAuthProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$server$2e$edge$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CivicNextAuthProvider() from the server but CivicNextAuthProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/providers/NextAuthProvider.js <module evaluation>", "CivicNextAuthProvider");
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/providers/NextAuthProvider.js (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CivicNextAuthProvider": (()=>CivicNextAuthProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$server$2e$edge$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/server.edge.js [middleware-edge] (ecmascript)");
;
const CivicNextAuthProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$server$2e$edge$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CivicNextAuthProvider() from the server but CivicNextAuthProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/providers/NextAuthProvider.js", "CivicNextAuthProvider");
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/providers/NextAuthProvider.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$providers$2f$NextAuthProvider$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/providers/NextAuthProvider.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$providers$2f$NextAuthProvider$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/providers/NextAuthProvider.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$providers$2f$NextAuthProvider$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/index.js [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTokens": (()=>getTokens),
    "getUser": (()=>getUser),
    "isLoggedIn": (()=>isLoggedIn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/config.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/cookies.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$ServerAuthenticationResolver$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/ServerAuthenticationResolver.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/session.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$routeHandler$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/routeHandler.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$providers$2f$NextAuthProvider$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/providers/NextAuthProvider.js [middleware-edge] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["printVersion"])();
;
;
;
const getAuthResolver = async ()=>{
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveAuthConfig"])();
    const clientStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextjsCookieStorage"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$ServerAuthenticationResolver$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ServerAuthenticationResolver"].build({
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
    const clientStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextjsCookieStorage"]();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getUser"])(clientStorage);
};
const getTokens = async ()=>{
    const hasValidSession = await isLoggedIn();
    if (!hasValidSession) return null;
    const clientStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextjsCookieStorage"]();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getTokens"])(clientStorage);
};
;
;
;
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/types.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/windowUtil.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/postMessage.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/iframeUtils.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/GenericAuthenticationRefresher.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GenericAuthenticationRefresher": (()=>GenericAuthenticationRefresher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [middleware-edge] (ecmascript)");
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
        return this.authConfig?.oauthServer || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"];
    }
    async getRefreshToken() {
        if (!this.storage) throw new Error("No storage available");
        const tokens = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["retrieveTokens"])(this.storage);
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/AuthenticationRefresherImpl.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthenticationRefresherImpl": (()=>AuthenticationRefresherImpl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/oslo/dist/oauth2/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$GenericAuthenticationRefresher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/GenericAuthenticationRefresher.js [middleware-edge] (ecmascript)");
;
;
;
class AuthenticationRefresherImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$GenericAuthenticationRefresher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GenericAuthenticationRefresher"] {
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
        this.endpoints = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEndpointsWithOverrides"])(this.oauthServer, this.endpointOverrides);
        this.oauth2client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuth2Client"](this.authConfig.clientId, this.endpoints.auth, this.endpoints.token, {
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["storeTokens"])(this.storage, tokenResponseBody);
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
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["validateOauth2Tokens"])(tokenResponseBody, this.endpoints.jwks, oauth2Client, this.oauthServer);
                await this.storeTokens(tokenResponseBody);
                return tokenResponseBody;
            } catch (tokenRequestError) {
                console.error("Error during refresh token network request:", tokenRequestError);
                throw new Error(`Token refresh failed: ${tokenRequestError.message}`);
            }
        } catch (error) {
            console.warn("refreshAccessToken failed");
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearTokens"])(this.storage);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearUser"])(this.storage);
            throw error;
        }
    }
} //# sourceMappingURL=AuthenticationRefresherImpl.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/BrowserAuthenticationRefresher.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BrowserAuthenticationRefresher": (()=>BrowserAuthenticationRefresher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$AuthenticationRefresherImpl$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/AuthenticationRefresherImpl.js [middleware-edge] (ecmascript)");
;
;
;
class BrowserAuthenticationRefresher extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$AuthenticationRefresherImpl$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AuthenticationRefresherImpl"] {
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
            if (localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["REFRESH_IN_PROGRESS"]) !== "true") {
                localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["REFRESH_IN_PROGRESS"], "true");
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
        localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["REFRESH_IN_PROGRESS"]);
        if (!this.storage) throw new Error("No storage available");
        // Clear any existing timeout
        this.clearAutorefresh();
        // get expires_in
        const now = Math.floor(Date.now() / 1000);
        const expiresAt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["retrieveAccessTokenExpiresAt"])(this.storage) || now + 60;
        // Calculate time until expiry (subtract 30 seconds as buffer)
        const bufferTime = 30; // 30 seconds
        const refreshTime = Math.max(0, expiresAt - bufferTime - now); // handle case were token has expired in the past
        const refreshTimeout = setTimeout(()=>{
            this.handleRefresh();
        }, 1000 * refreshTime);
        localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AUTOREFRESH_TIMEOUT_NAME"], refreshTimeout.toString());
    }
    clearAutorefresh() {
        // use local storage to store the timeout id so that if multiple instances
        // of the refresher are created they can all clear the same timeout
        const existingTimeout = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AUTOREFRESH_TIMEOUT_NAME"]);
        if (existingTimeout) {
            clearTimeout(Number(existingTimeout));
            localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AUTOREFRESH_TIMEOUT_NAME"]);
        }
    }
} //# sourceMappingURL=BrowserAuthenticationRefresher.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/AuthenticationService.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Proposals for revised versions of the SessionService AKA AuthSessionService
__turbopack_context__.s({
    "BrowserAuthenticationInitiator": (()=>BrowserAuthenticationInitiator),
    "BrowserAuthenticationService": (()=>BrowserAuthenticationService),
    "GenericAuthenticationInitiator": (()=>GenericAuthenticationInitiator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/PKCE.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/oauth.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/oslo/dist/oauth2/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/browser/storage.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/types.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$windowUtil$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/windowUtil.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$postMessage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/postMessage.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/session.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$UserSession$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/UserSession.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$iframeUtils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/iframeUtils.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-browser/v4.js [middleware-edge] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserAuthenticationRefresher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/BrowserAuthenticationRefresher.js [middleware-edge] (ecmascript)");
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
        return this.config.pkceConsumer instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConfidentialClientPKCEConsumer"];
    }
    get state() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateState"])(this.config.displayMode, this.isServerTokenExchange);
    }
    instanceId;
    constructor(config, setDesignOptions = defaultSetDesignOptions){
        this.setDesignOptions = setDesignOptions;
        this.instanceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
        this.config = config;
        this.postMessageHandler = (event)=>{
            const thisURL = new URL(window.location.href);
            if (event.origin.endsWith("civic.com") || thisURL.hostname === "localhost") {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$postMessage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["validateLoginAppPostMessage"])(event.data, this.config.clientId)) {
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
        const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateOauthLoginUrl"])({
            ...this.config,
            state: this.state
        });
        if (this.config.displayMode === "iframe") {
            const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$iframeUtils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getIframeRef"])(iframeRef);
            ref.setAttribute("src", url.toString());
        }
        if (this.config.displayMode === "redirect") {
            window.location.href = url.toString();
        }
        if (this.config.displayMode === "new_tab") {
            try {
                const popupWindow = window.open(url.toString(), "_blank");
                if (!popupWindow) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PopupError"]("Failed to open popup window");
                }
            // TODO handle the 'onclose' event to clean up and reset the authStatus
            } catch (error) {
                console.error("popupWindow", error);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PopupError"]("window.open has thrown: Failed to open popup window");
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
        const localStorage1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]();
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
            url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateOauthLogoutUrl"])({
                ...this.config,
                idToken,
                state,
                redirectUrl: this.config.logoutRedirectUrl
            });
        }
        if (this.config.displayMode === "iframe") {
            localStorage1.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LOGOUT_STATE"]);
            const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$iframeUtils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getIframeRef"])(iframeRef);
            ref.setAttribute("src", url.toString());
            try {
                await this.handleIframeUrlChange(ref, this.config.logoutRedirectUrl);
                // Clear storage before calling auth server
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearTokens"])(localStorage1);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearUser"])(localStorage1);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LocalStorageAdapter"].emitter.emit("signOut");
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
            localStorage1.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LOGOUT_STATE"], state);
            window.location.href = url.toString();
        }
        if (this.config.displayMode === "new_tab") {
            try {
                const popupWindow = window.open(url.toString(), "_blank");
                if (!popupWindow) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PopupError"]("Failed to open popup window");
                }
            } catch (error) {
                console.error("popupWindow", error);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PopupError"]("window.open has thrown: Failed to open popup window");
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateOauthLoginUrl"])(this.config);
    }
    async signOut(idToken) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateOauthLogoutUrl"])({
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
    pkceProducer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BrowserPublicClientPKCEProducer"]()){
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
        this.endpoints = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEndpointsWithOverrides"])(this.oauthServer, this.config.endpointOverrides);
        this.oauth2client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$oslo$2f$dist$2f$oauth2$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuth2Client"](this.config.clientId, this.endpoints.auth, this.endpoints.token, {
            redirectURI: this.config.redirectUrl
        });
        return this;
    }
    async storeTokensOnLogin(tokens) {
        const clientStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["storeTokens"])(clientStorage, tokens);
        // delete code verifier as it should be single-use
        await clientStorage.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["CodeVerifier"].COOKIE_NAME);
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getUser"])(clientStorage);
        if (!user) {
            throw new Error("Failed to get user info");
        }
        const userSession = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$UserSession$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GenericUserSession"](clientStorage);
        await userSession.set(user);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LocalStorageAdapter"].emitter.emit("signIn");
    }
    // Two responsibilities:
    // 1. resolve the auth code to get the tokens (should use library code)
    // 2. store the tokens in local storage
    async tokenExchange(code, state) {
        if (!this.oauth2client) await this.init();
        const codeVerifier = await this.pkceProducer.getCodeVerifier();
        if (!codeVerifier) throw new Error("Code verifier not found in storage");
        // exchange auth code for tokens
        const tokens = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["exchangeTokens"])(code, state, this.pkceProducer, this.oauth2client, this.oauthServer, this.endpoints);
        await this.storeTokensOnLogin(tokens);
        // cleanup the browser window if needed
        const parsedDisplayMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["displayModeFromState"])(state, this.config.displayMode);
        if (parsedDisplayMode === "new_tab") {
            // Close the popup window
            window.addEventListener("beforeunload", ()=>{
                window?.opener?.focus();
            });
            window.close();
        }
        // these are the default oAuth params that get added to the URL in redirect which we want to remove if present
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$windowUtil$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["removeParamsWithoutReload"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_OAUTH_GET_PARAMS"]);
        return tokens;
    }
    // Get the session data from local storage
    async getSessionData() {
        const storageData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["retrieveTokens"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]());
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
                const clientStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]();
                // Create a BrowserAuthenticationRefresher to handle token refresh using the build method
                const authConfig = {
                    clientId: this.config.clientId,
                    oauthServer: this.oauthServer,
                    redirectUrl: this.config.redirectUrl
                };
                // Use build method which handles initialization
                const refresher = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$BrowserAuthenticationRefresher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BrowserAuthenticationRefresher"].build(authConfig, clientStorage, async (error)=>{
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
                    const clientStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]();
                    console.log("Deleting invalid refresh token");
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearTokens"])(clientStorage);
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearUser"])(clientStorage);
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["validateOauth2Tokens"])({
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
            const storage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$browser$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LocalStorageAdapter"]();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearTokens"])(storage);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearUser"])(storage);
            return unAuthenticatedSession;
        }
    }
    get oauthServer() {
        return this.config.oauthServer || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"];
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
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/login.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildLoginUrl": (()=>buildLoginUrl),
    "isLoggedIn": (()=>isLoggedIn),
    "resolveOAuthAccessCode": (()=>resolveOAuthAccessCode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$AuthenticationService$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/AuthenticationService.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/PKCE.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$ServerAuthenticationResolver$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/ServerAuthenticationResolver.js [middleware-edge] (ecmascript)");
;
;
;
;
async function resolveOAuthAccessCode(code, state, storage, config) {
    const authSessionService = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$ServerAuthenticationResolver$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ServerAuthenticationResolver"].build({
        ...config,
        oauthServer: config.oauthServer ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"]
    }, storage, config.endpointOverrides);
    return authSessionService.tokenExchange(code, state);
}
async function isLoggedIn(storage) {
    return !!await storage.get("id_token");
}
async function buildLoginUrl(config, storage) {
    // generate a random state if not provided
    const state = config.state ?? Math.random().toString(36).substring(2);
    const scopes = config.scopes ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_SCOPES"];
    const pkceProducer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GenericPublicClientPKCEProducer"](storage);
    const authInitiator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$AuthenticationService$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GenericAuthenticationInitiator"]({
        ...config,
        state,
        scopes,
        oauthServer: config.oauthServer ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"],
        // When retrieving the PKCE challenge on the server-side, we produce it and store it in the session
        pkceConsumer: pkceProducer
    });
    return authInitiator.signIn();
} //# sourceMappingURL=login.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/NextServerAuthenticationRefresherImpl.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NextServerAuthenticationRefresherImpl": (()=>NextServerAuthenticationRefresherImpl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$AuthenticationRefresherImpl$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/AuthenticationRefresherImpl.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [middleware-edge] (ecmascript)");
;
;
class NextServerAuthenticationRefresherImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$AuthenticationRefresherImpl$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AuthenticationRefresherImpl"] {
    endpointOverrides;
    storage;
    constructor(authConfig, storage, onError, endpointOverrides){
        super(authConfig, storage, onError, endpointOverrides);
        this.endpointOverrides = endpointOverrides;
        this.storage = storage;
    }
    async storeTokens(tokenResponseBody) {
        if (!this.storage) throw new Error("No storage available");
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["storeServerTokens"])(this.storage, tokenResponseBody);
    }
    static async build(authConfig, storage, onError, endpointOverrides) {
        const refresher = new NextServerAuthenticationRefresherImpl(authConfig, storage, onError, endpointOverrides);
        await refresher.init();
        return refresher;
    }
} //# sourceMappingURL=NextServerAuthenticationRefresherImpl.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/routeHandler.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleLogout": (()=>handleLogout),
    "handleLogoutCallback": (()=>handleLogoutCallback),
    "handler": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/logger.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/oauth.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/config.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/cookies.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/utils.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$login$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/login.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/PKCE.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$UserSession$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/UserSession.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$NextServerAuthenticationRefresherImpl$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/NextServerAuthenticationRefresherImpl.js [middleware-edge] (ecmascript)");
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
const logger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["loggers"].nextjs.handlers.auth;
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
    const cookieValue = request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["CodeVerifier"].APP_URL)?.value;
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
    const cookieStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextjsCookieStorage"](config.cookies?.tokens ?? {});
    return cookieStorage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ID_TOKEN);
};
/**
 * create a code verifier and challenge for PKCE
 * saving the verifier in a cookie for later use
 * @returns {Promise<NextResponse>}
 */ async function handleChallenge(request, config) {
    const cookieStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextjsCookieStorage"](config.cookies?.tokens ?? {});
    const pkceProducer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GenericPublicClientPKCEProducer"](cookieStorage);
    const challenge = await pkceProducer.getCodeChallenge();
    const appUrl = request.nextUrl.searchParams.get("appUrl");
    if (appUrl) {
        await cookieStorage.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["CodeVerifier"].APP_URL, appUrl);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
        status: "success",
        challenge
    });
}
const getCookieStorageWithUserOverrides = (config)=>{
    const resolvedConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(config);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextjsCookieStorage"]({
        ...resolvedConfigs.cookies.tokens,
        user: resolvedConfigs.cookies.user
    });
};
async function performTokenExchangeAndSetCookies(config, code, state, appUrl) {
    const resolvedConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(config);
    // TODO This is messy, better would be to fix the config.cookies type to always be <name: settings>
    // rather than nesting the tokens-related ones *and* code-verifier inside "tokens"
    // (despite code-verifier not relating directly to tokens)
    const cookieStorage = getCookieStorageWithUserOverrides(config);
    const callbackUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$utils$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveCallbackUrl"])(resolvedConfigs, appUrl);
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$login$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveOAuthAccessCode"])(code, state, cookieStorage, {
            ...resolvedConfigs,
            redirectUrl: callbackUrl
        });
    } catch (error) {
        logger.error("Token exchange failed:", error);
        throw new AuthError("Failed to authenticate user", 401);
    }
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getUser"])();
    if (!user) {
        throw new AuthError("Failed to get user info", 401);
    }
    const userSession = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$UserSession$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GenericUserSession"](cookieStorage);
    await userSession.set(user);
}
async function handleRefresh(request, config) {
    const resolvedConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(config);
    const cookieStorage = getCookieStorageWithUserOverrides(config);
    const userSession = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$UserSession$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GenericUserSession"](cookieStorage);
    try {
        const onError = (error)=>{
            logger.error("handleRefresh: Token refresh failed:", error);
            throw new AuthError("Failed to refresh tokens", 500);
        };
        const refresher = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$NextServerAuthenticationRefresherImpl$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextServerAuthenticationRefresherImpl"].build({
            clientId: resolvedConfigs.clientId,
            oauthServer: resolvedConfigs.oauthServer,
            redirectUrl: resolvedConfigs.callbackUrl,
            refreshUrl: resolvedConfigs.refreshUrl
        }, cookieStorage, onError);
        const tokens = await refresher.refreshAccessToken();
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getUser"])();
        if (!user) {
            throw new AuthError("Failed to get user info", 401);
        }
        await userSession.set(user);
        const targetUrl = request.nextUrl.searchParams.get("targetUrl");
        if (targetUrl) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(targetUrl);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: "success",
            tokens
        });
    } catch (error) {
        logger.error("handleRefresh: Token refresh failed:", error);
        const targetUrl = request.nextUrl.searchParams.get("targetUrl");
        if (targetUrl) {
            logger.warn("clearing tokens and redirecting to targetUrl", targetUrl);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearTokens"])(cookieStorage);
            await userSession.clear();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(targetUrl);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: "failed"
        });
    }
}
const generateHtmlResponseWithCallback = (request, callbackUrl)=>{
    // we need to replace the URL with resolved config in case the server is hosted
    // behind a reverse proxy or load balancer
    const requestUrl = new URL(request.url);
    const fetchUrl = `${callbackUrl}?${requestUrl.searchParams.toString()}&sameDomainCallback=true`;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"](`<html lang="en">
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
    const resolvedConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(config);
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
    const codeVerifier = request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["CodeVerifier"].COOKIE_NAME);
    if (!codeVerifier || !appUrl) {
        logger.debug("handleCallback no code_verifier found", {
            state,
            serverTokenExchange: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["serverTokenExchangeFromState"])(`${state}`)
        });
        let response = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"](`<html lang="en"><body><span style="display:none">${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TOKEN_EXCHANGE_TRIGGER_TEXT"]}</span></body></html>`);
        // in server-side token exchange mode we need to launch a page that will trigger the token exchange
        // from the same domain, allowing it access to the code_verifier cookie
        // we only need to do this in redirect mode, as the iframe already triggers a client-side token exchange
        // if no code-verifier cookie is found
        if (state && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["serverTokenExchangeFromState"])(state)) {
            logger.debug("handleCallback serverTokenExchangeFromState, launching redirect page...", {
                requestUrl: request.url,
                configCallbackUrl: resolvedConfigs.callbackUrl
            });
            // generate a page that will callback to the same domain, allowing access
            // to the code_verifier cookie and passing the appUrl.
            response = generateHtmlResponseWithCallback(request, resolvedConfigs.callbackUrl);
        }
        response.headers.set("Content-Type", "text/html; charset=utf-8");
        logger.debug(`handleCallback no code_verifier found, returning ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TOKEN_EXCHANGE_TRIGGER_TEXT"]}`);
        return response;
    }
    await performTokenExchangeAndSetCookies(resolvedConfigs, code, state, appUrl);
    if (request.url.includes("sameDomainCallback=true")) {
        logger.debug("handleCallback sameDomainCallback = true, returning redirectUrl", appUrl);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: "success",
            redirectUrl: appUrl
        });
    }
    // this is the case where a 'normal' redirect is happening
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["serverTokenExchangeFromState"])(state)) {
        logger.debug("handleCallback serverTokenExchangeFromState, redirect to appUrl", appUrl);
        if (!appUrl) {
            throw new Error("appUrl undefined. Cannot redirect.");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(`${appUrl}`);
    }
    // return an empty HTML response so the iframe doesn't show any response
    // in the short moment between the redirect and the parent window
    // acknowledging the redirect and closing the iframe
    const response = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"](`<html lang="en"><span style="display:none">${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TOKEN_EXCHANGE_SUCCESS_TEXT"]}</span></html>`);
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
    const { loginUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(config);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["revalidatePath"])(path);
    } catch (error) {
        logger.warn("Failed to revalidate path after logout:", error);
    }
};
async function handleLogout(request, config) {
    const resolvedConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(config);
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(`${postLogoutUrl}${state ? "?state=" + state : ""}`);
    }
    const logoutUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateOauthLogoutUrl"])({
        clientId: resolvedConfigs.clientId,
        idToken,
        state,
        redirectUrl: postLogoutUrl.href,
        oauthServer: resolvedConfigs.oauthServer
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(`${logoutUrl.href}`);
}
async function handleLogoutCallback(request, config) {
    const resolvedConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(config);
    const state = request.nextUrl.searchParams.get("state") || "";
    const displayMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$oauth$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["displayModeFromState"])(state, "iframe");
    const canAccessCookies = !!await getIdToken(resolvedConfigs);
    const isSameDomainCallback = request.url.includes("sameDomainCallback=true");
    if (canAccessCookies || isSameDomainCallback) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearAuthCookies"])();
    }
    let response;
    // handle logout for iframe display mode
    if (displayMode === "iframe") {
        // try to read the token from cookies. If cookies cant be read/written
        // because the request cames from a cross-origin redirect,
        // we need to show a page that will trigger the logout from the same domain
        if (canAccessCookies || isSameDomainCallback) {
            // just return success
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
        response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(`${redirectUrl}`);
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
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveAuthConfig"])(authConfig);
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
            const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: message
            }, {
                status
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearAuthCookies"])();
            return response;
        }
    }; //# sourceMappingURL=routeHandler.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/index.js [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/config.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/cookies.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$ServerAuthenticationResolver$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/ServerAuthenticationResolver.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/session.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$routeHandler$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/routeHandler.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$providers$2f$NextAuthProvider$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/providers/NextAuthProvider.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$nextjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/nextjs/index.js [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/logout.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildLogoutRedirectUrl": (()=>buildLogoutRedirectUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/PKCE.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$AuthenticationService$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/services/AuthenticationService.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/types.js [middleware-edge] (ecmascript)");
;
;
;
;
async function buildLogoutRedirectUrl(config, storage) {
    // generate a random state if not provided
    const state = config.state ?? Math.random().toString(36).substring(2);
    const scopes = config.scopes ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_SCOPES"];
    const pkceProducer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$PKCE$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GenericPublicClientPKCEProducer"](storage);
    const authInitiator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$services$2f$AuthenticationService$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GenericAuthenticationInitiator"]({
        ...config,
        state,
        scopes,
        oauthServer: config.oauthServer ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"],
        pkceConsumer: pkceProducer,
        redirectUrl: config.postLogoutRedirectUrl || "/"
    });
    const idToken = await storage.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["OAuthTokenTypes"].ID_TOKEN);
    if (!idToken) throw new Error("No id_token found in storage");
    return authInitiator.signOut(idToken);
} //# sourceMappingURL=logout.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/refresh.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "refreshTokens": (()=>refreshTokens)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$AuthenticationRefresherImpl$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/AuthenticationRefresherImpl.js [middleware-edge] (ecmascript)");
;
;
async function refreshTokens(storage, config) {
    const refresher = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$AuthenticationRefresherImpl$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AuthenticationRefresherImpl"].build({
        ...config,
        oauthServer: config.oauthServer ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"]
    }, storage, (error)=>{
        console.error("Error refreshing tokens", error);
        return Promise.reject(error);
    }, config.endpointOverrides);
    return refresher.refreshTokens();
} //# sourceMappingURL=refresh.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/session.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CivicAuth": (()=>CivicAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/session.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/util.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$login$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/login.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$logout$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/logout.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$refresh$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/refresh.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$ServerAuthenticationResolver$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/ServerAuthenticationResolver.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/constants.js [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
;
;
class CivicAuth {
    storage;
    authConfig;
    _authResolver = null;
    constructor(storage, authConfig){
        this.storage = storage;
        this.authConfig = authConfig;
    }
    get oauthServer() {
        return this.authConfig.oauthServer || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_SERVER"];
    }
    async getAuthResolver() {
        if (this._authResolver) {
            return Promise.resolve(this._authResolver);
        }
        this._authResolver = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$ServerAuthenticationResolver$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ServerAuthenticationResolver"].build({
            ...this.authConfig,
            oauthServer: this.oauthServer
        }, this.storage);
        return this._authResolver;
    }
    /**
     * Gets the authenticated user with token validation
     * @returns The user object if authenticated, null otherwise
     */ async getUser() {
        const resolver = await this.getAuthResolver();
        try {
            // Validate the session before returning the user
            const session = await resolver.validateExistingSession();
            if (!session?.authenticated) {
                return null;
            }
            // If session is valid, use the shared implementation to get the user
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getUser"])(this.storage);
        } catch (error) {
            console.error("Token validation failed during getUser", error);
            return null;
        }
    }
    /**
     * Gets the authentication tokens with token validation
     * @returns The tokens if authenticated, null otherwise
     */ async getTokens() {
        const resolver = await this.getAuthResolver();
        try {
            // Validate the session before returning the tokens
            const session = await resolver.validateExistingSession();
            if (!session?.authenticated) {
                return null;
            }
            // If session is valid, use the shared implementation to get the tokens
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$session$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getTokens"])(this.storage);
        } catch (error) {
            console.error("Token validation failed during getTokens", error);
            return null;
        }
    }
    /**
     * Resolve an OAuth access code to a set of OIDC tokens
     * @param code The access code from the query parameter
     * @param state The OAuth state parameter
     * @returns OIDC tokens
     */ async resolveOAuthAccessCode(code, state) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$login$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveOAuthAccessCode"])(code, state, this.storage, this.authConfig);
    }
    /**
     * Check if the user is currently logged in
     * @returns true if logged in, false otherwise
     */ async isLoggedIn() {
        const resolver = await this.getAuthResolver();
        const session = await resolver.validateExistingSession();
        return session?.authenticated ?? false;
    }
    /**
     * Build a login URL to redirect the user to
     * @param options Additional options for building the login URL
     * @returns The login URL
     */ async buildLoginUrl(options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$login$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["buildLoginUrl"])({
            ...this.authConfig,
            scopes: options?.scopes,
            state: options?.state,
            nonce: options?.nonce
        }, this.storage);
    }
    /**
     * Build a logout URL to redirect the user to
     * @param options Additional options for building the logout URL
     * @returns The logout URL
     */ async buildLogoutRedirectUrl(options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$logout$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["buildLogoutRedirectUrl"])({
            ...this.authConfig,
            scopes: options?.scopes,
            state: options?.state
        }, this.storage);
    }
    /**
     * Refresh the current set of OIDC tokens
     * @returns The refreshed tokens
     */ async refreshTokens() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$refresh$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["refreshTokens"])(this.storage, this.authConfig);
    }
    /**
     * Clear all authentication tokens from storage
     */ async clearTokens() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$util$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clearTokens"])(this.storage);
    }
} //# sourceMappingURL=session.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/index.js [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/storage.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$session$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/session.js [middleware-edge] (ecmascript)"); //# sourceMappingURL=index.js.map
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["printVersion"])();
;
;
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/index.js [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$lib$2f$storage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/lib/storage.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$session$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/session.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$server$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/server/index.js [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/index.js [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/logger.js [middleware-edge] (ecmascript)");
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["printVersion"])();
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/index.js [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/types.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$shared$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/shared/index.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$lib$2f$logger$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/lib/logger.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$civic$2f$auth$2d$web3$2f$node_modules$2f40$civic$2f$auth$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@civic/auth-web3/node_modules/@civic/auth/dist/index.js [middleware-edge] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=83f0c_%40civic_auth_dist_af749cd4._.js.map