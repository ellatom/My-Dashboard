import React from "react";
import './content.css';
import TemplateTable from '../TemplateTable/TemplateTable'

const Content = () => {
  return (
    <div className="content">
      <div className="tables_container">
        <div className="trades">
          <TemplateTable title="Trades" data_file ="trades_data.json" table_key= "trades_keys"/>
        </div>
        <div className="users_logs">
          <TemplateTable title="User Logs" data_file ="users_logs_data.json" table_key= "users_keys"/>
        </div>
      </div>
    </div>
  );
};

export default Content;
