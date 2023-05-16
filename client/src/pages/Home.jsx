import imageMunicipe from '../assets/croquis.png'
import CardOneTopic from '../Components/CardOneTopic'
import CardTwoTopics from '../Components/CardTwoTopics'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

export const Home = () => {
    return (
        <div>
            <Header/>
            <div className='video-background-container'>
                <div className='cards-topics-container'>
                    <img className='image-state' src={imageMunicipe}></img>
                   <div className='cards-topics-row-one'>
                        <h1 className='title-description-app'>
                            ¿Qué es PyE App?
                        </h1>
                        <h1 className='description-app'>
                            Probabilidad y estadisctica app es un aplicación web diseñada y hecha para
                            facilitar el calculo de las tablas de probabilidad y estadisctica vistas en el curso
                            de la ENMSL de la Universidad de Guanajuato, construida y diseñada para automatizar los
                            calculos de las tablas y ademas siendo sencilla de usar para cualquier persona.  
                        </h1>
                   </div>
                </div>
            </div>
            <div className='description-app-container'>
                <div className='description-app-background'>
                    <div className='cards-container'>
                    <CardOneTopic
                        title={"Tabla de frecuencias"}
                        link1={"/table-frequency"}
                    />
                    <CardTwoTopics
                            title={"Segundo momento"}
                            topic1={"Datos no agrupados"}
                            topic2={"Datos agrupados"}
                            link1={"/second-moment-dates-not-grouped"}
                            link2={"/second-moment-dates-grouped"}
                        />
                        <CardTwoTopics
                            title={"Medidas de dispersión"}
                            topic1={"Datos no agrupados"}
                            topic2={"Datos agrupados"}
                            link1={"/measures-of-dispersion-dates-not-grouped"}
                            link2={"/measures-of-dispersion-dates-grouped"}
                        />
                        <CardOneTopic
                            title={"Curtosis"}
                            link1={"/curtosis"}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
