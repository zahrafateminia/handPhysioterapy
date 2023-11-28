import { gql } from "@apollo/client";

const GET_POST = gql`
  query {
    posts {
      title
      slug
      conte {
        html
        text
      }
      id
      coverphoto {
        url
      }
    }
  }
`;
const GET_POST_DETAIL = gql`
  query getPostInfo($slug: String!) {
    post(where: { slug: $slug }) {
      title
      slug
      conte {
        html
        text
      }
      id
      coverphoto {
        url
      }
    }
  }
`;
const CREATE_REQUEST = gql`
  mutation sendRequest(
    $name: String!
    $email: String!
    $lastname: String!
    $number: String!
    $details: String!
    $jobtitle: String!
  ) {
    createRequest(
      data: {
        email: $email
        jobtitle:$jobtitle
        lastname: $lastname
        name: $name
        number: $number
        details: $details
      }
    ) {
      id
    }
  }
`;
export { CREATE_REQUEST, GET_POST, GET_POST_DETAIL };
