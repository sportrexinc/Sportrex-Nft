import React from 'react'
import ParentLayout from '../../layouts/ParentLayout'
import { LinkBtn } from '../../components'
const index = () => {
  return (
    <ParentLayout current={2}>
      <h1 className="text-white my-10">
        This is Nft Market place
      </h1>
      <div className="flex space-x-8">
        <LinkBtn name="single nft" path="/mint-single-nft" />
        <LinkBtn name="collection nft" path="/mint-collection-nft" />
        <LinkBtn name="bundle nft" path="/mint-bundle-nft" />
      </div>
    </ParentLayout>
  )
}

export default index