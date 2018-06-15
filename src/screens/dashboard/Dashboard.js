import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Article from '../../components/article/ArticleList';
import ArticleAdd from '../../components/article/ArticleAdd';
import ArticleDetail from '../../components/article/ArticleDetail';

const Wrapper = styled.div`
  height: 100%
  display: flex;
  width: 100%;
`;

export default class Dashboard extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header/>
        <Sidebar/>
        <Route
          path={'/'}
          exact={true}
          render={(props) => <div> HOME </div>  }
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
      </Wrapper>
    )
  }
}
