import './App.css';
import '../Topbar/Topbar';
import Topbar from '../Topbar/Topbar';
import TemplateTable from '../TemplateTable/TemplateTable';
import Sidebar from '../Sidebar/Sidebar';

function App() {
  return (
      <div class="grid-container">
        <div class="menu-icon">
          <strong> &#9776;</strong>
        </div>
        <header class="header">
          <div></div>
          <Topbar/>
          <div class="header_avatar">Logout</div>
        </header>
        <aside class="aside">
        <div class="aside_close-icon">
            <strong>&times;</strong>
          </div>
        <ul class="aside_list">
          <Sidebar/>
        </ul>
          {/* <div class="aside_close-icon">
            <strong>&times;</strong>
          </div> */}
          {/* <ul class="aside_list">
            <li class="aside_list-item">Menu item1</li>
            <li class="aside_list-item">Menu item2</li>
            <li class="aside_list-item">Menu item3</li>
            <li class="aside_list-item">Menu item4</li>
            <li class="aside_list-item">Menu item5</li>
          </ul> */}
        </aside>
        <main class="main">
          <div class="main_overview">
            <TemplateTable title="Trades" data_file ="trades_data.json" table_key= "trades_keys"/>
          </div>

          <div class="main_cards">
            <div class="card"> <TemplateTable title="User Logs" data_file ="users_logs_data.json" table_key= "users_keys"/>
            </div>
            <div class="card">Card</div>
            <div class="card">Card</div>
          </div>
        </main>
        <footer class="footer">
          <div class="footer_copyright">&copy;2021</div>
          <div class="footer_byline">Made by QElla</div>
        </footer>
    </div>
  );
}

export default App;
