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
exports.id = "app/api/profile/route";
exports.ids = ["app/api/profile/route"];
exports.modules = {

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./models/User.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                if (!user) throw new Error(\"No user found with this email\");\n                const isValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].compare(credentials.password, user.password);\n                if (!isValid) throw new Error(\"Invalid password\");\n                return {\n                    id: user._id,\n                    email: user.email,\n                    name: user.name,\n                    username: user.username,\n                    profile_picture: user.profile_picture\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        async jwt ({ token, user, trigger, session }) {\n            // On login, set token fields from user\n            if (user) {\n                token.name = user.name;\n                token.username = user.username;\n                token.profile_picture = user.profile_picture;\n            }\n            // On profile update, update token fields from session\n            if (trigger === \"update\" && session) {\n                token.name = session.name;\n                token.username = session.username;\n                token.profile_picture = session.profile_picture;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            // Always send latest user info to session\n            session.user.name = token.name;\n            session.user.username = token.username;\n            session.user.profile_picture = token.profile_picture;\n            return session;\n        }\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFDNUI7QUFDTDtBQUNIO0FBRXZCLE1BQU1LLGNBQWM7SUFDekJDLFdBQVc7UUFDVEwsMkVBQW1CQSxDQUFDO1lBQ2xCTSxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQVE7Z0JBQ3ZDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsTUFBTU4sd0RBQVNBO2dCQUNmLE1BQU1ZLE9BQU8sTUFBTVgsb0RBQUlBLENBQUNZLE9BQU8sQ0FBQztvQkFBRU4sT0FBT0QsWUFBWUMsS0FBSztnQkFBQztnQkFDM0QsSUFBSSxDQUFDSyxNQUFNLE1BQU0sSUFBSUUsTUFBTTtnQkFDM0IsTUFBTUMsVUFBVSxNQUFNYix3REFBYyxDQUFDSSxZQUFZSSxRQUFRLEVBQUVFLEtBQUtGLFFBQVE7Z0JBQ3hFLElBQUksQ0FBQ0ssU0FBUyxNQUFNLElBQUlELE1BQU07Z0JBQzlCLE9BQU87b0JBQ0xHLElBQUlMLEtBQUtNLEdBQUc7b0JBQ1pYLE9BQU9LLEtBQUtMLEtBQUs7b0JBQ2pCRixNQUFNTyxLQUFLUCxJQUFJO29CQUNmYyxVQUFVUCxLQUFLTyxRQUFRO29CQUN2QkMsaUJBQWlCUixLQUFLUSxlQUFlO2dCQUN2QztZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxTQUFTO1FBQUVDLFVBQVU7SUFBTTtJQUMzQkMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBQ25DQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVqQixJQUFJLEVBQUVrQixPQUFPLEVBQUVULE9BQU8sRUFBRTtZQUN6Qyx1Q0FBdUM7WUFDdkMsSUFBSVQsTUFBTTtnQkFDUmlCLE1BQU14QixJQUFJLEdBQUdPLEtBQUtQLElBQUk7Z0JBQ3RCd0IsTUFBTVYsUUFBUSxHQUFHUCxLQUFLTyxRQUFRO2dCQUM5QlUsTUFBTVQsZUFBZSxHQUFHUixLQUFLUSxlQUFlO1lBQzlDO1lBQ0Esc0RBQXNEO1lBQ3RELElBQUlVLFlBQVksWUFBWVQsU0FBUztnQkFDbkNRLE1BQU14QixJQUFJLEdBQUdnQixRQUFRaEIsSUFBSTtnQkFDekJ3QixNQUFNVixRQUFRLEdBQUdFLFFBQVFGLFFBQVE7Z0JBQ2pDVSxNQUFNVCxlQUFlLEdBQUdDLFFBQVFELGVBQWU7WUFDakQ7WUFDQSxPQUFPUztRQUNUO1FBQ0EsTUFBTVIsU0FBUSxFQUFFQSxPQUFPLEVBQUVRLEtBQUssRUFBRTtZQUM5QiwwQ0FBMEM7WUFDMUNSLFFBQVFULElBQUksQ0FBQ1AsSUFBSSxHQUFHd0IsTUFBTXhCLElBQUk7WUFDOUJnQixRQUFRVCxJQUFJLENBQUNPLFFBQVEsR0FBR1UsTUFBTVYsUUFBUTtZQUN0Q0UsUUFBUVQsSUFBSSxDQUFDUSxlQUFlLEdBQUdTLE1BQU1ULGVBQWU7WUFDcEQsT0FBT0M7UUFDVDtJQUNGO0FBQ0YsRUFBRTtBQUVGLE1BQU1VLFVBQVVqQyxnREFBUUEsQ0FBQ0s7QUFDa0IiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSFAgQlBcXERlc2t0b3BcXEZ1dHVyZSBhc3NcXGFwcFxcYXBpXFxhdXRoXFxbLi4ubmV4dGF1dGhdXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCJAL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCJAL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSk7XHJcbiAgICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyB1c2VyIGZvdW5kIHdpdGggdGhpcyBlbWFpbFwiKTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgIGlmICghaXNWYWxpZCkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXNzd29yZFwiKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IHVzZXIuX2lkLFxyXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgIHByb2ZpbGVfcGljdHVyZTogdXNlci5wcm9maWxlX3BpY3R1cmUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICBdLFxyXG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6IFwiand0XCIgfSxcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyLCB0cmlnZ2VyLCBzZXNzaW9uIH0pIHtcclxuICAgICAgLy8gT24gbG9naW4sIHNldCB0b2tlbiBmaWVsZHMgZnJvbSB1c2VyXHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgdG9rZW4ubmFtZSA9IHVzZXIubmFtZTtcclxuICAgICAgICB0b2tlbi51c2VybmFtZSA9IHVzZXIudXNlcm5hbWU7XHJcbiAgICAgICAgdG9rZW4ucHJvZmlsZV9waWN0dXJlID0gdXNlci5wcm9maWxlX3BpY3R1cmU7XHJcbiAgICAgIH1cclxuICAgICAgLy8gT24gcHJvZmlsZSB1cGRhdGUsIHVwZGF0ZSB0b2tlbiBmaWVsZHMgZnJvbSBzZXNzaW9uXHJcbiAgICAgIGlmICh0cmlnZ2VyID09PSBcInVwZGF0ZVwiICYmIHNlc3Npb24pIHtcclxuICAgICAgICB0b2tlbi5uYW1lID0gc2Vzc2lvbi5uYW1lO1xyXG4gICAgICAgIHRva2VuLnVzZXJuYW1lID0gc2Vzc2lvbi51c2VybmFtZTtcclxuICAgICAgICB0b2tlbi5wcm9maWxlX3BpY3R1cmUgPSBzZXNzaW9uLnByb2ZpbGVfcGljdHVyZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgLy8gQWx3YXlzIHNlbmQgbGF0ZXN0IHVzZXIgaW5mbyB0byBzZXNzaW9uXHJcbiAgICAgIHNlc3Npb24udXNlci5uYW1lID0gdG9rZW4ubmFtZTtcclxuICAgICAgc2Vzc2lvbi51c2VyLnVzZXJuYW1lID0gdG9rZW4udXNlcm5hbWU7XHJcbiAgICAgIHNlc3Npb24udXNlci5wcm9maWxlX3BpY3R1cmUgPSB0b2tlbi5wcm9maWxlX3BpY3R1cmU7XHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiZGJDb25uZWN0IiwiVXNlciIsImJjcnlwdCIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kT25lIiwiRXJyb3IiLCJpc1ZhbGlkIiwiY29tcGFyZSIsImlkIiwiX2lkIiwidXNlcm5hbWUiLCJwcm9maWxlX3BpY3R1cmUiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ0cmlnZ2VyIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./app/api/profile/route.js":
/*!**********************************!*\
  !*** ./app/api/profile/route.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./models/User.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/[...nextauth]/route */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\nasync function POST(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session) {\n            return Response.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const { name, username, bio, profile_picture } = await request.json();\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOneAndUpdate({\n            email: session.user.email\n        }, {\n            name,\n            username,\n            bio,\n            profile_picture\n        }, {\n            new: true\n        });\n        return Response.json({\n            message: \"Profile updated\",\n            user\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Profile update error:\", error);\n        return Response.json({\n            error: \"Server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2ZpbGUvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNDO0FBQ0w7QUFDWTtBQUNhO0FBRW5ELGVBQWVJLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTUosMkRBQWdCQSxDQUFDQyw2REFBV0E7UUFDbEQsSUFBSSxDQUFDRyxTQUFTO1lBQ1osT0FBT0MsU0FBU0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWUsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ2hFO1FBQ0EsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsR0FBRyxFQUFFQyxlQUFlLEVBQUUsR0FBRyxNQUFNVCxRQUFRRyxJQUFJO1FBQ25FLE1BQU1SLHdEQUFTQTtRQUNmLE1BQU1lLE9BQU8sTUFBTWQsb0RBQUlBLENBQUNlLGdCQUFnQixDQUN0QztZQUFFQyxPQUFPWCxRQUFRUyxJQUFJLENBQUNFLEtBQUs7UUFBQyxHQUM1QjtZQUFFTjtZQUFNQztZQUFVQztZQUFLQztRQUFnQixHQUN2QztZQUFFSSxLQUFLO1FBQUs7UUFFZCxPQUFPWCxTQUFTQyxJQUFJLENBQUM7WUFBRVcsU0FBUztZQUFtQko7UUFBSyxHQUFHO1lBQUVMLFFBQVE7UUFBSTtJQUMzRSxFQUFFLE9BQU9ELE9BQU87UUFDZFcsUUFBUVgsS0FBSyxDQUFDLHlCQUF5QkE7UUFDdkMsT0FBT0YsU0FBU0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBZSxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNoRTtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEhQIEJQXFxEZXNrdG9wXFxGdXR1cmUgYXNzXFxhcHBcXGFwaVxccHJvZmlsZVxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvVXNlclwiO1xyXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCIuLi9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgbmFtZSwgdXNlcm5hbWUsIGJpbywgcHJvZmlsZV9waWN0dXJlIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgICAgeyBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsIH0sXHJcbiAgICAgIHsgbmFtZSwgdXNlcm5hbWUsIGJpbywgcHJvZmlsZV9waWN0dXJlIH0sXHJcbiAgICAgIHsgbmV3OiB0cnVlIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiUHJvZmlsZSB1cGRhdGVkXCIsIHVzZXIgfSwgeyBzdGF0dXM6IDIwMCB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlByb2ZpbGUgdXBkYXRlIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlNlcnZlciBlcnJvclwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJVc2VyIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiUE9TVCIsInJlcXVlc3QiLCJzZXNzaW9uIiwiUmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJuYW1lIiwidXNlcm5hbWUiLCJiaW8iLCJwcm9maWxlX3BpY3R1cmUiLCJ1c2VyIiwiZmluZE9uZUFuZFVwZGF0ZSIsImVtYWlsIiwibmV3IiwibWVzc2FnZSIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/profile/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            bufferCommands: false\n        }).then((m)=>m);\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0FBRTNDLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQU07QUFDbEI7QUFFQSxJQUFJQyxTQUFTQyxPQUFPTixRQUFRO0FBRTVCLElBQUksQ0FBQ0ssUUFBUTtJQUNYQSxTQUFTQyxPQUFPTixRQUFRLEdBQUc7UUFBRU8sTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDekQ7QUFFQSxlQUFlQztJQUNiLElBQUlKLE9BQU9FLElBQUksRUFBRSxPQUFPRixPQUFPRSxJQUFJO0lBQ25DLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CSCxPQUFPRyxPQUFPLEdBQUdSLHVEQUFnQixDQUFDQyxhQUFhO1lBQzdDVSxnQkFBZ0I7UUFDbEIsR0FBR0MsSUFBSSxDQUFDQyxDQUFBQSxJQUFLQTtJQUNmO0lBQ0FSLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ2xDLE9BQU9ILE9BQU9FLElBQUk7QUFDcEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxIUCBCUFxcRGVza3RvcFxcRnV0dXJlIGFzc1xcbGliXFxtb25nb2RiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGVcIik7XHJcbn1cclxuXHJcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XHJcblxyXG5pZiAoIWNhY2hlZCkge1xyXG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XHJcbiAgaWYgKGNhY2hlZC5jb25uKSByZXR1cm4gY2FjaGVkLmNvbm47XHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCB7XHJcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcclxuICAgIH0pLnRoZW4obSA9PiBtKTtcclxuICB9XHJcbiAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsImNvbm5lY3QiLCJidWZmZXJDb21tYW5kcyIsInRoZW4iLCJtIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String\n    },\n    name: {\n        type: String\n    },\n    profile_picture: {\n        type: String\n    },\n    bio: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxVQUFVO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUMsUUFBUTtJQUFLO0lBQ3ZEQyxPQUFPO1FBQUVKLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUMsUUFBUTtJQUFLO0lBQ3BERSxVQUFVO1FBQUVMLE1BQU1DO0lBQU87SUFDekJLLE1BQU07UUFBRU4sTUFBTUM7SUFBTztJQUNyQk0saUJBQWlCO1FBQUVQLE1BQU1DO0lBQU87SUFDaENPLEtBQUs7UUFBRVIsTUFBTUM7SUFBTztBQUN0QixHQUFHO0lBQUVRLFlBQVk7QUFBSztBQUV0QixpRUFBZWIsd0RBQWUsQ0FBQ2UsSUFBSSxJQUFJZixxREFBYyxDQUFDLFFBQVFDLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSFAgQlBcXERlc2t0b3BcXEZ1dHVyZSBhc3NcXG1vZGVsc1xcVXNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIHVzZXJuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gIHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZyB9LCAvLyBoYXNoZWQgcGFzc3dvcmQgaWYgdXNpbmcgY3JlZGVudGlhbHNcclxuICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gIHByb2ZpbGVfcGljdHVyZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICBiaW86IHsgdHlwZTogU3RyaW5nIH0sXHJcbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgVXNlclNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJuYW1lIiwicHJvZmlsZV9waWN0dXJlIiwiYmlvIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=C%3A%5CUsers%5CHP%20BP%5CDesktop%5CFuture%20ass%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%20BP%5CDesktop%5CFuture%20ass&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=C%3A%5CUsers%5CHP%20BP%5CDesktop%5CFuture%20ass%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%20BP%5CDesktop%5CFuture%20ass&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_HP_BP_Desktop_Future_ass_app_api_profile_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/profile/route.js */ \"(rsc)/./app/api/profile/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/profile/route\",\n        pathname: \"/api/profile\",\n        filename: \"route\",\n        bundlePath: \"app/api/profile/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\HP BP\\\\Desktop\\\\Future ass\\\\app\\\\api\\\\profile\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_HP_BP_Desktop_Future_ass_app_api_profile_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9maWxlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9maWxlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvZmlsZSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNIUCUyMEJQJTVDRGVza3RvcCU1Q0Z1dHVyZSUyMGFzcyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDSFAlMjBCUCU1Q0Rlc2t0b3AlNUNGdXR1cmUlMjBhc3MmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2tCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxIUCBCUFxcXFxEZXNrdG9wXFxcXEZ1dHVyZSBhc3NcXFxcYXBwXFxcXGFwaVxcXFxwcm9maWxlXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcm9maWxlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvZmlsZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJvZmlsZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEhQIEJQXFxcXERlc2t0b3BcXFxcRnV0dXJlIGFzc1xcXFxhcHBcXFxcYXBpXFxcXHByb2ZpbGVcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=C%3A%5CUsers%5CHP%20BP%5CDesktop%5CFuture%20ass%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%20BP%5CDesktop%5CFuture%20ass&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

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

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=C%3A%5CUsers%5CHP%20BP%5CDesktop%5CFuture%20ass%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%20BP%5CDesktop%5CFuture%20ass&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();