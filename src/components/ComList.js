import React from "react";
import { ListGroup } from "react-bootstrap";

export default function ComList({ userName, comments }) {
    return (
        <ListGroup>
            {comments.map(comment => {
                if (comment != '') {
                    return (
                        <ListGroup.Item key={comment}>

                            {userName} : {comment}

                        </ListGroup.Item>
                    );
                }
            })}
        </ListGroup>
    );
}