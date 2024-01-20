import { Fragment } from "react";
import Style from './Post.module.css';
const Post = ({props}) => {
    return ( 
        <Fragment>
            <div className={Style.main}>
                <div>
                    <p>{props.content}</p>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Post;