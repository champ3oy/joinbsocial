import { gql } from "@apollo/client";

export const RANKED_USERS = gql`
  query ($orderBy: String!, $limit: Int) {
    ListRankedUsers(orderBy: $orderBy, limit: $limit) {
      _id
      name
      invitedUsers
      avatar
    }
  }
`;

export const GET_POSTION = gql`
  query ($id: String) {
    getMyRankNumberforWaitList(id: $id) {
      message
      json
    }
  }
`;

export const GET_TOTAL_NUMBER = gql`
  query {
    CountTotalReferredUsers {
      message
    }
  }
`;

export const GET_WAITLIST_NUMBER = gql`
  query {
    CountTotalWaitListUsers {
      message
    }
  }
`;
