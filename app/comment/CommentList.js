'use strict'

import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {
    render() {
        return (
            <div>
                <Comment author="draven" date="5 分钟前">天气不错哦！</Comment>
                <Comment author="xiaokai" date="3 分钟前">出去玩啊！</Comment>
            </div>
        )
    }
}

export { CommentList as default }