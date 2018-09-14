import React from 'react';
import './Content.css';
import moment from 'moment';

function Content({ item }) {
    let submittedAgo = moment.unix(item.created).fromNow();
    let hostname = (new URL(item.url)).hostname;

    return (
        <React.Fragment>
            <a href={item.url}>{item.title}</a>
            <span>{hostname}</span>
            <div className='Redit-Content-User'>Submitted {submittedAgo} by <a href={`https://www.reddit.com/user/${item.author}`} target="_blank">{item.author}</a></div>
            <ul className="Reddit-Content-Navigation">
                <li className="Reddit-Content-Navigation-Bold"><a href={`https://www.reddit.com${item.permalink}`} target="_blank">{item.num_comments} comments</a></li>
                <li><a href=''>share</a></li>
                <li><a href=''>save</a></li>
                <li><a href=''>hide</a></li>
                <li><a href=''>report</a></li>
                <li><a href=''>pocket</a></li>
            </ul>
        </React.Fragment>
    );
}

export default Content;