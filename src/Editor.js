import { Value } from "slate";
import { Editor } from "slate-react";
import styled from "styled-components";
import React from "react";
import initialValue from "./value.json";

const Toolbar = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const StyledEditor = styled(Editor)`
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 8px;
  background: pink;
`;

/**
 * The history example.
 *
 * @type {Component}
 */

class History extends React.Component {
  /**
   * Deserialize the initial editor value.
   *
   * @type {Object}
   */

  state = {
    value: Value.fromJSON(initialValue)
  };

  /**
   * Store a reference to the `editor`.
   *
   * @param {Editor} editor
   */

  ref = editor => {
    this.editor = editor;
  };

  /**
   * Render the editor.
   *
   * @return {Component} component
   */

  render() {
    const { value } = this.state;
    const { data } = value;
    const undos = data.get("undos");
    const redos = data.get("redos");
    return (
      <div>
        <Toolbar>
          <button onClick={this.onClickUndo}>undo (with onClick)</button>
          <button onMouseDown={this.onClickUndo}>
            undo (with onMouseDOwn)
          </button>
          <button onMouseDown={this.onClickRedo}>redo</button>
          <span>Undos: {undos ? undos.size : 0}</span>
          <span>Redos: {redos ? redos.size : 0}</span>
        </Toolbar>
        <StyledEditor
          placeholder="Enter some text..."
          ref={this.ref}
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }

  /**
   * On change.
   *
   * @param {Editor} editor
   */

  onChange = change => {
    this.setState({ value: change.value });
  };

  /**
   * On redo in history.
   *
   */

  onClickRedo = () => {
    this.editor.redo();
  };

  /**
   * On undo in history.
   *
   */

  onClickUndo = () => {
    this.editor.undo();
  };
}

/**
 * Export.
 */

export default History;
