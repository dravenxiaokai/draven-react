'use strict'

import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {
    render() {
        let commentNodes = this.props.data.map((comment, index) => {
            return (
                <Comment key={index} author={comment.author} date={comment.date} text={comment.text} ></Comment>
            )
        })
        return (
            <div>
                {commentNodes}
            </div>
        )
    }
}

export { CommentList as default }