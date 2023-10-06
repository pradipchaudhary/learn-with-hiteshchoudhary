import React, { Component } from "react";

const list = [
    {
        title: "React",
        url: "https://facebook.github.io/react/",
        author: "Jordan Walke",
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: "Redux",
        url: "https://github.com/reactjs/redux",
        author: "Dan Abramov, Andrew Clark",
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];
class ClassComponent extends Component {
    render() {
        return (
            <div>
                {list.map((item, index) => {
                    return (
                        <div key={index}>
                            <span>
                                <a href={item.url}>{item.title}</a>
                            </span>
                            <span>{item.author}</span>
                            <span>{item.num_comments}</span>
                            <span>{item.points}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ClassComponent;
