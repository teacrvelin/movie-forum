import React from "react";
import { movies } from "../helper/mockeddata";
import Card2 from "./Card2";

export default function DisBoard() {
    return (
        <div>
            {movies.map(({ title, description, comments }) => {
                return (
                    <Card2
                        key={title}
                        title={title}
                        description={description}
                        comments={comments} 
                    />
                );
                
            })}
        </div>
    );
}
