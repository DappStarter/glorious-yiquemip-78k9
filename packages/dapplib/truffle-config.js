require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remove coffee imitate private forget spring'; 
let testAccounts = [
"0xcbc5917e17d4ec61df97c2284f1f1431d3e5abfcc1afe7ae68342c10a20d75f6",
"0x33529969350f2ea6713b3a2dd7788c7e7d5fef207d279e5c5b824d424bf500ab",
"0xc6517063e152edfd432b74211ca45d09bd41eaf2e1179090fc3f3f1e0500d280",
"0x06d608b8bc6d830eb5d10e4bd73861692e67ccaa57930e738e0c4c543f456de6",
"0xb4885b965615a5eb9c5c3554c63f43a5561e36898765cac4030376378252eebb",
"0xa218cd20e0c1e950f3d55a354fd5cc1216ef64c257570bc7076dbd3d0c14a326",
"0x9d4a36efd79f4b7e0a3f3c892a03efec61c614708f4e0c179adbfb71e04ee3d7",
"0x900e28a8c39f44ccd07df1c7015af0b02277a9deb5e3ff67955b5da3094480d7",
"0x9ce675d3e4cf9400d8d7c70f072aef704a4050c15feecc90b116190fa438e2ac",
"0x5896d5d45c93e2cd79b3a2e0ab860ae88f7b9b6e4ed46acdd8e2fea893a436ef"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


