/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_post_teaser_block_js__ = __webpack_require__(/*! ./block-post-teaser/block.js */ 4);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay1wb3N0LXRlYXNlci9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/*!****************************************!*\
  !*** ./src/block-post-teaser/block.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * BLOCK: test-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\n\nvar __ = wp.i18n.__;\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    InspectorControls = _wp$blocks.InspectorControls;\nvar SelectControl = wp.components.SelectControl;\nvar Component = wp.element.Component;\n\nvar selectPosts = function (_Component) {\n\t_inherits(selectPosts, _Component);\n\n\t_createClass(selectPosts, [{\n\t\tkey: 'getOptions',\n\t\tvalue: function getOptions() {\n\t\t\tvar _this2 = this;\n\n\t\t\treturn new wp.api.collections.Posts().fetch().then(function (posts) {\n\t\t\t\tif (posts && 0 !== _this2.state.selectedPost) {\n\t\t\t\t\tvar post = posts.find(function (item) {\n\t\t\t\t\t\treturn item.id == _this2.state.selectedPost;\n\t\t\t\t\t});\n\t\t\t\t\t_this2.setState({ post: post, posts: posts });\n\t\t\t\t} else {\n\t\t\t\t\t_this2.setState(posts);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}], [{\n\t\tkey: 'getInitialState',\n\t\tvalue: function getInitialState(selectedPost) {\n\t\t\treturn {\n\t\t\t\tposts: [],\n\t\t\t\tselectedPost: selectedPost,\n\t\t\t\tpost: {}\n\t\t\t};\n\t\t}\n\t}]);\n\n\tfunction selectPosts() {\n\t\t_classCallCheck(this, selectPosts);\n\n\t\tvar _this = _possibleConstructorReturn(this, (selectPosts.__proto__ || Object.getPrototypeOf(selectPosts)).apply(this, arguments));\n\n\t\t_this.state = _this.constructor.getInitialState(_this.props.attributes.selectedPost);\n\t\t_this.getOptions = _this.getOptions.bind(_this);\n\t\t_this.getOptions();\n\t\treturn _this;\n\t}\n\n\t_createClass(selectPosts, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar options = [{ value: 0, label: __('Select a post') }];\n\t\t\tvar output = __('Loading post');\n\t\t\tif (this.state.posts.forEach(function (post) {\n\t\t\t\toptions.push({\n\t\t\t\t\tvalue: post.id,\n\t\t\t\t\tlabel: post.title.rendered\n\t\t\t\t});\n\t\t\t})) return [!!this.props.isSelected && wp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\t{ key: 'inspector' },\n\t\t\t\twp.element.createElement(SelectControl, { value: this.props.attributes.selectedPost,\n\t\t\t\t\tlabel: __('Select a Post'),\n\t\t\t\t\toptions: options })\n\t\t\t)];\n\t\t}\n\t}]);\n\n\treturn selectPosts;\n}(Component);\n\nregisterBlockType('ash/post-teaser', {\n\ttitle: __('Post Teaser'),\n\ticon: 'shield',\n\tcategory: 'common',\n\tkeywords: [__('Post teasers')],\n\n\tedit: selectPosts,\n\n\tattributes: {\n\t\tcontent: {\n\t\t\ttype: array,\n\t\t\tsource: 'children',\n\t\t\tselector: 'p'\n\t\t},\n\t\ttitle: {\n\t\t\ttype: 'string',\n\t\t\tselector: \"h2\"\n\t\t},\n\t\tlink: {\n\t\t\ttype: 'string',\n\t\t\tselector: 'a'\n\t\t},\n\t\tselectedPosts: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 0\n\t\t}\n\t}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay1wb3N0LXRlYXNlci9ibG9jay5qcz85ZjNiIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBCTE9DSzogdGVzdC1ibG9ja1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciBfd3AkYmxvY2tzID0gd3AuYmxvY2tzLFxuICAgIHJlZ2lzdGVyQmxvY2tUeXBlID0gX3dwJGJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZSxcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRibG9ja3MuSW5zcGVjdG9yQ29udHJvbHM7XG52YXIgU2VsZWN0Q29udHJvbCA9IHdwLmNvbXBvbmVudHMuU2VsZWN0Q29udHJvbDtcbnZhciBDb21wb25lbnQgPSB3cC5lbGVtZW50LkNvbXBvbmVudDtcblxudmFyIHNlbGVjdFBvc3RzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcblx0X2luaGVyaXRzKHNlbGVjdFBvc3RzLCBfQ29tcG9uZW50KTtcblxuXHRfY3JlYXRlQ2xhc3Moc2VsZWN0UG9zdHMsIFt7XG5cdFx0a2V5OiAnZ2V0T3B0aW9ucycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldE9wdGlvbnMoKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0cmV0dXJuIG5ldyB3cC5hcGkuY29sbGVjdGlvbnMuUG9zdHMoKS5mZXRjaCgpLnRoZW4oZnVuY3Rpb24gKHBvc3RzKSB7XG5cdFx0XHRcdGlmIChwb3N0cyAmJiAwICE9PSBfdGhpczIuc3RhdGUuc2VsZWN0ZWRQb3N0KSB7XG5cdFx0XHRcdFx0dmFyIHBvc3QgPSBwb3N0cy5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaXRlbS5pZCA9PSBfdGhpczIuc3RhdGUuc2VsZWN0ZWRQb3N0O1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdF90aGlzMi5zZXRTdGF0ZSh7IHBvc3Q6IHBvc3QsIHBvc3RzOiBwb3N0cyB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfdGhpczIuc2V0U3RhdGUocG9zdHMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1dLCBbe1xuXHRcdGtleTogJ2dldEluaXRpYWxTdGF0ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZShzZWxlY3RlZFBvc3QpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHBvc3RzOiBbXSxcblx0XHRcdFx0c2VsZWN0ZWRQb3N0OiBzZWxlY3RlZFBvc3QsXG5cdFx0XHRcdHBvc3Q6IHt9XG5cdFx0XHR9O1xuXHRcdH1cblx0fV0pO1xuXG5cdGZ1bmN0aW9uIHNlbGVjdFBvc3RzKCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBzZWxlY3RQb3N0cyk7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoc2VsZWN0UG9zdHMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihzZWxlY3RQb3N0cykpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG5cdFx0X3RoaXMuc3RhdGUgPSBfdGhpcy5jb25zdHJ1Y3Rvci5nZXRJbml0aWFsU3RhdGUoX3RoaXMucHJvcHMuYXR0cmlidXRlcy5zZWxlY3RlZFBvc3QpO1xuXHRcdF90aGlzLmdldE9wdGlvbnMgPSBfdGhpcy5nZXRPcHRpb25zLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmdldE9wdGlvbnMoKTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3Moc2VsZWN0UG9zdHMsIFt7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIG9wdGlvbnMgPSBbeyB2YWx1ZTogMCwgbGFiZWw6IF9fKCdTZWxlY3QgYSBwb3N0JykgfV07XG5cdFx0XHR2YXIgb3V0cHV0ID0gX18oJ0xvYWRpbmcgcG9zdCcpO1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUucG9zdHMuZm9yRWFjaChmdW5jdGlvbiAocG9zdCkge1xuXHRcdFx0XHRvcHRpb25zLnB1c2goe1xuXHRcdFx0XHRcdHZhbHVlOiBwb3N0LmlkLFxuXHRcdFx0XHRcdGxhYmVsOiBwb3N0LnRpdGxlLnJlbmRlcmVkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSkpIHJldHVybiBbISF0aGlzLnByb3BzLmlzU2VsZWN0ZWQgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdFx0eyBrZXk6ICdpbnNwZWN0b3InIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7IHZhbHVlOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuc2VsZWN0ZWRQb3N0LFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnU2VsZWN0IGEgUG9zdCcpLFxuXHRcdFx0XHRcdG9wdGlvbnM6IG9wdGlvbnMgfSlcblx0XHRcdCldO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBzZWxlY3RQb3N0cztcbn0oQ29tcG9uZW50KTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2FzaC9wb3N0LXRlYXNlcicsIHtcblx0dGl0bGU6IF9fKCdQb3N0IFRlYXNlcicpLFxuXHRpY29uOiAnc2hpZWxkJyxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRrZXl3b3JkczogW19fKCdQb3N0IHRlYXNlcnMnKV0sXG5cblx0ZWRpdDogc2VsZWN0UG9zdHMsXG5cblx0YXR0cmlidXRlczoge1xuXHRcdGNvbnRlbnQ6IHtcblx0XHRcdHR5cGU6IGFycmF5LFxuXHRcdFx0c291cmNlOiAnY2hpbGRyZW4nLFxuXHRcdFx0c2VsZWN0b3I6ICdwJ1xuXHRcdH0sXG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c2VsZWN0b3I6IFwiaDJcIlxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzZWxlY3RvcjogJ2EnXG5cdFx0fSxcblx0XHRzZWxlY3RlZFBvc3RzOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDBcblx0XHR9XG5cdH1cblxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2stcG9zdC10ZWFzZXIvYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!******************************************!*\
  !*** ./src/block-post-teaser/style.scss ***!
  \******************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay1wb3N0LXRlYXNlci9zdHlsZS5zY3NzPzZmNWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay1wb3N0LXRlYXNlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*******************************************!*\
  !*** ./src/block-post-teaser/editor.scss ***!
  \*******************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay1wb3N0LXRlYXNlci9lZGl0b3Iuc2Nzcz9hMGQwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2stcG9zdC10ZWFzZXIvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);