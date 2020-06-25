import {PubSub} from "@google-cloud/pubsub";

const projectId: string = 'content-eng-qa'
export const pubsub = new PubSub({
    projectId: projectId,
    keyFilename: 'src/main/resources/key.json'
});
