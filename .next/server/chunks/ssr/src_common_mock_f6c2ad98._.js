module.exports = {

"[project]/src/common/mock/handler.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "handlers": ()=>handlers
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$core$2f$http$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/msw/lib/core/http.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$core$2f$HttpResponse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/msw/lib/core/HttpResponse.mjs [app-ssr] (ecmascript)");
;
const handlers = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$core$2f$http$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"].post('/chats', (req, res, ctx)=>{
        return res(ctx?.status(200), ctx?.json(req.body));
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$core$2f$http$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"].get("/chats", ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$core$2f$HttpResponse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpResponse"].json({
            status: 200,
            data: [
                {
                    "id": "conv-001",
                    "name": "Python",
                    "messages": [
                        {
                            "role": "user",
                            "content": "Learn Python online"
                        },
                        {
                            "role": "encoraChat",
                            "content": "routemap de python para que seas un pro en 1 semana"
                        }
                    ]
                },
                {
                    "id": "conv-002",
                    "name": "React",
                    "messages": [
                        {
                            "role": "user",
                            "content": "¿Cuánto cuesta el tour de Nyhavn?"
                        },
                        {
                            "role": "encoraChat",
                            "content": "El precio es de 200 DKK por persona; niños gratis."
                        }
                    ]
                }
            ]
        });
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$core$2f$http$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"].get(`/api/whoami`, ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$core$2f$HttpResponse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpResponse"].json({
            status: 200,
            data: {
                name: 'Jane Doe',
                email: 'JaneDoe@example.com',
                telephone: '1234567890',
                work: 'XYZ tech',
                location: 'New York',
                image: 'https://randomuser.me/api/portraits/women/79.jpg'
            }
        });
    })
];
}),
"[project]/src/common/mock/browser.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "worker": ()=>worker
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$browser$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/msw/lib/browser/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$mock$2f$handler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/mock/handler.ts [app-ssr] (ecmascript)");
;
;
const worker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$msw$2f$lib$2f$browser$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupWorker"])(...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$mock$2f$handler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handlers"]);
}),
"[project]/src/common/mock/initmock.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "initMocks": ()=>initMocks
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$mock$2f$browser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/common/mock/browser.ts [app-ssr] (ecmascript)");
;
async function initMocks() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
}),

};

//# sourceMappingURL=src_common_mock_f6c2ad98._.js.map