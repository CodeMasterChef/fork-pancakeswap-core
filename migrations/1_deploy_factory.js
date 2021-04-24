require('dotenv').config();
const Factory = artifacts.require('PancakeFactory');

module.exports = async function (deployer, network, addresses) {
  if (network === 'development') {
    await deployer.deploy(Factory, addresses[0]);
  } else if (network === 'bsctestnet') {
    console.log("📊: process.env.PUBLIC_KEY ", process.env.PUBLIC_KEY);
    await deployer.deploy(Factory, process.env.PUBLIC_KEY);
  }

  const factory = await Factory.deployed();
};
