---
id: getting-spaces
title: Getting Spaces
---

## Find and load single space

```
flatApi.findSpace(query: FindSpaceQuery): Promise<SpaceData | undefined>
```

Example:

```javascript
flatApi.findSpace({ id: '1' })
```

Output: 

```json
{
  "id": "1",
  "struct": {
    "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
    "createdAtBlock": 0,
    "createdAtTime": 0,
    "isUpdated": true,
    "updatedByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
    "updatedAtBlock": 1976464,
    "updatedAtTime": 1608780324000,
    "contentId": "bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e",
    "id": "1",
    "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
    "hidden": false,
    "handle": "subsocial",
    "postsCount": 88,
    "hiddenPostsCount": 7,
    "visiblePostsCount": 81,
    "followersCount": 2200,
    "score": 65716
  },
  "content": {
    "about": "Subsocial is an open protocol for decentralized social networks and marketplaces. It's built with Substrate and IPFS. [Learn more](https://subsocial.network/)",
    "handle": "subsocial",
    "image": "Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe",
    "links": [
      "https://subsocial.network",
      "https://twitter.com/SubsocialChain",
      "https://medium.com/dappforce",
      "https://t.me/Subsocial",
      "https://github.com/dappforce",
      "https://www.youtube.com/channel/UC1xCFynfwMrjEtFdMf8nXgQ"
    ],
    "name": "Subsocial",
    "tags": [
      "subsocial",
      "polkadot",
      "substrate",
      "sofi",
      "chain",
      "ipfs"
    ],
    "summary": "Subsocial is an open protocol for decentralized social networks and marketplaces. It's built with Substrate and IPFS. Learn more",
    "isShowMore": false
  }
}
```

> 🆃 [FindSpaceQuery](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findspacequery): [*FindStruct*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstruct) < [*AnySpaceId*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid) >

> 🆃 [SpaceData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*Space*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html), [*SpaceContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent) >


## Find and load an array of spaces

### findPublicSpaces

Load an array of information about public spaces from the Subsocial blockchain and IPFS by a given array of space `ids`.

A space is considered public if it meets these conditions:

- The `hidden` field on its blockchain structure is `false`.
- And there is a corresponding JSON file that represents the space's content on IPFS.

```
flatApi.findPublicSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>
```

Example:

```typescript
flatApi.findPublicSpaces(['1'])
```

### findUnlistedSpaces

Find and load an array of information about unlisted spaces from the Subsocial blockchain and IPFS by a given array of space `ids`.

A space is considered unlisted if it meets either of these conditions:

- The `hidden` field on it's blockchain structure is `true`.
- Or there is no corresponding JSON file that represents the space's content on IPFS.

```
flatApi.findUnlistedSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>
```

Example:

```typescript
flatApi.findUnlistedSpaces(['1'])
```

> 🆃 [FindSpacesQuery](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findspacesquery): [*FindStructs*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstructs) < [*AnySpaceId*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid) >
>
> 🆃 [SpaceData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*Space*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html), [*SpaceContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent) >
>
> 🆃 [AnySpaceId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid): [*SpaceId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html) | *BN*  

## Find and load structs and contents separately

### Get structs

```
flatApi.findSpaceStructs(ids: AnyId[]): Promise<SpaceStruct[]>
flatApi.findSpaceStruct(id: AnyId): Promise<SpaceStruct | undefined>
```

Example: 

```typescript
flatApi.findSpaceStruct('1')
```

Output: 

```json
{
  "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
  "createdAtBlock": 0,
  "createdAtTime": 0,
  "isUpdated": true,
  "updatedByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
  "updatedAtBlock": 1976464,
  "updatedAtTime": 1608780324000,
  "contentId": "bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e",
  "id": "1",
  "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
  "hidden": false,
  "handle": "subsocial",
  "postsCount": 88,
  "hiddenPostsCount": 7,
  "visiblePostsCount": 81,
  "followersCount": 2200,
  "score": 65716
}
```

### Get contents

Find and load off-chain information about spaces from IPFS by a given array `cid`.

Space information only exists if there is a corresponding JSON file that represents the spaces' content on IPFS.

```
flatApi.subsocial.ipfs.findSpaces(cids: IpfsCid[]): Promise<ContentResult<SpaceContent>>
flatApi.subsocial.ipfs.findSpace(cid: IpfsCid): Promise<SpaceContent | undefined>
```

Example: 

```typescript
import { convertToDerivedContent } from "@subsocial/api/flat-subsocial/utils" //add summary and isShowMore properties

(async () => {
  convertToDerivedContent(await flatApi.subsocial.ipfs.findSpace('bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e'))
})()
```

Output:

```json
{
  "bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e": {
    "about": "Subsocial is an open protocol for decentralized social networks and marketplaces. It's built with Substrate and IPFS. [Learn more](https://subsocial.network/)",
    "handle": "subsocial",
    "image": "Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe",
    "links": [
      "https://subsocial.network",
      "https://twitter.com/SubsocialChain",
      "https://medium.com/dappforce",
      "https://t.me/Subsocial",
      "https://github.com/dappforce",
      "https://www.youtube.com/channel/UC1xCFynfwMrjEtFdMf8nXgQ"
    ],
    "name": "Subsocial",
    "tags": [
      "subsocial",
      "polkadot",
      "substrate",
      "sofi",
      "chain",
      "ipfs"
    ],
    "summary": "Subsocial is an open protocol for decentralized social networks and marketplaces. It's built with Substrate and IPFS. Learn more",
    "isShowMore": false
  }
}
```

> 🆃 [IpfsCid](https://docs.subsocial.network/js-docs/js-sdk/modules.html#ipfscid): *string* | *CID* | *IpfsCid*

> 🆃 [ContentResult](https://docs.subsocial.network/js-docs/js-sdk/modules.html#contentresult) <T&>: *Record*<*CidAsStr*, *T*>

> 🆃 [SpaceContent](https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent): *ContentFormat* & { about: *string*; email: *string*; image: *string*; links: *string[]* | *NamedLink[]*; name: *string*; tags: *string[]* }

## Find and load space ID by handle

A handle is an alias for a space ID.

```
substrateApi.getSpaceIdByHandle(handle: string): Promise<SpaceId>
```

Example: 

```typescript
substrateApi.getSpaceIdByHandle('subsocial')
```

> 🅸 [SpaceId](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html)

## Find and load space IDs by owner

Get the IDs of all spaces created by a certain profile.

```
substrateApi.spaceIdsByOwner(id: AnyAccountId): Promise<SpaceId[]>
```

Example:

```typescript
substrateApi.spaceIdsByOwner('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')
```

## Find and load space IDs followed by account

Find IDs of all spaces that a profile is following.

```
substrateApi.spaceIdsFollowedByAccount(id: AnyAccountId): Promise<SpaceId[]>
```

Example:

```typescript
substrateApi.spaceIdsFollowedByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')
```

> 🆃 [AnyAccountId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyaccountid): *AccountId* | *string*

> 🅸 [SpaceId](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html)
