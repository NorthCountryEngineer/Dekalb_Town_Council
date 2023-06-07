/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCommentResponse = /* GraphQL */ `
  mutation CreateCommentResponse(
    $input: CreateCommentResponseInput!
    $condition: ModelCommentResponseConditionInput
  ) {
    createCommentResponse(input: $input, condition: $condition) {
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
export const updateCommentResponse = /* GraphQL */ `
  mutation UpdateCommentResponse(
    $input: UpdateCommentResponseInput!
    $condition: ModelCommentResponseConditionInput
  ) {
    updateCommentResponse(input: $input, condition: $condition) {
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
export const deleteCommentResponse = /* GraphQL */ `
  mutation DeleteCommentResponse(
    $input: DeleteCommentResponseInput!
    $condition: ModelCommentResponseConditionInput
  ) {
    deleteCommentResponse(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
