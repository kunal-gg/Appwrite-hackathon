import { useState } from "react";
import { account, databases } from ".../Config";

const GetLinks = async () => {

    const user = await account.get();
    const [links, setLinks] = useState([]);

    const promise = databases.listDocuments(
        "64875a7da23959304d11", //database id
        "64875a8aa880d388c5bf" //collection id
        //   [Query.equal("link", ["https://appwrite.io/docs/databases"])]
    );
  
    promise.then(
        function (response) {
            console.log(response);
            setLinks(response.documents.filter((link) => link.user_id === user.id));
        },
        function (error) {
            console.log(error);
        }
    );
};

export default GetLinks;