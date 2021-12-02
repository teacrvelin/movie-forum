import React from "react";
import { Card, Button } from "react-bootstrap";
import ComBox from "./ComBox";

export default function Card2({title, description, comments}) {
    const [showResults, setShowResults] = React.useState(false);

    return (
        <Card>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>{description}</p>
                </blockquote>
            </Card.Body>
            <Button
                type="submit"
                value="Search"
                onClick={() => {
                    setShowResults(!showResults);
                }}
            >
                Click to leave a comment!
            </Button>
            <br/>

            <div>{showResults ? <ComBox comments= {comments}/> : null}</div>
            
        </Card>
    );
}
