module.exports = {

"[project]/src/app/lufga_be9a905f.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "lufga_be9a905f-module__gpRtSW__className",
  "variable": "lufga_be9a905f-module__gpRtSW__variable",
});
}}),
"[project]/src/app/lufga_be9a905f.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lufga_be9a905f$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/lufga_be9a905f.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lufga_be9a905f$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'lufga', 'lufga Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lufga_be9a905f$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lufga_be9a905f$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "calculateUSDValue": (()=>calculateUSDValue),
    "cn": (()=>cn),
    "debounce": (()=>debounce),
    "formatAddress": (()=>formatAddress),
    "formatDate": (()=>formatDate),
    "formatRelativeTime": (()=>formatRelativeTime),
    "formatRiskScore": (()=>formatRiskScore),
    "formatSOL": (()=>formatSOL),
    "formatTokenAmount": (()=>formatTokenAmount),
    "formatUSD": (()=>formatUSD),
    "generateId": (()=>generateId),
    "getRiskBgColor": (()=>getRiskBgColor),
    "getRiskColor": (()=>getRiskColor),
    "getRiskLevelFromScore": (()=>getRiskLevelFromScore),
    "parseErrorMessage": (()=>parseErrorMessage),
    "truncateText": (()=>truncateText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/formatDistanceToNow.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatAddress(address, length = 4) {
    if (!address || address.length < 10) return address || '';
    return `${address.substring(0, length)}...${address.substring(address.length - length)}`;
}
function formatTokenAmount(amount, decimals) {
    const actualAmount = parseInt(amount) / Math.pow(10, decimals);
    if (actualAmount === 0) return '0';
    if (actualAmount < 0.001) {
        return '<0.001';
    }
    if (actualAmount < 1) {
        return actualAmount.toFixed(4);
    }
    if (actualAmount < 10000) {
        return actualAmount.toLocaleString(undefined, {
            maximumFractionDigits: 2
        });
    }
    // For large numbers, use K, M, B, T notation
    const tiers = [
        {
            value: 1,
            symbol: ''
        },
        {
            value: 1e3,
            symbol: 'K'
        },
        {
            value: 1e6,
            symbol: 'M'
        },
        {
            value: 1e9,
            symbol: 'B'
        },
        {
            value: 1e12,
            symbol: 'T'
        }
    ];
    const tier = tiers.slice().reverse().find((tier)=>actualAmount >= tier.value);
    if (tier) {
        const scaled = actualAmount / tier.value;
        return scaled.toFixed(2) + tier.symbol;
    }
    return actualAmount.toFixed(2);
}
function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
}
function formatRelativeTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(date, {
        addSuffix: true
    });
}
function getRiskColor(level) {
    switch(level){
        case 'low':
            return 'text-risk-low';
        case 'medium':
            return 'text-risk-medium';
        case 'high':
            return 'text-risk-high';
        case 'critical':
            return 'text-risk-critical';
        default:
            return 'text-gray-500';
    }
}
function getRiskBgColor(level) {
    switch(level){
        case 'low':
            return 'bg-green-100 text-green-800';
        case 'medium':
            return 'bg-yellow-100 text-yellow-800';
        case 'high':
            return 'bg-red-100 text-red-800';
        case 'critical':
            return 'bg-red-700 text-white';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}
function generateId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
function formatRiskScore(score) {
    return `${Math.round(score)}%`;
}
function getRiskLevelFromScore(score) {
    if (score < 25) return 'low';
    if (score < 50) return 'medium';
    if (score < 75) return 'high';
    return 'critical';
}
function formatSOL(lamports) {
    const sol = lamports / 10 ** 9;
    if (sol < 0.001) return '<0.001 SOL';
    return `${sol.toLocaleString(undefined, {
        maximumFractionDigits: 3
    })} SOL`;
}
function debounce(func, wait) {
    let timeout = null;
    return function(...args) {
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(()=>func(...args), wait);
    };
}
function calculateUSDValue(amount, decimals, price) {
    if (!price) return 'N/A';
    const actualAmount = parseInt(amount) / Math.pow(10, decimals);
    const value = actualAmount * price;
    return formatUSD(value);
}
function formatUSD(amount) {
    if (amount === 0) return '$0.00';
    if (amount < 0.01) {
        return '<$0.01';
    }
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}
function truncateText(text, maxLength) {
    if (!text || text.length <= maxLength) return text || '';
    return text.substring(0, maxLength) + '...';
}
function parseErrorMessage(error) {
    if (typeof error === 'string') return error;
    if (error instanceof Error) return error.message;
    return 'An unknown error occurred';
}
}}),
"[project]/src/context/theme-provider.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeProvider": (()=>ThemeProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ThemeProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/context/theme-provider.tsx <module evaluation>", "ThemeProvider");
}}),
"[project]/src/context/theme-provider.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeProvider": (()=>ThemeProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ThemeProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/context/theme-provider.tsx", "ThemeProvider");
}}),
"[project]/src/context/theme-provider.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$theme$2d$provider$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/context/theme-provider.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$theme$2d$provider$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/context/theme-provider.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$theme$2d$provider$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/react-query/index.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Providers": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Providers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Providers() from the server but Providers is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/react-query/index.tsx <module evaluation>", "Providers");
}}),
"[project]/src/react-query/index.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Providers": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Providers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Providers() from the server but Providers is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/react-query/index.tsx", "Providers");
}}),
"[project]/src/react-query/index.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$query$2f$index$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/react-query/index.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$query$2f$index$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/react-query/index.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$query$2f$index$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lufga_be9a905f$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lufga_be9a905f.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$theme$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/theme-provider.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$query$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-query/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const metadata = {
    title: "Linkedin Carousel ",
    description: "Linkedin Carousel generator",
    openGraph: {
        images: [
            "/mylo-banner.jpg"
        ]
    },
    icons: {
        icon: "/main/favicon.ico"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lufga_be9a905f$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].className, " dark:bg-black antialiased h-full w-full"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$theme$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ThemeProvider"], {
                attribute: "class",
                enableSystem: true,
                disableTransitionOnChange: true,
                defaultTheme: "light",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$query$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Providers"], {
                    children: [
                        children,
                        ("TURBOPACK compile-time value", "development") === "development" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TokenApiDebugger, {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 76,
                            columnNumber: 50
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 73,
                    columnNumber: 14
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 66,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 58,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 56,
        columnNumber: 7
    }, this);
}
}}),

};

//# sourceMappingURL=src_5b2a02f4._.js.map