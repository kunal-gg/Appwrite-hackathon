import { Client, Graphql, Account, Databases } from "appwrite";

// initialize SDK
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("648158a211b1b27a07a5");

export const account = new Account(client);
export const graphql = new Graphql(client);
export const databases = new Databases(client);