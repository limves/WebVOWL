webvowl.app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(303);
	__webpack_require__(304);
	
	module.exports = __webpack_require__(305);


/***/ },

/***/ 3:
/***/ function(module, exports) {

	module.exports = d3;

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(89);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },

/***/ 89:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(96);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(97);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },

/***/ 97:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 100:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },

/***/ 142:
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(203);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(95),
	    arrayMap = __webpack_require__(142),
	    isArray = __webpack_require__(100),
	    isSymbol = __webpack_require__(88);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ },

/***/ 303:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 304:
/***/ function(module, exports) {

	/* Taken from here: http://stackoverflow.com/a/17907562 */
	function getInternetExplorerVersion() {
		var ua,
			re,
			rv = -1;
		if (navigator.appName === "Microsoft Internet Explorer") {
			ua = navigator.userAgent;
			re = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
			if (re.exec(ua) !== null) {
				rv = parseFloat(RegExp.$1);
			}
		} else if (navigator.appName === "Netscape") {
			ua = navigator.userAgent;
			re = new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})");
			if (re.exec(ua) !== null) {
				rv = parseFloat(RegExp.$1);
			}
		}
		return rv;
	}
	
	function showBrowserWarningIfRequired() {
		var version = getInternetExplorerVersion();
		if (version > 0 && version <= 11) {
			document.write("<div id=\"browserCheck\">The WebVOWL demo does not work in Internet Explorer. Please use another browser, such as <a href=\"http://www.mozilla.org/firefox/\">Mozilla Firefox</a> or <a href=\"https://www.google.com/chrome/\">Google Chrome</a>, to run the WebVOWL demo.</div>");
			// hiding any additional menus and features
			var canvasArea = document.getElementById("canvasArea"),
				detailsArea = document.getElementById("detailsArea"),
				optionsArea = document.getElementById("optionsArea");
			canvasArea.className = "hidden";
			detailsArea.className = "hidden";
			optionsArea.className = "hidden";
		}
	}
	
	
	module.exports = showBrowserWarningIfRequired;


/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {module.exports = function () {
	
		var app = {},
			graph = webvowl.graph(),
			options = graph.graphOptions(),
			languageTools = webvowl.util.languageTools(),
			GRAPH_SELECTOR = "#graph",
		// Modules for the webvowl app
			exportMenu = __webpack_require__(306)(graph),
			filterMenu = __webpack_require__(307)(graph),
			gravityMenu = __webpack_require__(308)(graph),
			modeMenu = __webpack_require__(309)(graph),
			ontologyMenu = __webpack_require__(310)(graph),
			pauseMenu = __webpack_require__(314)(graph),
			resetMenu = __webpack_require__(315)(graph),
			sidebar = __webpack_require__(316)(graph),
		// Graph modules
			colorExternalsSwitch = webvowl.modules.colorExternalsSwitch(graph),
			compactNotationSwitch = webvowl.modules.compactNotationSwitch(graph),
			datatypeFilter = webvowl.modules.datatypeFilter(),
			disjointFilter = webvowl.modules.disjointFilter(),
			focuser = webvowl.modules.focuser(),
			nodeDegreeFilter = webvowl.modules.nodeDegreeFilter(filterMenu),
			nodeScalingSwitch = webvowl.modules.nodeScalingSwitch(graph),
			objectPropertyFilter = webvowl.modules.objectPropertyFilter(),
			pickAndPin = webvowl.modules.pickAndPin(),
			selectionDetailDisplayer = webvowl.modules.selectionDetailsDisplayer(sidebar.updateSelectionInformation),
			statistics = webvowl.modules.statistics(),
			subclassFilter = webvowl.modules.subclassFilter(),
			setOperatorFilter = webvowl.modules.setOperatorFilter();
	
		app.initialize = function () {
			options.graphContainerSelector(GRAPH_SELECTOR);
			options.selectionModules().push(focuser);
			options.selectionModules().push(selectionDetailDisplayer);
			options.selectionModules().push(pickAndPin);
			options.filterModules().push(statistics);
			options.filterModules().push(datatypeFilter);
			options.filterModules().push(objectPropertyFilter);
			options.filterModules().push(subclassFilter);
			options.filterModules().push(disjointFilter);
			options.filterModules().push(setOperatorFilter);
			options.filterModules().push(nodeScalingSwitch);
			options.filterModules().push(nodeDegreeFilter);
			options.filterModules().push(compactNotationSwitch);
			options.filterModules().push(colorExternalsSwitch);
	
			d3.select(window).on("resize", adjustSize);
	
			exportMenu.setup();
			gravityMenu.setup();
			filterMenu.setup(datatypeFilter, objectPropertyFilter, subclassFilter, disjointFilter, setOperatorFilter, nodeDegreeFilter);
			modeMenu.setup(pickAndPin, nodeScalingSwitch, compactNotationSwitch, colorExternalsSwitch);
			pauseMenu.setup();
			sidebar.setup();
			ontologyMenu.setup(loadOntologyFromText);
			resetMenu.setup([gravityMenu, filterMenu, modeMenu, focuser, selectionDetailDisplayer, pauseMenu]);
	
			graph.start();
			adjustSize();
		};
	
		function loadOntologyFromText(jsonText, filename, alternativeFilename) {
			pauseMenu.reset();
	
			var data;
			if (jsonText) {
				data = JSON.parse(jsonText);
	
				if (!filename) {
					// First look if an ontology title exists, otherwise take the alternative filename
					var ontologyNames = data.header ? data.header.title : undefined;
					var ontologyName = languageTools.textInLanguage(ontologyNames);
	
					if (ontologyName) {
						filename = ontologyName;
					} else {
						filename = alternativeFilename;
					}
				}
			}
	
			exportMenu.setJsonText(jsonText);
	
			options.data(data);
			graph.reload();
			sidebar.updateOntologyInformation(data, statistics);
	
			exportMenu.setFilename(filename);
		}
	
		function adjustSize() {
			var graphContainer = d3.select(GRAPH_SELECTOR),
				svg = graphContainer.select("svg"),
				height = window.innerHeight - 40,
				width = window.innerWidth - (window.innerWidth * 0.22);
	
			graphContainer.style("height", height + "px");
			svg.attr("width", width)
				.attr("height", height);
	
			options.width(width)
				.height(height);
			graph.updateStyle();
		}
	
		return app;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for the export button.
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var exportMenu = {},
			exportSvgButton,
			exportFilename,
			exportJsonButton,
			exportableJsonText;
	
	
		/**
		 * Adds the export button to the website.
		 */
		exportMenu.setup = function () {
			exportSvgButton = d3.select("#exportSvg")
				.on("click", exportSvg);
			exportJsonButton = d3.select("#exportJson")
				.on("click", exportJson);
		};
	
		exportMenu.setFilename = function (filename) {
			exportFilename = filename || "export";
		};
	
		exportMenu.setJsonText = function (jsonText) {
			exportableJsonText = jsonText;
		};
	
		function exportSvg() {
			// Get the d3js SVG element
			var graphSvg = d3.select(graph.options().graphContainerSelector()).select("svg"),
				graphSvgCode,
				escapedGraphSvgCode,
				dataURI;
	
			// inline the styles, so that the exported svg code contains the css rules
			inlineVowlStyles();
			hideNonExportableElements();
	
			graphSvgCode = graphSvg.attr("version", 1.1)
				.attr("xmlns", "http://www.w3.org/2000/svg")
				.node().parentNode.innerHTML;
	
			// Insert the reference to VOWL
			graphSvgCode = "<!-- Created with WebVOWL (version " + webvowl.version + ")" +
			               ", http://vowl.visualdataweb.org -->\n" + graphSvgCode;
	
			escapedGraphSvgCode = escapeUnicodeCharacters(graphSvgCode);
			//btoa(); Creates a base-64 encoded ASCII string from a "string" of binary data.
			dataURI = "data:image/svg+xml;base64," + btoa(escapedGraphSvgCode);
	
			exportSvgButton.attr("href", dataURI)
				.attr("download", exportFilename + ".svg");
	
			// remove graphic styles for interaction to go back to normal
			removeVowlInlineStyles();
			showNonExportableElements();
		}
	
		function escapeUnicodeCharacters(text) {
			var textSnippets = [],
				i, textLength = text.length,
				character,
				charCode;
	
			for (i = 0; i < textLength; i++) {
				character = text.charAt(i);
				charCode = character.charCodeAt(0);
	
				if (charCode < 128) {
					textSnippets.push(character);
				} else {
					textSnippets.push("&#" + charCode + ";");
				}
			}
	
			return textSnippets.join("");
		}
	
		function inlineVowlStyles() {
			setStyleSensitively(".text", [{name: "font-family", value: "Helvetica, Arial, sans-serif"}, {name: "font-size", value: "12px"}]);
			setStyleSensitively(".subtext", [{name: "font-size", value: "9px"}]);
			setStyleSensitively(".text.instance-count", [{name: "fill", value: "#666"}]);
			setStyleSensitively(".external + text .instance-count", [{name: "fill", value: "#aaa"}]);
			setStyleSensitively(".cardinality", [{name: "font-size", value: "10px"}]);
			setStyleSensitively(".text, .embedded", [{name: "pointer-events", value: "none"}]);
			setStyleSensitively(".class, .object, .disjoint, .objectproperty, .disjointwith, .equivalentproperty, .transitiveproperty, .functionalproperty, .inversefunctionalproperty, .symmetricproperty, .allvaluesfromproperty, .somevaluesfromproperty", [{name: "fill", value: "#acf"}]);
			setStyleSensitively(".label .datatype, .datatypeproperty", [{name: "fill", value: "#9c6"}]);
			setStyleSensitively(".rdf, .rdfproperty", [{name: "fill", value: "#c9c"}]);
			setStyleSensitively(".literal, .node .datatype", [{name: "fill", value: "#fc3"}]);
			setStyleSensitively(".deprecated, .deprecatedproperty", [{name: "fill", value: "#ccc"}]);
			setStyleSensitively(".external, .externalproperty", [{name: "fill", value: "#36c"}]);
			setStyleSensitively("path, .nofill", [{name: "fill", value: "none"}]);
			setStyleSensitively("marker path", [{name: "fill", value: "#000"}]);
			setStyleSensitively(".class, path, line, .fineline", [{name: "stroke", value: "#000"}]);
			setStyleSensitively(".white, .subclass, .subclassproperty, .external + text", [{name: "fill", value: "#fff"}]);
			setStyleSensitively(".class.hovered, .property.hovered, .cardinality.hovered, .cardinality.focused, circle.pin, .filled.hovered, .filled.focused", [{name: "fill", value: "#f00"}, {name: "cursor", value: "pointer"}]);
			setStyleSensitively(".focused, path.hovered", [{name: "stroke", value: "#f00"}]);
			setStyleSensitively(".indirect-highlighting, .feature:hover", [{name: "fill", value: "#f90"}]);
			setStyleSensitively(".values-from", [{name: "stroke", value: "#69c"}]);
			setStyleSensitively(".symbol, .values-from.filled", [{name: "fill", value: "#69c"}]);
			setStyleSensitively(".class, path, line", [{name: "stroke-width", value: "2"}]);
			setStyleSensitively(".fineline", [{name: "stroke-width", value: "1"}]);
			setStyleSensitively(".dashed, .anonymous", [{name: "stroke-dasharray", value: "8"}]);
			setStyleSensitively(".dotted", [{name: "stroke-dasharray", value: "3"}]);
			setStyleSensitively("rect.focused, circle.focused", [{name: "stroke-width", value: "4px"}]);
			setStyleSensitively(".nostroke", [{name: "stroke", value: "none"}]);
			setStyleSensitively("marker path", [{name: "stroke-dasharray", value: "100"}]);
		}
	
		function setStyleSensitively(selector, styles) {
			var elements = d3.selectAll(selector);
			if (elements.empty()) {
				return;
			}
	
			styles.forEach(function (style) {
				elements.each(function () {
					var element = d3.select(this);
					if (!shouldntChangeInlineCss(element, style.name)) {
						element.style(style.name, style.value);
					}
				});
			});
		}
	
		function shouldntChangeInlineCss(element, style) {
			return style === "fill" && hasBackgroundColorSet(element);
		}
	
		function hasBackgroundColorSet(element) {
			var data = element.datum();
			return data.backgroundColor && !!data.backgroundColor();
		}
	
		/**
		 * For example the pin of the pick&pin module should be invisible in the exported graphic.
		 */
		function hideNonExportableElements() {
			d3.selectAll(".hidden-in-export").style("display", "none");
		}
	
		function removeVowlInlineStyles() {
			d3.selectAll(".text, .subtext, .text.instance-count, .external + text .instance-count, .cardinality, .text, .embedded, .class, .object, .disjoint, .objectproperty, .disjointwith, .equivalentproperty, .transitiveproperty, .functionalproperty, .inversefunctionalproperty, .symmetricproperty, .allvaluesfromproperty, .somevaluesfromproperty, .label .datatype, .datatypeproperty, .rdf, .rdfproperty, .literal, .node .datatype, .deprecated, .deprecatedproperty, .external, .externalproperty, path, .nofill, .symbol, .values-from.filled, marker path, .class, path, line, .fineline, .white, .subclass, .subclassproperty, .external + text, .class.hovered, .property.hovered, .cardinality.hovered, .cardinality.focused, circle.pin, .filled.hovered, .filled.focused, .focused, path.hovered, .indirect-highlighting, .feature:hover, .values-from, .class, path, line, .fineline, .dashed, .anonymous, .dotted, rect.focused, circle.focused, .nostroke, marker path")
				.each(function () {
					var element = d3.select(this);
	
					var inlineStyles = element.node().style;
					for (var styleName in inlineStyles) {
						if (inlineStyles.hasOwnProperty(styleName)) {
							if (shouldntChangeInlineCss(element, styleName)) {
								continue;
							}
							element.style(styleName, null);
						}
					}
				});
		}
	
		function showNonExportableElements() {
			d3.selectAll(".hidden-in-export").style("display", null);
		}
	
		function exportJson() {
			if (!exportableJsonText) {
				alert("No graph data available.");
				// Stop the redirection to the path of the href attribute
				d3.event.preventDefault();
				return;
			}
	
			var dataURI = "data:text/json;charset=utf-8," + encodeURIComponent(exportableJsonText);
			exportJsonButton.attr("href", dataURI)
				.attr("download", exportFilename + ".json");
		}
	
		return exportMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for connecting the filters with the website.
	 *
	 * @param graph required for calling a refresh after a filter change
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var filterMenu = {},
			checkboxData = [],
			menuElement = d3.select("#filterOption a"),
			nodeDegreeContainer = d3.select("#nodeDegreeFilteringOption"),
			degreeSlider;
	
	
		/**
		 * Connects the website with graph filters.
		 * @param datatypeFilter filter for all datatypes
		 * @param objectPropertyFilter filter for all object properties
		 * @param subclassFilter filter for all subclasses
		 * @param disjointFilter filter for all disjoint with properties
		 * @param setOperatorFilter filter for all set operators with properties
		 * @param nodeDegreeFilter filters nodes by their degree
		 */
		filterMenu.setup = function (datatypeFilter, objectPropertyFilter, subclassFilter, disjointFilter, setOperatorFilter, nodeDegreeFilter) {
			menuElement.on("mouseleave", function () {filterMenu.highlightForDegreeSlider(false);});
	
			addFilterItem(datatypeFilter, "datatype", "Datatype properties", "#datatypeFilteringOption");
			addFilterItem(objectPropertyFilter, "objectProperty", "Object properties", "#objectPropertyFilteringOption");
			addFilterItem(subclassFilter, "subclass", "Solitary subclasses", "#subclassFilteringOption");
			addFilterItem(disjointFilter, "disjoint", "Class disjointness", "#disjointFilteringOption");
			addFilterItem(setOperatorFilter, "setoperator", "Set operators", "#setOperatorFilteringOption");
	
			addNodeDegreeFilter(nodeDegreeFilter, nodeDegreeContainer);
		};
	
	
		function addFilterItem(filter, identifier, pluralNameOfFilteredItems, selector) {
			var filterContainer,
				filterCheckbox;
	
			filterContainer = d3.select(selector)
				.append("div")
				.classed("checkboxContainer", true);
	
			filterCheckbox = filterContainer.append("input")
				.classed("filterCheckbox", true)
				.attr("id", identifier + "FilterCheckbox")
				.attr("type", "checkbox")
				.property("checked", filter.enabled());
	
			// Store for easier resetting
			checkboxData.push({checkbox: filterCheckbox, defaultState: filter.enabled()});
	
			filterCheckbox.on("click", function () {
				// There might be no parameters passed because of a manual
				// invocation when resetting the filters
				var isEnabled = filterCheckbox.property("checked");
				filter.enabled(isEnabled);
				graph.update();
			});
	
			filterContainer.append("label")
				.attr("for", identifier + "FilterCheckbox")
				.text(pluralNameOfFilteredItems);
		}
	
		function addNodeDegreeFilter(nodeDegreeFilter, container) {
			nodeDegreeFilter.setMaxDegreeSetter(function (maxDegree) {
				degreeSlider.attr("max", maxDegree);
				setSliderValue(degreeSlider, Math.min(maxDegree, degreeSlider.property("value")));
			});
	
			nodeDegreeFilter.setDegreeGetter(function () {
				return +degreeSlider.property("value");
			});
	
			nodeDegreeFilter.setDegreeSetter(function (value) {
				setSliderValue(degreeSlider, value);
			});
	
			var sliderContainer,
				sliderValueLabel;
	
			sliderContainer = container.append("div")
				.classed("distanceSliderContainer", true);
	
			degreeSlider = sliderContainer.append("input")
				.attr("id", "nodeDegreeDistanceSlider")
				.attr("type", "range")
				.attr("min", 0)
				.attr("step", 1);
	
			sliderContainer.append("label")
				.classed("description", true)
				.attr("for", "nodeDegreeDistanceSlider")
				.text("Degree of collapsing");
	
			sliderValueLabel = sliderContainer.append("label")
				.classed("value", true)
				.attr("for", "nodeDegreeDistanceSlider")
				.text(0);
	
			degreeSlider.on("change", function () {
				graph.update();
			});
	
			degreeSlider.on("input", function () {
				var degree = degreeSlider.property("value");
				sliderValueLabel.text(degree);
			});
		}
	
		function setSliderValue(slider, value) {
			slider.property("value", value).on("input")();
		}
	
		/**
		 * Resets the filters (and also filtered elements) to their default.
		 */
		filterMenu.reset = function () {
			checkboxData.forEach(function (checkboxData) {
				var checkbox = checkboxData.checkbox,
					enabledByDefault = checkboxData.defaultState,
					isChecked = checkbox.property("checked");
	
				if (isChecked !== enabledByDefault) {
					checkbox.property("checked", enabledByDefault);
					// Call onclick event handlers programmatically
					checkbox.on("click")();
				}
			});
	
			setSliderValue(degreeSlider, 0);
			degreeSlider.on("change")();
		};
	
		filterMenu.highlightForDegreeSlider = function (enable) {
			if (!arguments.length) {
				enable = true;
			}
			menuElement.classed("highlighted", enable);
			nodeDegreeContainer.classed("highlighted", enable);
		};
	
	
		return filterMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for setting up the gravity sliders.
	 *
	 * @param graph the associated webvowl graph
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var gravityMenu = {},
			sliders = [],
			options = graph.graphOptions(),
			defaultCharge = options.charge();
	
	
		/**
		 * Adds the gravity sliders to the website.
		 */
		gravityMenu.setup = function () {
			addDistanceSlider("#classSliderOption", "class", "Class distance", options.classDistance);
			addDistanceSlider("#datatypeSliderOption", "datatype", "Datatype distance", options.datatypeDistance);
		};
	
		function addDistanceSlider(selector, identifier, label, distanceFunction) {
			var defaultLinkDistance = distanceFunction();
	
			var sliderContainer,
				sliderValueLabel;
	
			sliderContainer = d3.select(selector)
				.append("div")
				.datum({distanceFunction: distanceFunction}) // connect the options-function with the slider
				.classed("distanceSliderContainer", true);
	
			var slider = sliderContainer.append("input")
				.attr("id", identifier + "DistanceSlider")
				.attr("type", "range")
				.attr("min", 10)
				.attr("max", 600)
				.attr("value", distanceFunction())
				.attr("step", 10);
	
			sliderContainer.append("label")
				.classed("description", true)
				.attr("for", identifier + "DistanceSlider")
				.text(label);
	
			sliderValueLabel = sliderContainer.append("label")
				.classed("value", true)
				.attr("for", identifier + "DistanceSlider")
				.text(distanceFunction());
	
			// Store slider for easier resetting
			sliders.push(slider);
	
			slider.on("input", function () {
				var distance = slider.property("value");
				distanceFunction(distance);
				adjustCharge(defaultLinkDistance);
				sliderValueLabel.text(distance);
				graph.updateStyle();
			});
		}
	
		function adjustCharge(defaultLinkDistance) {
			var greaterDistance = Math.max(options.classDistance(), options.datatypeDistance()),
				ratio = greaterDistance / defaultLinkDistance,
				newCharge = defaultCharge * ratio;
	
			options.charge(newCharge);
		}
	
		/**
		 * Resets the gravity sliders to their default.
		 */
		gravityMenu.reset = function () {
			sliders.forEach(function (slider) {
				slider.property("value", function (d) {
					// Simply reload the distance from the options
					return d.distanceFunction();
				});
				slider.on("input")();
			});
		};
	
	
		return gravityMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for connecting the modes with the website.
	 *
	 * @param graph the graph that belongs to these controls
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var SAME_COLOR_MODE = {text: "Same color", type: "same"};
		var GRADIENT_COLOR_MODE = {text: "Color gradient", type: "gradient"};
	
		var modeMenu = {},
			checkboxes = [],
			colorModeSwitch;
	
	
		/**
		 * Connects the website with the available graph modes.
		 */
		modeMenu.setup = function (pickAndPin, nodeScaling, compactNotation, colorExternals) {
			addModeItem(pickAndPin, "pickandpin", "Pick & pin", "#pickAndPinOption", false);
			addModeItem(nodeScaling, "nodescaling", "Node scaling", "#nodeScalingOption", true);
			addModeItem(compactNotation, "compactnotation", "Compact notation", "#compactNotationOption", true);
	
			var container = addModeItem(colorExternals, "colorexternals", "Color externals", "#colorExternalsOption", true);
			colorModeSwitch = addExternalModeSelection(container, colorExternals);
		};
	
		function addModeItem(module, identifier, modeName, selector, updateGraphOnClick) {
			var moduleOptionContainer,
				moduleCheckbox;
	
			moduleOptionContainer = d3.select(selector)
				.append("div")
				.classed("checkboxContainer", true)
				.datum({module: module, defaultState: module.enabled()});
	
			moduleCheckbox = moduleOptionContainer.append("input")
				.classed("moduleCheckbox", true)
				.attr("id", identifier + "ModuleCheckbox")
				.attr("type", "checkbox")
				.property("checked", module.enabled());
	
			// Store for easier resetting all modes
			checkboxes.push(moduleCheckbox);
	
			moduleCheckbox.on("click", function (d) {
				var isEnabled = moduleCheckbox.property("checked");
				d.module.enabled(isEnabled);
	
				if (updateGraphOnClick) {
					graph.update();
				}
			});
	
			moduleOptionContainer.append("label")
				.attr("for", identifier + "ModuleCheckbox")
				.text(modeName);
	
			return moduleOptionContainer;
		}
	
		function addExternalModeSelection(container, colorExternalsMode) {
			var button = container.append("button").datum({active: false}).classed("color-mode-switch", true);
			applyColorModeSwitchState(button, colorExternalsMode);
	
			button.on("click", function () {
				var data = button.datum();
				data.active = !data.active;
				applyColorModeSwitchState(button, colorExternalsMode);
	
				if (colorExternalsMode.enabled()) {
					graph.update();
				}
			});
	
			return button;
		}
	
		function applyColorModeSwitchState(element, colorExternalsMode) {
			var isActive = element.datum().active;
			var activeColorMode = getColorModeByState(isActive);
	
			element.classed("active", isActive)
				.text(activeColorMode.text);
	
			if (colorExternalsMode) {
				colorExternalsMode.colorModeType(activeColorMode.type);
			}
		}
	
		function getColorModeByState(isActive) {
			return isActive ? GRADIENT_COLOR_MODE : SAME_COLOR_MODE;
		}
	
		/**
		 * Resets the modes to their default.
		 */
		modeMenu.reset = function () {
			checkboxes.forEach(function (checkbox) {
				var defaultState = checkbox.datum().defaultState,
					isChecked = checkbox.property("checked");
	
				if (isChecked !== defaultState) {
					checkbox.property("checked", defaultState);
					// Call onclick event handlers programmatically
					checkbox.on("click")(checkbox.datum());
				}
	
				// Reset the module that is connected with the checkbox
				checkbox.datum().module.reset();
			});
	
			// set the switch to active and simulate disabling
			colorModeSwitch.datum().active = true;
			colorModeSwitch.on("click")();
		};
	
	
		return modeMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {var unescape = __webpack_require__(311);
	
	/**
	 * Contains the logic for the ontology listing and conversion.
	 *
	 * @returns {{}}
	 */
	module.exports = function () {
	
		var ontologyMenu = {},
			DEFAULT_JSON_NAME = "foaf", // This file is loaded by default
			loadingError = d3.select("#loading-error"),
			loadingProgress = d3.select("#loading-progress"),
			ontologyMenuTimeout,
			cachedConversions = {},
			loadOntologyFromText;
	
		ontologyMenu.setup = function (_loadOntologyFromText) {
			loadOntologyFromText = _loadOntologyFromText;
	
			setupConverterButtons();
			setupUploadButton();
	
			var descriptionButton = d3.select("#error-description-button").datum({open: false});
			descriptionButton.on("click", function (data) {
				var errorContainer = d3.select("#error-description-container");
				var errorDetailsButton = d3.select(this);
	
				// toggle the state
				data.open = !data.open;
				var descriptionVisible = data.open;
				if (descriptionVisible) {
					errorDetailsButton.text("Hide error details");
				} else {
					errorDetailsButton.text("Show error details");
				}
				errorContainer.classed("hidden", !descriptionVisible);
			});
	
			setupUriListener();
		};
	
	
		function setupUriListener() {
			// parse the url initially
			parseUrlAndLoadOntology();
	
			// reload ontology when hash parameter gets changed manually
			d3.select(window).on("hashchange", function () {
				var oldURL = d3.event.oldURL, newURL = d3.event.newURL;
	
				if (oldURL !== newURL) {
					// don't reload when just the hash parameter gets appended
					if (newURL === oldURL + "#") {
						return;
					}
	
					updateNavigationHrefs();
					parseUrlAndLoadOntology();
				}
			});
	
			updateNavigationHrefs();
		}
	
		/**
		 * Quick fix: update all anchor tags that are used as buttons because a click on them
		 * changes the url and this will load an other ontology.
		 */
		function updateNavigationHrefs() {
			d3.selectAll("#optionsMenu > li > a").attr("href", location.hash || "#");
		}
	
		function parseUrlAndLoadOntology() {
			// slice the "#" character
			var hashParameter = location.hash.slice(1);
	
			if (!hashParameter) {
				hashParameter = DEFAULT_JSON_NAME;
			}
	
			var ontologyOptions = d3.selectAll(".select li").classed("selected-ontology", false);
	
			// IRI parameter
			var iriKey = "iri=";
			var fileKey = "file=";
			if (hashParameter.substr(0, fileKey.length) === fileKey) {
				var filename = decodeURIComponent(hashParameter.slice(fileKey.length));
				loadOntologyFromFile(filename);
			} else if (hashParameter.substr(0, iriKey.length) === iriKey) {
				var iri = decodeURIComponent(hashParameter.slice(iriKey.length));
				loadOntologyFromUri("convert?iri=" + encodeURIComponent(iri), iri);
	
				d3.select("#converter-option").classed("selected-ontology", true);
			} else {
				// id of an existing ontology as parameter
				loadOntologyFromUri("data/" + hashParameter + ".json", hashParameter);
	
				ontologyOptions.each(function () {
					var ontologyOption = d3.select(this);
					if (ontologyOption.select("a").size() > 0) {
	
						if (ontologyOption.select("a").attr("href") === "#" + hashParameter) {
							ontologyOption.classed("selected-ontology", true);
						}
					}
				});
			}
		}
	
		function loadOntologyFromUri(relativePath, requestedUri) {
			var cachedOntology = cachedConversions[relativePath];
			var trimmedRequestedUri = requestedUri.replace(/\/$/g, "");
			var filename = trimmedRequestedUri.slice(trimmedRequestedUri.lastIndexOf("/") + 1);
	
	
			if (cachedOntology) {
				loadOntologyFromText(cachedOntology, undefined, filename);
				setLoadingStatus(true);
			} else {
				displayLoadingIndicators();
				d3.xhr(relativePath, "application/json", function (error, request) {
					var loadingSuccessful = !error;
					var errorInfo;
	
					var jsonText;
					if (loadingSuccessful) {
						jsonText = request.responseText;
						cachedConversions[relativePath] = jsonText;
					} else {
						if (error.status === 404) {
							errorInfo = "Connection to the OWL2VOWL interface could not be established.";
						}
					}
	
					loadOntologyFromText(jsonText, undefined, filename);
	
					setLoadingStatus(loadingSuccessful, error ? error.response : undefined, errorInfo);
					hideLoadingInformations();
				});
			}
		}
	
		function setupConverterButtons() {
			var iriConverterButton = d3.select("#iri-converter-button");
			var iriConverterInput = d3.select("#iri-converter-input");
	
			iriConverterInput.on("input", function () {
				keepOntologySelectionOpenShortly();
	
				var inputIsEmpty = iriConverterInput.property("value") === "";
				iriConverterButton.attr("disabled", inputIsEmpty || undefined);
			}).on("click", function () {
				keepOntologySelectionOpenShortly();
			});
	
			d3.select("#iri-converter-form").on("submit", function () {
				location.hash = "iri=" + iriConverterInput.property("value");
				iriConverterInput.property("value", "");
				iriConverterInput.on("input")();
	
				// abort the form submission because we set the hash parameter manually to prevent the ? attached in chrome
				d3.event.preventDefault();
				return false;
			});
		}
	
		function setupUploadButton() {
			var input = d3.select("#file-converter-input"),
				inputLabel = d3.select("#file-converter-label"),
				uploadButton = d3.select("#file-converter-button");
	
			input.on("change", function () {
				var selectedFiles = input.property("files");
				if (selectedFiles.length <= 0) {
					inputLabel.text("Select ontology file");
					uploadButton.property("disabled", true);
				} else {
					inputLabel.text(selectedFiles[0].name);
					uploadButton.property("disabled", false);
	
					keepOntologySelectionOpenShortly();
				}
			});
	
			uploadButton.on("click", function () {
				var selectedFile = input.property("files")[0];
				if (!selectedFile) {
					return false;
				}
				var newHashParameter = "file=" + selectedFile.name;
				// Trigger the reupload manually, because the iri is not changing
				if (location.hash === "#" + newHashParameter) {
					loadOntologyFromFile();
				} else {
					location.hash = newHashParameter;
				}
			});
		}
	
		function loadOntologyFromFile(filename) {
			var cachedOntology = cachedConversions[filename];
			if (cachedOntology) {
				loadOntologyFromText(cachedOntology, filename);
				setLoadingStatus(true);
				return;
			}
	
			var selectedFile = d3.select("#file-converter-input").property("files")[0];
			// No selection -> this was triggered by the iri. Unequal names -> reuploading another file
			if (!selectedFile || (filename && (filename !== selectedFile.name))) {
				loadOntologyFromText(undefined, undefined);
				setLoadingStatus(false, undefined, "No cached version of \"" + filename + "\" was found. Please reupload the file.");
				return;
			} else {
				filename = selectedFile.name;
			}
	
			if (filename.match(/\.json$/)) {
				loadFromJson(selectedFile, filename);
			} else {
				loadFromOntology(selectedFile, filename);
			}
		}
	
		function loadFromJson(file, filename) {
			var reader = new FileReader();
			reader.readAsText(file);
			reader.onload = function () {
				loadOntologyFromTextAndTrimFilename(reader.result, filename);
				setLoadingStatus(true);
			};
		}
	
		function loadFromOntology(selectedFile, filename) {
			var uploadButton = d3.select("#file-converter-button");
	
			displayLoadingIndicators();
			uploadButton.property("disabled", true);
	
			var formData = new FormData();
			formData.append("ontology", selectedFile);
	
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "convert", true);
	
			xhr.onload = function () {
				uploadButton.property("disabled", false);
	
				if (xhr.status === 200) {
					loadOntologyFromTextAndTrimFilename(xhr.responseText, filename);
					cachedConversions[filename] = xhr.responseText;
				} else {
					loadOntologyFromText(undefined, undefined);
					setLoadingStatus(false, xhr.responseText);
				}
				hideLoadingInformations();
			};
	
			xhr.send(formData);
		}
	
		function loadOntologyFromTextAndTrimFilename(text, filename) {
			var trimmedFilename = filename.split(".")[0];
			loadOntologyFromText(text, trimmedFilename);
		}
	
		function keepOntologySelectionOpenShortly() {
			// Events in the menu should not be considered
			var ontologySelection = d3.select("#select .toolTipMenu");
			ontologySelection.on("click", function () {
				d3.event.stopPropagation();
			}).on("keydown", function () {
				d3.event.stopPropagation();
			});
	
			ontologySelection.style("display", "block");
	
			function disableKeepingOpen() {
				ontologySelection.style("display", undefined);
	
				clearTimeout(ontologyMenuTimeout);
				d3.select(window).on("click", undefined).on("keydown", undefined);
				ontologySelection.on("mouseover", undefined);
			}
	
			// Clear the timeout to handle fast calls of this function
			clearTimeout(ontologyMenuTimeout);
			ontologyMenuTimeout = setTimeout(function () {
				disableKeepingOpen();
			}, 3000);
	
			// Disable forced open selection on interaction
			d3.select(window).on("click", function () {
				disableKeepingOpen();
			}).on("keydown", function () {
				disableKeepingOpen();
			});
	
			ontologySelection.on("mouseover", function () {
				disableKeepingOpen();
			});
		}
	
	
		function displayLoadingIndicators() {
			loadingError.classed("hidden", true);
			loadingProgress.classed("hidden", false);
		}
	
		function setLoadingStatus(success, description, information) {
			loadingError.classed("hidden", success);
	
			var errorInfo = d3.select("#error-info");
			if (information) {
				errorInfo.text(information);
			} else {
				errorInfo.html("Ontology could not be loaded.<br>Is it a valid OWL ontology? Please check with <a target=\"_blank\"" +
				"href=\"http://mowl-power.cs.man.ac.uk:8080/validator/\">OWL Validator</a>.");
			}
	
			var descriptionMissing = !description;
			var descriptionVisible = d3.select("#error-description-button").classed("hidden", descriptionMissing).datum().open;
			d3.select("#error-description-container").classed("hidden", descriptionMissing || !descriptionVisible);
			d3.select("#error-description").text(unescape(description));
		}
	
		function hideLoadingInformations() {
			loadingProgress.classed("hidden", true);
		}
	
		return ontologyMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(202),
	    unescapeHtmlChar = __webpack_require__(312);
	
	/** Used to match HTML entities and HTML characters. */
	var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
	    reHasEscapedHtml = RegExp(reEscapedHtml.source);
	
	/**
	 * The inverse of `_.escape`; this method converts the HTML entities
	 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
	 * their corresponding characters.
	 *
	 * **Note:** No other HTML entities are unescaped. To unescape additional
	 * HTML entities use a third-party library like [_he_](https://mths.be/he).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.6.0
	 * @category String
	 * @param {string} [string=''] The string to unescape.
	 * @returns {string} Returns the unescaped string.
	 * @example
	 *
	 * _.unescape('fred, barney, &amp; pebbles');
	 * // => 'fred, barney, & pebbles'
	 */
	function unescape(string) {
	  string = toString(string);
	  return (string && reHasEscapedHtml.test(string))
	    ? string.replace(reEscapedHtml, unescapeHtmlChar)
	    : string;
	}
	
	module.exports = unescape;


/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	var basePropertyOf = __webpack_require__(313);
	
	/** Used to map HTML entities to characters. */
	var htmlUnescapes = {
	  '&amp;': '&',
	  '&lt;': '<',
	  '&gt;': '>',
	  '&quot;': '"',
	  '&#39;': "'"
	};
	
	/**
	 * Used by `_.unescape` to convert HTML entities to characters.
	 *
	 * @private
	 * @param {string} chr The matched character to unescape.
	 * @returns {string} Returns the unescaped character.
	 */
	var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
	
	module.exports = unescapeHtmlChar;


/***/ },

/***/ 313:
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyOf(object) {
	  return function(key) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = basePropertyOf;


/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for the pause and resume button.
	 *
	 * @param graph the associated webvowl graph
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var pauseMenu = {},
			pauseButton;
	
	
		/**
		 * Adds the pause button to the website.
		 */
		pauseMenu.setup = function () {
			pauseButton = d3.select("#pause-button")
				.datum({paused: false})
				.on("click", function (d) {
					graph.paused(!d.paused);
					d.paused = !d.paused;
					updatePauseButton();
				});
	
			// Set these properties the first time manually
			updatePauseButton();
		};
	
		function updatePauseButton() {
			updatePauseButtonClass();
			updatePauseButtonText();
		}
	
		function updatePauseButtonClass() {
			pauseButton.classed("paused", function (d) {
				return d.paused;
			});
		}
	
		function updatePauseButtonText() {
			if (pauseButton.datum().paused) {
				pauseButton.text("Resume");
			} else {
				pauseButton.text("Pause");
			}
		}
	
		pauseMenu.reset = function () {
			// Simulate resuming
			pauseButton.datum().paused = false;
			graph.paused(false);
			updatePauseButton();
		};
	
	
		return pauseMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for the reset button.
	 *
	 * @param graph the associated webvowl graph
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var resetMenu = {},
			options = graph.graphOptions(),
			resettableModules,
			untouchedOptions = webvowl.options();
	
	
		/**
		 * Adds the reset button to the website.
		 * @param _resettableModules modules that can be resetted
		 */
		resetMenu.setup = function (_resettableModules) {
			resettableModules = _resettableModules;
			d3.select("#reset-button").on("click", resetGraph);
		};
	
		function resetGraph() {
			options.classDistance(untouchedOptions.classDistance());
			options.datatypeDistance(untouchedOptions.datatypeDistance());
			options.charge(untouchedOptions.charge());
			options.gravity(untouchedOptions.gravity());
			options.linkStrength(untouchedOptions.linkStrength());
			graph.reset();
	
			resettableModules.forEach(function (module) {
				module.reset();
			});
	
			graph.updateStyle();
		}
	
	
		return resetMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for the sidebar.
	 * @param graph the graph that belongs to these controls
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var sidebar = {},
			languageTools = webvowl.util.languageTools(),
			elementTools = webvowl.util.elementTools(),
		// Required for reloading when the language changes
			ontologyInfo,
			lastSelectedElement;
	
	
		/**
		 * Setup the menu bar.
		 */
		sidebar.setup = function () {
			setupCollapsing();
		};
	
		function setupCollapsing() {
			// adapted version of this example: http://www.normansblog.de/simple-jquery-accordion/
			function collapseContainers(containers) {
				containers.classed("hidden", true);
			}
	
			function expandContainers(containers) {
				containers.classed("hidden", false);
			}
	
			var triggers = d3.selectAll(".accordion-trigger");
	
			// Collapse all inactive triggers on startup
			collapseContainers(d3.selectAll(".accordion-trigger:not(.accordion-trigger-active) + div"));
	
			triggers.on("click", function () {
				var selectedTrigger = d3.select(this),
					activeTriggers = d3.selectAll(".accordion-trigger-active");
	
				if (selectedTrigger.classed("accordion-trigger-active")) {
					// Collapse the active (which is also the selected) trigger
					collapseContainers(d3.select(selectedTrigger.node().nextElementSibling));
					selectedTrigger.classed("accordion-trigger-active", false);
				} else {
					// Collapse the other trigger ...
					collapseContainers(d3.selectAll(".accordion-trigger-active + div"));
					activeTriggers.classed("accordion-trigger-active", false);
					// ... and expand the selected one
					expandContainers(d3.select(selectedTrigger.node().nextElementSibling));
					selectedTrigger.classed("accordion-trigger-active", true);
				}
			});
		}
	
		/**
		 * Updates the information of the passed ontology.
		 * @param data the graph data
		 * @param statistics the statistics module
		 */
		sidebar.updateOntologyInformation = function (data, statistics) {
			data = data || {};
			ontologyInfo = data.header || {};
	
			updateGraphInformation();
			displayGraphStatistics(data.metrics, statistics);
			displayMetadata(ontologyInfo.other);
	
			// Reset the sidebar selection
			sidebar.updateSelectionInformation(undefined);
	
			setLanguages(ontologyInfo.languages);
		};
	
		function setLanguages(languages) {
			languages = languages || [];
	
			// Put the default and unset label on top of the selection labels
			languages.sort(function (a, b) {
				if (a === webvowl.util.constants().LANG_IRIBASED) {
					return -1;
				} else if (b === webvowl.util.constants().LANG_IRIBASED) {
					return 1;
				}
				if (a === webvowl.util.constants().LANG_UNDEFINED) {
					return -1;
				} else if (b === webvowl.util.constants().LANG_UNDEFINED) {
					return 1;
				}
				return a.localeCompare(b);
			});
	
			var languageSelection = d3.select("#language")
				.on("change", function () {
					graph.language(d3.event.target.value);
					updateGraphInformation();
					sidebar.updateSelectionInformation(lastSelectedElement);
				});
	
			languageSelection.selectAll("option").remove();
			languageSelection.selectAll("option")
				.data(languages)
				.enter().append("option")
				.attr("value", function (d) {
					return d;
				})
				.text(function (d) {
					return d;
				});
	
			if (!trySelectDefaultLanguage(languageSelection, languages, "en")) {
				if (!trySelectDefaultLanguage(languageSelection, languages, webvowl.util.constants().LANG_UNDEFINED)) {
					trySelectDefaultLanguage(languageSelection, languages, webvowl.util.constants().LANG_IRIBASED);
				}
			}
		}
	
		function trySelectDefaultLanguage(selection, languages, language) {
			var langIndex = languages.indexOf(language);
			if (langIndex >= 0) {
				selection.property("selectedIndex", langIndex);
				graph.language(language);
				return true;
			}
	
			return false;
		}
	
		function updateGraphInformation() {
			var title = languageTools.textInLanguage(ontologyInfo.title, graph.language());
			d3.select("#title").text(title || "No title available");
			d3.select("#about").attr("href", ontologyInfo.iri).attr("target", "_blank").text(ontologyInfo.iri);
			d3.select("#version").text(ontologyInfo.version || "--");
			var authors = ontologyInfo.author;
			if (typeof authors === "string") {
				// Stay compatible with author info as strings after change in january 2015
				d3.select("#authors").text(authors);
			} else if (authors instanceof Array) {
				d3.select("#authors").text(authors.join(", "));
			} else {
				d3.select("#authors").text("--");
			}
	
			var description = languageTools.textInLanguage(ontologyInfo.description, graph.language());
			d3.select("#description").text(description || "No description available.");
		}
	
		function displayGraphStatistics(deliveredMetrics, statistics) {
			// Metrics are optional and may be undefined
			deliveredMetrics = deliveredMetrics || {};
	
			d3.select("#classCount")
				.text(deliveredMetrics.classCount || statistics.classCount());
			d3.select("#objectPropertyCount")
				.text(deliveredMetrics.objectPropertyCount || statistics.objectPropertyCount());
			d3.select("#datatypePropertyCount")
				.text(deliveredMetrics.datatypePropertyCount || statistics.datatypePropertyCount());
			d3.select("#individualCount")
				.text(deliveredMetrics.totalIndividualCount || statistics.totalIndividualCount());
			d3.select("#nodeCount")
				.text(statistics.nodeCount());
			d3.select("#edgeCount")
				.text(statistics.edgeCount());
		}
	
		function displayMetadata(metadata) {
			var container = d3.select("#ontology-metadata");
			container.selectAll("*").remove();
	
			listAnnotations(container, metadata);
	
			if (container.selectAll(".annotation").size() <= 0) {
				container.append("p").text("No annotations available.");
			}
		}
	
		function listAnnotations(container, annotationObject) {
			annotationObject = annotationObject || {};  //todo
	
			// Collect the annotations in an array for simpler processing
			var annotations = [];
			for (var annotation in annotationObject) {
				if (annotationObject.hasOwnProperty(annotation)) {
					annotations.push(annotationObject[annotation][0]);
				}
			}
	
			container.selectAll(".annotation").remove();
			container.selectAll(".annotation").data(annotations).enter().append("p")
				.classed("annotation", true)
				.classed("statisticDetails", true)
				.text(function (d) {
					return d.identifier + ":";
				})
				.append("span")
				.each(function (d) {
					appendIriLabel(d3.select(this), d.value, d.type === "iri" ? d.value : undefined);
				});
		}
	
		/**
		 * Update the information of the selected node.
		 * @param selectedElement the selection or null if nothing is selected
		 */
		sidebar.updateSelectionInformation = function (selectedElement) {
			lastSelectedElement = selectedElement;
	
			// Click event was prevented when dragging
			if (d3.event && d3.event.defaultPrevented) {
				return;
			}
	
	
			var isTriggerActive = d3.select("#selection-details-trigger").classed("accordion-trigger-active");
			if (selectedElement && !isTriggerActive) {
				d3.select("#selection-details-trigger").node().click();
			} else if (!selectedElement && isTriggerActive) {
				showSelectionAdvice();
				return;
			}
	
			if (elementTools.isProperty(selectedElement)) {
				displayPropertyInformation(selectedElement);
			} else if (elementTools.isNode(selectedElement)) {
				displayNodeInformation(selectedElement);
			}
		};
	
		function showSelectionAdvice() {
			setSelectionInformationVisibility(false, false, true);
		}
	
		function setSelectionInformationVisibility(showClasses, showProperties, showAdvice) {
			d3.select("#classSelectionInformation").classed("hidden", !showClasses);
			d3.select("#propertySelectionInformation").classed("hidden", !showProperties);
			d3.select("#noSelectionInformation").classed("hidden", !showAdvice);
		}
	
		function displayPropertyInformation(property) {
			showPropertyInformations();
	
			setIriLabel(d3.select("#propname"), property.labelForCurrentLanguage(), property.iri());
			d3.select("#typeProp").text(property.type());
	
			if (property.inverse() !== undefined) {
				d3.select("#inverse").classed("hidden", false);
				setIriLabel(d3.select("#inverse span"), property.inverse().labelForCurrentLanguage(), property.inverse().iri());
			} else {
				d3.select("#inverse").classed("hidden", true);
			}
	
			var equivalentIriSpan = d3.select("#propEquivUri");
			listNodeArray(equivalentIriSpan, property.equivalents());
	
			listNodeArray(d3.select("#subproperties"), property.subproperties());
			listNodeArray(d3.select("#superproperties"), property.superproperties());
	
			if (property.minCardinality() !== undefined) {
				d3.select("#infoCardinality").classed("hidden", true);
				d3.select("#minCardinality").classed("hidden", false);
				d3.select("#minCardinality span").text(property.minCardinality());
				d3.select("#maxCardinality").classed("hidden", false);
	
				if (property.maxCardinality() !== undefined) {
					d3.select("#maxCardinality span").text(property.maxCardinality());
				} else {
					d3.select("#maxCardinality span").text("*");
				}
	
			} else if (property.cardinality() !== undefined) {
				d3.select("#minCardinality").classed("hidden", true);
				d3.select("#maxCardinality").classed("hidden", true);
				d3.select("#infoCardinality").classed("hidden", false);
				d3.select("#infoCardinality span").text(property.cardinality());
			} else {
				d3.select("#infoCardinality").classed("hidden", true);
				d3.select("#minCardinality").classed("hidden", true);
				d3.select("#maxCardinality").classed("hidden", true);
			}
	
			setIriLabel(d3.select("#domain"), property.domain().labelForCurrentLanguage(), property.domain().iri());
			setIriLabel(d3.select("#range"), property.range().labelForCurrentLanguage(), property.range().iri());
	
			displayAttributes(property.attributes(), d3.select("#propAttributes"));
	
			setTextAndVisibility(d3.select("#propDescription"), property.descriptionForCurrentLanguage());
			setTextAndVisibility(d3.select("#propComment"), property.commentForCurrentLanguage());
	
			listAnnotations(d3.select("#propertySelectionInformation"), property.annotations());
		}
	
		function showPropertyInformations() {
			setSelectionInformationVisibility(false, true, false);
		}
	
		function setIriLabel(element, name, iri) {
			var parent = d3.select(element.node().parentNode);
	
			if (name) {
				element.selectAll("*").remove();
				appendIriLabel(element, name, iri);
				parent.classed("hidden", false);
			} else {
				parent.classed("hidden", true);
			}
		}
	
		function appendIriLabel(element, name, iri) {
			var tag;
	
			if (iri) {
				tag = element.append("a")
					.attr("href", iri)
					.attr("title", iri)
					.attr("target", "_blank");
			} else {
				tag = element.append("span");
			}
			tag.text(name);
		}
	
		function displayAttributes(attributes, textSpan) {
			var spanParent = d3.select(textSpan.node().parentNode);
	
			if (attributes && attributes.length > 0) {
				// Remove redundant redundant attributes for sidebar
				removeElementFromArray("object", attributes);
				removeElementFromArray("datatype", attributes);
				removeElementFromArray("rdf", attributes);
			}
	
			if (attributes && attributes.length > 0) {
				textSpan.text(attributes.join(", "));
	
				spanParent.classed("hidden", false);
			} else {
				spanParent.classed("hidden", true);
			}
		}
	
		function removeElementFromArray(element, array) {
			var index = array.indexOf(element);
			if (index > -1) {
				array.splice(index, 1);
			}
		}
	
		function displayNodeInformation(node) {
			showClassInformations();
	
			setIriLabel(d3.select("#name"), node.labelForCurrentLanguage(), node.iri());
	
			/* Equivalent stuff. */
			var equivalentIriSpan = d3.select("#classEquivUri");
			listNodeArray(equivalentIriSpan, node.equivalents());
	
			d3.select("#typeNode").text(node.type());
			listNodeArray(d3.select("#individuals"), node.individuals());
	
			/* Disjoint stuff. */
			var disjointNodes = d3.select("#disjointNodes");
			var disjointNodesParent = d3.select(disjointNodes.node().parentNode);
	
			if (node.disjointWith() !== undefined) {
				disjointNodes.selectAll("*").remove();
	
				node.disjointWith().forEach(function (element, index) {
					if (index > 0) {
						disjointNodes.append("span").text(", ");
					}
					appendIriLabel(disjointNodes, element.labelForCurrentLanguage(), element.iri());
				});
	
				disjointNodesParent.classed("hidden", false);
			} else {
				disjointNodesParent.classed("hidden", true);
			}
	
			displayAttributes(node.attributes(), d3.select("#classAttributes"));
	
			setTextAndVisibility(d3.select("#nodeDescription"), node.descriptionForCurrentLanguage());
			setTextAndVisibility(d3.select("#nodeComment"), node.commentForCurrentLanguage());
	
			listAnnotations(d3.select("#classSelectionInformation"), node.annotations());
		}
	
		function showClassInformations() {
			setSelectionInformationVisibility(true, false, false);
		}
	
		function listNodeArray(textSpan, nodes) {
			var spanParent = d3.select(textSpan.node().parentNode);
	
			if (nodes && nodes.length) {
				textSpan.selectAll("*").remove();
				nodes.forEach(function (element, index) {
					if (index > 0) {
						textSpan.append("span").text(", ");
					}
					appendIriLabel(textSpan, element.labelForCurrentLanguage(), element.iri());
				});
	
				spanParent.classed("hidden", false);
			} else {
				spanParent.classed("hidden", true);
			}
		}
	
		function setTextAndVisibility(label, value) {
			var parentNode = d3.select(label.node().parentNode);
			var hasValue = !!value;
			if (value) {
				label.text(value);
			}
			parentNode.classed("hidden", !hasValue);
		}
	
	
		return sidebar;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }

/******/ });
//# sourceMappingURL=webvowl.app.js.map