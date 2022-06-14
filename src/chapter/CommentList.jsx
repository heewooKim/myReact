import React from "react";
import Comment from "./Comment";

var comment = [
    {name: "김희우1", comment: "안녕하세요, 김희우1입니다."},
    {name: "김희우2", comment: "안녕하세요, 김희우2입니다."},
    {name: "김희우3", comment: "안녕하세요, 김희우3입니다."}
]

function CommentList(props) {
    return (
        <div>
            {comment.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}></Comment>
                );
            })};
        </div>
    );
}

export default CommentList; 