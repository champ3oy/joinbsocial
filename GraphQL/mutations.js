import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation (
    $name: String!
    $email: String!
    $phone: String!
    $referredByCode: String
  ) {
    RegisterWaitListUser(
      name: $name
      email: $email
      phone: $phone
      referredByCode: $referredByCode
    ) {
      _id
      name
      referralCode
    }
  }
`;
