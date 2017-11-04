'use strict'

import 'semantic-ui/semantic.min.css!'
import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from './comment/CommentBox'

// var comments = [
//     { "author": "draven", "date": "5 分钟前", "text": "天气不错啊！" },
//     { "author": "小凯", "date": "3 分钟前", "text": "出去玩啊！" }
// ]

ReactDOM.render(
    <CommentBox url="app/comments.json" />,
    document.getElementById('app')
)