import React from "react";
import { getFunName } from "../helpers";
class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from the input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-was-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h1>Please Enter A Store</h1>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
