const LikesPage = ({likes}) => {


    return ( <div className={likes.length > 0 ? "likespage" : "likespage emptylikespage"}>

        {likes.length > 0 ? likes.map(likeurl => (
             <div 
                className="likedpic"
                style={{
                    backgroundImage: "url("+likeurl+")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundColor: "white"
                }}
            >
            </div> 
        )) : 
    
        <p className="nolikes">no likes yet!</p>
        } 




    </div> );
}
 
export default LikesPage;