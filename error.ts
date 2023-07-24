import { NitroErrorHandler } from "nitropack";

export default <NitroErrorHandler>function (error, event) {
    event.node.res.statusCode = error.statusCode;
    let deserializedMessage = undefined;
    try {
        deserializedMessage = JSON.parse(error.message);
    } catch (e) {
        deserializedMessage = error.message;
    }
    event.node.res.end(
        JSON.stringify({
            error,
            deserializedMessage,
        }),
    );
};
