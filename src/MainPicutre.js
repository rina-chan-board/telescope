import {ReactComponent as LikeHeart} from './likeheart.svg'


const MainPicture = ({data, likes, setLikes}) => {


    const mainpicturestyle = {
        backgroundImage:"url(" + data.url + ")",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }


    let currenturl  = (' ' + data.url).slice(1);
    const isVideo = currenturl.slice(0, 23) === "https://www.youtube.com"


    const setLike = () => {


        //UNLIKE PIC 
        if (likes.includes(data.url)) {
            const pictounlike = data.url
            setLikes(likes.filter(pic => pic !== pictounlike))
            localStorage.setItem('likes', likes)

        } else {

        // LIKE PIC
            setLikes([...likes, data.url])
            localStorage.setItem('likes', likes)
        }
    }


    return ( <div className="mainpicture">

        {isVideo ? 
        <iframe className="loadingbg" src={data.url}>
            <div className="likebutton" onClick={setLike}>
                <div className={likes.includes(data.url) ? "likeheartripple1 likeani" : "likeheartripple1"}></div>
                <div className={likes.includes(data.url) ? "likeheartripple2 likeani" : "likeheartripple2"}></div>
                <div className={likes.includes(data.url) ? "likeheartripple3 likeani" : "likeheartripple3"}></div>

                <div className={likes.includes(data.url) ? "likeheart liked" : "likeheart unliked"}></div>
                <LikeHeart className="likeheartborder"/>
            </div>        
        </iframe> :  
        
        data.code ?
        
       <div className="pic"><span className="errmsg">{data.msg}</span></div>

        :

        <div className="pic loadingbg" style={mainpicturestyle}>
            <div className="likebutton"onClick={setLike}>
                <div className={likes.includes(data.url) ? "likeheartripple1 likeani" : "likeheartripple1"}></div>
                <div className={likes.includes(data.url) ? "likeheartripple2 likeani" : "likeheartripple2"}></div>
                <div className={likes.includes(data.url) ? "likeheartripple3 likeani" : "likeheartripple3"}></div>

                <div className={likes.includes(data.url) ? "likeheart liked" : "likeheart unliked"}></div>
                <LikeHeart className="likeheartborder"/>
            </div>
        </div>
        
        
        }

    
        <div className="allpicinfo">
            <span className='pictitle picinfo'>{data.title}</span>
            <span className='picdate picinfo'>{data.date}</span>
            <span className='picdate picinfo'>{data.copyright ? data.copyright : "Unknown"}</span>
            <span className='picexplanation picinfo'>{data.explanation}</span>
        </div>

    </div> );
}

 
export default MainPicture;