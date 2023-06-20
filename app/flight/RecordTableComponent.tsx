const RecordTableComponent = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>全席</th>
            <th>後席</th>
            <th>機体</th>
            <th>出発</th>
            <th>離脱</th>
            <th>到着</th>
            <th>編集/削除</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td></td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td></td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td></td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecordTableComponent;
