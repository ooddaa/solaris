function Form() {
  return (
    <div className="Form">
      <p>This is Form</p>
      <form action="submit">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <br />
        <input type="checkbox" />
        <button className={"submit-btn"}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
