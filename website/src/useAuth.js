import { graphql } from "./Config";

const useAuth = () => {
  // sign up functionality
  const signup = async (email, password, username) => {
    const response = await graphql.mutation({
      query: `mutation (
                $email: String!,
                $password: String!,
                $name: String
            ) {
                accountCreate(
                    userId: "unique()",
                    email: $email,
                    password: $password,
                    name: $name
                ) {
                  _id
                }
            }`,
      variables: {
        email: email,
        password: password,
        name: username,
      },
    });

    if (response.errors) {
      throw response.errors[0].message;
    }
  };

  return {
    signup,
  };
};

export default useAuth;
