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
  mutation ($verifyToken: String!) {
    VerifyWaitListUserEmail(verifyToken: $verifyToken) {
      message
    }
  }
`;

export const BRAND_SIGNUP = gql`
  mutation BrandSignupMutation(
    $email: String!
    $phone: String!
    $device: String!
    $productName: String
    $totalBudget: String
    $spendPerDay: String
    $cpvc: String
    $cpc: String
    $cpv: String
    $requirements: String
    $challengeExample: String
    $bsocialReferralSource: String
    $approveAllEntires: Boolean
    $continueRegisterationToken: String
  ) {
    BrandSignup(
      email: $email
      phone: $phone
      device: $device
      productName: $productName
      totalBudget: $totalBudget
      spendPerDay: $spendPerDay
      cpvc: $cpvc
      cpc: $cpc
      cpv: $cpv
      requirements: $requirements
      challengeExample: $challengeExample
      bsocialReferralSource: $bsocialReferralSource
      approveAllEntires: $approveAllEntires
      continueRegisterationToken: $continueRegisterationToken
    ) {
      status
    }
  }
`;

export const BRAND_SIGNUP_C = gql`
  mutation BrandSignupMutation(
    $device: String!
    $totalBudget: String
    $spendPerDay: String
    $cpvc: String
    $cpc: String
    $cpv: String
    $requirements: String
    $challengeExample: String
    $bsocialReferralSource: String
    $approveAllEntires: Boolean
    $continueRegisterationToken: String
  ) {
    BrandSignup(
      device: $device
      totalBudget: $totalBudget
      spendPerDay: $spendPerDay
      cpvc: $cpvc
      cpc: $cpc
      cpv: $cpv
      requirements: $requirements
      challengeExample: $challengeExample
      bsocialReferralSource: $bsocialReferralSource
      approveAllEntires: $approveAllEntires
      continueRegisterationToken: $continueRegisterationToken
    ) {
      status
    }
  }
`;