import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation (
    $name: String!
    $email: String!
    $phone: String!
  ) {
    RegisterWaitListUser(
      name: $name
      email: $email
      phone: $phone
    ) {
      _id
      name
      referralCode
    }
  }
`;