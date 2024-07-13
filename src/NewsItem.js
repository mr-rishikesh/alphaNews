import React  from "react";

const NewsItem =(props) =>  {
  
    let { title, description, imageUrl ,newsUrl,author,date,source} = props;
    return (
      <div>
        <div className="card" style={{ boxShadow:  'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} >
          <div style={{display:'flex', justifyContent  :'flex-end ',  position :'absolute ', right : '0 ' }}>
             <span className="  badge rounded-pill bg-danger "  >
   {source}
     
  </span>
          </div>
       
          <img src={imageUrl?imageUrl:"https://imageio.forbes.com/specials-images/imageserve/6022abfe5f53b54273ff7976/The-TikTok-of-the-Fake-News-Clock--Thinking-Our-Way-Out-of-the-Fake-News-Crisis/960x0.jpg?format=jpg&width=1440"} className="card-img-top" alt="..." /> 
          <div className="card-body">
            <h5 className="card-title" style={{color: '#1d1160'}}>{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text "><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>

            <a href= {newsUrl} target="_blank" className="btn btn-sm btn-primary">
              
             Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
