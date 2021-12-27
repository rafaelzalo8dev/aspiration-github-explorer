import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { get } from 'lodash';

import { useQuery } from '@apollo/client';
import { QUERY_TOPICS } from '../../gqlQueries/topic';
import Loader from '../../components/Loader';
import InfoWarning from '../../components/InfoWarning';
import Tooltip from '@mui/material/Tooltip';
import { SectionTitle, TopicItem, HeaderTable, ValueItem, HeaderItem } from './styles';
function TopicDetail() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const topic = pathname.split('/');
  const topicName = topic[1];
  const { loading, error, data } = useQuery(QUERY_TOPICS, {
    variables: { topicName },
  });
  const relatedTopics = get(data, 'topic.relatedTopics', []);
  
  const handleGoToTopic = (relatedTopic) => {
    navigate(`/${relatedTopic.name}`);
  };
 
  return (
    <div className="App">
      <header className="App-header">
        <SectionTitle>
          Github Topic Explorer
        </SectionTitle>
        { loading &&
          <Loader />
        }
        { error && <InfoWarning
          message={"Error"}
          type={"error"}
          open={true}
        />}
        { !error && !loading &&
          <InfoWarning
            message={"API response is OK"}
            type={"success"}
            open={true}
          />
        }
        
        { !loading && data &&
          get(data, 'topic.name', null) &&
          <div>
            <SectionTitle>
              Current Topic
            </SectionTitle>
            <div><b>Name</b> {get(data, 'topic.name', null)}</div>
            <div><b>Stargazers</b> {get(data, 'topic.stargazerCount', 0)}</div>
          </div>
        }
        { !loading && relatedTopics.length &&
          <SectionTitle>
            Related topics
          </SectionTitle>
        }
        {
          !loading && relatedTopics && relatedTopics.length > 0 &&
          <HeaderTable>
            <HeaderItem>Name</HeaderItem>
            <HeaderItem>Stargazers</HeaderItem>
          </HeaderTable>
        }
        { !loading && relatedTopics &&
          relatedTopics.map(related => 
            <Tooltip key={related.name} title="Check this topic">
              <TopicItem onClick={() => { handleGoToTopic(related)}}>
                <ValueItem>{get(related, 'name', '')}</ValueItem>
                <ValueItem>{get(related, 'stargazerCount', 0)}</ValueItem>
              </TopicItem>
            </Tooltip>
            
          )
        }
      </header>
    </div>
  );
}

export default TopicDetail;