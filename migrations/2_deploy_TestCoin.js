/* global artifacts */

const TestCoin = artifacts.require('TestCoin');

module.exports = async (deployer, network, addresses) => {
  const deployAccount = addresses[0];
  console.log(`network = ${network}, deployAccount = ${deployAccount}\n`);

  // Deploy TestCoin
  console.log(`\nDeploy TestCoin to ${network}`);
  await deployer.deploy(TestCoin);
  const testCoin = await TestCoin.deployed();
  console.log(`\nOK: TestCoin is deployed at: ${testCoin.address}\n`);
};
