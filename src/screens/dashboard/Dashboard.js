import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Article from '../../components/article/ArticleList';
import ArticleAdd from '../../components/article/ArticleAdd';
import ArticleDetail from '../../components/article/ArticleDetail';

import Author from '../../components/author/AuthorList';
import AuthorAdd from '../../components/author/AuthorAdd';

import Action from '../../components/actions/ActionList';
import ActionAdd from '../../components/actions/ActionAdd';
import ActionDetail from '../../components/actions/ActionDetail';

import News from '../../components/news/NewsList';
import NewsDetail from '../../components/news/NewsDetail';

import {createQueryRenderer} from "../../relay/createQueryRender";
import {createFragmentContainer, graphql} from "react-relay";

const Wrapper = styled.div`
  height: 100%
  display: flex;
  width: 100%;
`;

class Dashboard extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header/>
        <Sidebar isAdmin = {this.props.query.me.isAdmin }/>
        <Switch>
          <Route
            path={'/'}
            exact={true}
            render={(props) => <Redirect to={'/news'} /> }
          />
          <Route
            path={'/articles'}
            exact={true}
            render={(props) => <Article {...props}/> }
          />
          <Route
            path={'/articles/add'}
            exact={true}
            render={(props) => <ArticleAdd {...props}/> }
          />
          <Route
            path={'/articles/:id'}
            exact={true}
            render={(props) => <ArticleDetail {...props}/> }
          />
          <Route
            path={'/authors'}
            exact={true}
            render={(props) => <Author {...props}/> }
          />
          <Route
            path={'/authors/add'}
            exact={true}
            render={(props) => <AuthorAdd {...props}/> }
          />
          <Route
            path={'/actions'}
            exact={true}
            render={(props) => <Action {...props}/> }
          />
          <Route
            path={'/actions/add'}
            exact={true}
            render={(props) => <ActionAdd {...props}/> }
          />
          <Route
            path={'/actions/:id'}
            exact={true}
            render={(props) => <ActionDetail {...props}/> }
          />
          <Route
            path={'/news'}
            exact={true}
            render={(props) => <News {...props}/> }
          />
          <Route
            path={'/news/:id'}
            exact={true}
            render={(props) => <NewsDetail {...props}/> }
          />
        </Switch>
      </Wrapper>
    )
  }
}

const DashboardFragmentContainer = createFragmentContainer(Dashboard, {
  query: graphql`
    fragment Dashboard_query on Query {
      me {
        isAdmin
      }
    }
  `,
});

export default createQueryRenderer(DashboardFragmentContainer, {
  query: graphql`
    query DashboardQuery {
      ...Dashboard_query
    }
  `,
});


