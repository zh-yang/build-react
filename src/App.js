import React, {Component} from "react";
import { hot } from "react-hot-loader";
import 'dpl-react/dist/dpl.css';
import 'antd/dist/antd.css';
// import "./App.css";

import { Tree, Button } from 'dpl-react';
const TreeNode = Tree.TreeNode;

import HookTest from './components/HookTest'
import FormTest from "./components/FormTest";
import HookTest2 from "./components/HookTest2";

import TableTest from "./components/TableTest";
import VTableTest from "./components/VTableTest";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <div className="App" style={{padding: "100px"}}>
                <TableTest />
                <VTableTest />
            </div>
        )
    }
}

export default hot(module)(App);