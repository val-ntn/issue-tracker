"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// App.jsx
var initialIssues = [{
  id: 1,
  status: 'New',
  owner: 'Ravan',
  effort: 5,
  created: new Date('2018-08-15'),
  due: undefined,
  title: 'Error in console when clicking Add'
}, {
  id: 2,
  status: 'Assigned',
  owner: 'Eddie',
  effort: 14,
  created: new Date('2018-08-16'),
  due: new Date('2018-08-30'),
  title: 'Missing bottom border on panel'
}];
var IssueFilter = /*#__PURE__*/function (_React$Component) {
  function IssueFilter() {
    _classCallCheck(this, IssueFilter);
    return _callSuper(this, IssueFilter, arguments);
  }
  _inherits(IssueFilter, _React$Component);
  return _createClass(IssueFilter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the issue filter.");
    }
  }]);
}(React.Component); // IssueRow Component
var IssueRow = /*#__PURE__*/function (_React$Component2) {
  function IssueRow() {
    _classCallCheck(this, IssueRow);
    return _callSuper(this, IssueRow, arguments);
  }
  _inherits(IssueRow, _React$Component2);
  return _createClass(IssueRow, [{
    key: "render",
    value: function render() {
      var issue = this.props.issue;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, issue.id), /*#__PURE__*/React.createElement("td", null, issue.status), /*#__PURE__*/React.createElement("td", null, issue.owner), /*#__PURE__*/React.createElement("td", null, issue.created.toDateString()), /*#__PURE__*/React.createElement("td", null, issue.effort), /*#__PURE__*/React.createElement("td", null, issue.due ? issue.due.toDateString() : ''), /*#__PURE__*/React.createElement("td", null, issue.title));
    }
  }]);
}(React.Component); // IssueTable Component
var IssueTable = /*#__PURE__*/function (_React$Component3) {
  function IssueTable() {
    var _this;
    _classCallCheck(this, IssueTable);
    _this = _callSuper(this, IssueTable);
    _this.state = {
      issues: initialIssues
    };
    return _this;
  }
  _inherits(IssueTable, _React$Component3);
  return _createClass(IssueTable, [{
    key: "render",
    value: function render() {
      var issueRows = this.state.issues.map(function (issue) {
        return /*#__PURE__*/React.createElement(IssueRow, {
          key: issue.id,
          issue: issue
        });
      });
      return /*#__PURE__*/React.createElement("table", {
        className: "bordered-table"
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Due Date"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, issueRows));
    }
  }]);
}(React.Component);
var IssueAdd = /*#__PURE__*/function (_React$Component4) {
  function IssueAdd() {
    _classCallCheck(this, IssueAdd);
    return _callSuper(this, IssueAdd, arguments);
  }
  _inherits(IssueAdd, _React$Component4);
  return _createClass(IssueAdd, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for a form to add an issue.");
    }
  }]);
}(React.Component);
var IssueList = /*#__PURE__*/function (_React$Component5) {
  function IssueList() {
    _classCallCheck(this, IssueList);
    return _callSuper(this, IssueList, arguments);
  }
  _inherits(IssueList, _React$Component5);
  return _createClass(IssueList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, null));
    }
  }]);
}(React.Component);
var element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('contents'));