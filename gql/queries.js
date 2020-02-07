import { gql } from "apollo-boost";
import { BOOK_FRAGMENT, USER_FRAGMENT, POST_FRAGMENT } from "./fragments";

export const SEARCH = gql`
  query books($term: String!) {
    books(term: $term) {
      ...BookParts
    }
  }
  ${BOOK_FRAGMENT}
`;

export const ME = gql`
  {
    me {
      ...UserParts
    }
  }
  ${USER_FRAGMENT}
`;

export const POST_DETAIL = gql`
  query seeFullPost($id: String!) {
    seeFullPost(id: $id) {
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;

export const USER_DETAIL = gql`
  query seeUser($userId: String!) {
    seeUser(userId: $userId) {
      ...UserParts
    }
  }
  ${USER_FRAGMENT}
`;

export const FEED = gql`
  {
    seeFeed {
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;

export const SEARCH_USER = gql`
  query searchUser($name: String!) {
    searchUser(name: $name) {
      id
      name
      bio
      isFollowing
      isSelf
      postsCount
    }
  }
  ${USER_FRAGMENT}
`;

export const TOGGLE_FOLLOW = gql`
  mutation toggleFollow($id: String!) {
    toggleFollow(id: $id)
  }
`;