import React, { useEffect, useState } from "react";
import ParentLayout from "../../layouts/ParentLayout";
import {
  FileInput,
  TextInput,
  TextAreaInput,
  SelectInput,
  YellowActionBtn,
  ActionBtn,
  Header,
} from "../../components";
const CollectionNft = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ParentLayout>
      <div className="w-full flex flex-col md:w-10/12 xl:w-6/12 mx-auto mb-32 ">
        <div className="flex flex-col mt-8 xl:mt-20 ">
          <Header>Collection Creation</Header>
          <p className="text-grey-800  text-sm regular">
            All fields with asterisks are required
          </p>
        </div>
        <div className="mt-12">
          <div className="form space-y-8 ">
            <TextInput
              placeholder="Your NFT name"
              label="Title*"
              name="title"
            />
            <FileInput label="Upload logo picture *" />

            <TextAreaInput
              placeholder="Your NFT description"
              label="Description*"
              name="description"
            />
            <TextInput
              placeholder="External link to your product page"
              label="External Links"
              name="link"
            />
            <FileInput label="Upload Background picture *" />

            <SelectInput
              placeholder="Select category"
              label="Category"
              name="category"
              options={[
                { value: "collection", label: "Collection" },
                { value: "single", label: "Single" },
                { value: "bundle", label: "Bundle" },
              ]}
            />
            <SelectInput
              placeholder="Select %fee"
              label="% Fee for creator earning "
              name="fee"
              options={[
                { value: "collection", label: "Collection" },
                { value: "single", label: "Single" },
                { value: "bundle", label: "Bundle" },
              ]}
            />
            <SelectInput
              placeholder="Ethereum"
              label="Blockchain Technology"
              name="technology"
              options={[
                { value: "collection", label: "Collection" },
                { value: "single", label: "Single" },
                { value: "bundle", label: "Bundle" },
              ]}
            />
          </div>
          <div className="mt-10 flex flex-col  ">
            <div className="mt-20 flex justify-center items-center space-x-8">
              <div className="w-6/12">
                <ActionBtn name="Create Collection" action={undefined} />
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
              <p className="semibold text-grey-800 text-center text-sm md:text-base regular ">
                By clicking create , you are agreeing to our Terms of Service
                and conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </ParentLayout>
  );
};

export default CollectionNft;
