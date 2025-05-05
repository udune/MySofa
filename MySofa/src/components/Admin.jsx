import "../styles/Admin.css";

const Admin = () => {
  return (
    <div className="admin">
      <div className="title">
        <span className="title_text">관리자 페이지</span>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="table_head_id">ID</th>
            <th className="table_head_name">제품명</th>
            <th className="table_head_type">종류</th>
            <th className="table_head_buttons">
              <button className="add_button">추가</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table_data_id">1</td>
            <td className="table_data_name">Modern Sofa</td>
            <td className="table_data_type">Sofa</td>
            <td className="table_data_buttons">
              <button className="edit_button">수정</button>
              <button className="delete_button">삭제</button>
            </td>
          </tr>
          <tr>
            <td className="table_data_id">2</td>
            <td className="table_data_name">Modern Sofa</td>
            <td className="table_data_type">Sofa</td>
            <td className="table_data_buttons">
              <button className="edit_button">수정</button>
              <button className="delete_button">삭제</button>
            </td>
          </tr>
          <tr>
            <td className="table_data_id">3</td>
            <td className="table_data_name">Modern Sofa</td>
            <td className="table_data_type">Sofa</td>
            <td className="table_data_buttons">
              <button className="edit_button">수정</button>
              <button className="delete_button">삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
