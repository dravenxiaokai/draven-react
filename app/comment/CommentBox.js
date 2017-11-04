'use strict'

import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import $ from 'jquery'

class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
        this.getComments()

        setInterval(() => this.getComments(), 5000)
    }

    handleCommentSubmit(comment) {
        console.log(comment)
    }

    getComments() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: comments => {
                this.setState({ data: comments })
            }
        })
    }
    render() {
        return (
            <div className="ui comments">
                <h1>评论</h1>
                <div className="ui divider"></div>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        )
    }
}

export { CommentBox as default }