
const Form = (props) => {
  return (
    <div className="container my-5">
      <form>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={props.title}
            onChange={props.onChangeHandler}
            className="form-control"
            name="title"
          />
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input
            type="text"
            value={props.quantity}
            onChange={props.onChangeHandler}
            className="form-control"
            name="quantity"
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            value={props.price}
            onChange={props.onChangeHandler}
            className="form-control"
            name="price"
          />
        </div>
        {props.editFlag ? (
          <button
            onClick={props.onEditFinalSubmitHandler}
            type="submit"
            className="btn btn-primary"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={props.onSubmitHandler}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};
export default Form;
