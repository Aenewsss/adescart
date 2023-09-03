import { PutObjectCommand } from "@aws-sdk/client-s3";
import { S3_BUCKET } from "@components/constants/environment";
import { bucketS3 } from "@components/constants/s3-bucket";

export const uploadImageS3 = async (imageFile: File) => {
    const params = {
        Bucket: S3_BUCKET,
        Key: `produtos/` + imageFile.name,
        Body: imageFile,
        ACL: 'public-read',
        ContentType: imageFile.type
    };

    try {
        await bucketS3.send(new PutObjectCommand(params));
        console.log("SUCCESS");
        return 'https://adescart.s3.amazonaws.com/' + `produtos/` + imageFile.name;
    } catch (error: any) {
        throw Error(error.message)
    }
}