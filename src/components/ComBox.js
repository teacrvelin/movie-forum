import React from "react";
import { Row, Form, Col, Button, ListGroup } from "react-bootstrap";
import ComList from "./ComList";

export default function ComBox({ comments }) {
    function randomName() {
        const adjectives = [
            "autumn",
            "hidden",
            "bitter",
            "misty",
            "silent",
            "empty",
            "dry",
            "dark",
            "summer",
            "icy",
            "delicate",
            "quiet",
            "white",
            "cool",
            "spring",
            "winter",
            "patient",
            "twilight",
            "dawn",
            "crimson",
            "wispy",
            "weathered",
            "blue",
            "billowing",
            "broken",
            "cold",
            "damp",
            "falling",
            "frosty",
            "green",
            "long",
            "late",
            "lingering",
            "bold",
            "little",
            "morning",
            "muddy",
            "old",
            "red",
            "rough",
            "still",
            "small",
            "sparkling",
            "throbbing",
            "shy",
            "wandering",
            "withered",
            "wild",
            "black",
            "young",
            "holy",
            "solitary",
            "fragrant",
            "aged",
            "snowy",
            "proud",
            "floral",
            "restless",
            "divine",
            "polished",
            "ancient",
            "purple",
            "lively",
            "nameless",
        ];
        const nouns = [
            "waterfall",
            "river",
            "breeze",
            "moon",
            "rain",
            "wind",
            "sea",
            "morning",
            "snow",
            "lake",
            "sunset",
            "pine",
            "shadow",
            "leaf",
            "dawn",
            "glitter",
            "forest",
            "hill",
            "cloud",
            "meadow",
            "sun",
            "glade",
            "bird",
            "brook",
            "butterfly",
            "bush",
            "dew",
            "dust",
            "field",
            "fire",
            "flower",
            "firefly",
            "feather",
            "grass",
            "haze",
            "mountain",
            "night",
            "pond",
            "darkness",
            "snowflake",
            "silence",
            "sound",
            "sky",
            "shape",
            "surf",
            "thunder",
            "violet",
            "water",
            "wildflower",
            "wave",
            "water",
            "resonance",
            "sun",
            "wood",
            "dream",
            "cherry",
            "tree",
            "fog",
            "frost",
            "voice",
            "paper",
            "frog",
            "smoke",
            "star",
        ];
        const adjective =
            adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        return adjective + noun;
    }

    // const userName = randomName();

    const [comment, setComment] = React.useState([""]);
    const [userName, setUsername] = React.useState(randomName());
    const [showComment, setShowComment] = React.useState(false);

    const handleChangeComment = (e) => {
        setComment(e.target.value);
    };

    const handleChangeUserName = (e) => {
        setUsername(e.target.value);
    };

    return (
        <>
            <Row>
                <Form.Label column="sm" lg={3}>
                    Username
                </Form.Label>
                <Col>
                    <Form.Control
                        size="sm"
                        type="text"
                        value={userName}
                        onChange={handleChangeUserName}
                    />
                </Col>
            </Row>
            <br />
            <Row>
                <Form.Label column lg={3}>
                    Comment
                </Form.Label>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Leave a comment"
                        value={comment}
                        onChange={handleChangeComment}
                    />
                </Col>
            </Row>
            <Button
                type="submit"
                value="Search"
                onClick={() => {
                    comments.push(comment);
                    setShowComment(!showComment);
                    setComment('');
                }}
            >
                Comment
            </Button>

            <br/>

            <div>
                {showComment ? <ComList userName={userName} comments= {comments} /> : null}
            </div>
        </>
    );
}
