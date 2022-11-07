

const Table = (props) => {

  return (
  <div className="container my-5" >
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Amount</th>
          <th scope="col">Price</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
          {props.item.map((obj,index)=>{
             return(<tr key={index}>
              <td>{index+1}</td>
              <td>{obj.title}</td>
              <td>{obj.price}</td>
              <td>{obj.quantity}</td>
              <td><button onClick={()=>props.onEditInitialHandler(index,obj.id)} className="btn btn-primary">Edit</button></td>
              <td><button onClick={()=>props.onDeleteHandler(obj.id)} className="btn btn-primary">Delete</button></td>
             </tr>)
          })}
      </tbody>
    </table>
  </div>)
}
export default Table;