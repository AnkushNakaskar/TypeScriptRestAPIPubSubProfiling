import {ApplicationLogger} from '@logging/Logger'
import {pubsub} from '../config/pubsub/PubSubConfig'
import config from '@config/Config'
import ProjectConfig from "@config/ProjectConfig";

const logger = ApplicationLogger.getAppLogger("PubSubService");
const projectConfig: ProjectConfig | undefined = config.getConfig();

export class PubSubService {

    static topicName: string = projectConfig ? projectConfig.topicName ? projectConfig.topicName : "" : "";
    static subscriberName: string = projectConfig ? projectConfig.subscripberName ? projectConfig.subscripberName : "" : "";

    listenForMessages() {

        var subscription = pubsub.subscription(PubSubService.subscriberName, {
            flowControl: {
                maxMessages: 1,
                allowExcessMessages: false
            }
        });
        logger.info("Listing to pubsub subscriber + " + PubSubService.subscriberName)
        subscription.on('message', (message) => this.messageHandler(message))
        subscription.on('error', (error) => {
            logger.error("error in pubsub subscriber ::: " + error);
        });

    }

    messageHandler(message: any) {
        logger.info("fetching message from   pubsub subscriber + " + PubSubService.subscriberName + " IS : " + message);
        logger.info(`Received message ${message.id}:`);
        logger.info(`\tData: ${message.data}`);
        logger.info(`\tAttributes: ${message.attributes}`);
        message.ack();

    }


}

export default PubSubService;

