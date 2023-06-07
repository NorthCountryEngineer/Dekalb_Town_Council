/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCommentResponse = /* GraphQL */ `
  query GetCommentResponse($id: ID!) {
    getCommentResponse(id: $id) {
      id
      untitledfield
      commentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCommentResponses = /* GraphQL */ `
  query ListCommentResponses(
    $filter: ModelCommentResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentResponses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        untitledfield
        commentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCommentResponses = /* GraphQL */ `
  query SyncCommentResponses(
    $filter: ModelCommentResponseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCommentResponses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        untitledfield
        commentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const commentResponsesByCommentID = /* GraphQL */ `
  query CommentResponsesByCommentID(
    $commentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentResponsesByCommentID(
      commentID: $commentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        untitledfield
        commentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      User {
        id
        cognitoID
        Email
        First
        Last
        Phone
        Newsletter
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCommentId
        owner
      }
      Header
      Body
      Anonymous
      RespondByText
      RespondByEmail
      RespondBySocial
      CommentResponses {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      commentUserId
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Header
        Body
        Anonymous
        RespondByText
        RespondByEmail
        RespondBySocial
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        commentUserId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Header
        Body
        Anonymous
        RespondByText
        RespondByEmail
        RespondBySocial
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        commentUserId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      cognitoID
      Email
      First
      Last
      Phone
      Comment {
        id
        Header
        Body
        Anonymous
        RespondByText
        RespondByEmail
        RespondBySocial
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        commentUserId
        owner
      }
      Newsletter
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCommentId
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoID
        Email
        First
        Last
        Phone
        Newsletter
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCommentId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        cognitoID
        Email
        First
        Last
        Phone
        Newsletter
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCommentId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
