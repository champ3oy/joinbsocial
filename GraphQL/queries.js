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

export const GET_POST = gql`
  query Post($postId: String!) {
    Post(id: $postId) {
      _id
      hashtag
      media_type
      media_type
      media_url
      media_thumbnail
      audio_text
      audio_url
      likeCount
      commentCount
      creator {
        name
        username
        avatar
      }
    }
  }
`;

export const GET_CONTENT_BY_ID = gql`
  query GetContentById($contentId: String) {
    GetContentById(content_id: $contentId) {
      _id
      caption
      content_url
      creator {
        _id
        profile_picture
        username
        name
      }
      hashtags {
        _id
        text
      }
      thumbnail_url
    }
  }
`;

export const GET_CONTENTS = gql`
  query TrendingContents($limit: Int, $page: Int) {
    TrendingContents(limit: $limit, page: $page) {
      _id
      caption
      content_url
      creator {
        _id
        profile_picture
        username
        name
      }
      hashtags {
        _id
        text
      }
      thumbnail_url
    }
  }
`;

export const GET_COMMENTS = gql`
  query GetComments($contentId: String!, $limit: Int, $page: Int) {
    GetComments(content_id: $contentId, limit: $limit, page: $page) {
      _id
      user {
        _id
        name
        username
        profile_picture
      }
      text
      repliesCount
      updated_at
    }
  }
`;
