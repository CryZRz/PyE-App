import { Link } from "react-router-dom";

export default function CardTwoTopics({title,topic1,topic2, link1, link2}){
    return(
        <div className='card-topic-container'>
            <div className='title-card-main-manu'>
                <h3 className='title-card-topic'>{title}</h3>
            </div>
            <div className='card-topic-sections'>
                <div className='topicone-main-manu'>
                    <button className='btn-go-topic'>
                        <Link to={link1} className='topic-main-menu'>{topic1}</Link>
                    </button>
                </div>
                <div className='topictwo-main-manu'>
                    <button className='btn-go-topic'>
                        <Link to={link2} className='topic-main-menu'>{topic2}</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}