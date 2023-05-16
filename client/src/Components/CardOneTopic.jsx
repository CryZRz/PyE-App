import { Link } from "react-router-dom";

export default function CardOneTopic({title, link1}){
    return(
        <div className='card-topic-container'>
            <div className='title-card-main-manu'>
                <h3 className='title-card-topic'>{title}</h3>
            </div>
            <div className='card-topic-sections'>
                <div className='topicone-main-manu'>
                    <h3 className='title-card-topic'>
                        <Link to={link1} className='topic-main-menu'>{title}</Link>
                    </h3>
                </div>
            </div>
        </div>
    )
}