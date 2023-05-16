import imageHeader from '../assets/ugescudoblackandwhithe.png'

export default function Header(){
    return(
        <div className="header-main-menu-container">
            <header className="header-main-menu">
                <div className="title-header-container">
                    <div className="title-header">
                        <h3>Probabilidad y Estadistica App</h3>
                    </div>
                    <div className="image-main-header-container">
                        <img className="image-main-header" src={imageHeader}></img>
                    </div>
                </div>
            </header>
        </div>
    )
}