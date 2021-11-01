import React, { Component } from 'react';
import blog from './blog.json'
import marked from 'marked'
import '../style/pages.css'

class BlogDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            time: '',
            description: '',
            content: '',
            blog: [
                {
                   "id":"005",
                   "title":"Climbing Record",
                   "time":"2021-10-06",
                   "description":"Rope Climbing Record",
                   "content":"<iframe width='560' height='315' src='https://www.youtube.com/embed/C24wnBRCxNg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
                },
                {
                   "id":"004",
                   "title":"Tadoussac whale",
                   "time":"2021-06-08",
                   "description":"Tadoussac whale watch trip",
                   "content":"<iframe width='560' height='315' src='https://www.youtube.com/embed/7ZeTfH9_Dpc' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
                },
                {
                   "id":"003",
                   "title":"Montreal",
                   "time":"2020-08-10",
                   "description":"Montreal Royal Mont",
                   "content":"<iframe width='560' height='315' src='https://www.youtube.com/embed/d_KkebFyPv8' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
                },
                {
                   "id":"002",
                   "title":"Thousand Islands",
                   "time":"2020-07-18",
                   "description":"Thousand Islands Canada",
                   "content":"<iframe width='560' height='315' src='https://www.youtube.com/embed/yKj4SBP9PpM' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
                },
                {
                   "id":"001",
                   "title":"Montreal Bicycle",
                   "time":"2020-06-05",
                   "description":"Montreal Bicycle Record",
                   "content":"<iframe width='560' height='315' src='https://www.youtube.com/embed/nhZqcMZu7oM' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
                }
            ]
        }
    }
    componentDidMount = async () => {
        const { id, blog } = this.state
        blog.forEach(res => {
            if (id == res.id) {
                this.setState({
                    title: res.title,
                    time: res.time,
                    description: res.description,
                    content: res.content,
                })
            }
        })
    }

    render() {
        const { title, time, description, content } = this.state
        let html = marked(content)
        return (
            <div className="list">
                <div className="list-detail">
                    <h2>{title}</h2>
                    <p>{time}</p>
                    <p>{description}</p>
                    <div className="detailed-content" dangerouslySetInnerHTML = {{__html:html}} />
                    
                </div>
            </div>
        );
    }
}

export default BlogDetail;