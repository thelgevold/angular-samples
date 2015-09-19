/// <reference path="../../typings/tsd.d.ts" />
function CountryModel(text) {
    this.children = [];
    this.text = text;
    this.icon = this.getIcon();
    this.visible = false;
    this.selected = false;
}
CountryModel.prototype.getIcon = function () {
    if (this.children.length > 0) {
        if (this.children[0].visible === false) {
            return '+';
        }
        return '-';
    } 
    return null;
};
function createMockModel() {
    var countries = [];
    var america = new CountryModel('North America');
    america.visible = true;
    var usa = new CountryModel('USA');
    usa.children.push(new CountryModel('New York'));
    usa.children.push(new CountryModel('Texas'));
    usa.children.push(new CountryModel('Oregon'));
    usa.children.push(new CountryModel('South Dakota'));
    america.children.push(usa);
    america.children.push(new CountryModel('Canada'));
    america.children.push(new CountryModel('Mexico'));
    var europe = new CountryModel('Europe');
    europe.children.push(new CountryModel('Norway'));
    europe.children.push(new CountryModel('Sweden'));
    europe.children.push(new CountryModel('France'));
    europe.children.push(new CountryModel('Germany'));
    europe.visible = true;
    countries.push(america);
    countries.push(europe);
    return countries;
}
var React = __React;
var AppDispatcher = new Dispatcher();
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
var NodeStore = _.extend({}, EventEmitter.prototype, {
    _nodes: createMockModel(),
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
var TreeNode = React.createClass({
    toggle: function (e) {
        AppDispatcher.dispatch({
            eventName: 'expand-collapse',
            node: this.props.node
        });
    },
    render: function () {
        var nodes = this.props.children.map(function (n) {
            if (n.visible) {
                return React.createElement(TreeNode, {"node": n, "children": n.children});
            }
        });
        return (React.createElement("li", null, React.createElement("span", {"onClick": this.toggle}, this.props.node.getIcon()), React.createElement("span", null, this.props.node.text), React.createElement("ul", null, nodes)));
    }
});
var TreeView = React.createClass({
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
            return React.createElement(TreeNode, {"node": n, "children": n.children});
        });
        return (React.createElement("ul", null, nodes));
    }
});
var ReactTreeView = (function () {
    function ReactTreeView() {
    }
    ReactTreeView.initialize = function () {
        React.render(React.createElement(TreeView, null), document.getElementById('test'));
    };
    return ReactTreeView;
})();
exports.ReactTreeView = ReactTreeView;
