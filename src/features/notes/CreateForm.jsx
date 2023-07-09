import Input from "../../components/common/input/Input";
import Button from "../../components/common/button/Button";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
function CreateForm({ create }) {
  const [title, handleTitleChange] = useInput("");
  const [body, handleBodyChange] = useInput("");

  function handleSubmit(event) {
    event.preventDefault();
    create({ title, body });
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form-group">
        <h4>Title</h4>
        <Input
          label="Title"
          placeholder="Add your note"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="form-group">
        <h4>Body</h4>
        <Input
          as="textarea"
          label="Body"
          placeholder="Write your note"
          value={body}
          onChange={handleBodyChange}
        />
      </div>

      <Button primary>Create Note</Button>
    </form>
  );
}

CreateForm.propTypes = {
  create: PropTypes.func.isRequired,
};

export default CreateForm;
