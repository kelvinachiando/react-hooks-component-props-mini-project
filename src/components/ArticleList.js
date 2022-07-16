import React from "react";
import Article from "./Article";


function ArticleList({ posts }) {


    return (
        <main>
            {posts ? posts.map(({ title, date, preview, minutes }, i) => (
                <Article key={i} title={title} minutes={minutes} date={date} preview={preview} />
            )) : ""}

        </main>);
}

export default ArticleList;