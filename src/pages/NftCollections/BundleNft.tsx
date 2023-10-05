import React, { useEffect, useState } from "react";
import ParentLayout from "../../layouts/ParentLayout";
import {
  FileInput,
  TextInput,
  TextAreaInput,
  SelectInput,
  YellowActionBtn,
  ActionBtn,
} from "../../components";
const BundleNft = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <ParentLayout>
      <div className="w-full flex flex-col md:w-10/12 xl:w-6/12 mx-auto mb-32 ">
        <div className="flex flex-col xl:mt-20 ">
          <h1 className="grad-text bold text-3xl mb-3">Bundle NFT Creation</h1>
          <p className="text-grey-800  text-sm regular">
            All fields with asterisks are required
          </p>
        </div>
        <div className="mt-12">
          <div className="flex-col">
            <h1 className="semibold text-white text-xl">
              Upload multiple digital File (s)*
            </h1>
            <p className="text-grey-800 text-md">
              Add your image / video / audio file / 3D Assets
            </p>
          </div>
          <div className="form space-y-8 mt-4">
            <FileInput />
            <TextInput
              placeholder="Your NFT name"
              label="Asset name*"
              name="name"
            />
            <TextInput
              placeholder="External link to your product page"
              label="External Links"
              name="link"
            />
            <TextAreaInput
              placeholder="Your NFT description"
              label="Description*"
              name="description"
            />
            <SelectInput
              placeholder="Collections"
              label="Your collections"
              name="collections"
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
                <ActionBtn
                  name="Create NFT"
                  action={() => console.log("ere")}
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
              <p className="semibold text-grey-800 text-base regular ">
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

export default BundleNft;
