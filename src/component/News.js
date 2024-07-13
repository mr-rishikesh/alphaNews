import React, { Component } from "react";
import NewsItem from "../NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      totalResults: 0,
      page: 1,
    };
    document.title = `Alpha News-${this.capital(this.props.category)}`;
    document.body.style.backgroundColor = '#E1EBEE';
  }

  async componentDidMount() {
    this.fetchNews();
  }

  async fetchNews() {
    this.props.setProgress(10);
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  handlePageChange = async (increment) => {
    this.setState({ page: this.state.page + increment }, this.fetchNews);
  };
  capital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  render() {
    return (
      <div className="container" style={{backgroundColor:'#E1EBEE'}}>
        <h2 className="text-center" style={{marginTop:'65px' , color: '#002D62'}}>
          Alpha News - Top {this.capital(this.props.category)} Headings
        </h2>
        {this.state.loading && <Spinner />}

        <div className="row my-3">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between my-3">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-primary"
            onClick={() => this.handlePageChange(-1)}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-primary"
            onClick={() => this.handlePageChange(1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;

// import React, { Component } from "react";
// import NewsItem from "../NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from 'prop-types'

// export class News extends Component {
//   static defaultProps = {
//     country : 'in',
//     pageSize:8,
//     category: 'general'
//   }
//   static propType = {
//     country : PropTypes.string,
//     pageSize:PropTypes.number,
//     categ0ry:  PropTypes.string,

//   }
//   articles = [
//     {
//       source: { id: "espn-cric-info", name: "ESPN Cric Info" },
//       author: null,
//       title:
//         "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//       description:
//         "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//       url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//       urlToImage:
//         "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//       publishedAt: "2020-04-27T11:41:47Z",
//       content:
//         "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
//     },
//     {
//       source: { id: "espn-cric-info", name: "ESPN Cric Info" },
//       author: null,
//       title:
//         "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//       description:
//         "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//       url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//       urlToImage:
//         "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//       publishedAt: "2020-03-30T15:26:05Z",
//       content:
//         "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
//     },
//   ];

//   constructor() {
//     super();

//     this.state = {
//       articles: this.articles,
//       loading: false,
//       totalResults: 1,
//       page:1

//     };
//   }

//   async componentDidMount() {
//     this.setState({loading: true});
//     let url =
//       `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5f70b9392d744f06bf1d4b9219a6a9c2&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let passedData = await data.json();
//     this.setState({
//       articles: passedData.articles,
//       totalResults: passedData.totalResults,
//       loading:false
//     });
//   }
//   async updatePage() {

//     this.setState({loading: true});
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country} &category=${this.props.category}&apiKey=5f70b9392d744f06bf1d4b9219a6a9c2&page=${
//       this.state.page
//     }&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let passedData = await data.json();
//      this.setState({

//       articles: passedData.articles,
//       totalResults: passedData.totalResults,
//       loading: false
//     });

//   }

//   nextPage = async () => {

//       // this.setState({loading: true});
//       // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country} &category=${this.props.category}&apiKey=5f70b9392d744f06bf1d4b9219a6a9c2&page=${
//       //   this.state.page + 1
//       // }&pageSize=${this.props.pageSize}`;
//       // let data = await fetch(url);
//       // let passedData = await data.json();
//       // this.setState({
//       //   page: this.state.page + 1,
//       //   articles: passedData.articles,
//       //   totalResults: passedData.totalResults,
//       //   loading: false
//       // });
//       this.setState({page:this.state.page+1})
//     await  this.updatePage()

//   };
//   prevPage = async () => {
//     console.log("helloo rishidfdfdfdf ");
//     this.setState({loading: true});
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country} &category=${this.props.category}&apiKey=5f70b9392d744f06bf1d4b9219a6a9c2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let passedData = await data.json();
//     this.setState({
//       page: this.state.page - 1,
//       articles: passedData.articles,
//       loading : false
//     });
//   };

//   render() {
//     return (
//       <div className="container ">
//         <h2 className="text-center">Alpha News - Top Headings</h2>
//         {this.state.loading && <Spinner /> }

//         <div className="row my-3">
//           { !this.state.loading  && this.state.articles &&
//             this.state.articles.map((element) => {
//               return (
//                 <div className="col-md-4" key={element.url}>
//                   <NewsItem
//                     title={element.title ? element.title.slice(0, 45) : ""}
//                     description={
//                       element.description
//                         ? element.description.slice(0, 88)
//                         : ""
//                     }
//                     imageUrl={element.urlToImage}
//                     newsUrl={element.url}
//                     author = {element.author}
//                     date ={element.publishedAt}
//                     sourse = {element.source.name}

//                   />
//                 </div>
//               );
//             })}
//         </div>
//         <div className=" d-flex justify-content-between my-3">
//           <button
//             type="button"
//             disabled={this.state.page <= 1}
//             className="btn btn-primary"
//             onClick={this.prevPage}
//           >
//             Previous
//           </button>
//           <button type="button" disabled={!this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className="btn btn-primary" onClick={this.nextPage}>
//             Next
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default News;
