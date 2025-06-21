/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/posts/route";
exports.ids = ["app/api/posts/route"];
exports.modules = {

/***/ "(rsc)/./app/api/posts/route.js":
/*!********************************!*\
  !*** ./app/api/posts/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Post */ \"(rsc)/./models/Post.js\");\n\n\n// POST: Create a new post\nasync function POST(request) {\n    const { content, image_url } = await request.json();\n    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const post = await _models_Post__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n        content,\n        image_url,\n        like_count: 0,\n        createdAt: new Date()\n    });\n    return Response.json(post, {\n        status: 201\n    });\n}\n// GET: Get all posts\nasync function GET() {\n    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const posts = await _models_Post__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({}).sort({\n        createdAt: -1\n    });\n    return Response.json(posts, {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Bvc3RzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBc0M7QUFDTDtBQUVqQywwQkFBMEI7QUFDbkIsZUFBZUUsS0FBS0MsT0FBTztJQUNoQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFLEdBQUcsTUFBTUYsUUFBUUcsSUFBSTtJQUNqRCxNQUFNTix3REFBU0E7SUFDZixNQUFNTyxPQUFPLE1BQU1OLG9EQUFJQSxDQUFDTyxNQUFNLENBQUM7UUFDN0JKO1FBQ0FDO1FBQ0FJLFlBQVk7UUFDWkMsV0FBVyxJQUFJQztJQUNqQjtJQUNBLE9BQU9DLFNBQVNOLElBQUksQ0FBQ0MsTUFBTTtRQUFFTSxRQUFRO0lBQUk7QUFDM0M7QUFFQSxxQkFBcUI7QUFDZCxlQUFlQztJQUNwQixNQUFNZCx3REFBU0E7SUFDZixNQUFNZSxRQUFRLE1BQU1kLG9EQUFJQSxDQUFDZSxJQUFJLENBQUMsQ0FBQyxHQUFHQyxJQUFJLENBQUM7UUFBRVAsV0FBVyxDQUFDO0lBQUU7SUFDdkQsT0FBT0UsU0FBU04sSUFBSSxDQUFDUyxPQUFPO1FBQUVGLFFBQVE7SUFBSTtBQUM1QyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxIUCBCUFxcRGVza3RvcFxcRnV0dXJlIGFzc1xcYXBwXFxhcGlcXHBvc3RzXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCJAL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCBQb3N0IGZyb20gXCJAL21vZGVscy9Qb3N0XCI7XHJcblxyXG4vLyBQT1NUOiBDcmVhdGUgYSBuZXcgcG9zdFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XHJcbiAgY29uc3QgeyBjb250ZW50LCBpbWFnZV91cmwgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBQb3N0LmNyZWF0ZSh7XHJcbiAgICBjb250ZW50LFxyXG4gICAgaW1hZ2VfdXJsLFxyXG4gICAgbGlrZV9jb3VudDogMCxcclxuICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICB9KTtcclxuICByZXR1cm4gUmVzcG9uc2UuanNvbihwb3N0LCB7IHN0YXR1czogMjAxIH0pO1xyXG59XHJcblxyXG4vLyBHRVQ6IEdldCBhbGwgcG9zdHNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IFBvc3QuZmluZCh7fSkuc29ydCh7IGNyZWF0ZWRBdDogLTEgfSk7XHJcbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24ocG9zdHMsIHsgc3RhdHVzOiAyMDAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlBvc3QiLCJQT1NUIiwicmVxdWVzdCIsImNvbnRlbnQiLCJpbWFnZV91cmwiLCJqc29uIiwicG9zdCIsImNyZWF0ZSIsImxpa2VfY291bnQiLCJjcmVhdGVkQXQiLCJEYXRlIiwiUmVzcG9uc2UiLCJzdGF0dXMiLCJHRVQiLCJwb3N0cyIsImZpbmQiLCJzb3J0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/posts/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            bufferCommands: false\n        }).then((m)=>m);\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0FBRTNDLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQU07QUFDbEI7QUFFQSxJQUFJQyxTQUFTQyxPQUFPTixRQUFRO0FBRTVCLElBQUksQ0FBQ0ssUUFBUTtJQUNYQSxTQUFTQyxPQUFPTixRQUFRLEdBQUc7UUFBRU8sTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDekQ7QUFFQSxlQUFlQztJQUNiLElBQUlKLE9BQU9FLElBQUksRUFBRSxPQUFPRixPQUFPRSxJQUFJO0lBQ25DLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CSCxPQUFPRyxPQUFPLEdBQUdSLHVEQUFnQixDQUFDQyxhQUFhO1lBQzdDVSxnQkFBZ0I7UUFDbEIsR0FBR0MsSUFBSSxDQUFDQyxDQUFBQSxJQUFLQTtJQUNmO0lBQ0FSLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ2xDLE9BQU9ILE9BQU9FLElBQUk7QUFDcEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxIUCBCUFxcRGVza3RvcFxcRnV0dXJlIGFzc1xcbGliXFxtb25nb2RiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGVcIik7XHJcbn1cclxuXHJcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XHJcblxyXG5pZiAoIWNhY2hlZCkge1xyXG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XHJcbiAgaWYgKGNhY2hlZC5jb25uKSByZXR1cm4gY2FjaGVkLmNvbm47XHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCB7XHJcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcclxuICAgIH0pLnRoZW4obSA9PiBtKTtcclxuICB9XHJcbiAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsImNvbm5lY3QiLCJidWZmZXJDb21tYW5kcyIsInRoZW4iLCJtIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/Post.js":
/*!************************!*\
  !*** ./models/Post.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CommentSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    comment: String,\n    author: String,\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst PostSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    content: String,\n    image_url: String,\n    like_count: {\n        type: Number,\n        default: 0\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    },\n    author: String,\n    comments: [\n        CommentSchema\n    ]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Post || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Post\", PostSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvUG9zdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsZ0JBQWdCLElBQUlELHdEQUFlLENBQUM7SUFDeENHLFNBQVNDO0lBQ1RDLFFBQVFEO0lBQ1JFLFdBQVc7UUFBRUMsTUFBTUM7UUFBTUMsU0FBU0QsS0FBS0UsR0FBRztJQUFDO0FBQzdDO0FBRUEsTUFBTUMsYUFBYSxJQUFJWCx3REFBZSxDQUFDO0lBQ3JDWSxTQUFTUjtJQUNUUyxXQUFXVDtJQUNYVSxZQUFZO1FBQUVQLE1BQU1RO1FBQVFOLFNBQVM7SUFBRTtJQUN2Q0gsV0FBVztRQUFFQyxNQUFNQztRQUFNQyxTQUFTRCxLQUFLRSxHQUFHO0lBQUM7SUFDM0NMLFFBQVFEO0lBQ1JZLFVBQVU7UUFBQ2Y7S0FBYztBQUMzQjtBQUVBLGlFQUFlRCx3REFBZSxDQUFDa0IsSUFBSSxJQUFJbEIscURBQWMsQ0FBQyxRQUFRVyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEhQIEJQXFxEZXNrdG9wXFxGdXR1cmUgYXNzXFxtb2RlbHNcXFBvc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgQ29tbWVudFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIGNvbW1lbnQ6IFN0cmluZyxcclxuICBhdXRob3I6IFN0cmluZyxcclxuICBjcmVhdGVkQXQ6IHsgdHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3cgfSxcclxufSk7XHJcblxyXG5jb25zdCBQb3N0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgY29udGVudDogU3RyaW5nLFxyXG4gIGltYWdlX3VybDogU3RyaW5nLFxyXG4gIGxpa2VfY291bnQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXHJcbiAgY3JlYXRlZEF0OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH0sXHJcbiAgYXV0aG9yOiBTdHJpbmcsXHJcbiAgY29tbWVudHM6IFtDb21tZW50U2NoZW1hXSwgLy8gPC0tLSBUaGlzIGlzIGNydWNpYWwhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlBvc3QgfHwgbW9uZ29vc2UubW9kZWwoXCJQb3N0XCIsIFBvc3RTY2hlbWEpO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJDb21tZW50U2NoZW1hIiwiU2NoZW1hIiwiY29tbWVudCIsIlN0cmluZyIsImF1dGhvciIsImNyZWF0ZWRBdCIsInR5cGUiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsIlBvc3RTY2hlbWEiLCJjb250ZW50IiwiaW1hZ2VfdXJsIiwibGlrZV9jb3VudCIsIk51bWJlciIsImNvbW1lbnRzIiwibW9kZWxzIiwiUG9zdCIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/Post.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=C%3A%5CUsers%5CHP%20BP%5CDesktop%5CFuture%20ass%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%20BP%5CDesktop%5CFuture%20ass&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=C%3A%5CUsers%5CHP%20BP%5CDesktop%5CFuture%20ass%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%20BP%5CDesktop%5CFuture%20ass&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_HP_BP_Desktop_Future_ass_app_api_posts_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/posts/route.js */ \"(rsc)/./app/api/posts/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/posts/route\",\n        pathname: \"/api/posts\",\n        filename: \"route\",\n        bundlePath: \"app/api/posts/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\HP BP\\\\Desktop\\\\Future ass\\\\app\\\\api\\\\posts\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_HP_BP_Desktop_Future_ass_app_api_posts_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwb3N0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcG9zdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwb3N0cyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNIUCUyMEJQJTVDRGVza3RvcCU1Q0Z1dHVyZSUyMGFzcyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDSFAlMjBCUCU1Q0Rlc2t0b3AlNUNGdXR1cmUlMjBhc3MmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2dCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxIUCBCUFxcXFxEZXNrdG9wXFxcXEZ1dHVyZSBhc3NcXFxcYXBwXFxcXGFwaVxcXFxwb3N0c1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcG9zdHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wb3N0c1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcG9zdHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxIUCBCUFxcXFxEZXNrdG9wXFxcXEZ1dHVyZSBhc3NcXFxcYXBwXFxcXGFwaVxcXFxwb3N0c1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=C%3A%5CUsers%5CHP%20BP%5CDesktop%5CFuture%20ass%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%20BP%5CDesktop%5CFuture%20ass&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=C%3A%5CUsers%5CHP%20BP%5CDesktop%5CFuture%20ass%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%20BP%5CDesktop%5CFuture%20ass&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();