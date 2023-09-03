import { S3Client } from "@aws-sdk/client-s3";
import { ACCESS_KEY_ID, PRIVATE_KEY, S3_REGION } from "./environment";

export const bucketS3 = new S3Client(
    {
        credentials: {
            accessKeyId: ACCESS_KEY_ID,
            secretAccessKey: PRIVATE_KEY,
        },
        region: S3_REGION,
    }
);
