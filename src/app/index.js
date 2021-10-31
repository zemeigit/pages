import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, Footer } from '../components'
import { AboutMe, MainPage, BlogList, BlogDetail } from '../pages'

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/about" exact component={AboutMe} />
                <Route path="/" exact component={MainPage} />
                <Route path="/pages" exact component={MainPage} />
                <Route path="/blog/list" exact component={BlogList} />
                <Route path="/blog/detail/:id" exact component={BlogDetail} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App