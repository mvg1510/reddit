import React from 'react';
import './Content.css';
import moment from 'moment';

function Content({ item, onHidePost }) {
    let submittedAgo = moment.unix(item.created).fromNow();
    let hostname = (new URL(item.url)).hostname;

    return (
        <React.Fragment>
            <a href={item.url}>{item.title}</a>
            <span>{hostname}</span>
            <div className='Redit-Content-User'>Submitted {submittedAgo} by <a target="_blank" href={`https://www.reddit.com/user/${item.author}`} target="_blank">{item.author}</a></div>
            <ul className="Reddit-Content-Navigation">
                <li className="Reddit-Content-Navigation-Bold"><a href={`https://www.reddit.com${item.permalink}`} target="_blank">{item.num_comments} comments</a></li>
                <li><span>share</span></li>
                <li><span>save</span></li>
                <li><span onClick={() => onHidePost(item)}>hide</span></li>
                <li><span>report</span></li>
                <li><span>pocket</span></li>
            </ul>
        </React.Fragment>
    );
}

export default Content;