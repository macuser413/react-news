import React, { Component } from 'react'


const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=6ad3a5693c1948fc80c91b0ccaf18ea9';

const req = new Request(url);

class NewsApp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             headlines: []
        }
    }
    
    componentDidMount() {
        this.newHeadline()
    }

    newHeadline = () => {
        fetch(req)
        .then(res => res.json())
        .then(res => {
            console.log(res.articles);
        })
    }

    render() {
        return (
            <div className="container">
                <div>
                    
                </div>
            </div>
        )
    }
}

export default NewsApp