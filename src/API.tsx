/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCommentResponseInput = {
  id?: string | null,
  untitledfield?: string | null,
  commentID: string,
  _version?: number | null,
};

export type ModelCommentResponseConditionInput = {
  untitledfield?: ModelStringInput | null,
  commentID?: ModelIDInput | null,
  and?: Array< ModelCommentResponseConditionInput | null > | null,
  or?: Array< ModelCommentResponseConditionInput | null > | null,
  not?: ModelCommentResponseConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CommentResponse = {
  __typename: "CommentResponse",
  id: string,
  untitledfield?: string | null,
  commentID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCommentResponseInput = {
  id: string,
  untitledfield?: string | null,
  commentID?: string | null,
  _version?: number | null,
};

export type DeleteCommentResponseInput = {
  id: string,
  _version?: number | null,
};

export type CreateCommentInput = {
  id?: string | null,
  Header?: string | null,
  Body: string,
  Anonymous: boolean,
  RespondByText: boolean,
  RespondByEmail: boolean,
  RespondBySocial: boolean,
  _version?: number | null,
  commentUserId?: string | null,
};

export type ModelCommentConditionInput = {
  Header?: ModelStringInput | null,
  Body?: ModelStringInput | null,
  Anonymous?: ModelBooleanInput | null,
  RespondByText?: ModelBooleanInput | null,
  RespondByEmail?: ModelBooleanInput | null,
  RespondBySocial?: ModelBooleanInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  commentUserId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  User?: User | null,
  Header?: string | null,
  Body: string,
  Anonymous: boolean,
  RespondByText: boolean,
  RespondByEmail: boolean,
  RespondBySocial: boolean,
  CommentResponses?: ModelCommentResponseConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  commentUserId?: string | null,
  owner?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  cognitoID?: string | null,
  Email: string,
  First?: string | null,
  Last?: string | null,
  Phone?: string | null,
  Comment?: Comment | null,
  Newsletter?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  userCommentId?: string | null,
  owner?: string | null,
};

export type ModelCommentResponseConnection = {
  __typename: "ModelCommentResponseConnection",
  items:  Array<CommentResponse | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateCommentInput = {
  id: string,
  Header?: string | null,
  Body?: string | null,
  Anonymous?: boolean | null,
  RespondByText?: boolean | null,
  RespondByEmail?: boolean | null,
  RespondBySocial?: boolean | null,
  _version?: number | null,
  commentUserId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  cognitoID?: string | null,
  Email: string,
  First?: string | null,
  Last?: string | null,
  Phone?: string | null,
  Newsletter?: boolean | null,
  _version?: number | null,
  userCommentId?: string | null,
};

export type ModelUserConditionInput = {
  cognitoID?: ModelIDInput | null,
  Email?: ModelStringInput | null,
  First?: ModelStringInput | null,
  Last?: ModelStringInput | null,
  Phone?: ModelStringInput | null,
  Newsletter?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userCommentId?: ModelIDInput | null,
};

export type UpdateUserInput = {
  id: string,
  cognitoID?: string | null,
  Email?: string | null,
  First?: string | null,
  Last?: string | null,
  Phone?: string | null,
  Newsletter?: boolean | null,
  _version?: number | null,
  userCommentId?: string | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type ModelCommentResponseFilterInput = {
  id?: ModelIDInput | null,
  untitledfield?: ModelStringInput | null,
  commentID?: ModelIDInput | null,
  and?: Array< ModelCommentResponseFilterInput | null > | null,
  or?: Array< ModelCommentResponseFilterInput | null > | null,
  not?: ModelCommentResponseFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  Header?: ModelStringInput | null,
  Body?: ModelStringInput | null,
  Anonymous?: ModelBooleanInput | null,
  RespondByText?: ModelBooleanInput | null,
  RespondByEmail?: ModelBooleanInput | null,
  RespondBySocial?: ModelBooleanInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  commentUserId?: ModelIDInput | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  cognitoID?: ModelIDInput | null,
  Email?: ModelStringInput | null,
  First?: ModelStringInput | null,
  Last?: ModelStringInput | null,
  Phone?: ModelStringInput | null,
  Newsletter?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userCommentId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionCommentResponseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  untitledfield?: ModelSubscriptionStringInput | null,
  commentID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCommentResponseFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentResponseFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Header?: ModelSubscriptionStringInput | null,
  Body?: ModelSubscriptionStringInput | null,
  Anonymous?: ModelSubscriptionBooleanInput | null,
  RespondByText?: ModelSubscriptionBooleanInput | null,
  RespondByEmail?: ModelSubscriptionBooleanInput | null,
  RespondBySocial?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cognitoID?: ModelSubscriptionIDInput | null,
  Email?: ModelSubscriptionStringInput | null,
  First?: ModelSubscriptionStringInput | null,
  Last?: ModelSubscriptionStringInput | null,
  Phone?: ModelSubscriptionStringInput | null,
  Newsletter?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateCommentResponseMutationVariables = {
  input: CreateCommentResponseInput,
  condition?: ModelCommentResponseConditionInput | null,
};

export type CreateCommentResponseMutation = {
  createCommentResponse?:  {
    __typename: "CommentResponse",
    id: string,
    untitledfield?: string | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCommentResponseMutationVariables = {
  input: UpdateCommentResponseInput,
  condition?: ModelCommentResponseConditionInput | null,
};

export type UpdateCommentResponseMutation = {
  updateCommentResponse?:  {
    __typename: "CommentResponse",
    id: string,
    untitledfield?: string | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCommentResponseMutationVariables = {
  input: DeleteCommentResponseInput,
  condition?: ModelCommentResponseConditionInput | null,
};

export type DeleteCommentResponseMutation = {
  deleteCommentResponse?:  {
    __typename: "CommentResponse",
    id: string,
    untitledfield?: string | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      cognitoID?: string | null,
      Email: string,
      First?: string | null,
      Last?: string | null,
      Phone?: string | null,
      Newsletter?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCommentId?: string | null,
      owner?: string | null,
    } | null,
    Header?: string | null,
    Body: string,
    Anonymous: boolean,
    RespondByText: boolean,
    RespondByEmail: boolean,
    RespondBySocial: boolean,
    CommentResponses?:  {
      __typename: "ModelCommentResponseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    commentUserId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      cognitoID?: string | null,
      Email: string,
      First?: string | null,
      Last?: string | null,
      Phone?: string | null,
      Newsletter?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCommentId?: string | null,
      owner?: string | null,
    } | null,
    Header?: string | null,
    Body: string,
    Anonymous: boolean,
    RespondByText: boolean,
    RespondByEmail: boolean,
    RespondBySocial: boolean,
    CommentResponses?:  {
      __typename: "ModelCommentResponseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    commentUserId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      cognitoID?: string | null,
      Email: string,
      First?: string | null,
      Last?: string | null,
      Phone?: string | null,
      Newsletter?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCommentId?: string | null,
      owner?: string | null,
    } | null,
    Header?: string | null,
    Body: string,
    Anonymous: boolean,
    RespondByText: boolean,
    RespondByEmail: boolean,
    RespondBySocial: boolean,
    CommentResponses?:  {
      __typename: "ModelCommentResponseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    commentUserId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    cognitoID?: string | null,
    Email: string,
    First?: string | null,
    Last?: string | null,
    Phone?: string | null,
    Comment?:  {
      __typename: "Comment",
      id: string,
      Header?: string | null,
      Body: string,
      Anonymous: boolean,
      RespondByText: boolean,
      RespondByEmail: boolean,
      RespondBySocial: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      commentUserId?: string | null,
      owner?: string | null,
    } | null,
    Newsletter?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCommentId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    cognitoID?: string | null,
    Email: string,
    First?: string | null,
    Last?: string | null,
    Phone?: string | null,
    Comment?:  {
      __typename: "Comment",
      id: string,
      Header?: string | null,
      Body: string,
      Anonymous: boolean,
      RespondByText: boolean,
      RespondByEmail: boolean,
      RespondBySocial: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      commentUserId?: string | null,
      owner?: string | null,
    } | null,
    Newsletter?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCommentId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    cognitoID?: string | null,
    Email: string,
    First?: string | null,
    Last?: string | null,
    Phone?: string | null,
    Comment?:  {
      __typename: "Comment",
      id: string,
      Header?: string | null,
      Body: string,
      Anonymous: boolean,
      RespondByText: boolean,
      RespondByEmail: boolean,
      RespondBySocial: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      commentUserId?: string | null,
      owner?: string | null,
    } | null,
    Newsletter?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCommentId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetCommentResponseQueryVariables = {
  id: string,
};

export type GetCommentResponseQuery = {
  getCommentResponse?:  {
    __typename: "CommentResponse",
    id: string,
    untitledfield?: string | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCommentResponsesQueryVariables = {
  filter?: ModelCommentResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentResponsesQuery = {
  listCommentResponses?:  {
    __typename: "ModelCommentResponseConnection",
    items:  Array< {
      __typename: "CommentResponse",
      id: string,
      untitledfield?: string | null,
      commentID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCommentResponsesQueryVariables = {
  filter?: ModelCommentResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCommentResponsesQuery = {
  syncCommentResponses?:  {
    __typename: "ModelCommentResponseConnection",
    items:  Array< {
      __typename: "CommentResponse",
      id: string,
      untitledfield?: string | null,
      commentID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CommentResponsesByCommentIDQueryVariables = {
  commentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentResponsesByCommentIDQuery = {
  commentResponsesByCommentID?:  {
    __typename: "ModelCommentResponseConnection",
    items:  Array< {
      __typename: "CommentResponse",
      id: string,
      untitledfield?: string | null,
      commentID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      cognitoID?: string | null,
      Email: string,
      First?: string | null,
      Last?: string | null,
      Phone?: string | null,
      Newsletter?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCommentId?: string | null,
      owner?: string | null,
    } | null,
    Header?: string | null,
    Body: string,
    Anonymous: boolean,
    RespondByText: boolean,
    RespondByEmail: boolean,
    RespondBySocial: boolean,
    CommentResponses?:  {
      __typename: "ModelCommentResponseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    commentUserId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      Header?: string | null,
      Body: string,
      Anonymous: boolean,
      RespondByText: boolean,
      RespondByEmail: boolean,
      RespondBySocial: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      commentUserId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCommentsQuery = {
  syncComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      Header?: string | null,
      Body: string,
      Anonymous: boolean,
      RespondByText: boolean,
      RespondByEmail: boolean,
      RespondBySocial: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      commentUserId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    cognitoID?: string | null,
    Email: string,
    First?: string | null,
    Last?: string | null,
    Phone?: string | null,
    Comment?:  {
      __typename: "Comment",
      id: string,
      Header?: string | null,
      Body: string,
      Anonymous: boolean,
      RespondByText: boolean,
      RespondByEmail: boolean,
      RespondBySocial: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      commentUserId?: string | null,
      owner?: string | null,
    } | null,
    Newsletter?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCommentId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      cognitoID?: string | null,
      Email: string,
      First?: string | null,
      Last?: string | null,
      Phone?: string | null,
      Newsletter?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCommentId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      cognitoID?: string | null,
      Email: string,
      First?: string | null,
      Last?: string | null,
      Phone?: string | null,
      Newsletter?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCommentId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateCommentResponseSubscriptionVariables = {
  filter?: ModelSubscriptionCommentResponseFilterInput | null,
};

export type OnCreateCommentResponseSubscription = {
  onCreateCommentResponse?:  {
    __typename: "CommentResponse",
    id: string,
    untitledfield?: string | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCommentResponseSubscriptionVariables = {
  filter?: ModelSubscriptionCommentResponseFilterInput | null,
};

export type OnUpdateCommentResponseSubscription = {
  onUpdateCommentResponse?:  {
    __typename: "CommentResponse",
    id: string,
    untitledfield?: string | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCommentResponseSubscriptionVariables = {
  filter?: ModelSubscriptionCommentResponseFilterInput | null,
};

export type OnDeleteCommentResponseSubscription = {
  onDeleteCommentResponse?:  {
    __typename: "CommentResponse",
    id: string,
    untitledfield?: string | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      cognitoID?: string | null,
      Email: string,
      First?: string | null,
      Last?: string | null,
      Phone?: string | null,
      Newsletter?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCommentId?: string | null,
      owner?: string | null,
    } | null,
    Header?: string | null,
    Body: string,
    Anonymous: boolean,
    RespondByText: boolean,
    RespondByEmail: boolean,
    RespondBySocial: boolean,
    CommentResponses?:  {
      __typename: "ModelCommentResponseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    commentUserId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      cognitoID?: string | null,
      Email: string,
      First?: string | null,
      Last?: string | null,
      Phone?: string | null,
      Newsletter?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCommentId?: string | null,
      owner?: string | null,
    } | null,
    Header?: string | null,
    Body: string,
    Anonymous: boolean,
    RespondByText: boolean,
    RespondByEmail: boolean,
    RespondBySocial: boolean,
    CommentResponses?:  {
      __typename: "ModelCommentResponseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    commentUserId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      cognitoID?: string | null,
      Email: string,
      First?: string | null,
      Last?: string | null,
      Phone?: string | null,
      Newsletter?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCommentId?: string | null,
      owner?: string | null,
    } | null,
    Header?: string | null,
    Body: string,
    Anonymous: boolean,
    RespondByText: boolean,
    RespondByEmail: boolean,
    RespondBySocial: boolean,
    CommentResponses?:  {
      __typename: "ModelCommentResponseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    commentUserId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    cognitoID?: string | null,
    Email: string,
    First?: string | null,
    Last?: string | null,
    Phone?: string | null,
    Comment?:  {
      __typename: "Comment",
      id: string,
      Header?: string | null,
      Body: string,
      Anonymous: boolean,
      RespondByText: boolean,
      RespondByEmail: boolean,
      RespondBySocial: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      commentUserId?: string | null,
      owner?: string | null,
    } | null,
    Newsletter?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCommentId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    cognitoID?: string | null,
    Email: string,
    First?: string | null,
    Last?: string | null,
    Phone?: string | null,
    Comment?:  {
      __typename: "Comment",
      id: string,
      Header?: string | null,
      Body: string,
      Anonymous: boolean,
      RespondByText: boolean,
      RespondByEmail: boolean,
      RespondBySocial: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      commentUserId?: string | null,
      owner?: string | null,
    } | null,
    Newsletter?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCommentId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    cognitoID?: string | null,
    Email: string,
    First?: string | null,
    Last?: string | null,
    Phone?: string | null,
    Comment?:  {
      __typename: "Comment",
      id: string,
      Header?: string | null,
      Body: string,
      Anonymous: boolean,
      RespondByText: boolean,
      RespondByEmail: boolean,
      RespondBySocial: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      commentUserId?: string | null,
      owner?: string | null,
    } | null,
    Newsletter?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCommentId?: string | null,
    owner?: string | null,
  } | null,
};
