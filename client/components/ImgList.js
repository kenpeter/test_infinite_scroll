import React, { Component } from 'react';
import InfiniteScroll from 'redux-infinite-scroll';
import _ from 'lodash';

class ImgList extends Component {
  
  constructor(props) {
    // super props
    super(props);

    // init is empty array, with 20 items    
    // this state
    this.state = {
      // msg, this, create msg
      messages: this._createMessages(),
      // not loading more
      loadingMore: false
    }
  }
  
  // create
  // msg
  // arr, empty array
  // start from zero
  _createMessages(arr=[],start=0) {
    // arr,
    // copy array
    arr = _.cloneDeep(arr);
    
    // push another 20 items there.
    for (var i=start; i<start+20; i++) {
      // push
      arr.push(i)
    }
    
    // return
    return arr;
  }


  // load more stuff
  _loadMore() {
    // this
    // set state
    // loading more, true
    this.setState({loadingMore: true});
    
    // set timeout
    setTimeout(() => {
      // const
      // msg
      // this
      // _create msg
      // this.state.msgs
      // this.state.msgs.len + 1, because couting from 0
      const messages = this._createMessages(this.state.messages, this.state.messages.length+1);
      // once done
      // this
      // set state
      // msgs: msgs
      // loading more, false
      this.setState({messages: messages, loadingMore: false})
    }, 1000) // 1s, delay
  }

  // render msg
  _renderMessages() {
    // this state
    // msgs
    // map(msg)
    return this.state.messages.map((msg) => {
      // return
      // className
      // item
      // key is msg
      // display msg
      return(
        <div className="item" key={msg}>{msg}</div>
      )
    })
  }
  

  render() {
    return (
      <div>
        <span></span>
        <InfiniteScroll loadingMore={this.state.loadingMore} containerHeight="300px" loadMore={this._loadMore.bind(this)}>
          {this._renderMessages()}
        </InfiniteScroll>
      </div>
    );
  }
}


export default ImgList;
