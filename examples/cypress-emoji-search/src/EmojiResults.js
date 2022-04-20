import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";


const EmojiNotFound = () => (
  <div className="emoji-not-found">
    <h1>Emojis not found</h1>
    <p>Try searching for something else</p>
  </div>
)

export default class EmojiResults extends PureComponent {
  static propTypes = {
    emojiData: PropTypes.array
  };

  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    const { emojiData = [] } = this.props;
    return (
      <div className="component-emoji-results">
        {
          emojiData.length
          ? (emojiData.map(emojiData => (
            <EmojiResultRow
              key={emojiData.title}
              symbol={emojiData.symbol}
              title={emojiData.title}
            />
          )))
          : (<EmojiNotFound />)
        }
      </div>
    );
  }
}
