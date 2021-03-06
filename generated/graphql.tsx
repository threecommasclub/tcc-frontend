import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Company = {
   __typename?: 'Company',
  id: Scalars['ID'],
  name: Scalars['String'],
  logo: Scalars['String'],
  address: Scalars['String'],
  city: Scalars['String'],
  province: Scalars['String'],
  country: Scalars['String'],
  zipCode: Scalars['String'],
  fullAddress: Scalars['String'],
  industry: Scalars['String'],
  size: Scalars['String'],
  founded: Scalars['Int'],
  description: Scalars['String'],
  email: Scalars['String'],
  tel?: Maybe<Scalars['String']>,
  website: Scalars['String'],
  facebook?: Maybe<Scalars['String']>,
  linkedin?: Maybe<Scalars['String']>,
  location: Location,
};

export type CompanyCreateInput = {
  name: Scalars['String'],
  logo: Scalars['String'],
  address: Scalars['String'],
  city: Scalars['String'],
  province: Scalars['String'],
  country: Scalars['String'],
  zipCode: Scalars['String'],
  industry: Scalars['String'],
  size: Scalars['String'],
  founded: Scalars['Int'],
  description: Scalars['String'],
  email: Scalars['String'],
  tel?: Maybe<Scalars['String']>,
  website: Scalars['String'],
  facebook?: Maybe<Scalars['String']>,
  linkedin?: Maybe<Scalars['String']>,
  location: LocationInput,
};

export type EmailVerification = {
   __typename?: 'EmailVerification',
  id: Scalars['ID'],
  userId: Scalars['String'],
};

export type Location = {
   __typename?: 'Location',
  lat: Scalars['Float'],
  lng: Scalars['Float'],
};

export type LocationInput = {
  lat: Scalars['Float'],
  lng: Scalars['Float'],
};

export type LoginInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};

export type LoginResponse = {
   __typename?: 'LoginResponse',
  accessToken: Scalars['String'],
  user: User,
};

export type Mutation = {
   __typename?: 'Mutation',
  login: LoginResponse,
  logout: Scalars['Boolean'],
  revokeRefreshTokensForUser: Scalars['Boolean'],
  register: User,
  companyCreate: Company,
};


export type MutationLoginArgs = {
  input: LoginInput
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['String']
};


export type MutationRegisterArgs = {
  input: RegisterInput
};


export type MutationCompanyCreateArgs = {
  input: CompanyCreateInput
};

export type Query = {
   __typename?: 'Query',
  me?: Maybe<User>,
  users: Array<User>,
  authedQuery: Scalars['String'],
  authorizedQuery: Scalars['String'],
  companies: Array<Company>,
};

export type RegisterInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  email: Scalars['String'],
};

export type CompaniesQueryVariables = {};


export type CompaniesQuery = (
  { __typename?: 'Query' }
  & { companies: Array<(
    { __typename?: 'Company' }
    & Pick<Company, 'id' | 'name' | 'logo' | 'address' | 'city' | 'province' | 'country' | 'zipCode' | 'fullAddress' | 'industry' | 'size' | 'founded' | 'description' | 'email' | 'tel' | 'website' | 'facebook' | 'linkedin'>
  )> }
);


export const CompaniesDocument = gql`
    query Companies {
  companies {
    id
    name
    logo
    address
    city
    province
    country
    zipCode
    fullAddress
    industry
    size
    founded
    description
    email
    tel
    website
    facebook
    linkedin
  }
}
    `;

/**
 * __useCompaniesQuery__
 *
 * To run a query within a React component, call `useCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompaniesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCompaniesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CompaniesQuery, CompaniesQueryVariables>) {
        return ApolloReactHooks.useQuery<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, baseOptions);
      }
export function useCompaniesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CompaniesQuery, CompaniesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, baseOptions);
        }
export type CompaniesQueryHookResult = ReturnType<typeof useCompaniesQuery>;
export type CompaniesLazyQueryHookResult = ReturnType<typeof useCompaniesLazyQuery>;
export type CompaniesQueryResult = ApolloReactCommon.QueryResult<CompaniesQuery, CompaniesQueryVariables>;