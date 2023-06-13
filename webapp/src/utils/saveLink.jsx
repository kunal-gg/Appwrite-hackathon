import { ID } from "appwrite";
import { account, databases } from ".../Config";


const SaveLink = async (props) => {
    
    const user = await account.get();
    //save link to database
    const promise = databases.createDocument(
      "64875a7da23959304d11", //database id
      "64875a8aa880d388c5bf", //collection id
      ID.unique(),
      { link: props.link , user_id: user.id }
    );

    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
};
  
export default SaveLink;

