import * as IPFS from "ipfs-core";
const ipfs = await IPFS.create();
/** Uses `URL.createObjectURL` free returned ObjectURL with `URL.RevokeObjectURL` when done with it.
 *
 * @param {string} cid CID you want to retrieve
 * @param {string} mime mimetype of image (optional, but useful)
 * @param {number} limit size limit of image in bytes
 * @returns ObjectURL
 */
async function loadImgURL(cid, mime, limit) {
    if (cid == "" || cid == null || cid == undefined) {
        return;
    }
    for await (const file of ipfs.get(cid)) {
        if (file.size > limit) {
            return;
        }
        const content = [];
        if (file.content) {
            for await (const chunk of file.content) {
                content.push(chunk);
            }
            return URL.createObjectURL(new Blob(content, { type: mime }));
        }
    }
}
