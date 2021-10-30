import React, { Component } from 'react'
import { List } from 'antd';
import blog from './blog.json'
import '../style/pages.css'
import 'antd/dist/antd.css'

class BlogList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blog: blog,
            columns: [],
            isLoading: false,
        }
    }

    render() {
        const { blog } = this.state

        return (
            <div className="list">
            <List
                className="blog-list"
                itemLayout="vertical"
                dataSource={blog}
                
                renderItem={item => (
                    <List.Item key={item.title}>
                        <List.Item.Meta
                            title={<a href={`/blog/detail/${item.id}`}>{item.title}</a>}
                            description={item.time}
                        />
                    <p>{item.description}</p>
                    </List.Item>
                )}
            />
            </div>
        )
    }
}

export default BlogList