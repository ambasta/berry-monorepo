import axios from 'axios';
import { DynamoDBClient, ListTablesCommand } from '@aws-sdk/client-dynamodb';


export const sync = async(): Promise<any> => {
  try {
    const { data } = await axios.get('https://www.google.com');
    console.log(`Data is ${data}`);
  } catch (err) {
    console.log(`Error occurred: ${err}`);
  }
};

export const list = async(): Promise<any> => {
  try {
    const client = new DynamoDBClient('ap-south-1');
    const data = await client.send(new ListTablesCommand({}));

    if (data !== undefined && data.TableNames !== undefined) {
      console.log(`Tables: ${data.TableNames.join('\n')}`);
    }
  } catch (err) {
    console.log(`Error occurred: ${err}`);
  }
};
