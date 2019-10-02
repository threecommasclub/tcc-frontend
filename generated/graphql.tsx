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
  register: User,
  logout: Scalars['Boolean'],
  revokeRefreshTokensForUser: Scalars['Boolean'],
  companyCreate: Company,
};


export type MutationLoginArgs = {
  input: LoginInput
};


export type MutationRegisterArgs = {
  input: RegisterInput
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['String']
};


export type MutationCompanyCreateArgs = {
  input: CompanyCreateInput
};

export type Query = {
   __typename?: 'Query',
  me?: Maybe<User>,
  users: Array<User>,
  authedQuery: Scalars['String'],
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

    export function useCompaniesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CompaniesQuery, CompaniesQueryVariables>) {
      return ApolloReactHooks.useQuery<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, baseOptions);
    }
      export function useCompaniesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CompaniesQuery, CompaniesQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, baseOptions);
      }
      
export type CompaniesQueryHookResult = ReturnType<typeof useCompaniesQuery>;
export type CompaniesQueryResult = ApolloReactCommon.QueryResult<CompaniesQuery, CompaniesQueryVariables>;