import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['Int'];
  name: Scalars['String'];
  logo: Scalars['String'];
  address: Scalars['String'];
  city: Scalars['String'];
  province: Scalars['String'];
  country: Scalars['String'];
  zip_code: Scalars['String'];
  industry: Scalars['String'];
  size: Scalars['String'];
  founded: Scalars['Float'];
  description: Scalars['String'];
  email: Scalars['String'];
  tel?: Maybe<Scalars['String']>;
  website: Scalars['String'];
  facebook?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
};

export type CompanyCreateInput = {
  name: Scalars['String'];
  logo: Scalars['String'];
  address: Scalars['String'];
  city: Scalars['String'];
  province: Scalars['String'];
  country: Scalars['String'];
  zip_code: Scalars['String'];
  industry: Scalars['String'];
  size: Scalars['String'];
  founded: Scalars['Float'];
  description: Scalars['String'];
  email: Scalars['String'];
  tel?: Maybe<Scalars['String']>;
  website: Scalars['String'];
  facebook?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginResponse;
  register: Scalars['Boolean'];
  companyCreate: Company;
};

export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};

export type MutationRegisterArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};

export type MutationCompanyCreateArgs = {
  input: CompanyCreateInput;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  users: Array<User>;
  companies: Array<Company>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  password: Scalars['String'];
};
export type CompaniesQueryVariables = {};

export type CompaniesQuery = { __typename?: 'Query' } & {
  companies: Array<
    { __typename?: 'Company' } & Pick<
      Company,
      | 'id'
      | 'name'
      | 'logo'
      | 'address'
      | 'city'
      | 'province'
      | 'country'
      | 'zip_code'
      | 'industry'
      | 'size'
      | 'founded'
      | 'description'
      | 'email'
      | 'tel'
      | 'website'
      | 'facebook'
      | 'linkedin'
    >
  >;
};

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
      zip_code
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

export function useCompaniesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<CompaniesQuery, CompaniesQueryVariables>
) {
  return ApolloReactHooks.useQuery<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, baseOptions);
}
export function useCompaniesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CompaniesQuery, CompaniesQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, baseOptions);
}

export type CompaniesQueryHookResult = ReturnType<typeof useCompaniesQuery>;
export type CompaniesQueryResult = ApolloReactCommon.QueryResult<CompaniesQuery, CompaniesQueryVariables>;
