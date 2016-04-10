/// <reference path="../../typings/tsd.d.ts" />
System.register(['./country-view-model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var country_view_model_1;
    var React, AppDispatcher, NodeStore, TreeNode, TreeView, ReactTreeView;
    return {
        setters:[
            function (country_view_model_1_1) {
                country_view_model_1 = country_view_model_1_1;
            }],
        execute: function() {
            React = __React;
            AppDispatcher = new Dispatcher();
            AppDispatcher.handleViewAction = function (action) {
                this.dispatch({
                    source: 'VIEW_ACTION',
                    action: action
                });
            };
            AppDispatcher.register(function (payload) {
                switch (payload.eventName) {
                    case 'expand-collapse':
                        NodeStore.toggleNode(payload.node);
                        break;
                }
                return true;
            });
            NodeStore = _.extend({}, EventEmitter.prototype, {
                _nodes: new country_view_model_1.CountryViewModelFactory().createModel(),
                getNodes: function () {
                    return this._nodes;
                },
                toggleNode: function (node) {
                    for (var i = 0; i < node.children.length; i++) {
                        node.children[i].visible = !node.children[i].visible;
                    }
                    this.emit('change');
                },
                addChangeListener: function (callback) {
                    this.on('change', callback);
                },
                removeChangeListener: function (callback) {
                    this.removeListener('change', callback);
                }
            });
            TreeNode = React.createClass({
                toggle: function (e) {
                    AppDispatcher.dispatch({
                        eventName: 'expand-collapse',
                        node: this.props.node
                    });
                },
                render: function () {
                    var nodes = this.props.children.map(function (n) {
                        if (n.visible) {
                            return React.createElement(TreeNode, {node: n, children: n.children});
                        }
                    });
                    return (React.createElement("li", null, React.createElement("span", {onClick: this.toggle}, this.props.node.getIcon()), React.createElement("span", null, this.props.node.text), React.createElement("ul", null, nodes)));
                }
            });
            TreeView = React.createClass({
                getInitialState: function () {
                    return { countries: NodeStore.getNodes() };
                },
                onChange: function () {
                    this.setState({ countries: NodeStore.getNodes() });
                },
                componentDidMount: function () {
                    NodeStore.addChangeListener(this.onChange);
                },
                componentWillUnmount: function () {
                    NodeStore.removeChangeListener(this.onChange);
                },
                render: function () {
                    var countries = this.state.countries;
                    var nodes = countries.map(function (n) {
                        return React.createElement(TreeNode, {node: n, children: n.children});
                    });
                    return (React.createElement("div", null, React.createElement("h2", null, this.props.title), React.createElement("ul", null, nodes)));
                }
            });
            ReactTreeView = (function () {
                function ReactTreeView() {
                }
                ReactTreeView.initialize = function (title) {
                    React.render(React.createElement(TreeView, {title: title}), document.getElementById('react-tree-view'));
                };
                return ReactTreeView;
            }());
            exports_1("ReactTreeView", ReactTreeView);
        }
    }
});
//# sourceMappingURL=react-tree-view.js.map