import { gql } from '@apollo/client';

export const QUERY_TOPICS = gql`
query topicSearch($topicName:String!) {
  topic (name: $topicName) {
    name
    stargazerCount
    relatedTopics (first: 10){
      name,
      stargazerCount
    }
  }
}
`;