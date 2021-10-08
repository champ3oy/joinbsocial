import { gql } from "@apollo/client";

export const RANKED_USERS = gql`
  query ($orderBy: String!) {
    ListRankedUsers(orderBy: $orderBy) {
      _id
      name
      invitedUsers
    }
  }
`;

export const GET_POSTION = gql`
  query ($id: String) {
    getMyRankNumberforWaitList(id: $id) {
      message
    }
  }
`;
