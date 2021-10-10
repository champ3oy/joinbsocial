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

export const VERIFY_USER = gql`
  mutation($verifyToken: String!) {
    VerifyWaitListUserEmail(verifyToken: $verifyToken) {
      message
    }
  }
`