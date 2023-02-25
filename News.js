import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 12
    }
    static prototypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
    }
    capital = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        // console.log("hogya");
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        //    if(document.title==='Home'){
        document.title = `${this.capital(this.props.category)} - NewsRider`;

    }
    async update() {
        this.props.setprog(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=debc4eff438e4c32bdc724476ec9e0e1&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setprog(30);
        let parsedData = await data.json();
        this.props.setprog(70);
        // console.log(parsedData);
        this.setState({
            articles: parsedData.articles, totalResults: parsedData.totalResults

            , loading: false,
        })
        this.props.setprog(100);
    }
    async componentDidMount() {
        // console.log("hogya na")
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=debc4eff438e4c32bdc724476ec9e0e1&pagesize=${this.props.pagesize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles, totalResults: parsedData.totalResults
        //     , loading: false
        // })
        this.update();
    }

    // handleprevious = async () => { //only used while making diffrent buttons
    //     this.setState({ page: this.state.page - 1 })
    //     this.update();
    // }
    // handlenext = async () => {

    //     this.setState({ page: this.state.page + 1 })
    //     this.update();
    // }
    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=debc4eff438e4c32bdc724476ec9e0e1&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;

        this.setState({ page: this.state.page + 1 })
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults



        })
    };
    render() {
        // console.log("render");
        return (
            <>
                <h1 className='text-center  ' style={{ margin: '35px 0', marginTop: '50px' }}>NewsRider - Top {this.capital(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                >
                    {/* here i used loading because my Spinner.js is rendering the gif after full load of page  */}
                    <div className="container">
                        <div className="row " >
                            {this.state.articles.map((element, index) => {

                                return <div className="col md-4" key={index}>

                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevious}>   &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}
export default News


