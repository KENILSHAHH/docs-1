/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  overview: [{ type: 'autogenerated', dirName: 'overview' }],
  architecture: [{ type: 'autogenerated', dirName: 'architecture' }],
  build: [{ type: 'autogenerated', dirName: 'build' }],
  nodeOps: [{ type: 'autogenerated', dirName: 'node-ops' }],
  tutorials: [{ type: 'autogenerated', dirName: 'tutorials' }],
  cadence: [{ type: 'autogenerated', dirName: 'cadence' }],
  tools: [{ type: 'autogenerated', dirName: 'tools' }],
  references: [{ type: 'autogenerated', dirName: 'references' }],
  communityResources: [
    { type: 'autogenerated', dirName: 'community-resources' },
  ],
};

module.exports = sidebars;
