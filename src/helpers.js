import { graphQLErrorResults } from "./constants";

export const isGraphQLErrorResult = (result) =>
  graphQLErrorResults.some(
    (errorResult) => errorResult.type === result.__typename
  );
