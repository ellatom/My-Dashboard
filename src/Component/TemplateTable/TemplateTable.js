import React, { Component } from 'react';
import MaterialTable from "material-table";
import utilsData from '../../Utilities/data-util-functions.js';
import utilsOptions from '../../Utilities/table-options-util-function.js';
import '../TemplateTable/TemplateTable.css';

class TradesTable extends Component {

    state = { tableData: [],closeWindow:false };

    //set table data from json
    componentDidMount() {
        const data = require(`../../Data/${this.props.data_file}`);
        this.setState({ tableData: data });
    }
    //set table title
    getTitle = (title) => {
        return  title;
    }

    //table headers 
    getHeaders = (key) => {
        let keys = utilsData().getKeys(key);

        let headers = keys.map(key => {
            let titleValue = utilsData().setTitleValue(key);
            let fieldValue = key;
            let colorText= utilsData().colorRowTextBasedOnHeader(key,titleValue,fieldValue); 
            if(colorText)
                return{
                        title: titleValue, 
                        field: fieldValue, 
                        cellStyle:{
                            color: colorText
                        }
                }
            
            return { title: titleValue, field: fieldValue };
        })

        return headers;
    }

    //get table rows data
    getRows = (key) => {
        const { tableData } = this.state;
        let filteredData = utilsData().getFilteredDataByKeys(tableData,key);

        return filteredData;
    }
    removeTable=()=>{
        this.setState({closeWindow:true});
    }

    render() {
        const {title,table_key}= this.props
        return (
            !this.state.closeWindow ?
            <div className= "table_container" style={{width:this.state.expand}}>
                <div className="table_menu">
                    <button className= "close_btn" onClick={this.removeTable}>X</button>
                    <button className= "enlarge_btn" onClick={this.expandTable}><i className="fas fa-expand"></i></button>
                    <span className="menu_span"></span>
                </div>
                    <MaterialTable 
                        title={this.getTitle(title)}
                        columns={this.getHeaders(table_key)} 
                        data={this.getRows(table_key)}
                        options={utilsOptions().setOptions()}
                    />
            </div>: ""
        );
    }

}
export default TradesTable;