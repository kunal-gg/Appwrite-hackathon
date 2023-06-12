import { Client, Graphql, Account } from "appwrite";

// initialize SDK
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("648572c525d7bde51d87");

export const account = new Account(client);

export const graphql = new Graphql(client);
