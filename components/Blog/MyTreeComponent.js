import React, { Component } from 'react';

class TreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleNode = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { label, children } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <div onClick={this.toggleNode}>
          {isOpen ? '-' : '+'} {label}
        </div>
        {isOpen && <div>{children}</div>}
      </div>
    );
  }
}

class MyTreeComponent extends Component {
  render() {
    return (
      <div>
        <TreeNode label="Root Node">
          <TreeNode label="Child Node 1">
            <TreeNode label="Grandchild Node 1">
              <TreeNode label="Great Grandchild Node 1" />
              <TreeNode label="Great Grandchild Node 2" />
            </TreeNode>
            <TreeNode label="Grandchild Node 2" />
          </TreeNode>
          <TreeNode label="Child Node 2">
            <TreeNode label="Grandchild Node 3" />
            <TreeNode label="Grandchild Node 4" />
          </TreeNode>
        </TreeNode>
      </div>
    );
  }
}

export default MyTreeComponent;
