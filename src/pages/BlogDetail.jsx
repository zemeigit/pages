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
            blog: blog,
        }
    }
    componentDidMount = async () => {
        const { id, blog } = this.state
        blog.forEach(res => {
            if (id === res.id) {
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