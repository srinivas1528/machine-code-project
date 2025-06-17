import React, {useState} from 'react';
import Button from './Button/Button';


const Like = () => {


   const [loading, setLoading] = useState(false);

   const [error, setError] = useState(null);

   const [liked, setLiked] = useState(false);

  
   const handleClick = async () => {
        
    setLoading(true);

     try{
         const response = await fetch(
           "https://www.greatfrontend.com/api/questions/like-button",
           {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
            action: liked ? "unlike" : "like",  // send like/unlike action, let backend handle what they want to do with the action; may be log it or do some analytics.
            }),
           }
         );

         if(response.status === 200) {
            // clear errors if any
            setError(null);
            // toogle like status
            setLiked(!liked); 
         } else {
            const res = await response.json();
            setError(res);
            setLiked(false); // The action did not go through and we set the default status to false always.
         }
     } catch {
        setError("Some error encoured");
        setLiked(false);
     } finally{
        setLoading(false);
     }
     
   }

   // Pass props to the button component
   // Render button component. 
   return (
    <div className="App"> 
        <Button onClick={handleClick}
        liked = {liked}
        error = {error}
        loading = {loading}          
        />
    </div>
   )

    // const [likeStatus, setLikeStatus] = useState(false);


    // const handleLikeButtonClick = (event) => {
    //     setLikeStatus(likeStatus === true ? false: true);
    //     console.log('like button clicked');
    // }

    // return (
    //  <div>
    //   {/* <img src={logo} onClick={() => handleLikeButtonClick()} alt="likelogo" /> */}
    //   <button onClick={() => handleLikeButtonClick()}>
    //       Click Me
    //   </button>
    //   {likeStatus && <p>Liked</p>}
    //   {!likeStatus && <p>Disliked</p>}
    //  </div>

    // )
}

export default Like