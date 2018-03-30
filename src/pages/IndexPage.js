import React from 'react';
import Layout from "../components/layout/Layout";
import BlockLayout from "../components/index/BlockLayout";
import SmallBlock from "../components/index/SmallBlock";
import {objectsArray} from "../components/index/ObjectsArray";


export default class IndexPage extends React.Component {
    render() {
        // for(var i)
        console.log(objectsArray)
        return (
            <Layout>
                <BlockLayout>
                    <SmallBlock/>
                </BlockLayout>
            </Layout>
        )
    }
}