const setOptions = () => {
    let options = {
        padding:'2px',
        sorting: true,
        search: true,
        exportButton: true,
        filtering: true,
        grouping: true,
        fixedColumns: {
            left: 2,
        },
        headerStyle: {
            backgroundColor: 'rgb(90 87 87)',
            color: '#FFF',
            fontSize:'small',
        },
        rowStyle: {
            color: '#FFF',
            backgroundColor: '#000000',
            fontSize:'small',
            padding:'0px'
        },       
        cellStyle: 
        rowData => {
            if (rowData === 'active' || rowData === 'BUY') {
                return { color: "green" ,rowData};
            }
            else if (rowData === 'SELL') {
                return { color: "red" };
            }
           
        },
        searchFieldStyle: {
            color: '#01579b'
        },
        
    };
    return options;
}
export default function utils() {
    return {
        setOptions
    }
}