export const resolveLink = (url) => {
    if (!url || !url.includes("ipfs://")) return url;
    return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
};

// import * as IPFS from "ipfs-core";
export const resolveIPFS = async (node, cid) => {
    // const node = await IPFS.create();
    // const cid = "/ipfs/Qmay7eKcsxZ5UkraAucEGtTsv6LzA5hn3P8JnQQcWaVwcN";

    // load the raw data from js-ipfs (>=0.40.0)
    let bufs = [];
    for await (const buf of node.cat(cid)) {
        bufs.push(buf);
    }
    const data = Buffer.concat(bufs);

    var blob = new Blob([data], { type: "image/jpg" });
    var img = document.getElementById("target"); // the img tag you want it in
    img.src = window.URL.createObjectURL(blob);
};
