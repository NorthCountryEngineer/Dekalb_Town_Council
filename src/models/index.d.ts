import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerCommentResponse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CommentResponse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly untitledfield?: string | null;
  readonly commentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommentResponse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CommentResponse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly untitledfield?: string | null;
  readonly commentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommentResponse = LazyLoading extends LazyLoadingDisabled ? EagerCommentResponse : LazyCommentResponse

export declare const CommentResponse: (new (init: ModelInit<CommentResponse>) => CommentResponse) & {
  copyOf(source: CommentResponse, mutator: (draft: MutableModel<CommentResponse>) => MutableModel<CommentResponse> | void): CommentResponse;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User?: User | null;
  readonly Header?: string | null;
  readonly Body: string;
  readonly Anonymous: boolean;
  readonly RespondByText: boolean;
  readonly RespondByEmail: boolean;
  readonly RespondBySocial: boolean;
  readonly CommentResponses?: (CommentResponse | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly commentUserId?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Header?: string | null;
  readonly Body: string;
  readonly Anonymous: boolean;
  readonly RespondByText: boolean;
  readonly RespondByEmail: boolean;
  readonly RespondBySocial: boolean;
  readonly CommentResponses: AsyncCollection<CommentResponse>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly commentUserId?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cognitoID?: string | null;
  readonly Email: string;
  readonly First?: string | null;
  readonly Last?: string | null;
  readonly Phone?: string | null;
  readonly Comment?: Comment | null;
  readonly Newsletter?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userCommentId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cognitoID?: string | null;
  readonly Email: string;
  readonly First?: string | null;
  readonly Last?: string | null;
  readonly Phone?: string | null;
  readonly Comment: AsyncItem<Comment | undefined>;
  readonly Newsletter?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userCommentId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}