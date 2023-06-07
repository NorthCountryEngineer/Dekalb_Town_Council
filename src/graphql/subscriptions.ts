/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCommentResponse = /* GraphQL */ `
  subscription OnCreateCommentResponse(
    $filter: ModelSubscriptionCommentResponseFilterInput
  ) {
    onCreateCommentResponse(filter: $filter) {
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
export const onUpdateCommentResponse = /* GraphQL */ `
  subscription OnUpdateCommentResponse(
    $filter: ModelSubscriptionCommentResponseFilterInput
  ) {
    onUpdateCommentResponse(filter: $filter) {
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
export const onDeleteCommentResponse = /* GraphQL */ `
  subscription OnDeleteCommentResponse(
    $filter: ModelSubscriptionCommentResponseFilterInput
  ) {
    onDeleteCommentResponse(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onCreateComment(filter: $filter, owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onUpdateComment(filter: $filter, owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onDeleteComment(filter: $filter, owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
